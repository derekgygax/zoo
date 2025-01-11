"use server"

// master config
import { FIELD_REQUIRING_FETCHED_DATA } from "@/config/master";

// config
import { FIELD_REQUIRING_FETCHED_DATA_KEYS } from "@/config/formConfigs";

// types
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
import { SelectorOption, FetchDataKey } from "@/types/form";

// utiles
import { toSelectorOptions } from "@/lib/utils/general";

// server actions
import { getSpecieKeys } from "../../animals-service/specie";
import { getEnclosureTypeKeys } from "../../enclosures-service/enclosure-types";

// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!
// You have given all fucks about typing here and its needs to be improved
// things have gotten out of hand with the config too and cause all sorts of shit
// fucking fix it!!


const FORM_DEPENDENCY_FETCHERS: Record<FIELD_REQUIRING_FETCHED_DATA, () => Promise<unknown[]>> = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: getSpecieKeys,
  [FIELD_REQUIRING_FETCHED_DATA.ENCLOSURE_TYPE]: getEnclosureTypeKeys
}

const getSelectorOptions = async <T>(
  field: FIELD_REQUIRING_FETCHED_DATA
): Promise<SelectorOption[]> => {

  const fetchFunction = FORM_DEPENDENCY_FETCHERS[field] as () => Promise<T[]>;
  const fetchDataKeys: FetchDataKey<T> = FIELD_REQUIRING_FETCHED_DATA_KEYS[field] as FetchDataKey<T>;

  const options = await fetchFunction();

  let selectorOptions: SelectorOption[] = [];
  try {
    selectorOptions = toSelectorOptions(
      field,
      options,
      fetchDataKeys.value,
      fetchDataKeys.label
    );
  } catch (err) {
    console.error(`Unable to build the selector options for ${field}`)
    console.error(err);
  }

  return selectorOptions;

}

// make it consistent ... BUT not for now, do that when it becomes a problem
export const fetchFormDependencies = async (
  fieldsRequiringDependencies: FIELD_REQUIRING_FETCHED_DATA[]
): Promise<Record<FIELD_REQUIRING_FETCHED_DATA, SelectorOption[]>> => {

  // pre populate the selectorsOptions
  // with the required keys
  const selectorsOptions = Object.fromEntries(
    Object.values(FIELD_REQUIRING_FETCHED_DATA).map((key) => {
      return [key, []];
    })
  ) as unknown as Record<FIELD_REQUIRING_FETCHED_DATA, SelectorOption[]>;



  // const selectorsOptions: Record<FIELD_REQUIRING_FETCHED_DATA, SelectorOption[]> = {};
  for (const field of fieldsRequiringDependencies) {
    selectorsOptions[field] = await getSelectorOptions(field);
  }


  return selectorsOptions;
}