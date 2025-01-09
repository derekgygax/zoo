
// types
// TODO you may need to fix the variable names going all over
// fieldsRequiringDependencies vs fieldsRequiringFetchedData
import { FIELD_REQUIRING_FETCHED_DATA, SelectorOption, FetchDataKey } from "@/types/form";
import { SpecieBase } from "@/types/animals-service";

// config
import { FIELD_REQUIRING_FETCHED_DATA_KEYS } from "@/config/formConfigs";

// server actions
import { getSpecieKeys } from "../../animals-service/specie";
import { toSelectorOptions } from "@/lib/utils/general";


export const FORM_DEPENDENCY_FETCHERS: Record<FIELD_REQUIRING_FETCHED_DATA, () => Promise<string[]>> = {
  [FIELD_REQUIRING_FETCHED_DATA.SPECIE]: getSpecieKeys
}

const getSelectorOptions = async (field: FIELD_REQUIRING_FETCHED_DATA): Promise<SelectorOption[]> => {

  const fetchFunction: () => Promise<string[] | SpecieBase[]> = FORM_DEPENDENCY_FETCHERS[field];
  const fetchDataKeys: FetchDataKey<SpecieBase> = FIELD_REQUIRING_FETCHED_DATA_KEYS[field];

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