"use client"

interface SettingsPanelProps {
  settings: any
  setSettings: (settings: any) => void
}

export default function SettingsPanel({ settings, setSettings }: SettingsPanelProps) {
  const categories = [
    { id: "healthcare", name: "Y Tế" },
    { id: "school", name: "Trường Học" },
    { id: "cooking", name: "Nấu Ăn" },
    { id: "transport", name: "Giao Thông" },
    { id: "farm", name: "Nông Trại" },
  ]

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  const handleLetterToggle = (letter: string) => {
    const newLetters = settings.targetLetters.includes(letter)
      ? settings.targetLetters.filter((l: string) => l !== letter)
      : [...settings.targetLetters].slice(0, 2).concat(letter).slice(-3)

    if (newLetters.length > 0) {
      setSettings({ ...settings, targetLetters: newLetters })
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
      {/* Category selection */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Chọn Chủ Đề:</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSettings({ ...settings, category: cat.id })}
              className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                settings.category === cat.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Letter selection */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Chọn Chữ Cái (Tối Đa 3):</h3>
        <div className="grid grid-cols-7 gap-2">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterToggle(letter)}
              className={`py-2 px-1 rounded-lg font-bold transition-all ${
                settings.targetLetters.includes(letter)
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Round count */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Số Vòng Chơi:</h3>
        <div className="flex gap-3">
          {[5, 10, 15, 20].map((count) => (
            <button
              key={count}
              onClick={() => setSettings({ ...settings, roundCount: count })}
              className={`py-3 px-6 rounded-lg font-bold transition-all ${
                settings.roundCount === count
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Case preference */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Kiểu Chữ:</h3>
        <div className="flex gap-3">
          {["uppercase", "lowercase"].map((type) => (
            <button
              key={type}
              onClick={() => setSettings({ ...settings, caseType: type })}
              className={`py-3 px-6 rounded-lg font-bold transition-all flex-1 ${
                settings.caseType === type
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {type === "uppercase" ? "CHỮ HOA" : "chữ thường"}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
