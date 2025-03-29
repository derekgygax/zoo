import { AnimalBase, AnimalsInCategory, AnimalBio } from "@/types/animals-service";


export const mockAnimalIdentifiers: AnimalsInCategory[] = [
  {
    "category_name": "Big Cats",
    "animals": [
      { "id": "1", "label": "Simba" },
      { "id": "2", "label": "Rajah" },
      { "id": "3", "label": "Bagheera" }
    ]
  },
  {
    "category_name": "Bears",
    "animals": [
      { "id": "4", "label": "Baloo" },
      { "id": "5", "label": "Yogi" },
      { "id": "6", "label": "Paddington" }
    ]
  },
  {
    "category_name": "Small Mammals",
    "animals": [
      { "id": "7", "label": "Todd" },
      { "id": "8", "label": "Rocket" },
      { "id": "9", "label": "Snowball" }
    ]
  },
  {
    "category_name": "Primates",
    "animals": [
      { "id": "10", "label": "George" },
      { "id": "11", "label": "Clyde" },
      { "id": "12", "label": "Bubbles" }
    ]
  },
  {
    "category_name": "Large Mammals",
    "animals": [
      { "id": "13", "label": "Marty" },
      { "id": "14", "label": "Melman" },
      { "id": "15", "label": "Bucky" },
      { "id": "16", "label": "Dumbo" }
    ]
  }
]

