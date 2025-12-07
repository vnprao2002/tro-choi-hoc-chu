// --- DỮ LIỆU TỪ VỰNG TIẾNG VIỆT CHO TRẺ 5-6 TUỔI ---
const wordPool = [
    { icon: "🍎", text: "quả táo" },
    { icon: "🍌", text: "quả chuối" },
    { icon: "🍇", text: "chùm nho" },
    { icon: "🥕", text: "củ cà rốt" },
    { icon: "🐱", text: "con mèo" },
    { icon: "🐶", text: "con chó" },
    { icon: "🌻", text: "bông hoa" },
    { icon: "🚗", text: "chiếc ô tô" },
    { icon: "🐟", text: "con cá" },
    { icon: "🍉", text: "quả dưa hấu" },
    { icon: "🐰", text: "con thỏ" },
    { icon: "🐻", text: "con gấu" },
    { icon: "🐷", text: "con lợn" },
    { icon: "🐸", text: "con ếch" },
    { icon: "🦆", text: "con vịt" },
    { icon: "🐔", text: "con gà" },
    { icon: "🐮", text: "con bò" },
    { icon: "🐴", text: "con ngựa" },
    { icon: "🦁", text: "con sư tử" },
    { icon: "🐯", text: "con hổ" },
    { icon: "🍓", text: "quả dâu" },
    { icon: "🍊", text: "quả cam" },
    { icon: "🍋", text: "quả chanh" },
    { icon: "🥝", text: "quả kiwi" },
    { icon: "🍑", text: "quả đào" },
    { icon: "🌽", text: "bắp ngô" },
    { icon: "🍅", text: "quả cà chua" },
    { icon: "🥒", text: "quả dưa chuột" },
    { icon: "🥬", text: "lá rau" },
    { icon: "🌶️", text: "quả ớt" },
    { icon: "🌺", text: "bông hoa hồng" },
    { icon: "🌷", text: "bông hoa tulip" },
    { icon: "🌸", text: "bông hoa anh đào" },
    { icon: "🌼", text: "bông hoa cúc" },
    { icon: "🚲", text: "chiếc xe đạp" },
    { icon: "🚂", text: "đoàn tàu" },
    { icon: "✈️", text: "máy bay" },
    { icon: "🚢", text: "con tàu" },
    { icon: "🏠", text: "ngôi nhà" },
    { icon: "🌳", text: "cây xanh" },
    { icon: "⭐", text: "ngôi sao" },
    { icon: "🌙", text: "mặt trăng" },
    { icon: "☀️", text: "mặt trời" },
    { icon: "🌈", text: "cầu vồng" },
    { icon: "🎈", text: "quả bóng bay" },
    { icon: "🎁", text: "món quà" },
    { icon: "🎂", text: "bánh sinh nhật" },
    { icon: "🍰", text: "bánh ngọt" },
    { icon: "🍪", text: "bánh quy" },
    { icon: "🍦", text: "kem" },
    { icon: "🧸", text: "gấu bông" },
    { icon: "🎨", text: "bút màu" },
    { icon: "📚", text: "quyển sách" },
    { icon: "🎵", text: "bài hát" },
    { icon: "⚽", text: "quả bóng" },
    { icon: "🏀", text: "bóng rổ" },
    { icon: "🎮", text: "máy chơi game" },
    { icon: "🦋", text: "con bướm" },
    { icon: "🐝", text: "con ong" },
    { icon: "🐜", text: "con kiến" },
    { icon: "🦗", text: "con dế" },
    { icon: "🐢", text: "con rùa" },
    { icon: "🐍", text: "con rắn" },
    { icon: "🦎", text: "con thằn lằn" },
    { icon: "🐦", text: "con chim" },
    { icon: "🦅", text: "con đại bàng" },
    { icon: "🦉", text: "con cú" },
    { icon: "🐺", text: "con sói" },
    { icon: "🦊", text: "con cáo" },
    { icon: "🐼", text: "con gấu trúc" },
    { icon: "🐨", text: "con gấu túi" },
    { icon: "🦓", text: "con ngựa vằn" },
    { icon: "🦒", text: "con hươu cao cổ" },
    { icon: "🐘", text: "con voi" },
    { icon: "🦏", text: "con tê giác" },
    { icon: "🐪", text: "con lạc đà" },
    { icon: "🦘", text: "con kangaroo" },
    { icon: "🐃", text: "con trâu" },
    { icon: "🐑", text: "con cừu" },
    { icon: "🐐", text: "con dê" },
    { icon: "🦌", text: "con nai" },
    { icon: "🐿️", text: "con sóc" },
    { icon: "🐭", text: "con chuột" },
    { icon: "🐹", text: "con chuột hamster" },
    { icon: "🦔", text: "con nhím" },
    { icon: "🐾", text: "dấu chân" },
    { icon: "🌊", text: "sóng biển" },
    { icon: "🏖️", text: "bãi biển" },
    { icon: "⛰️", text: "ngọn núi" },
    { icon: "🌲", text: "cây thông" },
    { icon: "🌴", text: "cây dừa" },
    { icon: "🍄", text: "cây nấm" },
    { icon: "🌾", text: "bông lúa" },
    { icon: "🌿", text: "lá cây" },
    { icon: "🍃", text: "lá rơi" },
    { icon: "🍂", text: "lá vàng" },
    { icon: "🍁", text: "lá đỏ" },
    { icon: "🌰", text: "hạt dẻ" },
    { icon: "🥜", text: "hạt lạc" },
    { icon: "🥥", text: "quả dừa" },
    { icon: "🥑", text: "quả bơ" },
    { icon: "🍈", text: "quả dưa" },
    { icon: "🍒", text: "quả anh đào" },
    { icon: "🥭", text: "quả xoài" },
    { icon: "🍍", text: "quả dứa" },
    { icon: "🥔", text: "củ khoai tây" },
    { icon: "🍠", text: "củ khoai lang" },
    { icon: "🥦", text: "bông cải" },
    { icon: "🥬", text: "rau cải" },
    { icon: "🥒", text: "dưa leo" },
    { icon: "🌶️", text: "ớt cay" },
    { icon: "🫑", text: "ớt chuông" },
    { icon: "🧄", text: "củ tỏi" },
    { icon: "🧅", text: "củ hành" },
    { icon: "🥚", text: "quả trứng" },
    { icon: "🍳", text: "món trứng" },
    { icon: "🍖", text: "xương thịt" },
    { icon: "🍗", text: "đùi gà" },
    { icon: "🌭", text: "xúc xích" },
    { icon: "🍔", text: "bánh hamburger" },
    { icon: "🍟", text: "khoai tây chiên" },
    { icon: "🍕", text: "bánh pizza" },
    { icon: "🦀", text: "con cua" },
    { icon: "🦞", text: "con tôm hùm" },
    { icon: "🦐", text: "con tôm" },
    { icon: "🦑", text: "con mực" },
    { icon: "🦪", text: "con hàu" },
    { icon: "☕", text: "cốc cà phê" },
    { icon: "🫖", text: "ấm trà" },
    { icon: "🍵", text: "tách trà" },
    { icon: "🥤", text: "cốc nước" },
    { icon: "🧋", text: "trà sữa" },
    { icon: "🧃", text: "hộp nước" },
    { icon: "🥛", text: "ly sữa" },
    { icon: "🍯", text: "lọ mật ong" },
    { icon: "🥄", text: "thìa" },
    { icon: "🍴", text: "dĩa và dao" },
    { icon: "🍽️", text: "bộ đồ ăn" },
    { icon: "🥢", text: "đũa" },
    { icon: "🧂", text: "lọ muối" },
	{ icon: "🛴", text: "xe trượt" },
	{ icon: "🛹", text: "ván trượt" },
	{ icon: "🏀", text: "bóng rổ" },
	{ icon: "⚾", text: "bóng chày" },
	{ icon: "🏐", text: "bóng chuyền" },
	{ icon: "🎾", text: "quả tennis" },
	{ icon: "🏓", text: "bóng bàn" },
	{ icon: "🏸", text: "cầu lông" },
	{ icon: "🥋", text: "đồ võ" },
	{ icon: "🎯", text: "phi tiêu" },
	{ icon: "🎳", text: "bóng bowling" },
	{ icon: "🛶", text: "thuyền nhỏ" },
	{ icon: "⛵", text: "thuyền buồm" },
	{ icon: "🪁", text: "diều" },
	{ icon: "🎣", text: "cần câu" },
	{ icon: "🎃", text: "bí ngô" },
	{ icon: "🧙‍♂️", text: "phù thủy" },
	{ icon: "🧚", text: "công chúa tiên" },
	{ icon: "🦄", text: "kỳ lân" },
	{ icon: "🐉", text: "rồng" },
	{ icon: "🧜‍♀️", text: "nàng tiên cá" },
	{ icon: "👑", text: "vương miện" },
	{ icon: "🛡️", text: "khiên" },
	{ icon: "⚔️", text: "kiếm" },
	{ icon: "🏹", text: "cung tên" },
	{ icon: "🧵", text: "cuộn chỉ" },
	{ icon: "🪡", text: "kim khâu" },
	{ icon: "🧶", text: "sợi len" },
	{ icon: "🪆", text: "búp bê" },
	{ icon: "🛍️", text: "túi đồ" },
	{ icon: "🛏️", text: "giường" },
	{ icon: "🛋️", text: "ghế sofa" },
	{ icon: "🪑", text: "ghế ngồi" },
	{ icon: "🚿", text: "vòi hoa sen" },
	{ icon: "🛁", text: "bồn tắm" },
	{ icon: "🪞", text: "gương" },
	{ icon: "🧸", text: "gấu bông" },
	{ icon: "🪀", text: "trò chơi yoyo" },
	{ icon: "🪁", text: "diều bay" },
	{ icon: "🎈", text: "quả bóng bay" },
	{ icon: "🎁", text: "quà" },
	{ icon: "🎂", text: "bánh sinh nhật" },
	{ icon: "🦕", text: "khủng long" },
	{ icon: "🐙", text: "bạch tuộc" },
	{ icon: "🦑", text: "con mực" },
	{ icon: "🦐", text: "con tôm" },
	{ icon: "🦞", text: "tôm hùm" },
	{ icon: "🦀", text: "con cua" },
	{ icon: "🐡", text: "cá nóc" },
	{ icon: "🐠", text: "cá nhiệt đới" },
	{ icon: "🐬", text: "cá heo" },
	{ icon: "🐳", text: "cá voi" },
	{ icon: "🐋", text: "cá voi xanh" },
	{ icon: "🦈", text: "cá mập" },
	{ icon: "🐌", text: "con ốc" },
	{ icon: "🐞", text: "bọ rùa" },
	{ icon: "🪲", text: "bọ cánh cứng" },
	{ icon: "🦗", text: "con dế" },
	{ icon: "🪳", text: "con gián" },
	{ icon: "🦟", text: "con muỗi" },
	{ icon: "🪰", text: "con ruồi" },
	{ icon: "🪱", text: "con giun" },
	{ icon: "🦋", text: "con bướm" },
	{ icon: "🐢", text: "con rùa" },
	{ icon: "🐍", text: "con rắn" },
	{ icon: "🦎", text: "thằn lằn" },
	{ icon: "🐊", text: "cá sấu" },
	{ icon: "🦖", text: "khủng long bạo chúa" },
	{ icon: "🌲", text: "cây thông" },
	{ icon: "🌴", text: "cây dừa" },
	{ icon: "🌳", text: "cây xanh" },
	{ icon: "🌱", text: "cây con" },
	{ icon: "🌿", text: "lá cây" },
	{ icon: "🍃", text: "lá rơi" },
	{ icon: "🍂", text: "lá vàng" },
	{ icon: "🍁", text: "lá đỏ" },
	{ icon: "🌾", text: "bông lúa" },
	{ icon: "🍄", text: "cây nấm" },
	{ icon: "🌸", text: "hoa anh đào" },
	{ icon: "🌹", text: "hoa hồng" },
	{ icon: "🌷", text: "hoa tulip" },
	{ icon: "🌺", text: "hoa dâm bụt" },
	{ icon: "🌻", text: "hoa hướng dương" },
	{ icon: "🥀", text: "hoa héo" },
	{ icon: "🏞️", text: "cảnh núi" },
	{ icon: "🏔️", text: "ngọn núi" },
	{ icon: "🏝️", text: "hòn đảo" },
	{ icon: "🏜️", text: "sa mạc" },
	{ icon: "🌅", text: "bình minh" },
	{ icon: "🌄", text: "bình minh trên núi" },
	{ icon: "🌇", text: "hoàng hôn" },
	{ icon: "🌆", text: "phố buổi tối" },
	{ icon: "🌉", text: "cầu" },
	{ icon: "🏘️", text: "ngôi nhà" },
	{ icon: "🏡", text: "nhà vườn" },
	{ icon: "🏢", text: "toà nhà" },
	{ icon: "🏬", text: "siêu thị" },
	{ icon: "🏦", text: "ngân hàng" },
	{ icon: "🏫", text: "trường học" },
	{ icon: "🛤️", text: "đường sắt" },
	{ icon: "🚂", text: "tàu lửa" },
	{ icon: "🚆", text: "tàu chở khách" },
	{ icon: "🚇", text: "tàu điện ngầm" },
	{ icon: "🚋", text: "tàu điện" },
	{ icon: "🚌", text: "xe buýt" },
	{ icon: "🚎", text: "xe điện" },
	{ icon: "🚑", text: "xe cứu thương" },
	{ icon: "🚒", text: "xe cứu hỏa" },
	{ icon: "🚓", text: "xe cảnh sát" },
	{ icon: "🚕", text: "xe taxi" },
	{ icon: "🚗", text: "xe hơi" },
	{ icon: "🚙", text: "xe SUV" },
	{ icon: "🛻", text: "xe bán tải" },
	{ icon: "🏎️", text: "xe đua" },
	{ icon: "🏍️", text: "xe máy" },
	{ icon: "🛵", text: "xe tay ga" },
	{ icon: "🛺", text: "xe ba bánh" },
	{ icon: "🚲", text: "xe đạp" },
	{ icon: "🛴", text: "xe trượt" },
	{ icon: "🛹", text: "ván trượt" },
	{ icon: "🛼", text: "giày trượt patin" },
	{ icon: "🛶", text: "thuyền" },
	{ icon: "⛵", text: "thuyền buồm" },
	{ icon: "🚤", text: "tàu cao tốc" },
	{ icon: "🛳️", text: "tàu thủy" },
	{ icon: "⛴️", text: "phà" },
	{ icon: "🛥️", text: "du thuyền" },
	{ icon: "✈️", text: "máy bay" },
	{ icon: "🛩️", text: "máy bay nhỏ" },
	{ icon: "🪂", text: "dù bay" },
	{ icon: "🪁", text: "diều" },
	{ icon: "🎈", text: "bóng bay" },
	{ icon: "🎁", text: "quà" },
	{ icon: "🎂", text: "bánh sinh nhật" },
	{ icon: "🍰", text: "bánh ngọt" },
	{ icon: "🍪", text: "bánh quy" },
	{ icon: "🍩", text: "bánh rán" },
	{ icon: "🍫", text: "socola" },
	{ icon: "🍬", text: "kẹo" },
	{ icon: "🍭", text: "kẹo mút" },
	{ icon: "🍮", text: "bánh flan" },
	{ icon: "🍯", text: "mật ong" },
	{ icon: "🥛", text: "sữa" },
	{ icon: "🧃", text: "nước trái cây" },
	{ icon: "🥤", text: "nước ngọt" },
	{ icon: "🍵", text: "trà" },
	{ icon: "🧋", text: "trà sữa" }
];

