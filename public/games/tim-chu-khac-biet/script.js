// Game Settings - Load from localStorage (riêng cho trò Tìm Chữ Khác Biệt)
function loadGameSettings() {
    const saved = localStorage.getItem("timChuKhacBietSettings");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return {
                size: parsed.size || 5,
                letterCase: parsed.letterCase || "uppercase",
                targetCount: parsed.targetCount || 1,
                soundEnabled: parsed.soundEnabled !== undefined ? parsed.soundEnabled : true,
                selectedTargetLetters: parsed.selectedTargetLetters || [],
                selectedDistractorLetters: parsed.selectedDistractorLetters || []
            };
        } catch (e) {
            console.error("Error loading settings:", e);
        }
    }
    return {
        size: 5,
        letterCase: "uppercase",
        targetCount: 1,
        soundEnabled: true,
        selectedTargetLetters: [],
        selectedDistractorLetters: []
    };
}

function saveGameSettings() {
    const settingsToSave = {
        size: gameSettings.size,
        letterCase: gameSettings.letterCase,
        targetCount: gameSettings.targetCount,
        soundEnabled: gameSettings.soundEnabled,
        selectedTargetLetters: selectedTargetLetters,
        selectedDistractorLetters: selectedDistractorLetters
    };
    localStorage.setItem("timChuKhacBietSettings", JSON.stringify(settingsToSave));
}

const gameSettings = loadGameSettings();

// Game State
const gameState = {
    targetLetter: "",
    allLetters: [],
    targetIndices: [],
    found: 0,
    gameActive: false,
}

// Vietnamese Alphabet (đúng: A, Ă, Â, B, C, D, Đ, E, Ê, G, H, I, K, L, M, N, O, Ô, Ơ, P, Q, R, S, T, U, Ư, V, X, Y)
const vietnameseLletters = "AĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXY".split("")

// Load selected letters from settings (sử dụng let để có thể cập nhật)
let selectedTargetLetters = [...(gameSettings.selectedTargetLetters || [])]
let selectedDistractorLetters = [...(gameSettings.selectedDistractorLetters || [])]
let currentPickerMode = null

// DOM Elements
const settingsBtn = document.getElementById("settingsBtn")
const settingsPanel = document.getElementById("settingsPanel")
const gameArea = document.getElementById("gameArea")
const grid = document.getElementById("grid")
const targetLetterDisplay = document.getElementById("targetLetter")
const foundDisplay = document.getElementById("found")
const totalToFindDisplay = document.getElementById("totalToFind")
const celebrationModal = document.getElementById("celebrationModal")
const overlay = document.getElementById("overlay")
const startBtn = document.getElementById("startBtn")
const playAgainBtn = document.getElementById("playAgainBtn")
const resetBtn = document.getElementById("resetBtn")
const targetLetterBtn = document.getElementById("targetLetterBtn")
const distractorLetterBtn = document.getElementById("distractorLetterBtn")
const closePickerBtn = document.getElementById("closePickerBtn")
const cancelPickerBtn = document.getElementById("cancelPickerBtn")
const confirmPickerBtn = document.getElementById("confirmPickerBtn")
const letterPickerModal = document.getElementById("letterPickerModal")
const pickerOverlay = document.getElementById("pickerOverlay")
const pickerTitle = document.getElementById("pickerTitle")
const alphabetGrid = document.getElementById("alphabetGrid")
const targetLettersDisplay = document.getElementById("targetLettersDisplay")
const distractorLettersDisplay = document.getElementById("distractorLettersDisplay")

// Sound Context
let audioContext

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners()
    initAudioContext()
    loadSettingsToUI()
    // Không tự bật tùy chỉnh - ẩn settings panel mặc định
    settingsPanel.style.display = "none"
    
    // Tự động bắt đầu game nếu đã có settings hợp lệ
    if (gameSettings.size && gameSettings.targetCount > 0) {
        // Kiểm tra xem có đủ settings để bắt đầu game không
        const hasValidSettings = gameSettings.size >= 3 && 
                                 gameSettings.targetCount >= 1 && 
                                 gameSettings.targetCount <= gameSettings.size * gameSettings.size;
        if (hasValidSettings) {
            // Tự động bắt đầu game sau một chút delay để UI render xong
            setTimeout(() => {
                startGame()
            }, 100)
        }
    }
})