export const mockAnimalBio: Record<string, AnimalBio> = {
  "1": {
    name: "Simba",
    specie_id: "lion-001",
    specie: {
      scientific_name: "Panthera leo",
      common_name: "Lion",
      lifespan: 15,
      diet: "CARNIVORE",
      conservation_status: "VULNERABLE",
      description: "A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa. A large, social wild cat found in Africa."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2012-06-01",
    acquisition_date: "2013-01-15",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/lion.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "personality", "description": "Bold and protective, leads his pride." },
      { "title": "favorite Food", "description": "Prefers fresh antelope and buffalo." },
      { "title": "Fun fact", "description": "His roar can be heard up to 5 miles away." }
    ]
  },
  "2": {
    name: "Rajah",
    specie_id: "tiger-001",
    specie: {
      scientific_name: "Panthera tigris",
      common_name: "Tiger",
      lifespan: 20,
      diet: "CARNIVORE",
      conservation_status: "ENDANGERED",
      description: "A powerful striped big cat native to Asia."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2015-08-21",
    acquisition_date: "2016-02-10",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/tiger.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Independent but playful." },
      { "title": "Favorite Activity", "description": "Loves swimming and playing in water." },
      { "title": "Fun Fact", "description": "Can eat up to 40 pounds of meat in one sitting." }
    ]
  },
  "3": {
    name: "Bagheera",
    specie_id: "leopard-001",
    specie: {
      scientific_name: "Panthera pardus",
      common_name: "Black Leopard",
      lifespan: 12,
      diet: "CARNIVORE",
      conservation_status: "NEAR_THREATENED",
      description: "A melanistic leopard known for its dark coat."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2016-11-05",
    acquisition_date: "2017-07-12",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/black_leopard.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Stealthy and observant, loves solitude." },
      { "title": "Favorite Spot", "description": "Prefers high branches in tall trees." },
      { "title": "Fun Fact", "description": "Can jump over 20 feet in one leap." }
    ]
  },
  "4": {
    name: "Baloo",
    specie_id: "bear-001",
    specie: {
      scientific_name: "Ursus arctos",
      common_name: "Brown Bear",
      lifespan: 25,
      diet: "OMNIVORE",
      conservation_status: "LEAST_CONCERN",
      description: "A large, omnivorous bear found in forests and mountains."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2010-03-14",
    acquisition_date: "2011-06-22",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/brown_bear.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Easygoing and loves to relax." },
      { "title": "Favorite Treat", "description": "Loves honey and fresh berries." },
      { "title": "Fun Fact", "description": "Can run up to 35 mph despite its size." }
    ]
  },
  "5": {
    name: "Yogi",
    specie_id: "bear-002",
    specie: {
      scientific_name: "Ursus americanus",
      common_name: "Black Bear",
      lifespan: 30,
      diet: "OMNIVORE",
      conservation_status: "LEAST_CONCERN",
      description: "A medium-sized bear known for its adaptability."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2013-09-10",
    acquisition_date: "2014-05-18",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/black_bear.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Clever and playful, enjoys exploring." },
      { "title": "Favorite Food", "description": "Eats nuts, fruits, and small mammals." },
      { "title": "Fun Fact", "description": "Can climb trees to escape predators or find food." }
    ]
  },
  "6": {
    name: "Paddington",
    specie_id: "bear-003",
    specie: {
      scientific_name: "Tremarctos ornatus",
      common_name: "Spectacled Bear",
      lifespan: 20,
      diet: "OMNIVORE",
      conservation_status: "VULNERABLE",
      description: "A South American bear with distinctive facial markings."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2017-01-05",
    acquisition_date: "2018-02-22",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/spectacled_bear.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Curious and active, loves climbing." },
      { "title": "Favorite Snack", "description": "Loves munching on bamboo and fruits." },
      { "title": "Fun Fact", "description": "The only bear species native to South America." }
    ]
  },
  "7": {
    name: "Todd",
    specie_id: "fox-001",
    specie: {
      scientific_name: "Vulpes vulpes",
      common_name: "Red Fox",
      lifespan: 10,
      diet: "OMNIVORE",
      conservation_status: "LEAST_CONCERN",
      description: "A small, intelligent canid with a bushy tail."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2019-07-15",
    acquisition_date: "2020-03-11",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/red_fox.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Sly and clever, enjoys sneaky games." },
      { "title": "Favorite Food", "description": "Loves small rodents and berries." },
      { "title": "Fun Fact", "description": "Uses the Earth's magnetic field to hunt prey." }
    ]
  },
  "8": {
    name: "Rocket",
    specie_id: "raccoon-001",
    specie: {
      scientific_name: "Procyon lotor",
      common_name: "Raccoon",
      lifespan: 5,
      diet: "OMNIVORE",
      conservation_status: "LEAST_CONCERN",
      description: "A nocturnal mammal with dexterous hands and a striped tail."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2020-12-01",
    acquisition_date: "2021-06-15",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/raccoon.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Mischievous and always curious." },
      { "title": "Favorite Activity", "description": "Loves washing food in water before eating." },
      { "title": "Fun Fact", "description": "Can open locks and solve puzzles with ease." }
    ]
  },
  "9": {
    name: "Snowball",
    specie_id: "rabbit-001",
    specie: {
      scientific_name: "Oryctolagus cuniculus",
      common_name: "Rabbit",
      lifespan: 9,
      diet: "HERBIVORE",
      conservation_status: "LEAST_CONCERN",
      description: "A small, fast-breeding herbivorous mammal."
    },
    gender: "FEMALE",
    health: "HEALTHY",
    dob: "2021-04-18",
    acquisition_date: "2022-01-02",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/rabbit.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Shy but very fast." },
      { "title": "Favorite Snack", "description": "Loves munching on carrots and lettuce." },
      { "title": "Fun Fact", "description": "Can jump up to 3 feet high." }
    ]
  },
  "10": {
    name: "George",
    specie_id: "monkey-001",
    specie: {
      scientific_name: "Cebus capucinus",
      common_name: "Capuchin Monkey",
      lifespan: 25,
      diet: "OMNIVORE",
      conservation_status: "LEAST_CONCERN",
      description: "A small, intelligent primate known for its curiosity."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2014-03-14",
    acquisition_date: "2015-06-22",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/capuchin_monkey.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Curious and mischievous, always exploring." },
      { "title": "Favorite Food", "description": "Loves bananas, nuts, and insects." },
      { "title": "Fun Fact", "description": "Can use tools to get food." }
    ]
  },
  "11": {
    name: "Clyde",
    specie_id: "orangutan-001",
    specie: {
      scientific_name: "Pongo pygmaeus",
      common_name: "Orangutan",
      lifespan: 50,
      diet: "OMNIVORE",
      conservation_status: "CRITICALLY_ENDANGERED",
      description: "A highly intelligent great ape known for its reddish fur."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2005-09-10",
    acquisition_date: "2006-05-18",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/orangutan.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Gentle and thoughtful, enjoys solving puzzles." },
      { "title": "Favorite Activity", "description": "Loves climbing trees and swinging on vines." },
      { "title": "Fun Fact", "description": "Can make umbrellas out of leaves." }
    ]
  },
  "12": {
    name: "Bubbles",
    specie_id: "chimp-001",
    specie: {
      scientific_name: "Pan troglodytes",
      common_name: "Chimpanzee",
      lifespan: 40,
      diet: "OMNIVORE",
      conservation_status: "ENDANGERED",
      description: "A social and intelligent primate known for tool use."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2010-01-05",
    acquisition_date: "2011-02-22",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/chimpanzee.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Playful and energetic, loves socializing." },
      { "title": "Favorite Game", "description": "Enjoys playing tag with caretakers." },
      { "title": "Fun Fact", "description": "Uses sticks to get termites from holes." }
    ]
  },
  "13": {
    name: "Marty",
    specie_id: "zebra-001",
    specie: {
      scientific_name: "Equus quagga",
      common_name: "Plains Zebra",
      lifespan: 25,
      diet: "HERBIVORE",
      conservation_status: "NEAR_THREATENED",
      description: "A striped horse-like animal native to Africa."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2012-04-15",
    acquisition_date: "2013-07-01",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/zebra.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Energetic and loves running." },
      { "title": "Favorite Activity", "description": "Racing other zebras in the enclosure." },
      { "title": "Fun Fact", "description": "No two zebras have the same stripe pattern." }
    ]
  },
  "14": {
    name: "Melman",
    specie_id: "giraffe-001",
    specie: {
      scientific_name: "Giraffa camelopardalis",
      common_name: "Giraffe",
      lifespan: 30,
      diet: "HERBIVORE",
      conservation_status: "VULNERABLE",
      description: "The tallest land animal, known for its long neck."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2009-06-10",
    acquisition_date: "2010-08-05",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/giraffe.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Calm and gentle, enjoys watching over others." },
      { "title": "Favorite Snack", "description": "Loves eating acacia leaves." },
      { "title": "Fun Fact", "description": "Can run up to 35 mph for short bursts." }
    ]
  },
  "15": {
    name: "Bucky",
    specie_id: "bison-001",
    specie: {
      scientific_name: "Bison bison",
      common_name: "American Bison",
      lifespan: 20,
      diet: "HERBIVORE",
      conservation_status: "NEAR_THREATENED",
      description: "A large, powerful grazing animal native to North America."
    },
    gender: "MALE",
    health: "HEALTHY",
    dob: "2011-03-20",
    acquisition_date: "2012-06-10",
    images: [{
      is_primary: true,
      url: "http://localhost:8300/animals/bison.webp",
      width: 1024,
      height: 1024
    }],
    info: [
      { "title": "Personality", "description": "Strong and independent, but enjoys group time." },
      { "title": "Favorite Pastime", "description": "Rolling in dust to stay cool." },
      { "title": "Fun Fact", "description": "Can jump up to 6 feet vertically despite its size." }
    ]
  },
  "16": {
    "name": "Dumbo",
    "specie_id": "elephant-001",
    "specie": {
      "scientific_name": "Loxodonta africana",
      "common_name": "African Elephant",
      "lifespan": 70,
      "diet": "HERBIVORE",
      "conservation_status": "VULNERABLE",
      "description": "The largest land animal, known for its intelligence and strong social bonds."
    },
    "gender": "MALE",
    "health": "HEALTHY",
    "dob": "2005-05-18",
    "acquisition_date": "2006-09-22",
    "images": [{
      "is_primary": true,
      "url": "http://localhost:8300/animals/elephant.webp",
      width: 1024,
      height: 1024
    }],
    "info": [
      { "title": "Personality", "description": "Gentle giant, highly intelligent and social." },
      { "title": "Favorite Activity", "description": "Loves spraying water and playing in mud." },
      { "title": "Fun Fact", "description": "Can recognize itself in a mirror, showing self-awareness." }
    ]
  }
};