// --- BIẾN TOÀN CỤC ---
let targetLetter = "a";
let currentWord = null;
let underlinedLetters = 0;
let selectMode = "all"; // "all" hoặc "first"

// --- SOUND EFFECTS ---
const sounds = {
    correct: new Audio("sound/correct.mp3"),
    wrong: new Audio("sound/wrong.mp3"),
    victory: new Audio("sound/victory.mp3"),
    hover: new Audio("sound/hover.mp3")
};

// Đặt volume cho các sound
Object.values(sounds).forEach(sound => {
    sound.volume = 0.5;
});

// --- KHỞI TẠO DANH SÁCH CHỮ CÁI TIẾNG VIỆT ---
const alphabet = "aăâbcdđeghiklmnoôơpqrstuưvxy";
const selectLetter = document.getElementById("targetLetter");
for (const c of alphabet) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    selectLetter.appendChild(opt);
}

// --- HÀM LẤY CHỮ CÁI GỐC (CHỈ BỎ DẤU THANH, GIỮ NGUYÊN DẤU MŨ) ---
function getBaseLetter(char) {
    const lower = char.toLowerCase();
    // Mapping các chữ cái có dấu thanh về chữ cái gốc (giữ nguyên dấu mũ)
    const toneMap = {
        // a với dấu thanh
        'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
        // ă với dấu thanh
        'ắ': 'ă', 'ằ': 'ă', 'ẳ': 'ă', 'ẵ': 'ă', 'ặ': 'ă',
        // â với dấu thanh
        'ấ': 'â', 'ầ': 'â', 'ẩ': 'â', 'ẫ': 'â', 'ậ': 'â',
        // e với dấu thanh
        'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
        // ê với dấu thanh
        'ế': 'ê', 'ề': 'ê', 'ể': 'ê', 'ễ': 'ê', 'ệ': 'ê',
        // i với dấu thanh
        'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
        // o với dấu thanh
        'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
        // ô với dấu thanh
        'ố': 'ô', 'ồ': 'ô', 'ổ': 'ô', 'ỗ': 'ô', 'ộ': 'ô',
        // ơ với dấu thanh
        'ớ': 'ơ', 'ờ': 'ơ', 'ở': 'ơ', 'ỡ': 'ơ', 'ợ': 'ơ',
        // u với dấu thanh
        'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
        // ư với dấu thanh
        'ứ': 'ư', 'ừ': 'ư', 'ử': 'ư', 'ữ': 'ư', 'ự': 'ư',
        // y với dấu thanh
        'ý': 'y', 'ỳ': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
    };
    
    // Nếu có trong map (có dấu thanh), trả về chữ gốc
    if (toneMap[lower]) {
        return toneMap[lower];
    }
    
    // Nếu không có dấu thanh, trả về chính nó (có thể có dấu mũ hoặc không)
    return lower;
}

