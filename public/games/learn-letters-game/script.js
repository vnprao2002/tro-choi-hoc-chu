const vietnameseLetters = [
    "A",
    "Ă",
    "Â",
    "B",
    "C",
    "D",
    "Đ",
    "E",
    "Ê",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Ô",
    "Ơ",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "Ư",
    "V",
    "X",
    "Y",
]

const settingsScreen = document.getElementById("settings-screen")
const gameScreen = document.getElementById("game-screen")
const targetSelect = document.getElementById("target-select")
const treeSelect = document.getElementById("tree-select")
const startBtn = document.getElementById("start-btn")
const uppercaseBtn = document.getElementById("uppercase-btn")
const lowercaseBtn = document.getElementById("lowercase-btn")
const instruction = document.getElementById("instruction")
const targetLetterSpan = document.getElementById("target-letter")
const fruitsContainer = document.getElementById("fruits-container")
const basket = document.getElementById("basket")
const treeContainer = document.getElementById("tree-container")
const scoreSpan = document.getElementById("score")
const resetBtn = document.getElementById("reset-btn")
const settingsBtn = document.getElementById("settings-btn")
const summaryModal = document.getElementById("summary-modal")
const finalScoreSpan = document.getElementById("final-score")
const playAgainBtn = document.getElementById("play-again-btn")
const closeSummaryBtn = document.getElementById("close-summary-btn")

const correctSound = document.getElementById("correct-sound")
const wrongSound = document.getElementById("wrong-sound")
const voiceCorrect = document.getElementById("voice-correct")
const voiceWrong = document.getElementById("voice-wrong")
const voiceCelebration = document.getElementById("voice-celebration")
const victorySound = document.getElementById("victory-sound")

// Load settings from localStorage (riêng cho trò Hái Trái Cây)
function loadSettings() {
    const saved = localStorage.getItem("haiTraiCaySettings");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return {
                targetLetters: parsed.targetLetters || [],
                treeLetters: parsed.treeLetters || [],
                isLowercase: parsed.isLowercase !== undefined ? parsed.isLowercase : false
            };
        } catch (e) {
            console.error("Error loading settings:", e);
        }
    }
    return {
        targetLetters: [],
        treeLetters: [],
        isLowercase: false
    };
}

function saveSettings() {
    const settingsToSave = {
        targetLetters: targetLetters,
        treeLetters: treeLetters,
        isLowercase: isLowercase
    };
    localStorage.setItem("haiTraiCaySettings", JSON.stringify(settingsToSave));
}

// Load settings
const loadedSettings = loadSettings();
let targetLetters = loadedSettings.targetLetters
let treeLetters = loadedSettings.treeLetters
let score = 0
let correctCount = 0
let isLowercase = loadedSettings.isLowercase

function getDisplayLetter(letter) {
    return isLowercase ? letter.toLowerCase() : letter
}

function refreshLetterOptionTexts() {
    const updateContainer = (container) => {
        container.querySelectorAll(".letter-option").forEach((el) => {
            const baseLetter = el.dataset.letter
            el.textContent = getDisplayLetter(baseLetter)
        })
    }
    updateContainer(targetSelect)
    updateContainer(treeSelect)
}

function updateInstruction() {
    if (!instruction) return
    const targetList = targetLetters
        .map((letter) => `<span class="target-badge">${getDisplayLetter(letter)}</span>`)
        .join(" ")
    instruction.innerHTML = `Hãy hái chữ: ${targetList}`
}

function refreshGameLetters() {
    if (!gameScreen.classList.contains("active")) return
    updateInstruction()
    fruitsContainer.querySelectorAll(".fruit").forEach((fruit) => {
        const letterSpan = fruit.querySelector(".fruit-letter")
        const baseLetter = fruit.dataset.letter
        if (letterSpan && baseLetter) {
            letterSpan.textContent = getDisplayLetter(baseLetter)
        }
    })
}