// export const mockAnimalBio: Record<string, AnimalBio> = {
//   "1": {
//     name: "Simba",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Panthera leo",
//       common_name: "Lion",
//       lifespan: 15,
//       diet: "CARNIVORE",
//       conservation_status: "VULNERABLE",
//       description: "A large, social wild cat found in Africa."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2012-06-01",
//     acquisition_date: "2013-01-15",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "2": {
//     name: "Rajah",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Panthera tigris",
//       common_name: "Tiger",
//       lifespan: 20,
//       diet: "CARNIVORE",
//       conservation_status: "ENDANGERED",
//       description: "A powerful striped big cat native to Asia."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2015-08-21",
//     acquisition_date: "2016-02-10",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "3": {
//     name: "Bagheera",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Panthera pardus",
//       common_name: "Black Leopard",
//       lifespan: 12,
//       diet: "CARNIVORE",
//       conservation_status: "NEAR_THREATENED",
//       description: "A melanistic leopard known for its dark coat."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2016-11-05",
//     acquisition_date: "2017-07-12",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "4": {
//     name: "Baloo",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Ursus arctos",
//       common_name: "Brown Bear",
//       lifespan: 25,
//       diet: "OMNIVORE",
//       conservation_status: "LEAST_CONCERN",
//       description: "A large, omnivorous bear found in forests and mountains."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2010-03-14",
//     acquisition_date: "2011-06-22",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "5": {
//     name: "Yogi",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Ursus americanus",
//       common_name: "Black Bear",
//       lifespan: 30,
//       diet: "OMNIVORE",
//       conservation_status: "LEAST_CONCERN",
//       description: "A medium-sized bear known for its adaptability."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2013-09-10",
//     acquisition_date: "2014-05-18",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "6": {
//     name: "Paddington",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Tremarctos ornatus",
//       common_name: "Spectacled Bear",
//       lifespan: 20,
//       diet: "OMNIVORE",
//       conservation_status: "VULNERABLE",
//       description: "A South American bear with distinctive facial markings."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2017-01-05",
//     acquisition_date: "2018-02-22",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "7": {
//     name: "Todd",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Vulpes vulpes",
//       common_name: "Red Fox",
//       lifespan: 10,
//       diet: "OMNIVORE",
//       conservation_status: "LEAST_CONCERN",
//       description: "A small, intelligent canid with a bushy tail."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2019-07-15",
//     acquisition_date: "2020-03-11",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "8": {
//     name: "Rocket",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Procyon lotor",
//       common_name: "Raccoon",
//       lifespan: 5,
//       diet: "OMNIVORE",
//       conservation_status: "LEAST_CONCERN",
//       description: "A nocturnal mammal with dexterous hands and a striped tail."
//     },
//     gender: "MALE",
//     health: "HEALTHY",
//     dob: "2020-12-01",
//     acquisition_date: "2021-06-15",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   },
//   "9": {
//     name: "Snowball",
//     specie_id: "sss",
//     specie: {
//       scientific_name: "Oryctolagus cuniculus",
//       common_name: "Rabbit",
//       lifespan: 9,
//       diet: "HERBIVORE",
//       conservation_status: "LEAST_CONCERN",
//       description: "A small, fast-breeding herbivorous mammal."
//     },
//     gender: "FEMALE",
//     health: "HEALTHY",
//     dob: "2021-04-18",
//     acquisition_date: "2022-01-02",
//     info: [{ "title": "Big Gunner", "description": "ya buddy" }, { "title": "Wet Noodle", "description": "Not so good" }]
//   }
// };