// --- LỌC TỪ VỰNG THEO CHỮ CÁI MỤC TIÊU ---
function getFilteredWords(letter) {
    const letterBase = getBaseLetter(letter);
    return wordPool.filter(word => {
        const text = word.text.toLowerCase();
        // Kiểm tra xem từ có chứa chữ cái mục tiêu (có thể có dấu thanh)
        return text.split("").some(ch => getBaseLetter(ch) === letterBase);
    });
}

// --- KIỂM TRA CÓ TỪ NÀO BẮT ĐẦU BẰNG CHỮ CÁI MỤC TIÊU KHÔNG ---
function hasWordsStartingWith(letter) {
    const letterBase = getBaseLetter(letter);
    return wordPool.some(word => {
        const text = word.text.toLowerCase().trim();
        if (text.length === 0) return false;
        const firstChar = text[0];
        return getBaseLetter(firstChar) === letterBase;
    });
}

// --- TẠO MỘT TỪ MỚI ---
function newWord() {
    let filteredWords;
    
    // Nếu chế độ "chỉ chọn từ đầu tiên", chỉ lấy từ bắt đầu bằng chữ cái mục tiêu
    if (selectMode === "first") {
        const letterBase = getBaseLetter(targetLetter);
        filteredWords = wordPool.filter(word => {
            const text = word.text.toLowerCase().trim();
            if (text.length === 0) return false;
            const firstChar = text[0];
            return getBaseLetter(firstChar) === letterBase;
        });
        
        if (filteredWords.length === 0) {
            const msg = document.getElementById("message");
            msg.textContent = "⚠️ Không có từ nào bắt đầu bằng chữ '" + targetLetter + "'. Vui lòng chọn chữ cái khác!";
            msg.style.color = "#ff6b00";
            msg.classList.remove("celebrate");
            // Xóa nội dung game area
            document.getElementById("icon").textContent = "";
            document.getElementById("phrase").innerHTML = "";
            stopFireworks();
            return;
        }
    } else {
        // Chế độ "chọn hết", lấy tất cả từ chứa chữ cái mục tiêu
        filteredWords = getFilteredWords(targetLetter);
        if (filteredWords.length === 0) {
            const msg = document.getElementById("message");
            msg.textContent = "Không có từ nào chứa chữ '" + targetLetter + "'";
            msg.style.color = "#ff6b00";
            msg.classList.remove("celebrate");
            return;
        }
    }
    
    const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    currentWord = random;
    document.getElementById("icon").textContent = random.icon;
    const phrase = document.getElementById("phrase");
    phrase.innerHTML = "";

    const caseType = document.getElementById("caseType").value;
    const displayText = caseType === "upper" ? random.text.toUpperCase() : random.text.toLowerCase();

    displayText.split("").forEach((ch, index) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.dataset.index = index;
        span.addEventListener("click", () => handleClick(span, ch));
        span.addEventListener("mouseenter", () => {
            if (!span.classList.contains("underline")) {
                sounds.hover.currentTime = 0;
                sounds.hover.play().catch(() => {}); // Bỏ qua lỗi nếu không thể phát
            }
        });
        phrase.appendChild(span);
        
        // Thêm hiệu ứng nhảy với delay khác nhau cho mỗi chữ
        setTimeout(() => {
            span.classList.add("letter-enter");
        }, index * 80); // Mỗi chữ nhảy sau 80ms
    });

    const msg = document.getElementById("message");
    msg.textContent = "";
    msg.style.color = "#00c853"; // Reset màu về mặc định
    msg.classList.remove("celebrate");
    underlinedLetters = 0;
    stopFireworks();
}

