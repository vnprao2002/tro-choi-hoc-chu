// Game Configuration Types and Defaults
export interface GameConfig {
  // Content settings
  selectedHabitat: string
  selectedAnimals: string[] // Animal IDs to use
  randomizeAnimals: boolean

  // Difficulty settings
  numberRange: {
    min: number
    max: number
  }

  // Gameplay settings
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