function setupEventListeners() {
    settingsBtn.addEventListener("click", toggleSettings)
    startBtn.addEventListener("click", startGame)
    playAgainBtn.addEventListener("click", () => {
        settingsPanel.style.display = "block"
        gameArea.style.display = "none"
        celebrationModal.style.display = "none"
        overlay.style.display = "none"
    })
    resetBtn.addEventListener("click", () => {
        gameState.found = 0
        gameState.gameActive = true
        generateGame()
        renderGrid()
        foundDisplay.textContent = gameState.found
    })

    // Size buttons
    document.querySelectorAll(".size-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("active"))
            btn.classList.add("active")
            gameSettings.size = Number.parseInt(btn.dataset.size)
            saveGameSettings()
        })
    })

    // Case buttons
    document.querySelectorAll(".case-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".case-btn").forEach((b) => b.classList.remove("active"))
            btn.classList.add("active")
            gameSettings.letterCase = btn.dataset.case
            saveGameSettings()
        })
    })

    // Count buttons
    document.querySelectorAll(".count-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".count-btn").forEach((b) => b.classList.remove("active"))
            btn.classList.add("active")
            gameSettings.targetCount = Number.parseInt(btn.dataset.count)
            saveGameSettings()
        })
    })

    // Sound buttons
    document.querySelectorAll(".sound-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".sound-btn").forEach((b) => b.classList.remove("active"))
            btn.classList.add("active")
            gameSettings.soundEnabled = btn.dataset.sound === "on"
            saveGameSettings()
        })
    })

    // Letter picker event listeners
    targetLetterBtn.addEventListener("click", () => openLetterPicker("target"))
    distractorLetterBtn.addEventListener("click", () => openLetterPicker("distractor"))
    closePickerBtn.addEventListener("click", closeLetterPicker)
    cancelPickerBtn.addEventListener("click", closeLetterPicker)
    confirmPickerBtn.addEventListener("click", confirmLetterSelection)
}

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
}

function toggleSettings() {
    const isHidden = settingsPanel.style.display === "none"
    settingsPanel.style.display = isHidden ? "block" : "none"
    gameArea.style.display = "none"
    celebrationModal.style.display = "none"
    overlay.style.display = "none"
}

function hideSettings() {
    settingsPanel.style.display = "none"
    gameArea.style.display = "none"
    celebrationModal.style.display = "none"
    overlay.style.display = "none"
}

function startGame() {
    settingsPanel.style.display = "none"
    gameArea.style.display = "block"
    celebrationModal.style.display = "none"
    overlay.style.display = "none"

    gameState.found = 0
    gameState.gameActive = true

    generateGame()
    renderGrid()

    foundDisplay.textContent = gameState.found
    totalToFindDisplay.textContent = gameSettings.targetCount
}

function generateGame() {
    const size = gameSettings.size
    const totalCells = size * size

    if (selectedTargetLetters.length > 0) {
        gameState.targetLetter = selectedTargetLetters[Math.floor(Math.random() * selectedTargetLetters.length)]
    } else {
        gameState.targetLetter = vietnameseLletters[Math.floor(Math.random() * vietnameseLletters.length)]
    }

    // Select random indices for target letters
    gameState.targetIndices = []
    const indices = Array.from({ length: totalCells }, (_, i) => i)
    const shuffled = indices.sort(() => Math.random() - 0.5)
    gameState.targetIndices = shuffled.slice(0, Math.min(gameSettings.targetCount, totalCells)).sort((a, b) => a - b)

    gameState.allLetters = []
    const distractorLetters = selectedDistractorLetters.length > 0 ? selectedDistractorLetters : vietnameseLletters

    for (let i = 0; i < totalCells; i++) {
        if (gameState.targetIndices.includes(i)) {
            gameState.allLetters.push(gameState.targetLetter)
        } else {
            // Select random distractor letter (not the target letter)
            let distractorLetter = gameState.targetLetter
            const availableDistractors = distractorLetters.filter((l) => l !== gameState.targetLetter)

            if (availableDistractors.length > 0) {
                distractorLetter = availableDistractors[Math.floor(Math.random() * availableDistractors.length)]
            } else {
                // Fallback: use any letter except target
                distractorLetter = vietnameseLletters.find((l) => l !== gameState.targetLetter)
            }

            gameState.allLetters.push(distractorLetter)
        }
    }

    // Apply case transformation
    gameState.allLetters = gameState.allLetters.map((letter) => transformCase(letter))

    // Update display
    targetLetterDisplay.textContent = transformCase(gameState.targetLetter)
}

