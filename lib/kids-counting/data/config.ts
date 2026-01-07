export interface GameConfig {
  selectedHabitat: string
  selectedAnimals: string[]
  randomizeAnimals: boolean
  numberRange: {
    min: number
    max: number
  }
  totalLevels: number
  totalHearts: number
  levelDifficulty: "easy" | "normal" | "hard"
}

export const DEFAULT_CONFIG: GameConfig = {
  selectedHabitat: "garden",
  selectedAnimals: ["butterfly", "bee", "flower", "ladybug"],
  randomizeAnimals: true,
  numberRange: {
    min: 1,
    max: 10,
  },
  totalLevels: 10,
  totalHearts: 3,
  levelDifficulty: "normal",
}