function setLetterCase(lowercase) {
    if (isLowercase === lowercase) return
    isLowercase = lowercase
    document.body.classList.toggle("lowercase-mode", isLowercase)
    if (uppercaseBtn && lowercaseBtn) {
        uppercaseBtn.classList.toggle("active", !isLowercase)
        lowercaseBtn.classList.toggle("active", isLowercase)
    }
    saveSettings() // Lưu settings khi thay đổi
    refreshLetterOptionTexts()
    refreshGameLetters()
}

// --- Khởi tạo danh sách chọn ---
function createLetterOptions(container, list, isTargetSelect = false) {
    container.innerHTML = ""
    list.forEach((letter) => {
        const div = document.createElement("div")
        div.dataset.letter = letter
        div.textContent = getDisplayLetter(letter)
        div.classList.add("letter-option")
        div.onclick = () => {
            div.classList.toggle("selected")
            // Nếu là target select (chọn chữ cần hái), tự động cập nhật tree select
            if (isTargetSelect) {
                const treeOption = treeSelect.querySelector(`.letter-option[data-letter="${letter}"]`)
                if (div.classList.contains("selected")) {
                    // Khi select target, tự động select tree
                    if (treeOption && !treeOption.classList.contains("selected")) {
                        treeOption.classList.add("selected")
                    }
                } else {
                    if (treeOption && treeOption.classList.contains("selected")) {
                        treeOption.classList.remove("selected")
                    }
                }
            }
        }
        container.appendChild(div)
    })
}

createLetterOptions(targetSelect, vietnameseLetters, true)
createLetterOptions(treeSelect, vietnameseLetters, false)

// Restore selected letters from settings
if (loadedSettings.targetLetters.length > 0) {
    loadedSettings.targetLetters.forEach(letter => {
        const targetOption = targetSelect.querySelector(`.letter-option[data-letter="${letter}"]`)
        if (targetOption) targetOption.classList.add("selected")
        const treeOption = treeSelect.querySelector(`.letter-option[data-letter="${letter}"]`)
        if (treeOption) treeOption.classList.add("selected")
    })
}
if (loadedSettings.treeLetters.length > 0) {
    loadedSettings.treeLetters.forEach(letter => {
        const treeOption = treeSelect.querySelector(`.letter-option[data-letter="${letter}"]`)
        if (treeOption && !treeOption.classList.contains("selected")) {
            treeOption.classList.add("selected")
        }
    })
}

// Restore letter case
if (loadedSettings.isLowercase) {
    setLetterCase(true)
}

if (uppercaseBtn && lowercaseBtn) {
    uppercaseBtn.addEventListener("click", () => setLetterCase(false))
    lowercaseBtn.addEventListener("click", () => setLetterCase(true))
}

// --- Bắt đầu chơi ---
startBtn.onclick = () => {
    targetLetters = [...targetSelect.querySelectorAll(".selected")].map((d) => d.dataset.letter)
    treeLetters = [...treeSelect.querySelectorAll(".selected")].map((d) => d.dataset.letter)
    if (targetLetters.length === 0 || treeLetters.length === 0) {
        alert("Vui lòng chọn ít nhất một chữ cái cho cả hai mục!")
        return
    }
    saveSettings() // Lưu settings khi bắt đầu game
    score = 0
    correctCount = 0
    scoreSpan.textContent = "0"
    startGame()
}

function startGame() {
    settingsScreen.classList.remove("active")
    gameScreen.classList.add("active")
    newRound()
}

settingsBtn.onclick = () => {
    gameScreen.classList.remove("active")
    settingsScreen.classList.add("active")
}

