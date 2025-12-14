// ====== cấu hình ban đầu ======
const defaultLetters = "a,ă,â,b,c,d,đ,e,ê,g,h,i,k,l,m,n,o,ô,ơ,p,q,r,s,t,u,ư,v,x,y".split(",");

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const resultEl = document.getElementById("result");
const uppercaseToggle = document.getElementById("uppercaseToggle");
const lettersGrid = document.getElementById("lettersGrid");
const applyLettersBtn = document.getElementById("applyLetters");
const selectAllBtn = document.getElementById("selectAll");
const deselectAllBtn = document.getElementById("deselectAll");
const repeatCountInput = document.getElementById("repeatCount");
const shuffleBtn = document.getElementById("shuffleBtn");

const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");

// Bảng chữ cái tiếng Việt đầy đủ
const vietnameseAlphabet = "a,ă,â,b,c,d,đ,e,ê,g,h,i,k,l,m,n,o,ô,ơ,p,q,r,s,t,u,ư,v,x,y".split(",");

// Load settings from localStorage (riêng cho trò Chiếc Nón Chữ Cái)
function loadSettings() {
    const saved = localStorage.getItem("chiecNonChuCaiSettings");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return {
                letters: parsed.letters || [...defaultLetters],
                uppercase: parsed.uppercase !== undefined ? parsed.uppercase : false,
                repeatCount: parsed.repeatCount || 1
            };
        } catch (e) {
            console.error("Error loading settings:", e);
        }
    }
    return {
        letters: [...defaultLetters],
        uppercase: false,
        repeatCount: 1
    };
}

function saveSettings() {
    const settingsToSave = {
        letters: letters,
        uppercase: uppercaseToggle.checked,
        repeatCount: parseInt(repeatCountInput.value) || 1
    };
    localStorage.setItem("chiecNonChuCaiSettings", JSON.stringify(settingsToSave));
}

// Load settings
const loadedSettings = loadSettings();
let letters = loadedSettings.letters;
let isSpinning = false;
let currentLetter = null;

// Tạo Audio objects cho âm thanh
const spinAudio = new Audio('assets/spin.mp3');
const victoryAudio = new Audio('assets/victory.mp3');

// Cấu hình âm thanh
spinAudio.volume = 0.7;
victoryAudio.volume = 0.8;

// kích thước & bán kính
const W = canvas.width;
const H = canvas.height;
const cx = W / 2;
const cy = H / 2;
const radius = Math.min(W, H) / 2 - 10; // tăng kích thước ô quay

// Mảng màu sắc đa dạng cho các ô quay
const colors = [
    "#f1c40f", "#f39c12", "#e74c3c", "#9b59b6", "#3498db", 
    "#1abc9c", "#f1c40f", "#e67e22", "#e91e63", "#00bcd4",
    "#4caf50", "#ff9800", "#9c27b0", "#2196f3", "#009688",
    "#ff5722", "#673ab7", "#03a9f4", "#8bc34a", "#ffc107"
];

// vẽ vòng quay (không xoay ở đây)
function drawWheelBase() {
    const num = letters.length;
    const arc = (2 * Math.PI) / num;

    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < num; i++) {
        const start = i * arc;
        const end = start + arc;

        // vẽ miếng cắt với nhiều màu sắc
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, start, end);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        // viền nhẹ
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, start, end);
        ctx.closePath();
        ctx.strokeStyle = "rgba(0,0,0,0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // chữ cái — đặt theo mid-angle
        const mid = start + arc / 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(mid);

        // Điều chỉnh font size dựa trên số lượng chữ để chữ luôn hiển thị đầy đủ
        // Tính toán dựa trên chiều rộng của ô (arc) để đảm bảo chữ vừa với ô
        const baseFontSize = Math.round(Math.max(48, radius * 0.15)) * 2;
        // Tính chiều rộng của ô ở vị trí chữ (khoảng 85% bán kính)
        const textRadius = radius * 0.85;
        const segmentWidth = textRadius * arc; // Chiều rộng của ô ở vị trí chữ
        // Font size không được vượt quá 70% chiều rộng ô để đảm bảo chữ không bị cắt
        const maxFontSize = segmentWidth * 0.7;
        // Điều chỉnh font size: lấy giá trị nhỏ hơn giữa baseFontSize và maxFontSize
        const fontSize = Math.max(40, Math.min(baseFontSize, maxFontSize)); // Tối thiểu 40px
        
        ctx.fillStyle = "#213040";
        ctx.font = `bold ${fontSize}px "Lexend", sans-serif`;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        const text = uppercaseToggle.checked ? letters[i].toUpperCase() : letters[i];
        // Điều chỉnh vị trí chữ dựa trên số lượng chữ để chữ luôn nằm trong ô
        const textOffset = Math.max(30, radius * 0.85); // Đảm bảo chữ không quá sát mép
        ctx.fillText(text, textOffset, 0);
        ctx.restore();
    }

    // tâm nhỏ
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#ffefc7";
    ctx.fill();
}

