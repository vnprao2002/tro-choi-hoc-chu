import { BACKGROUND_ASSETS, ANIMAL_ASSETS } from "@/lib/kids-counting/data/assets"

export type HabitatType =
  | "garden"
  | "forest"
  | "sea"
  | "mountain"
  | "farm"
  | "house"
  | "desert"
  | "jungle"
  | "snow"

export type MovementType = "air" | "land" | "water"

export interface AnimalData {
  id: string
  nameVi: string
  nameEn: string
  habitat: HabitatType
  imagePath: string
  movementType?: MovementType
}

export interface HabitatData {
  id: HabitatType
  nameVi: string
  nameEn: string
  backgroundImagePath: string
  animalIds: string[]
  displayColor: string
}

export const ANIMAL_POOL: Record<string, AnimalData> = {
  // ===== Garden =====
  butterfly: {
    id: "butterfly",
    nameVi: "Bướm",
    nameEn: "Butterfly",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.butterfly,
    movementType: "air",
  },
  bee: {
    id: "bee",
    nameVi: "Ong",
    nameEn: "Bee",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.bee,
    movementType: "air",
  },
  ladybug: {
    id: "ladybug",
    nameVi: "Bọ rùa",
    nameEn: "Ladybug",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.ladybug,
    movementType: "air",
  },
  garden_bird: {
    id: "garden_bird",
    nameVi: "Chim",
    nameEn: "Bird",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.bird,
    movementType: "air",
  },
  snail: {
    id: "snail",
    nameVi: "Ốc sên",
    nameEn: "Snail",
    habitat: "garden",
    imagePath: ANIMAL_ASSETS.snail,
    movementType: "land",
  },

  // ===== Forest =====
  squirrel: {
    id: "squirrel",
    nameVi: "Sóc",
    nameEn: "Squirrel",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.squirrel,
    movementType: "land",
  },
  deer: {
    id: "deer",
    nameVi: "Nai",
    nameEn: "Deer",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.deer,
    movementType: "land",
  },
  rabbit: {
    id: "rabbit",
    nameVi: "Thỏ",
    nameEn: "Rabbit",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.rabbit,
    movementType: "land",
  },
  bird: {
    id: "bird",
    nameVi: "Chim",
    nameEn: "Bird",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.bird,
    movementType: "air",
  },
  owl: {
    id: "owl",
    nameVi: "Cú mèo",
    nameEn: "Owl",
    habitat: "forest",
    imagePath: ANIMAL_ASSETS.owl,
    movementType: "air",
  },

  // ===== Sea =====
  fish: {
    id: "fish",
    nameVi: "Cá",
    nameEn: "Fish",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.fish,
    movementType: "water",
  },
  octopus: {
    id: "octopus",
    nameVi: "Bạch tuộc",
    nameEn: "Octopus",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.octopus,
    movementType: "water",
  },
  turtle: {
    id: "turtle",
    nameVi: "Rùa",
    nameEn: "Turtle",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.turtle,
    movementType: "water",
  },
  whale: {
    id: "whale",
    nameVi: "Cá voi",
    nameEn: "Whale",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.whale,
    movementType: "water",
  },
  dolphin: {
    id: "dolphin",
    nameVi: "Cá heo",
    nameEn: "Dolphin",
    habitat: "sea",
    imagePath: ANIMAL_ASSETS.dolphin,
    movementType: "water",
  },

  // ===== Mountain =====
  bear: {
    id: "bear",
    nameVi: "Gấu",
    nameEn: "Bear",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.bear,
    movementType: "land",
  },
  eagle: {
    id: "eagle",
    nameVi: "Đại bàng",
    nameEn: "Eagle",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.eagle,
    movementType: "air",
  },
  wolf: {
    id: "wolf",
    nameVi: "Sói",
    nameEn: "Wolf",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.wolf,
    movementType: "land",
  },
  goat: {
    id: "goat",
    nameVi: "Dê",
    nameEn: "Goat",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.goat,
    movementType: "land",
  },
  mountain_bird: {
    id: "mountain_bird",
    nameVi: "Chim núi",
    nameEn: "Mountain Bird",
    habitat: "mountain",
    imagePath: ANIMAL_ASSETS.bird,
    movementType: "air",
  },

  // ===== Farm =====
  cow: {
    id: "cow",
    nameVi: "Bò",
    nameEn: "Cow",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.cow,
    movementType: "land",
  },
  pig: {
    id: "pig",
    nameVi: "Lợn",
    nameEn: "Pig",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.pig,
    movementType: "land",
  },
  chicken: {
    id: "chicken",
    nameVi: "Gà",
    nameEn: "Chicken",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.chicken,
    movementType: "land",
  },
  horse: {
    id: "horse",
    nameVi: "Ngựa",
    nameEn: "Horse",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.horse,
    movementType: "land",
  },
  duck: {
    id: "duck",
    nameVi: "Vịt",
    nameEn: "Duck",
    habitat: "farm",
    imagePath: ANIMAL_ASSETS.duck,
    movementType: "water",
  },

  // ===== House =====
  cat: {
    id: "cat",
    nameVi: "Mèo",
    nameEn: "Cat",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.cat,
    movementType: "land",
  },
  dog: {
    id: "dog",
    nameVi: "Chó",
    nameEn: "Dog",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.dog,
    movementType: "land",
  },
  hamster: {
    id: "hamster",
    nameVi: "Chuột hamster",
    nameEn: "Hamster",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.hamster,
    movementType: "land",
  },
  parrot: {
    id: "parrot",
    nameVi: "Vẹt",
    nameEn: "Parrot",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.parrot,
    movementType: "air",
  },
  goldfish: {
    id: "goldfish",
    nameVi: "Cá vàng",
    nameEn: "Goldfish",
    habitat: "house",
    imagePath: ANIMAL_ASSETS.fish,
    movementType: "water",
  },

  // ===== Desert (friendly) =====
  camel: {
    id: "camel",
    nameVi: "Lạc đà",
    nameEn: "Camel",
    habitat: "desert",
    imagePath: ANIMAL_ASSETS.camel,
    movementType: "land",
  },
  lizard: {
    id: "lizard",
    nameVi: "Thằn lằn",
    nameEn: "Lizard",
    habitat: "desert",
    imagePath: ANIMAL_ASSETS.lizard,
    movementType: "land",
  },
  fennec_fox: {
    id: "fennec_fox",
    nameVi: "Cáo sa mạc",
    nameEn: "Fennec Fox",
    habitat: "desert",
    imagePath: ANIMAL_ASSETS.fennecFox,
    movementType: "land",
  },
  desert_bird: {
    id: "desert_bird",
    nameVi: "Chim sa mạc",
    nameEn: "Desert Bird",
    habitat: "desert",
    imagePath: ANIMAL_ASSETS.bird,
    movementType: "air",
  },
  scorpion: {
    id: "scorpion",
    nameVi: "Bọ cạp",
    nameEn: "Scorpion",
    habitat: "desert",
    imagePath: ANIMAL_ASSETS.scorpion,
    movementType: "land",
  },

  // ===== Jungle =====
  jungle_butterfly: {
    id: "jungle_butterfly",
    nameVi: "Bướm rừng nhiệt đới",
    nameEn: "Jungle Butterfly",
    habitat: "jungle",
    imagePath: ANIMAL_ASSETS.butterfly,
    movementType: "air",
  },
  jungle_bird: {
    id: "jungle_bird",
    nameVi: "Chim rừng nhiệt đới",
    nameEn: "Jungle Bird",
    habitat: "jungle",
    imagePath: ANIMAL_ASSETS.bird,
    movementType: "air",
  },
  jungle_squirrel: {
    id: "jungle_squirrel",
    nameVi: "Sóc rừng nhiệt đới",
    nameEn: "Jungle Squirrel",
    habitat: "jungle",
    imagePath: ANIMAL_ASSETS.squirrel,
    movementType: "land",
  },
  jungle_deer: {
    id: "jungle_deer",
    nameVi: "Nai rừng nhiệt đới",
    nameEn: "Jungle Deer",
    habitat: "jungle",
    imagePath: ANIMAL_ASSETS.deer,
    movementType: "land",
  },
  jungle_rabbit: {
    id: "jungle_rabbit",
    nameVi: "Thỏ rừng nhiệt đới",
    nameEn: "Jungle Rabbit",
    habitat: "jungle",
    imagePath: ANIMAL_ASSETS.rabbit,
    movementType: "land",
  },

  // ===== Snow =====
  snow_bear: {
    id: "snow_bear",
    nameVi: "Gấu tuyết",
    nameEn: "Snow Bear",
    habitat: "snow",
    imagePath: ANIMAL_ASSETS.bear,
    movementType: "land",
  },
  snow_wolf: {
    id: "snow_wolf",
    nameVi: "Sói tuyết",
    nameEn: "Snow Wolf",
    habitat: "snow",
    imagePath: ANIMAL_ASSETS.wolf,
    movementType: "land",
  },
  snow_rabbit: {
    id: "snow_rabbit",
    nameVi: "Thỏ tuyết",
    nameEn: "Snow Rabbit",
    habitat: "snow",
    imagePath: ANIMAL_ASSETS.rabbit,
    movementType: "land",
  },
  snow_bird: {
    id: "snow_bird",
    nameVi: "Chim tuyết",
    nameEn: "Snow Bird",
    habitat: "snow",
    imagePath: ANIMAL_ASSETS.bird,
    movementType: "air",
  },
  snow_goat: {
    id: "snow_goat",
    nameVi: "Dê núi tuyết",
    nameEn: "Snow Goat",
    habitat: "snow",
    imagePath: ANIMAL_ASSETS.goat,
    movementType: "land",
  },
}