function handleClick(span, ch) {
    if (span.classList.contains("underline")) {
        return; // Đã được gạch chân rồi
    }

    const caseType = document.getElementById("caseType").value;
    const letter = targetLetter;
    const match = caseType === "upper" ? letter.toUpperCase() : letter.toLowerCase();
    
    // So sánh chính xác: lấy chữ cái gốc (chỉ bỏ dấu thanh, giữ nguyên dấu mũ)
    const chBase = getBaseLetter(ch);
    const matchBase = getBaseLetter(match);

    if (chBase === matchBase) {
        // Kiểm tra chế độ chọn
        if (selectMode === "first") {
            // Chỉ cho phép gạch chân chữ đầu tiên
            const phraseSpans = document.querySelectorAll("#phrase span");
            let foundFirst = false;
            for (let s of phraseSpans) {
                if (s.classList.contains("underline")) continue;
                const sChBase = getBaseLetter(s.textContent);
                if (sChBase === matchBase) {
                    if (s === span) {
                        foundFirst = true;
                        break;
                    } else {
                        // Phát âm thanh sai
                        sounds.wrong.currentTime = 0;
                        sounds.wrong.play().catch(() => {});
                        return; // Không phải chữ đầu tiên, không cho gạch chân
                    }
                }
            }
            if (!foundFirst) {
                sounds.wrong.currentTime = 0;
                sounds.wrong.play().catch(() => {});
                return;
            }
        }
        
        span.classList.add("underline");
        underlinedLetters++;
        // Phát âm thanh đúng
        sounds.correct.currentTime = 0;
        sounds.correct.play().catch(() => {});
        checkWin();
    } else {
        // Phát âm thanh sai
        sounds.wrong.currentTime = 0;
        sounds.wrong.play().catch(() => {});
    }
}

