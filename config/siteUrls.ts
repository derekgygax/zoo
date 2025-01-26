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

// TODO you don't need the form name url because you
// build it dynamically everywhere
// so now maybe you can combine above and this one
// but maybe do more first and see
// But ya, you can NOT have the FORM_NAME in here
// it causes circulare dependencies
export const SITE_URLS = {
  staff: {
    index: "/staff",
    [SERVICE.ANIMALS]: {
      index: `${STAFF_INDEX[SERVICE.ANIMALS]}`,
      // add_animal: `${STAFF_INDEX[SERVICE.ANIMALS]}/${FORM_NAME.ADD_ANIMAL}`,
      // update_animal: `${STAFF_INDEX[SERVICE.ANIMALS]}/${FORM_NAME.UPDATE_ANIMAL}`,
      // add_specie: `${STAFF_INDEX[SERVICE.ANIMALS]}/${FORM_NAME.ADD_SPECIE}`,
      // update_specie: `${STAFF_INDEX[SERVICE.ANIMALS]}/${FORM_NAME.UPDATE_SPECIE}`
    },
    [SERVICE.FOOD]: {
      index: `${STAFF_INDEX[SERVICE.FOOD]}`,
      // addStorageUnitType: `${STAFF_INDEX[SERVICE.FOOD]}/${FORM_NAME.ADD_STORAGE_UNIT_TYPE}`,
      // addStorageUnit: `${STAFF_INDEX[SERVICE.FOOD]}/${FORM_NAME.ADD_STORAGE_UNIT}`,
      // addFoodType: `${STAFF_INDEX[SERVICE.FOOD]}/${FORM_NAME.ADD_FOOD_TYPE}`,
      // addFoodStock: `${STAFF_INDEX[SERVICE.FOOD]}/${FORM_NAME.ADD_FOOD_STOCK}`,
    },
    [SERVICE.ENCLOSURES]: {
      index: `${STAFF_INDEX[SERVICE.ENCLOSURES]}`,
      // add_enclosure_type: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/${FORM_NAME.ADD_ENCLOSURE_TYPE}`,
      // update_enclosure_type: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/${FORM_NAME.UPDATE_ENCLOSURE_TYPE}`,
      // add_enclosure: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/${FORM_NAME.ADD_ENCLOSURE}`,
      // update_enclosure: `${STAFF_INDEX[SERVICE.ENCLOSURES]}/${FORM_NAME.UPDATE_ENCLOSURE}`
    },
    [SERVICE.STAFF]: {
      index: `${STAFF_INDEX[SERVICE.STAFF]}`,
      // add_staff: `${STAFF_INDEX[SERVICE.STAFF]}/${FORM_NAME.ADD_STAFF}`
    }
  }
};