export const HABITAT_POOL: Record<HabitatType, HabitatData> = {
  garden: {
    id: "garden",
    nameVi: "Khu Vườn",
    nameEn: "Garden",
    backgroundImagePath: BACKGROUND_ASSETS.garden,
    animalIds: ["butterfly", "bee", "ladybug", "garden_bird", "snail"],
    displayColor: "from-yellow-100 to-green-100",
  },
  forest: {
    id: "forest",
    nameVi: "Khu Rừng",
    nameEn: "Forest",
    backgroundImagePath: BACKGROUND_ASSETS.forest,
    animalIds: ["squirrel", "deer", "rabbit", "bird", "owl"],
    displayColor: "from-green-100 to-emerald-100",
  },
  sea: {
    id: "sea",
    nameVi: "Biển",
    nameEn: "Sea",
    backgroundImagePath: BACKGROUND_ASSETS.sea,
    animalIds: ["fish", "octopus", "turtle", "whale", "dolphin"],
    displayColor: "from-blue-100 to-cyan-100",
  },
  mountain: {
    id: "mountain",
    nameVi: "Núi",
    nameEn: "Mountain",
    backgroundImagePath: BACKGROUND_ASSETS.mountain,
    animalIds: ["bear", "eagle", "wolf", "goat", "mountain_bird"],
    displayColor: "from-gray-100 to-slate-100",
  },
  farm: {
    id: "farm",
    nameVi: "Trang Trại",
    nameEn: "Farm",
    backgroundImagePath: BACKGROUND_ASSETS.farm,
    animalIds: ["cow", "pig", "chicken", "horse", "duck"],
    displayColor: "from-orange-100 to-red-100",
  },
  house: {
    id: "house",
    nameVi: "Nhà",
    nameEn: "House",
    backgroundImagePath: BACKGROUND_ASSETS.house,
    animalIds: ["cat", "dog", "hamster", "parrot", "goldfish"],
    displayColor: "from-pink-100 to-purple-100",
  },
  desert: {
    id: "desert",
    nameVi: "Sa Mạc",
    nameEn: "Desert",
    backgroundImagePath: BACKGROUND_ASSETS.desert,
    animalIds: ["camel", "lizard", "fennec_fox", "desert_bird", "scorpion"],
    displayColor: "from-yellow-100 to-orange-100",
  },
  jungle: {
    id: "jungle",
    nameVi: "Rừng Nhiệt Đới",
    nameEn: "Jungle",
    backgroundImagePath: BACKGROUND_ASSETS.jungle,
    animalIds: ["jungle_butterfly", "jungle_bird", "jungle_squirrel", "jungle_deer", "jungle_rabbit"],
    displayColor: "from-green-100 to-lime-100",
  },
  snow: {
    id: "snow",
    nameVi: "Vùng Tuyết",
    nameEn: "Snow Land",
    backgroundImagePath: BACKGROUND_ASSETS.snow,
    animalIds: ["snow_bear", "snow_wolf", "snow_rabbit", "snow_bird", "snow_goat"],
    displayColor: "from-slate-100 to-blue-100",
  },
}