function checkWin() {
    const phraseSpans = document.querySelectorAll("#phrase span");
    const caseType = document.getElementById("caseType").value;
    const match = caseType === "upper" ? targetLetter.toUpperCase() : targetLetter.toLowerCase();
    const matchBase = getBaseLetter(match);
    
    let totalTargets = 0;
    let underlinedTargets = 0;
    
    phraseSpans.forEach(s => {
        const sChBase = getBaseLetter(s.textContent);
        if (sChBase === matchBase) {
            totalTargets++;
            if (s.classList.contains("underline")) {
                underlinedTargets++;
            }
        }
    });
    
    // Nếu chế độ "first", chỉ cần 1 chữ được gạch chân
    const requiredTargets = selectMode === "first" ? 1 : totalTargets;

    if (underlinedTargets >= requiredTargets && requiredTargets > 0) {
        const msg = document.getElementById("message");
        msg.textContent = "🎉 Bé đúng rồi, giỏi quá! 🎉";
        msg.classList.add("celebrate");
        // Phát âm thanh chiến thắng
        sounds.victory.currentTime = 0;
        sounds.victory.play().catch(() => {});
        startFireworks();
    }
}

// --- PHÁO HOA 🎆 ---
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
let particles = [];
let fireworksActive = false;
let animationId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function startFireworks() {
    fireworksActive = true;
    particles = [];
    
    // Tạo nhiều đợt pháo hoa
    for (let burst = 0; burst < 5; burst++) {
        setTimeout(() => {
            const centerX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
            const centerY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
            
            for (let i = 0; i < 50; i++) {
                const angle = (Math.PI * 2 * i) / 50;
                const speed = 2 + Math.random() * 4;
                particles.push({
                    x: centerX,
                    y: centerY,
                    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
                    radius: Math.random() * 4 + 2,
                    speedX: Math.cos(angle) * speed,
                    speedY: Math.sin(angle) * speed,
                    life: 60 + Math.random() * 40,
                    gravity: 0.1
                });
            }
        }, burst * 200);
    }
    
    animateFireworks();
}