// Hàm vẽ hiện trạng: vẽ nền rồi xoay canvas bằng transform trước khi gọi base draw
function renderRotated(angleRad) {
    // angleRad là góc quay (radian)
    ctx.save();
    // xóa và đặt nền tròn (vì drawWheelBase vẽ theo tọa độ tuyệt đối)
    ctx.clearRect(0, 0, W, H);

    // đặt hệ tọa độ về tâm, xoay, rồi vẽ các miếng với toạ độ tương đối
    ctx.translate(cx, cy);
    ctx.rotate(angleRad);
    ctx.translate(-cx, -cy);

    // vì drawWheelBase dùng lại canvas trực tiếp, chúng ta tạm vẽ bằng cách gọi một helper
    // create an offscreen canvas to draw the base once and then rotate that image
    // nhưng để giữ đơn giản: gọi drawWheelBase() sau khi reset transform (để base ko bị xoay),
    // nên thay cách: vẽ onto offscreen and drawImage rotated.

    ctx.restore();

    // SIMPLE & ROBUST approach: tạo offscreen 1 lần và drawImage xoay
    // (đảm bảo offscreen được cập nhật khi letters thay đổi)
    if (!window._off) {
        window._off = document.createElement('canvas');
        window._off.width = W;
        window._off.height = H;
    }
    const off = window._off;
    const offCtx = off.getContext('2d');
    // vẽ base lên offscreen
    offCtx.clearRect(0, 0, W, H);
    // recreate same drawing logic but on offCtx
    const num = letters.length;
    const arc = (2 * Math.PI) / num;

    for (let i = 0; i < num; i++) {
        const start = i * arc;
        const end = start + arc;
        offCtx.beginPath();
        offCtx.moveTo(cx, cy);
        offCtx.arc(cx, cy, radius, start, end);
        offCtx.closePath();
        offCtx.fillStyle = colors[i % colors.length];
        offCtx.fill();
        offCtx.beginPath();
        offCtx.moveTo(cx, cy);
        offCtx.arc(cx, cy, radius, start, end);
        offCtx.closePath();
        offCtx.strokeStyle = "rgba(0,0,0,0.06)";
        offCtx.lineWidth = 1;
        offCtx.stroke();

        const mid = start + arc / 2;
        offCtx.save();
        offCtx.translate(cx, cy);
        offCtx.rotate(mid);
        // Điều chỉnh font size dựa trên số lượng chữ để chữ luôn hiển thị đầy đủ
        const baseFontSize = Math.round(Math.max(48, radius * 0.15)) * 2;
        // Tính chiều rộng của ô ở vị trí chữ
        const textRadius = radius * 0.85;
        const segmentWidth = textRadius * arc;
        const maxFontSize = segmentWidth * 0.7;
        // Điều chỉnh font size: lấy giá trị nhỏ hơn giữa baseFontSize và maxFontSize
        const fontSize = Math.max(40, Math.min(baseFontSize, maxFontSize));
        offCtx.fillStyle = "#213040";
        offCtx.font = `bold ${fontSize}px "Lexend", sans-serif`;
        offCtx.textAlign = "right";
        offCtx.textBaseline = "middle";
        const text = uppercaseToggle.checked ? letters[i].toUpperCase() : letters[i];
        // Điều chỉnh vị trí chữ dựa trên số lượng chữ để chữ luôn nằm trong ô
        const textOffset = Math.max(30, radius * 0.85);
        offCtx.fillText(text, textOffset, 0);
        offCtx.restore();
    }
    offCtx.beginPath();
    offCtx.arc(cx, cy, 8, 0, Math.PI * 2);
    offCtx.fillStyle = "#ffefc7";
    offCtx.fill();

    // bây giờ clear chính canvas và drawImage với xoay
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angleRad);
    ctx.drawImage(off, -cx, -cy);
    ctx.restore();
}

// Load uppercase setting
if (loadedSettings.uppercase) {
    uppercaseToggle.checked = true;
}
// Load repeat count
repeatCountInput.value = loadedSettings.repeatCount;

// vẽ lần đầu (gốc)
drawWheelBase();

