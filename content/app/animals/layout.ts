import { AnimalBase, ModelIdentifier } from "@/types/animals-service";


export const mockAnimalIdentifiers: { genus: string; animals: ModelIdentifier[] }[] = [
  {
    genus: "primate",
    animals: [
      {
        label: "Charlie",
        id: "1",
      },
      {
        label: "Luna",
        id: "2",
      },
    ],
  },
  {
    genus: "pachyderm",
    animals: [
      {
        label: "Dumbo",
        id: "3",
      },
      {
        label: "Bessie",
        id: "4",
      },
    ],
  },
  {
    genus: "feline",
    animals: [
      {
        label: "Bruce",
        id: "5",
      },
      {
        label: "Sasha",
        id: "6",
      },
    ],
  },
  {
    genus: "reptile",
    animals: [
      {
        label: "Ed",
        id: "7",
      },
    ],
  },
];

export const mockAnimals: Record<string, AnimalBase> = {
  "1": {
    name: "Charlie",
    specie_id: "monkey",
    gender: "MALE",
    health: "HEALTHY",
    dob: "2018-06-12",
    acquisition_date: "2019-08-21",
  },
  "2": {
    name: "Luna",
    specie_id: "monkey",
    gender: "FEMALE",
    health: "INJURED",
    dob: "2020-02-14",
    acquisition_date: "2021-03-10",
  },
  "3": {
    name: "Dumbo",
    specie_id: "elephant",
    gender: "MALE",
    health: "HEALTHY",
    dob: "2015-09-05",
    acquisition_date: "2016-11-12",
  },
  "4": {
    name: "Bessie",
    specie_id: "elephant",
    gender: "FEMALE",
    health: "SICK",
    dob: "2013-07-22",
    acquisition_date: "2015-02-19",
  },
  "5": {
    name: "Bruce",
    specie_id: "tiger",
    gender: "MALE",
    health: "UNDER_OBSERVATION",
    dob: "2017-03-15",
    acquisition_date: "2018-06-30",
  },
  "6": {
    name: "Sasha",
    specie_id: "tiger",
    gender: "FEMALE",
    health: "HEALTHY",
    dob: "2019-09-09",
    acquisition_date: "2020-10-20",
  },
  "7": {
    name: "Ed",
    specie_id: "lizard",
    gender: "ASEXUAL",
    health: "RECOVERING",
    dob: "2021-01-10",
    acquisition_date: "2022-03-14",
  }
}


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
