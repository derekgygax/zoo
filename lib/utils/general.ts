
import { WORDS_EXCLUDED_FROM_TITLE_CASE } from "@/config/constants";
import { SelectorOption } from "@/types/form";

export const capitalizeFirstLetter = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1)
};

export const capitalizeAsTitle = (s: string): string => {
  let words = s.trim().split(/\s+/);
  words = words.map((word: string) => {
    if (WORDS_EXCLUDED_FROM_TITLE_CASE.includes(word.toLowerCase())) {
      return word.toLowerCase();
    } else {
      return capitalizeFirstLetter(word);
    }
  })
  return words.join(" ");
}

export const snakeToTitleCase = (snakeCase: string): string => {
  return snakeCase
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const titleToSnakeCase = (titleCase: string): string => {
  return titleCase
    .replace(/\s+/g, '_')
    .toLowerCase();
};

export const underscoreToSpace = (s: string): string => {
  return s.replace("_", " ");
}

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