// ====== animation quay nón ======
function spinWheel() {
    if (isSpinning) return;
    isSpinning = true;
    currentLetter = null;

    // random góc (độ)
    const extraSpins = 3 + Math.floor(Math.random() * 4); // 3..6 vòng
    const finalDeg = Math.random() * 360;
    const totalDeg = extraSpins * 360 + finalDeg;
    const totalRad = (totalDeg * Math.PI) / 180;

    const duration = 4200; // ms
    const start = performance.now();

    // Phát âm thanh quay
    spinAudio.currentTime = 0;
    spinAudio.play().catch(err => {
        console.log('Không thể phát âm thanh quay:', err);
    });

    function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        // easing (cú tắt dần)
        const ease = 1 - Math.pow(1 - t, 3);
        const currentRad = totalRad * ease;

        // vẽ xoay
        renderRotated(currentRad);

        if (t < 1) {
            requestAnimationFrame(tick);
        } else {
            // dừng: xác định segment tại pointer (pointer ở góc top = -π/2)
            // Sau khi quay totalRad, segment nào ở vị trí top?
            // Segment i được vẽ từ góc i*arc đến (i+1)*arc, với góc 0 ở 3h
            // Pointer ở top = -π/2 (12h)
            // Sau khi quay totalRad, segment ở top là segment có góc gốc = -π/2 - totalRad
            const num = letters.length;
            const arc = (2 * Math.PI) / num;
            
            // Tính góc của segment ở vị trí pointer (top = -π/2)
            // Normalize về [0, 2π)
            let angleAtPointer = (-Math.PI / 2 - totalRad) % (2 * Math.PI);
            if (angleAtPointer < 0) angleAtPointer += 2 * Math.PI;
            
            // Tìm index của segment chứa góc này
            const idx = Math.floor(angleAtPointer / arc) % num;
            currentLetter = letters[idx];

            // cập nhật giao diện
            const displayLetter = uppercaseToggle.checked ? currentLetter.toUpperCase() : currentLetter;
            resultEl.textContent = `🎉 Bạn quay trúng chữ: ${displayLetter} 🎉`;
            isSpinning = false;

            // Dừng âm thanh quay
            spinAudio.pause();
            spinAudio.currentTime = 0;

            // Phát âm thanh chiến thắng
            victoryAudio.currentTime = 0;
            victoryAudio.play().catch(err => {
                console.log('Không thể phát âm thanh chiến thắng:', err);
            });

            // Hiển thị chữ to ở giữa màn hình
            showWinnerLetter(displayLetter);

            // Hiệu ứng pháo hoa (tăng số lượng)
            createFireworks();
        }
    }

    requestAnimationFrame(tick);
}