const genusInfo = {
  "primate": {
    "introduction": "Monkeys are intelligent and social primates known for their agility and problem-solving skills. They live in diverse habitats, from dense jungles to open savannas.",
    "habitat_behavior": "Monkeys are highly adaptable, often living in large troops led by a dominant member. They use vocalizations and body language to communicate within their groups.",
    "conservation_threats": "Many monkey species are threatened due to deforestation and illegal pet trade. Conservation efforts focus on habitat protection and reducing human-wildlife conflict."
  },
  "pachyderm": {
    "introduction": "Elephants are the largest land animals, recognized for their intelligence, strong social bonds, and impressive memory. They use their trunks for various tasks, including communication and feeding.",
    "habitat_behavior": "They roam vast territories, often migrating in search of food and water. Matriarch-led herds provide safety and guidance, especially for young calves.",
    "conservation_threats": "Poaching for ivory and habitat loss are major threats to elephant populations. Anti-poaching laws and conservation programs aim to protect them."
  },
  "4": {
    "introduction": "Elephants are gentle giants with strong family connections. They communicate through low-frequency rumbles that can travel long distances.",
    "habitat_behavior": "They thrive in grasslands, forests, and wetlands, using their tusks to dig for water and strip bark from trees. They play a key role in shaping their environment.",
    "conservation_threats": "Deforestation and human-wildlife conflicts have reduced elephant numbers. Conservation groups focus on creating safe migration corridors and preventing poaching."
  },
  "feline": {
    "introduction": "Tigers are powerful and solitary big cats known for their striking orange fur with black stripes. They rely on stealth and strength to hunt prey.",
    "habitat_behavior": "They prefer dense forests and grasslands, where they establish large territories. They are excellent swimmers and often cool off in rivers.",
    "conservation_threats": "Poaching and habitat destruction have drastically reduced tiger populations. Conservation initiatives focus on protecting their natural habitats and preventing illegal trade."
  },
  "reptile": {
    "introduction": "Lizards are cold-blooded reptiles that come in a variety of sizes and colors. They are known for their ability to regenerate lost tails.",
    "habitat_behavior": "They inhabit deserts, forests, and urban areas, often basking in the sun to regulate body temperature. Some species change color for camouflage.",
    "conservation_threats": "Climate change and habitat destruction impact lizard populations. Conservation efforts focus on preserving their natural environments and controlling invasive species."
  }
}


