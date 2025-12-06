// Vietnamese alphabet with diacritics - organized by base letter
// Bảng chữ cái tiếng Việt chuẩn: A, Ă, Â, B, C, D, Đ, E, Ê, G, H, I, K, L, M, N, O, Ô, Ơ, P, Q, R, S, T, U, Ư, V, X, Y
export const VIETNAMESE_ALPHABET_GROUPS = {
  a: ["a", "á", "à", "ả", "ã", "ạ"],
  ă: ["ă", "ắ", "ằ", "ẳ", "ẵ", "ặ"],
  â: ["â", "ấ", "ầ", "ẩ", "ẫ", "ậ"],
  b: ["b"],
  c: ["c"],
  d: ["d"],
  đ: ["đ"],
  e: ["e", "é", "è", "ẻ", "ẽ", "ẹ"],
  ê: ["ê", "ế", "ề", "ễ", "ệ"],
  g: ["g"],
  h: ["h"],
  i: ["i", "í", "ì", "ỉ", "ĩ", "ị"],
  k: ["k"],
  l: ["l"],
  m: ["m"],
  n: ["n"],
  o: ["o", "ó", "ò", "ỏ", "õ", "ọ"],
  ô: ["ô", "ố", "ồ", "ổ", "ỗ", "ộ"],
  ơ: ["ơ", "ớ", "ờ", "ở", "ỡ", "ợ"],
  p: ["p"],
  q: ["q"],
  r: ["r"],
  s: ["s"],
  t: ["t"],
  u: ["u", "ú", "ù", "ủ", "ũ", "ụ"],
  ư: ["ư", "ứ", "ừ", "ử", "ữ", "ự"],
  v: ["v"],
  x: ["x"],
  y: ["y", "ý", "ỳ", "ỷ", "ỹ", "ỵ"],
}

// Bảng chữ cái tiếng Việt theo thứ tự chuẩn: A, Ă, Â, B, C, D, Đ, E, Ê, G, H, I, K, L, M, N, O, Ô, Ơ, P, Q, R, S, T, U, Ư, V, X, Y
export const VIETNAMESE_BASE_LETTERS = ["a", "ă", "â", "b", "c", "d", "đ", "e", "ê", "g", "h", "i", "k", "l", "m", "n", "o", "ô", "ơ", "p", "q", "r", "s", "t", "u", "ư", "v", "x", "y"]

export function getAllDiacriticsForLetter(baseLetter: string): string[] {
  return VIETNAMESE_ALPHABET_GROUPS[baseLetter] || [baseLetter]
}

export type Word = {
  vietnamese: string
  image: string
  targetLetter: string // The letter to find in this word
}

export const WORD_POOLS = {
  family: [
    {
      vietnamese: "mẹ",
      image: "https://images.unsplash.com/photo-1494395799317-773bedeeb500?w=400&h=400&fit=crop",
      targetLetter: "ẹ",
    },
    {
      vietnamese: "bố",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      targetLetter: "ố",
    },
    {
      vietnamese: "anh",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      targetLetter: "nh",
    },
    {
      vietnamese: "em",
      image: "https://images.unsplash.com/photo-1503454537688-e6694265ceef?w=400&h=400&fit=crop",
      targetLetter: "em",
    },
    {
      vietnamese: "gia đình",
      image: "https://images.unsplash.com/photo-1511992514110-9b02e84b4cb6?w=400&h=400&fit=crop",
      targetLetter: "đ",
    },
    {
      vietnamese: "bà",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
      targetLetter: "à",
    },
  ],
  animals: [
    {
      vietnamese: "chó",
      image: "https://images.unsplash.com/photo-1633722715463-d30628519d2e?w=400&h=400&fit=crop",
      targetLetter: "ó",
    },
    {
      vietnamese: "mèo",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      targetLetter: "ò",
    },
    {
      vietnamese: "vịt",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      targetLetter: "ị",
    },
    {
      vietnamese: "cá",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      targetLetter: "á",
    },
    {
      vietnamese: "gà",
      image: "https://images.unsplash.com/photo-1500626046944-287a6106e257?w=400&h=400&fit=crop",
      targetLetter: "à",
    },
    {
      vietnamese: "heo",
      image: "https://images.unsplash.com/photo-1516059211519-b3f43e71b8e1?w=400&h=400&fit=crop",
      targetLetter: "eo",
    },
  ],
  fruits: [
    {
      vietnamese: "táo",
      image: "https://images.unsplash.com/photo-1560806674368-fd86d36ae8d0?w=400&h=400&fit=crop",
      targetLetter: "á",
    },
    {
      vietnamese: "chuối",
      image: "https://images.unsplash.com/photo-1587859211305-d92bc9efeb81?w=400&h=400&fit=crop",
      targetLetter: "ối",
    },
    {
      vietnamese: "cam",
      image: "https://images.unsplash.com/photo-1557803104368-fd86d36ae8d0?w=400&h=400&fit=crop",
      targetLetter: "am",
    },
    {
      vietnamese: "dâu",
      image: "https://images.unsplash.com/photo-1595599810694-2d72ca91a633?w=400&h=400&fit=crop",
      targetLetter: "â",
    },
    {
      vietnamese: "nho",
      image: "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=400&fit=crop",
      targetLetter: "ho",
    },
    {
      vietnamese: "dừa",
      image: "https://images.unsplash.com/photo-1608550453385-39a2c6e504e8?w=400&h=400&fit=crop",
      targetLetter: "ừ",
    },
  ],
  colors: [
    { vietnamese: "đỏ", image: "/solid-red.png", targetLetter: "đ" },
    { vietnamese: "xanh", image: "/green-color.png", targetLetter: "xanh" },
    { vietnamese: "vàng", image: "/yellow-color.png", targetLetter: "à" },
    { vietnamese: "tím", image: "/purple-color.png", targetLetter: "í" },
    { vietnamese: "trắng", image: "/white-color.jpg", targetLetter: "ắ" },
    { vietnamese: "đen", image: "/black-color.jpg", targetLetter: "ề" },
  ],
  numbers: [
    { vietnamese: "một", image: "/number-one.jpg", targetLetter: "ộ" },
    { vietnamese: "hai", image: "/number-two.jpg", targetLetter: "ai" },
    { vietnamese: "ba", image: "/number-three.jpg", targetLetter: "ba" },
    { vietnamese: "bốn", image: "/number-four.jpg", targetLetter: "ố" },
    { vietnamese: "năm", image: "/number-five.png", targetLetter: "ă" },
    { vietnamese: "sáu", image: "/number-six.jpg", targetLetter: "á" },
  ],
}

export function getRandomAnswers(correct: string, count = 3): string[] {
  const answers = [correct]
  const allLetters = VIETNAMESE_BASE_LETTERS.filter((l) => l !== correct)

  while (answers.length < count) {
    const random = allLetters[Math.floor(Math.random() * allLetters.length)]
    if (!answers.includes(random)) {
      answers.push(random)
    }
  }

  // Shuffle answers
  return answers.sort(() => Math.random() - 0.5)
}

export function extractLettersFromWord(word: string): string[] {
  return word.split("").filter((char, index, arr) => arr.indexOf(char) === index)
}