function createFruits() {
    fruitsContainer.innerHTML = ""
    const usedPositions = []
    const fruitRadius = 60

    const containerRect = fruitsContainer.getBoundingClientRect()
    const containerWidth = containerRect.width || treeContainer.clientWidth || window.innerWidth * 0.75
    const containerHeight = containerRect.height || treeContainer.clientHeight || window.innerHeight * 0.8

    const ellipseWidth = containerWidth * 0.75
    const ellipseHeight = containerHeight * 0.65
    const ellipseCenterX = containerWidth / 2
    const ellipseCenterY = containerHeight * 0.45

    function isOverlapping(x, y, radius = fruitRadius) {
        return usedPositions.some((pos) => Math.hypot(pos.x - x, pos.y - y) < radius * 2.2)
    }

    const fruitList = []

    treeLetters.forEach((letter) => {
        const count = Math.floor(Math.random() * 3) + 1 // 1-3
        for (let i = 0; i < count; i++) {
            fruitList.push(letter)
        }
    })

    // Xáo trộn danh sách
    fruitList.sort(() => Math.random() - 0.5)

    fruitList.forEach((letter, index) => {
        const maxAttempts = 120
        let attempts = 0
        let position = null

        while (attempts < maxAttempts) {
            const angle = Math.random() * Math.PI * 2
            const radiusScale = Math.sqrt(Math.random())
            const candidateX = ellipseCenterX + (ellipseWidth * 0.5 * radiusScale) * Math.cos(angle)
            const candidateY = ellipseCenterY + (ellipseHeight * 0.5 * radiusScale) * Math.sin(angle)

            if (
                candidateX > fruitRadius &&
                candidateX < containerWidth - fruitRadius &&
                candidateY > fruitRadius &&
                candidateY < containerHeight - fruitRadius &&
                !isOverlapping(candidateX, candidateY, fruitRadius)
            ) {
                position = { x: candidateX, y: candidateY }
                break
            }
            attempts++
        }

        if (position) {
            usedPositions.push(position)

            const fruit = document.createElement("div")
            fruit.className = "fruit"
            fruit.dataset.letter = letter
            fruit.innerHTML = `<span class="fruit-letter">${getDisplayLetter(letter)}</span>`
            fruit.style.left = position.x - fruitRadius + "px"
            fruit.style.top = position.y - fruitRadius + "px"
            fruit.style.setProperty("--delay", ((index * 0.05) % 0.6) + "s")
            fruit.draggable = true

            fruit.addEventListener("dragstart", handleDragStart)
            fruit.addEventListener("dragend", handleDragEnd)
            fruit.addEventListener("click", () => pickFruit(fruit, letter))

            fruitsContainer.appendChild(fruit)
        }
    })

    enableBasketDrop()
}

let draggedFruit = null

function handleDragStart(e) {
    draggedFruit = this
    this.classList.add("dragging")
}

function handleDragEnd(e) {
    this.classList.remove("dragging")
}

function enableBasketDrop() {
    basket.addEventListener("dragover", (e) => {
        e.preventDefault()
        basket.classList.add("drag-over")
    })

    basket.addEventListener("dragleave", () => {
        basket.classList.remove("drag-over")
    })

    basket.addEventListener("drop", (e) => {
        e.preventDefault()
        basket.classList.remove("drag-over")
        if (draggedFruit) {
            pickFruit(draggedFruit, draggedFruit.dataset.letter)
        }
    })
}

function newRound() {
    createFruits()
    updateInstruction()
}

