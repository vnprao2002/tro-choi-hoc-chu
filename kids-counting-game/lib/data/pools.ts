// Data Layer - Habitat and Animal Pool
// Pure data definitions with image paths from Asset Layer

import { BACKGROUND_ASSETS, ANIMAL_ASSETS } from "@/lib/data/assets"

export type HabitatType = "garden" | "forest" | "sea" | "mountain" | "farm" | "house"

export interface AnimalData {
  id: string
  nameVi: string
  nameEn: string
  habitat: HabitatType
  imagePath: string
}

export interface HabitatData {
  id: HabitatType
  nameVi: string
  nameEn: string
  backgroundImagePath: string
  animalIds: string[]
  displayColor: string // Pastel color for UI
}

// Animal Pool - All animals with their image paths
export const ANIMAL_POOL: Record<string, AnimalData> = {
  butterfly: {
    id: "butterfly",
    nameVi: "Bướm",
    nameEn: "Butterfly",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.butterfly,
  },
  bee: {
    id: "bee",
    nameVi: "Ong",
    nameEn: "Bee",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.bee,
  },
  flower: {
    id: "flower",
    nameVi: "Hoa",
    nameEn: "Flower",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.flower,
  },
  ladybug: {
    id: "ladybug",
    nameVi: "Bọ rùa",
    nameEn: "Ladybug",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.ladybug,
  },
  squirrel: {
    id: "squirrel",
    nameVi: "Sóc",
    nameEn: "Squirrel",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.squirrel,
  },
  deer: {
    id: "deer",
    nameVi: "Nai",
    nameEn: "Deer",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.deer,
  },
  rabbit: {
    id: "rabbit",
    nameVi: "Thỏ",
    nameEn: "Rabbit",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.rabbit,
  },
  bird: {
    id: "bird",
    nameVi: "Chim",
    nameEn: "Bird",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.bird,
  },
  fish: {
    id: "fish",
    nameVi: "Cá",
    nameEn: "Fish",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.fish,
  },
  octopus: {
    id: "octopus",
    nameVi: "Bạch tuộc",
    nameEn: "Octopus",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.octopus,
  },
  turtle: {
    id: "turtle",
    nameVi: "Rùa",
    nameEn: "Turtle",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.turtle,
  },
  whale: {
    id: "whale",
    nameVi: "Cá voi",
    nameEn: "Whale",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.whale,
  },
  bear: {
    id: "bear",
    nameVi: "Gấu",
    nameEn: "Bear",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.bear,
  },
  eagle: {
    id: "eagle",
    nameVi: "Đại bàng",
    nameEn: "Eagle",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.eagle,
  },
  wolf: {
    id: "wolf",
    nameVi: "Sói",
    nameEn: "Wolf",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.wolf,
  },
  goat: {
    id: "goat",
    nameVi: "Dê",
    nameEn: "Goat",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.goat,
  },
  cow: {
    id: "cow",
    nameVi: "Bò",
    nameEn: "Cow",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.cow,
  },
  pig: {
    id: "pig",
    nameVi: "Lợn",
    nameEn: "Pig",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.pig,
  },
  chicken: {
    id: "chicken",
    nameVi: "Gà",
    nameEn: "Chicken",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.chicken,
  },
  horse: {
    id: "horse",
    nameVi: "Ngựa",
    nameEn: "Horse",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.horse,
  },
  cat: {
    id: "cat",
    nameVi: "Mèo",
    nameEn: "Cat",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.cat,
  },
  dog: {
    id: "dog",
    nameVi: "Chó",
    nameEn: "Dog",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.dog,
  },
  hamster: {
    id: "hamster",
    nameVi: "Chuột hamster",
    nameEn: "Hamster",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.hamster,
  },
  parrot: {
    id: "parrot",
    nameVi: "Vẹm",
    nameEn: "Parrot",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.parrot,
  },
}

// Habitat Pool - All habitats with allowed animals
export const HABITAT_POOL: Record<HabitatType, HabitatData> = {
  garden: {
    id: "garden",
    nameVi: "Khu Vườn",
    nameEn: "Garden",
    backgroundImagePath: BACKGROUND_ASSETS.garden,
    animalIds: ["butterfly", "bee", "flower", "ladybug"],
    displayColor: "from-yellow-100 to-green-100",
  },
  forest: {
    id: "forest",
    nameVi: "Khu Rừng",
    nameEn: "Forest",
    backgroundImagePath: BACKGROUND_ASSETS.forest,
    animalIds: ["squirrel", "deer", "rabbit", "bird"],
    displayColor: "from-green-100 to-emerald-100",
  },
  sea: {
    id: "sea",
    nameVi: "Biển",
    nameEn: "Sea",
    backgroundImagePath: BACKGROUND_ASSETS.sea,
    animalIds: ["fish", "octopus", "turtle", "whale"],
    displayColor: "from-blue-100 to-cyan-100",
  },
  mountain: {
    id: "mountain",
    nameVi: "Núi",
    nameEn: "Mountain",
    backgroundImagePath: BACKGROUND_ASSETS.mountain,
    animalIds: ["bear", "eagle", "wolf", "goat"],
    displayColor: "from-gray-100 to-slate-100",
  },
  farm: {
    id: "farm",
    nameVi: "Trang Trại",
    nameEn: "Farm",
    backgroundImagePath: BACKGROUND_ASSETS.farm,
    animalIds: ["cow", "pig", "chicken", "horse"],
    displayColor: "from-orange-100 to-red-100",
  },
  house: {
    id: "house",
    nameVi: "Nhà",
    nameEn: "House",
    backgroundImagePath: BACKGROUND_ASSETS.house,
    animalIds: ["cat", "dog", "hamster", "parrot"],
    displayColor: "from-pink-100 to-purple-100",
  },
}
