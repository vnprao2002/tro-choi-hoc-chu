"use client"
import { getWordPool } from "@/lib/word-pools"

interface PoolModalProps {
  category: string
  isOpen: boolean
  onClose: () => void
}

export default function PoolModal({ category, isOpen, onClose }: PoolModalProps) {
  const words = getWordPool(category)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-center justify-between">
          <h2 className="text-3xl font-black text-white">Danh Sách Từ</h2>
          <button
            onClick={onClose}
            className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {words.map((word, idx) => (
              <div key={idx} className="text-center">
                <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-3 overflow-hidden shadow-md">
                  <img src={word.image || "/placeholder.svg"} alt={word.text} className="w-full h-full object-cover" />
                </div>
                <p className="text-lg font-bold text-gray-800">{word.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
