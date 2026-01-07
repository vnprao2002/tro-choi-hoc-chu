"use client"

import type { HabitatData, HabitatType } from "@/lib/data/pools"

interface HabitatSelectorProps {
  habitats: HabitatData[]
  onSelectHabitat: (habitat: HabitatType) => void
}

export default function HabitatSelector({ habitats, onSelectHabitat }: HabitatSelectorProps) {
  const getHabitatEmoji = (habitatId: string) => {
    const emojiMap: Record<string, string> = {
      garden: "🌻",
      forest: "🌲",
      sea: "🌊",
      mountain: "⛰️",
      farm: "🚜",
      house: "🏠",
    }
    return emojiMap[habitatId] || "🌍"
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {habitats.map((habitat) => (
        <button
          key={habitat.id}
          onClick={() => onSelectHabitat(habitat.id as HabitatType)}
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 h-32 md:h-40"
          style={{
            background: `linear-gradient(135deg, ${
              habitat.displayColor === "from-yellow-100 to-green-100"
                ? "#fef3c7 0%, #dcfce7 100%"
                : habitat.displayColor === "from-green-100 to-emerald-100"
                  ? "#dcfce7 0%, #d1fae5 100%"
                  : habitat.displayColor === "from-blue-100 to-cyan-100"
                    ? "#dbeafe 0%, #cffafe 100%"
                    : habitat.displayColor === "from-gray-100 to-slate-100"
                      ? "#f3f4f6 0%, #f1f5f9 100%"
                      : habitat.displayColor === "from-orange-100 to-red-100"
                        ? "#fed7aa 0%, #fecaca 100%"
                        : "#fce7f3 0%, #e9d5ff 100%"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <div className="text-5xl md:text-6xl drop-shadow-lg">{getHabitatEmoji(habitat.id)}</div>
            <div className="text-gray-800 font-bold text-base md:text-lg drop-shadow-md text-center px-2">
              {habitat.nameVi}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