function stopFireworks() {
    fireworksActive = false;
    particles = [];
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animateFireworks() {
    if (!fireworksActive && particles.length === 0) return;
    
    // Không làm đen màn hình, chỉ vẽ pháo hoa
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += p.gravity;
        p.life--;
        
        const alpha = Math.min(p.life / 100, 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `, ${alpha})`).replace("hsl", "hsla");
        ctx.fill();
    });
    
    particles = particles.filter(p => p.life > 0);
    
    if (fireworksActive || particles.length > 0) {
        animationId = requestAnimationFrame(animateFireworks);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// --- QUẢN LÝ PANEL TÙY CHỈNH ---
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");

settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.add("active");
});

closeSettings.addEventListener("click", () => {
    settingsPanel.classList.remove("active");
});

// Đóng panel khi click bên ngoài
document.addEventListener("click", (e) => {
    if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
        settingsPanel.classList.remove("active");
    }
});

// --- CẬP NHẬT HIỂN THỊ CHỮ CÁI MỤC TIÊU ---
function updateTargetDisplay() {
    const caseType = document.getElementById("caseType").value;
    const displayLetter = caseType === "upper" ? targetLetter.toUpperCase() : targetLetter.toLowerCase();
    document.getElementById("targetDisplay").textContent = displayLetter;
}

