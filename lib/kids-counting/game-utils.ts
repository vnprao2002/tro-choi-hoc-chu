import { ANIMAL_POOL, HABITAT_POOL } from "@/lib/kids-counting/data/pools"
import type { HabitatType } from "@/lib/kids-counting/data/pools"

export function generateQuestion(animalName: string): string {
  const questions = [
    `Có bao nhiêu ${animalName}?`,
    `Đếm ${animalName}. Bao nhiêu cái?`,
    `Một, hai, ba... Bao nhiêu ${animalName}?`,
    `Có mấy ${animalName}?`,
  ]
  return questions[Math.floor(Math.random() * questions.length)]
}

export function generateRandomCount(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getHabitatAnimals(habitatId: HabitatType): string[] {
  const habitat = HABITAT_POOL[habitatId]
  return habitat ? habitat.animalIds : []
}

export function filterAnimalsByIds(animalIds: string[]): typeof ANIMAL_POOL {
  const filtered: typeof ANIMAL_POOL = {}
  animalIds.forEach((id) => {
    if (ANIMAL_POOL[id]) {
      filtered[id] = ANIMAL_POOL[id]
    }
  })
  return filtered
}

export function getRandomAnimal(animalIds: string[]): string | null {
  if (animalIds.length === 0) return null
  return animalIds[Math.floor(Math.random() * animalIds.length)]
}

export function generateAnimalPositions(count: number, mapWidth: number, mapHeight: number, animalSize = 80) {
  const positions: Array<{ x: number; y: number }> = []
  const minDistance = animalSize + 20
  const maxAttempts = 20

  for (let i = 0; i < count; i++) {
    let position: { x: number; y: number } | null = null
    let attempts = 0

    while (!position && attempts < maxAttempts) {
      const newPosition = {
        x: Math.random() * (mapWidth - animalSize),
        y: Math.random() * (mapHeight - animalSize),
      }

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

