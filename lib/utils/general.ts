
import { SelectorOption } from "@/types/form";

export const capitalizeFirstLetter = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1)
};

export const toSelectorOptions = <T>(
  field: string,
  items: T[] | string[],
  valueKey: keyof T,
  labelKey?: keyof T,
  labelFormatter?: (item: T) => string
): SelectorOption[] => {
  return items.map((item) => {
    if (typeof item === "string") {
      // Handle string[] case
      return {
        value: item,
        label: capitalizeFirstLetter(item),
      };
    } else if (labelFormatter) {
      return {
        value: item[valueKey] !== undefined ? String(item[valueKey]) : "",
        label: labelFormatter(item)
      }
    } else if (valueKey && labelKey) {
      // Handle T[] case with valid valueKey and labelKey
      const value = item[valueKey] !== undefined ? String(item[valueKey]) : "";
      const label =
        item[labelKey] !== undefined
          ? typeof item[labelKey] === "string"
            ? capitalizeFirstLetter(item[labelKey] as string)
            : String(item[labelKey])
          : "";
      return {
        value,
        label,
      };
    } else {
      throw new Error(
        `Missing valueKey or labelKey for non-string items in toSelectorOptions for '${field}'`
      );
    }
  });
};