function transformCase(letter) {
    if (gameSettings.letterCase === "lowercase") return letter.toLowerCase()
    if (gameSettings.letterCase === "mixed") {
        return Math.random() > 0.5 ? letter.toLowerCase() : letter
    }
    return letter
}

function renderGrid() {
    const size = gameSettings.size
    grid.innerHTML = ""
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    gameState.allLetters.forEach((letter, index) => {
        const cell = document.createElement("div")
        cell.className = "letter-cell"
        cell.textContent = letter
        cell.dataset.index = index

        cell.addEventListener("mouseenter", () => playHoverSound())
        cell.addEventListener("click", () => handleCellClick(index, cell))

        grid.appendChild(cell)
    })
}

function handleCellClick(index, cellElement) {
    if (!gameState.gameActive) return

    const letterUpperCase = gameState.allLetters[index].toUpperCase()
    const isTarget = gameState.targetIndices.includes(index)

    if (isTarget) {
        playCorrectSound()
        cellElement.classList.add("correct")
        cellElement.classList.add("disabled")
        cellElement.style.pointerEvents = "none"
        gameState.found++
        foundDisplay.textContent = gameState.found

        console.log("[v0] Found:", gameState.found, "Target count:", gameSettings.targetCount)

        if (gameState.found >= gameSettings.targetCount) {
            console.log("[v0] Game completed! Found:", gameState.found, "Target:", gameSettings.targetCount)
            setTimeout(() => endGame(), 300)
        }
    } else {
        playWrongSound()
        cellElement.classList.add("wrong")
        setTimeout(() => {
            cellElement.classList.remove("wrong")
        }, 500)
    }
}

function endGame() {
    gameState.gameActive = false
    playCompleteSound()

    setTimeout(() => {
        console.log("[v0] Showing celebration modal")
        celebrationModal.style.display = "block"
        overlay.style.display = "block"
        createFireworks()
    }, 500)
}

function createFireworks() {
    const fireworksContainer = document.getElementById("fireworks")
    fireworksContainer.innerHTML = ""

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement("div")
        firework.className = "firework"

        const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE"]
        firework.style.background = colors[Math.floor(Math.random() * colors.length)]

        const angle = (Math.PI * 2 * i) / 50
        const velocity = 4 + Math.random() * 3
        const tx = Math.cos(angle) * velocity * 100
        const ty = Math.sin(angle) * velocity * 100

        firework.style.left = "50%"
        firework.style.top = "50%"
        firework.style.setProperty("--tx", tx + "px")
        firework.style.setProperty("--ty", ty + "px")
        firework.style.animation = `explode 1s ease-out forwards`

        fireworksContainer.appendChild(firework)
    }
}

function openLetterPicker(mode) {
    currentPickerMode = mode
    letterPickerModal.style.display = "block"
    pickerOverlay.style.display = "block"
    pickerTitle.textContent = mode === "target" ? "Chọn Chữ Cần Tìm" : "Chọn Chữ Khác (Làm Nhiễu)"
    renderAlphabetGrid(mode)
}

function closeLetterPicker() {
    letterPickerModal.style.display = "none"
    pickerOverlay.style.display = "none"
    currentPickerMode = null
}