function pickFruit(fruit, letter) {
    const isCorrect = targetLetters.includes(letter)

    if (isCorrect) {
        // Phát âm thanh đúng: hiệu ứng + giọng nói cùng lúc
        correctSound.currentTime = 0
        voiceCorrect.currentTime = 0
        correctSound.play().catch((e) => console.log("Play error:", e))
        voiceCorrect.play().catch((e) => console.log("Play error:", e))

        score++

        // Hiệu ứng rơi vào giỏ
        const basketRect = basket.getBoundingClientRect()
        const fruitRect = fruit.getBoundingClientRect()

        fruit.animate(
            [
                { transform: "translateY(0) scale(1)", opacity: 1 },
                {
                    transform: `translate(${basketRect.left - fruitRect.left}px, ${basketRect.top - fruitRect.top}px) scale(0.3)`,
                    opacity: 0.8,
                },
                { transform: "translate(0, 0) scale(0)", opacity: 0 },
            ],
            { duration: 800, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
        )

        scoreSpan.textContent = score

        setTimeout(() => fruit.remove(), 800)

        // Chỉ kết thúc khi KHÔNG còn quả đúng nào trên cây
        setTimeout(() => {
            const remainingCorrect = [...fruitsContainer.querySelectorAll(".fruit")].filter((f) =>
                targetLetters.includes(f.dataset.letter),
            ).length
            if (remainingCorrect === 0) {
                triggerCelebration()
            }
        }, 820)
    } else {
        // Phát âm thanh sai: hiệu ứng + giọng nói cùng lúc
        wrongSound.currentTime = 0
        voiceWrong.currentTime = 0
        wrongSound.play().catch((e) => console.log("Play error:", e))
        voiceWrong.play().catch((e) => console.log("Play error:", e))

        // Hiệu ứng rơi ra ngoài
        fruit.animate(
            [
                { transform: "translateY(0) rotate(0deg) scale(1)", opacity: 1 },
                { transform: "translateY(150px) rotate(360deg) scale(0.5)", opacity: 0 },
            ],
            { duration: 800 },
        )

        setTimeout(() => fruit.remove(), 800)
    }
}

resetBtn.onclick = () => {
    score = 0
    correctCount = 0
    scoreSpan.textContent = "0"
    newRound()
    hideSummaryModal()
}

playAgainBtn.onclick = () => {
    resetBtn.click()
}

closeSummaryBtn.onclick = () => {
    hideSummaryModal()
}

function triggerCelebration() {
    // Phát âm thanh giọng nói chúc mừng
    voiceCelebration.currentTime = 0
    voiceCelebration.play().catch((e) => console.log("Play error:", e))

    if (victorySound) {
        victorySound.currentTime = 0
        victorySound.play().catch((e) => console.log("Play error:", e))
    }

    // Tạo hiệu ứng vỗ tay bằng cách phát âm thanh "tạc tạc"
    const clappingAudio = new Audio()
    clappingAudio.src = "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="

    // Tạo hiệu ứng vỗ tay bằng cách lặp
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const clap = new Audio()
            clap.src = "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
            clap.play().catch((e) => { })
        }, i * 200)
    }

    // Pháo hoa
    const canvas = document.getElementById("fireworks")
    const ctx = canvas.getContext("2d")
    canvas.width = innerWidth
    canvas.height = innerHeight
    const particles = []

    // Tạo nhiều điểm phát pháo hoa
    for (let burst = 0; burst < 3; burst++) {
        setTimeout(() => {
            for (let i = 0; i < 150; i++) {
                particles.push({
                    x: canvas.width / 2 + (Math.random() - 0.5) * 100,
                    y: canvas.height / 3 + burst * 100,
                    angle: Math.random() * Math.PI * 2,
                    speed: Math.random() * 6 + 3,
                    radius: Math.random() * 3 + 2,
                    color: `hsl(${Math.random() * 360},100%,60%)`,
                    life: Math.random() * 60 + 80,
                    maxLife: Math.random() * 60 + 80,
                })
            }
        }, burst * 300)
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((p) => {
            p.x += Math.cos(p.angle) * p.speed
            p.y += Math.sin(p.angle) * p.speed
            p.speed *= 0.98
            p.life--

            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.fillStyle = p.color
            ctx.globalAlpha = p.life / p.maxLife
            ctx.fill()
        })

        ctx.globalAlpha = 1

        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].life <= 0) particles.splice(i, 1)
        }

        if (particles.length > 0) requestAnimationFrame(draw)
    }

    draw()

    showSummaryModal()
}

// Xử lý resize canvas
window.addEventListener("resize", () => {
    const canvas = document.getElementById("fireworks")
    canvas.width = innerWidth
    canvas.height = innerHeight
})

function showSummaryModal() {
    if (!summaryModal) return
    finalScoreSpan.textContent = score
    summaryModal.classList.remove("hidden")
    summaryModal.classList.add("active")
}

function hideSummaryModal() {
    if (!summaryModal) return
    summaryModal.classList.remove("active")
    summaryModal.classList.add("hidden")
}
