import { SERVICE } from "./master"

// TODO maybe you can combine the two
// but wait until the code matures a bit more

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
    },
    [SERVICE.FOOD]: {
      index: `${STAFF_INDEX[SERVICE.FOOD]}`,
    },
    [SERVICE.ENCLOSURES]: {
      index: `${STAFF_INDEX[SERVICE.ENCLOSURES]}`,
    },
    [SERVICE.STAFF]: {
      index: `${STAFF_INDEX[SERVICE.STAFF]}`,
    }
  }
};