import { SERVICE } from "./master"


// TODO this is done gross as fuck!!
// TODO this is done gross as fuck!!
// TODO this is done gross as fuck!!
// TODO this is done gross as fuck!!
// fix it!!

const STAFF_INDEX = {
  [SERVICE.ANIMALS]: `/staff/${SERVICE.ANIMALS}`,
  [SERVICE.ENCLOSURES]: `/staff/${SERVICE.ENCLOSURES}`,
  [SERVICE.FOOD]: `/staff/${SERVICE.FOOD}`,
  [SERVICE.BREEDING]: `/staff/${SERVICE.BREEDING}`,
  [SERVICE.STAFF]: `/staff/${SERVICE.STAFF}`,
  [SERVICE.REPORTS]: `/staff/${SERVICE.REPORTS}`
}

export const SITE_URLS = {
  staff: {
    index: "/staff",
    [SERVICE.ANIMALS]: {
      index: `${STAFF_INDEX[SERVICE.ANIMALS]}`,
      add_animal: `${STAFF_INDEX[SERVICE.ANIMALS]}/add-animal`,
      update_animal: `${STAFF_INDEX[SERVICE.ANIMALS]}/update-animal`,
      add_specie: `${STAFF_INDEX[SERVICE.ANIMALS]}/add-specie`,
      update_specie: `${STAFF_INDEX[SERVICE.ANIMALS]}/update-specie`
    },
    [SERVICE.FOOD]: {
      index: `${STAFF_INDEX[SERVICE.FOOD]}`,
      addStorageUnitType: `${STAFF_INDEX[SERVICE.FOOD]}/add-storage-unit-type`,
      addStorageUnit: `${STAFF_INDEX[SERVICE.FOOD]}/add-storage-unit`,
      addFoodType: `${STAFF_INDEX[SERVICE.FOOD]}/add-food-type`,
      addFoodStock: `${STAFF_INDEX[SERVICE.FOOD]}/add-food-stock `,
    },
    [SERVICE.ENCLOSURES]: {
      index: `${STAFF_INDEX[SERVICE.ENCLOSURES]}`,
      add_enclosure_type: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/add-enclosure-type`,
      update_enclosure_type: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/update-enclosure-type`,
      add_enclosure: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/add-enclosure`,
      update_enclosure: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/update-enclosure`
    }
  }
};