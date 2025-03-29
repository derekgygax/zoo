// This file is for hardcoded defaults


// putting this in forms.ts causes circulare imports
// NOT GOOD
export const FORM_FIELD_DEFAULTS = {
  string: {
    maxLength: 100
  }
}

export const WORDS_EXCLUDED_FROM_TITLE_CASE = [
  "a", "an", "and", "as", "at", "but", "by", "for", "if", "in",
  "nor", "of", "on", "or", "so", "the", "to", "up", "yet", "with"
];
