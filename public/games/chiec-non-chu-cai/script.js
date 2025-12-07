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

let letters = [...defaultLetters];
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
const radius = Math.min(W, H) / 2 - 6;

// vẽ vòng quay (không xoay ở đây)
function drawWheelBase() {
    const num = letters.length;
    const arc = (2 * Math.PI) / num;

    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < num; i++) {
        const start = i * arc;
        const end = start + arc;

        // vẽ miếng cắt
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, start, end);
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? "#f1c40f" : "#f39c12";
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

        // phóng to chữ: tỉ lệ với radius - tăng kích thước cho các bé
        const fontSize = Math.round(Math.max(48, radius * 0.15)); // tăng kích thước chữ lên
        ctx.fillStyle = "#213040";
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        const text = uppercaseToggle.checked ? letters[i].toUpperCase() : letters[i];
        // đưa chữ ra gần vành ngoài
        ctx.fillText(text, radius - 20, 0);
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
        offCtx.fillStyle = i % 2 === 0 ? "#f1c40f" : "#f39c12";
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
        const fontSize = Math.round(Math.max(48, radius * 0.15));
        offCtx.fillStyle = "#213040";
        offCtx.font = `bold ${fontSize}px sans-serif`;
        offCtx.textAlign = "right";
        offCtx.textBaseline = "middle";
        const text = uppercaseToggle.checked ? letters[i].toUpperCase() : letters[i];
        offCtx.fillText(text, radius - 20, 0);
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

            // Hiệu ứng pháo hoa
            createFireworks();
        }
    }

    requestAnimationFrame(tick);
}

// ====== hiệu ứng pháo hoa ======
function createFireworks() {
    const canvas = document.getElementById("wheel");
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#FFD93D', '#FF9FF3', '#54A0FF', '#FF6B9D', '#C44569', '#F8B500', '#6C5CE7'];
    
    // Tạo nhiều vụ nổ pháo hoa (tăng từ 3 lên 5)
    for (let burst = 0; burst < 5; burst++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 80; // Tăng phạm vi offset
            const offsetY = (Math.random() - 0.5) * 80;
            const burstX = centerX + offsetX;
            const burstY = centerY + offsetY;
            const particleCount = 35; // Tăng số lượng hạt từ 20 lên 35
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = burstX + 'px';
                particle.style.top = burstY + 'px';
                // Tăng kích thước hạt: từ 6-12px lên 10-20px
                const size = 10 + Math.random() * 10;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.borderRadius = '50%';
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.backgroundColor = color;
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                // Tăng độ sáng của box-shadow
                particle.style.boxShadow = `0 0 ${12 + Math.random() * 15}px ${color}, 0 0 ${20 + Math.random() * 20}px ${color}`;
                
                document.body.appendChild(particle);
                
                const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.8;
                // Tăng vận tốc để hạt bay xa hơn
                const velocity = 2 + Math.random() * 5;
                let vx = Math.cos(angle) * velocity;
                let vy = Math.sin(angle) * velocity;
                // Tăng khoảng cách bay
                const distance = 120 + Math.random() * 150;
                
                let x = 0;
                let y = 0;
                let opacity = 1;
                const gravity = 0.12;
                
                const animate = () => {
                    x += vx;
                    y += vy;
                    vy += gravity;
                    opacity -= 0.012; // Giảm tốc độ mờ để hạt tồn tại lâu hơn
                    
                    particle.style.transform = `translate(${x}px, ${y}px) scale(${opacity})`;
                    particle.style.opacity = opacity;
                    
                    if (opacity > 0 && Math.abs(x) < distance && Math.abs(y) < distance * 1.8) {
                        requestAnimationFrame(animate);
                    } else {
                        particle.remove();
                    }
                };
                
                requestAnimationFrame(animate);
            }
        }, burst * 120); // Giảm delay giữa các vụ nổ để nhanh hơn
    }
}

// ====== event listeners ======
spinBtn.addEventListener("click", spinWheel);

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