// ====== hiển thị chữ quay trúng to ở giữa màn hình ======
function showWinnerLetter(letter) {
    // Tạo overlay
    const overlay = document.createElement('div');
    overlay.id = 'winnerOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    // Tạo container chữ
    const letterContainer = document.createElement('div');
    letterContainer.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 30px;
        padding: 60px 100px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        text-align: center;
    `;

    const letterText = document.createElement('div');
    letterText.textContent = letter;
    letterText.style.cssText = `
        font-size: 200px;
        font-weight: 900;
        color: white;
        text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-family: "Lexend", sans-serif;
        line-height: 1;
    `;

    letterContainer.appendChild(letterText);
    overlay.appendChild(letterContainer);
    document.body.appendChild(overlay);

    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        overlay.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            overlay.remove();
        }, 500);
    }, 3000);
}

// Thêm CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes scaleIn {
        from { 
            transform: scale(0.5);
            opacity: 0;
        }
        to { 
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ====== hiệu ứng pháo hoa (tối ưu để giảm lag) ======
function createFireworks() {
    const canvas = document.getElementById("wheel");
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#FFD93D', '#FF9FF3', '#54A0FF', '#FF6B9D', '#C44569', '#F8B500', '#6C5CE7'];
    
    // Giảm số lượng vụ nổ và particles để tối ưu performance
    const burstCount = 6; // Giảm từ 10 xuống 6
    const particleCountPerBurst = 30; // Giảm từ 50 xuống 30
    
    for (let burst = 0; burst < burstCount; burst++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 120;
            const offsetY = (Math.random() - 0.5) * 120;
            const burstX = centerX + offsetX;
            const burstY = centerY + offsetY;
            
            // Batch tạo particles để tối ưu
            const particles = [];
            for (let i = 0; i < particleCountPerBurst; i++) {
                const particle = document.createElement('div');
                const size = 8 + Math.random() * 8;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // Sử dụng transform thay vì left/top để tối ưu
                particle.style.cssText = `
                    position: fixed;
                    left: ${burstX}px;
                    top: ${burstY}px;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background-color: ${color};
                    pointer-events: none;
                    z-index: 9999;
                    box-shadow: 0 0 ${8 + Math.random() * 8}px ${color};
                    will-change: transform, opacity;
                `;
                
                document.body.appendChild(particle);
                
                const angle = (Math.PI * 2 * i) / particleCountPerBurst + Math.random() * 0.6;
                const velocity = 1.5 + Math.random() * 3;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                const distance = 100 + Math.random() * 100;
                
                particles.push({
                    element: particle,
                    x: 0,
                    y: 0,
                    vx: vx,
                    vy: vy,
                    distance: distance,
                    opacity: 1
                });
            }
            
            // Sử dụng một animation loop duy nhất cho tất cả particles
            let animationFrame;
            const animate = () => {
                let activeCount = 0;
                particles.forEach(p => {
                    if (p.opacity > 0) {
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += 0.1; // gravity
                        p.opacity -= 0.015;
                        
                        if (p.opacity > 0 && Math.abs(p.x) < p.distance && Math.abs(p.y) < p.distance * 1.5) {
                            p.element.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.opacity})`;
                            p.element.style.opacity = p.opacity;
                            activeCount++;
                        } else {
                            p.element.remove();
                            p.opacity = 0;
                        }
                    }
                });
                
                if (activeCount > 0) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            
            animationFrame = requestAnimationFrame(animate);
        }, burst * 150); // Tăng delay để giảm tải
    }
    
    // Giảm pháo hoa ở góc - chỉ 2 góc thay vì 4
    const corners = [
        { x: 50, y: 50 },
        { x: window.innerWidth - 50, y: window.innerHeight - 50 }
    ];
    
    corners.forEach((corner, idx) => {
        setTimeout(() => {
            const cornerParticles = [];
            for (let i = 0; i < 20; i++) { // Giảm từ 30 xuống 20
                const particle = document.createElement('div');
                const size = 6 + Math.random() * 6;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.cssText = `
                    position: fixed;
                    left: ${corner.x}px;
                    top: ${corner.y}px;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background-color: ${color};
                    pointer-events: none;
                    z-index: 9999;
                    box-shadow: 0 0 ${6 + Math.random() * 6}px ${color};
                    will-change: transform, opacity;
                `;
                
                document.body.appendChild(particle);
                
                const angle = (Math.PI * 2 * i) / 20 + Math.random() * 0.4;
                const velocity = 1 + Math.random() * 3;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                const distance = 80 + Math.random() * 80;
                
                cornerParticles.push({
                    element: particle,
                    x: 0,
                    y: 0,
                    vx: vx,
                    vy: vy,
                    distance: distance,
                    opacity: 1
                });
            }
            
            let animationFrame;
            const animate = () => {
                let activeCount = 0;
                cornerParticles.forEach(p => {
                    if (p.opacity > 0) {
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += 0.08;
                        p.opacity -= 0.012;
                        
                        if (p.opacity > 0 && Math.abs(p.x) < p.distance && Math.abs(p.y) < p.distance * 1.3) {
                            p.element.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.opacity})`;
                            p.element.style.opacity = p.opacity;
                            activeCount++;
                        } else {
                            p.element.remove();
                            p.opacity = 0;
                        }
                    }
                });
                
                if (activeCount > 0) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            
            animationFrame = requestAnimationFrame(animate);
        }, idx * 300);
    });
}

// ====== event listeners ======
spinBtn.addEventListener("click", spinWheel);

// Cho phép click vào vòng quay để quay
canvas.addEventListener("click", (e) => {
    if (isSpinning) return;
    
    // Kiểm tra xem click có nằm trong vòng quay không
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    
    // Nếu click trong vòng quay (bán kính)
    if (distance <= radius) {
        spinWheel();
    }
});

// Thêm cursor pointer khi hover vào vòng quay
canvas.style.cursor = 'pointer';

// Tạo checkbox cho từng chữ cái
function renderLetterCheckboxes() {
    lettersGrid.innerHTML = '';
    vietnameseAlphabet.forEach(letter => {
        const item = document.createElement('div');
        item.className = 'letter-checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `letter-${letter}`;
        checkbox.value = letter;
        checkbox.checked = letters.includes(letter);
        
        const label = document.createElement('label');
        label.htmlFor = `letter-${letter}`;
        label.textContent = letter;
        
        item.appendChild(checkbox);
        item.appendChild(label);
        lettersGrid.appendChild(item);
    });
}

// Hàm xáo trộn mảng (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Validation cho input số lần lặp lại
repeatCountInput.addEventListener("input", () => {
    let value = parseInt(repeatCountInput.value);
    if (isNaN(value) || value < 1) {
        repeatCountInput.value = 1;
    } else if (value > 3) {
        repeatCountInput.value = 3;
    }
    saveSettings(); // Lưu settings khi thay đổi
});

// Hàm áp dụng chữ cái với số lần lặp lại
function applyLettersWithRepeat() {
    const checkboxes = lettersGrid.querySelectorAll('input[type="checkbox"]:checked');
    const selectedLetters = Array.from(checkboxes).map(cb => cb.value.toLowerCase());
    
    if (selectedLetters.length < 2) {
        alert("Vui lòng chọn ít nhất 2 chữ cái.");
        return;
    }
    
    let repeatCount = parseInt(repeatCountInput.value) || 1;
    // Đảm bảo giá trị trong khoảng 1-3
    repeatCount = Math.max(1, Math.min(3, repeatCount));
    repeatCountInput.value = repeatCount;
    
    // Nhân mỗi chữ cái theo số lần lặp lại
    const expandedLetters = [];
    selectedLetters.forEach(letter => {
        for (let i = 0; i < repeatCount; i++) {
            expandedLetters.push(letter);
        }
    });
    
    letters = expandedLetters;
    // Reset current letter
    currentLetter = null;
    resultEl.textContent = "Hãy quay nón nào!";
    // cập nhật offscreen để render mới
    if (window._off) {
        window._off.width = W; window._off.height = H;
    }
    // vẽ trực tiếp lại
    drawWheelBase();
    // update result
    resultEl.textContent = `✅ Đã cập nhật danh sách chữ! (Mỗi chữ xuất hiện ${repeatCount} lần)`;
}

// áp dụng chữ mới
applyLettersBtn.addEventListener("click", () => {
    applyLettersWithRepeat();
    saveSettings(); // Lưu settings khi áp dụng
    // đóng panel
    closeSettingsPanel();
});

// Xáo trộn vị trí các chữ cái
shuffleBtn.addEventListener("click", () => {
    if (letters.length < 2) {
        alert("Vui lòng áp dụng chữ cái trước khi xáo trộn.");
        return;
    }
    
    letters = shuffleArray(letters);
    // Reset current letter
    currentLetter = null;
    resultEl.textContent = "Hãy quay nón nào!";
    // cập nhật offscreen để render mới
    if (window._off) {
        window._off.width = W; window._off.height = H;
    }
    // vẽ trực tiếp lại
    drawWheelBase();
    resultEl.textContent = "🔀 Đã xáo trộn vị trí các chữ cái!";
});

// Chọn tất cả
selectAllBtn.addEventListener("click", () => {
    lettersGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = true;
    });
});

// Bỏ chọn tất cả
deselectAllBtn.addEventListener("click", () => {
    lettersGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
});

// toggle hiển chữ hoa: chỉ cần redraw
uppercaseToggle.addEventListener("change", () => {
    saveSettings(); // Lưu settings khi thay đổi
    // Cập nhật offscreen để render mới
    if (window._off) {
        window._off.width = W; window._off.height = H;
    }
    drawWheelBase();
    // Nếu đang có chữ trúng, cập nhật lại hiển thị
    if (currentLetter) {
        const displayLetter = uppercaseToggle.checked ? currentLetter.toUpperCase() : currentLetter;
        resultEl.textContent = `🎉 Bạn quay trúng chữ: ${displayLetter} 🎉`;
    }
});

// ====== settings panel show/hide ======
function openSettingsPanel() {
    // Render checkbox và cập nhật trạng thái chọn
    renderLetterCheckboxes();
    settingsPanel.classList.remove("hidden");
    settingsPanel.setAttribute("aria-hidden", "false");
    settingsToggle.setAttribute("aria-expanded", "true");
}
function closeSettingsPanel() {
    settingsPanel.classList.add("hidden");
    settingsPanel.setAttribute("aria-hidden", "true");
    settingsToggle.setAttribute("aria-expanded", "false");
}

settingsToggle.addEventListener("click", () => {
    if (settingsPanel.classList.contains("hidden")) openSettingsPanel();
    else closeSettingsPanel();
});
closeSettings.addEventListener("click", closeSettingsPanel);

// đóng khi click ngoài (tùy chọn, nhẹ nhàng)
document.addEventListener("click", (e) => {
    const inside = e.composedPath().includes(settingsPanel) || e.composedPath().includes(settingsToggle);
    if (!inside && !settingsPanel.classList.contains("hidden")) {
        closeSettingsPanel();
    }
});

// Khởi tạo
drawWheelBase();
