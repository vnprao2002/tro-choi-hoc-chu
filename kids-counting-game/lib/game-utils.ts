import { ANIMAL_POOL, HABITAT_POOL } from "@/lib/data/pools"
import type { HabitatType } from "@/lib/data/pools"

// Generate question text with animal name
export function generateQuestion(animalName: string): string {
  const questions = [
    `Có bao nhiêu ${animalName}?`,
    `Đếm ${animalName}. Bao nhiêu cái?`,
    `Một, hai, ba... Bao nhiêu ${animalName}?`,
    `Có mấy ${animalName}?`,
  ]
  return questions[Math.floor(Math.random() * questions.length)]
}

// Generate random count within range
export function generateRandomCount(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Get available animals for a habitat
export function getHabitatAnimals(habitatId: HabitatType): string[] {
  const habitat = HABITAT_POOL[habitatId]
  return habitat ? habitat.animalIds : []
}

// Filter animals by selected IDs
export function filterAnimalsByIds(animalIds: string[]): typeof ANIMAL_POOL {
  const filtered: typeof ANIMAL_POOL = {}
  animalIds.forEach((id) => {
    if (ANIMAL_POOL[id]) {
      filtered[id] = ANIMAL_POOL[id]
    }
  })
  return filtered
}

// Get random animal from list
export function getRandomAnimal(animalIds: string[]): string | null {
  if (animalIds.length === 0) return null
  return animalIds[Math.floor(Math.random() * animalIds.length)]
}

// Position animals randomly on screen without overlap
export function generateAnimalPositions(count: number, mapWidth: number, mapHeight: number, animalSize = 80) {
  const positions: Array<{ x: number; y: number }> = []
  const minDistance = animalSize + 20 // Minimum distance between animals to avoid overlap
  const maxAttempts = 20

  for (let i = 0; i < count; i++) {
    let position: { x: number; y: number } | null = null
    let attempts = 0

    while (!position && attempts < maxAttempts) {
      const newPosition = {
        x: Math.random() * (mapWidth - animalSize),
        y: Math.random() * (mapHeight - animalSize),
      }

      // Check if position is far enough from existing positions
      const isValid = positions.every((pos) => {
        const distance = Math.sqrt(Math.pow(pos.x - newPosition.x, 2) + Math.pow(pos.y - newPosition.y, 2))
        return distance > minDistance
      })

      if (isValid) {
        position = newPosition
      }

      attempts++
    }

    if (position) {
      positions.push(position)
    }
  }

  return positions
}

// Validate game config logic
export function validateGameLogic(
  habitatId: HabitatType,
  selectedAnimals: string[],
  maxCount: number,
): { isValid: boolean; error?: string } {
  const habitat = HABITAT_POOL[habitatId]

  if (!habitat) {
    return { isValid: false, error: "Habitat không tồn tại" }
  }

  if (selectedAnimals.length === 0) {
    return { isValid: false, error: "Phải chọn ít nhất một con vật" }
  }

  // Check if all selected animals belong to the habitat
  const validAnimals = selectedAnimals.every((id) => {
    const animal = ANIMAL_POOL[id]
    return animal && animal.habitat === habitatId
  })

  if (!validAnimals) {
    return { isValid: false, error: "Có con vật không phù hợp với môi trường" }
  }

  if (maxCount < 1 || maxCount > 10) {
    return { isValid: false, error: "Số tối đa phải từ 1 đến 10" }
  }

  return { isValid: true }
}