export const mockAnimalsInformation: Map<string, Map<string, string>> = new Map([
  ["1", new Map([
    ["introduction", "Charlie is an energetic and intelligent monkey, known for his playful antics and problem-solving skills. He quickly adapts to new environments and enjoys socializing with other primates."],
    ["habitat_behavior", "He spends most of his time climbing and swinging through trees, using his dexterous hands to grasp branches and forage for food. He enjoys playing with his troop and grooming his companions."],
    ["health_status", "Charlie is in excellent health, maintaining an active lifestyle. Regular check-ups and a balanced diet keep him in peak condition."]
  ])],
  ["2", new Map([
    ["introduction", "Luna is a curious and affectionate monkey with a strong bond to her caretakers. Despite her injury, she remains active and engaged with her surroundings."],
    ["habitat_behavior", "She enjoys exploring her enclosure, using her sharp vision to observe everything around her. She communicates with others using a mix of vocal calls and body language."],
    ["health_status", "Luna is currently recovering from an injury. She receives daily medical care and enrichment activities to keep her mentally and physically stimulated."]
  ])],
  ["3", new Map([
    ["introduction", "Dumbo is a majestic male elephant with a calm and gentle demeanor. His impressive tusks and large ears make him a striking presence in his habitat."],
    ["habitat_behavior", "He enjoys roaming spacious areas, using his trunk to interact with objects and communicate with his herd. He is particularly fond of dust baths and splashing in water."],
    ["health_status", "Dumbo is in excellent health, with a strong appetite and regular exercise. His caretakers monitor his diet and provide veterinary care to maintain his well-being."]
  ])],
  ["4", new Map([
    ["introduction", "Bessie is a wise and nurturing female elephant who has been a part of the sanctuary for years. She plays an important role in guiding younger elephants."],
    ["habitat_behavior", "She prefers slow, steady walks and enjoys grazing on fresh vegetation. She often communicates with deep rumbles and gentle trunk touches."],
    ["health_status", "Bessie has been feeling unwell and is currently receiving treatment for her illness. Her caretakers ensure she gets the necessary care and rest to recover."]
  ])],
  ["5", new Map([
    ["introduction", "Bruce is a powerful and observant tiger, known for his stealth and strength. He is a skilled hunter and enjoys exploring his territory."],
    ["habitat_behavior", "He spends his time patrolling his enclosure, marking his territory, and resting in shaded areas. He enjoys swimming in the water on hot days."],
    ["health_status", "Bruce is currently under observation due to recent changes in his behavior. His caretakers are closely monitoring his condition to ensure his well-being."]
  ])],
  ["6", new Map([
    ["introduction", "Sasha is a graceful and independent female tiger with a striking coat of orange and black stripes. She has a keen sense of awareness and enjoys her solitude."],
    ["habitat_behavior", "She prefers quiet corners where she can watch over her surroundings. She is a strong and agile jumper, often seen leaping onto elevated platforms."],
    ["health_status", "Sasha is in perfect health, maintaining a strong physique through regular exercise and a protein-rich diet."]
  ])],
  ["7", new Map([
    ["introduction", "Ed is a fascinating lizard with a unique asexual reproduction ability. His vibrant scales and quick movements make him an interesting reptile to observe."],
    ["habitat_behavior", "He enjoys basking under heat lamps and occasionally burrowing into soft sand. He is an expert at camouflaging with his surroundings."],
    ["health_status", "Ed is currently recovering from an illness. His diet and environment are being carefully adjusted to support his healing process."]
  ])]
]);