// --- SỰ KIỆN ---
document.getElementById("targetLetter").addEventListener("change", e => {
    targetLetter = e.target.value;
    updateTargetDisplay();
    // Kiểm tra nếu đang ở chế độ "chỉ chọn từ đầu tiên"
    if (selectMode === "first") {
        if (!hasWordsStartingWith(targetLetter)) {
            const msg = document.getElementById("message");
            msg.textContent = "⚠️ Không có từ nào bắt đầu bằng chữ '" + targetLetter + "'. Vui lòng chọn chữ cái khác!";
            msg.style.color = "#ff6b00";
            msg.classList.remove("celebrate");
            // Xóa nội dung game area
            document.getElementById("icon").textContent = "";
            document.getElementById("phrase").innerHTML = "";
            stopFireworks();
            return;
        }
    }
    newWord();
});

document.getElementById("caseType").addEventListener("change", () => {
    updateTargetDisplay();
    newWord();
});

document.getElementById("selectMode").addEventListener("change", e => {
    selectMode = e.target.value;
    // Kiểm tra khi chuyển sang chế độ "chỉ chọn từ đầu tiên"
    if (selectMode === "first") {
        if (!hasWordsStartingWith(targetLetter)) {
            const msg = document.getElementById("message");
            msg.textContent = "⚠️ Không có từ nào bắt đầu bằng chữ '" + targetLetter + "'. Vui lòng chọn chữ cái khác!";
            msg.style.color = "#ff6b00";
            msg.classList.remove("celebrate");
            // Xóa nội dung game area
            document.getElementById("icon").textContent = "";
            document.getElementById("phrase").innerHTML = "";
            stopFireworks();
            return;
        }
    }
    newWord();
});

document.getElementById("newWordBtn").addEventListener("click", () => {
    newWord();
});

// --- KHỞI ĐỘNG ---
updateTargetDisplay();
newWord();