function renderAlphabetGrid(mode) {
    alphabetGrid.innerHTML = ""
    const selectedLetters = mode === "target" ? selectedTargetLetters : selectedDistractorLetters
    const maxSelectable = mode === "target" ? gameSettings.targetCount : undefined

    vietnameseLletters.forEach((letter) => {
        const btn = document.createElement("button")
        btn.className = "alphabet-btn"
        btn.textContent = letter

        if (mode === "distractor" && selectedTargetLetters.includes(letter)) {
            btn.classList.add("disabled")
            btn.style.opacity = "0.5"
            btn.style.pointerEvents = "none"
        }

        if (selectedLetters.includes(letter)) {
            btn.classList.add("selected")
        }

        btn.addEventListener("click", () => {
            if (
                mode === "target" &&
                !selectedLetters.includes(letter) &&
                selectedLetters.length >= gameSettings.targetCount
            ) {
                alert(`Chỉ có thể chọn tối đa ${gameSettings.targetCount} chữ`)
                return
            }

            if (selectedLetters.includes(letter)) {
                selectedLetters.splice(selectedLetters.indexOf(letter), 1)
            } else {
                selectedLetters.push(letter)
            }
            btn.classList.toggle("selected")
        })
        alphabetGrid.appendChild(btn)
    })
}

function confirmLetterSelection() {
    if (currentPickerMode === "target") {
        if (selectedTargetLetters.length === 0) {
            targetLettersDisplay.innerHTML = '<span class="no-selection">Chưa chọn</span>'
        } else {
            targetLettersDisplay.innerHTML = selectedTargetLetters
                .map((l) => `<span class="selected-letter">${l}</span>`)
                .join("")
        }
    } else {
        if (selectedDistractorLetters.length === 0) {
            distractorLettersDisplay.innerHTML = '<span class="no-selection">Chưa chọn</span>'
        } else {
            distractorLettersDisplay.innerHTML = selectedDistractorLetters
                .map((l) => `<span class="selected-letter">${l}</span>`)
                .join("")
        }
    }
    saveGameSettings()
    closeLetterPicker()
}

// Load settings to UI
function loadSettingsToUI() {
    // Load size
    document.querySelectorAll(".size-btn").forEach((btn) => {
        if (Number.parseInt(btn.dataset.size) === gameSettings.size) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    })
    
    // Load case
    document.querySelectorAll(".case-btn").forEach((btn) => {
        if (btn.dataset.case === gameSettings.letterCase) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    })
    
    // Load target count
    document.querySelectorAll(".count-btn").forEach((btn) => {
        if (Number.parseInt(btn.dataset.count) === gameSettings.targetCount) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    })
    
    // Load sound
    document.querySelectorAll(".sound-btn").forEach((btn) => {
        if ((btn.dataset.sound === "on") === gameSettings.soundEnabled) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    })
    
    // Load selected letters
    if (selectedTargetLetters.length > 0) {
        targetLettersDisplay.innerHTML = selectedTargetLetters
            .map((l) => `<span class="selected-letter">${l}</span>`)
            .join("")
    }
    
    if (selectedDistractorLetters.length > 0) {
        distractorLettersDisplay.innerHTML = selectedDistractorLetters
            .map((l) => `<span class="selected-letter">${l}</span>`)
            .join("")
    }
}

// Sound Functions
function playSound(frequency, duration, type = "sine") {
    if (!gameSettings.soundEnabled || !audioContext) return

    const now = audioContext.currentTime
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.type = type
    osc.frequency.value = frequency
    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration)

    osc.start(now)
    osc.stop(now + duration)
}

function playHoverSound() {
    playSound(800, 0.1)
}

function playCorrectSound() {
    playSound(800, 0.1)
    setTimeout(() => playSound(1000, 0.1), 100)
    setTimeout(() => playSound(1200, 0.15), 200)
}

function playWrongSound() {
    playSound(400, 0.2)
    setTimeout(() => playSound(300, 0.2), 100)
}

function playCompleteSound() {
    const notes = [523, 659, 784, 1047]
    notes.forEach((freq, i) => {
        setTimeout(() => playSound(freq, 0.3), i * 150)
    })
}
