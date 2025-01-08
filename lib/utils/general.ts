
import { SelectorOption } from "@/types/form";

export const capitalizeFirstLetter = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1)
};

export const toSelectorOptions = <T>(
  items: T[],
  valueKey: keyof T,
  labelKey: keyof T
): SelectorOption[] => {
  return items.map((item) => {
    const value = String(item[valueKey]);
    const label =
      typeof item[labelKey] === "string"
        ? capitalizeFirstLetter(item[labelKey] as string)
        : String(item[labelKey]);
    return {
      value: value,
      label: label
    };
  });
};
