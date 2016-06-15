const currency = [
  // Currency Symbols
  "\\$\\u058F\\u060B\\u09F2\\u09F3\\u09FB\\u0AF1",
  "\\u0BF9\\u0E3F\\u17DB\\uA838\\uFDFC\\uFE69",
  "\\uFF04\\uFFE0\\uFFE1\\uFFE5\\uFFE6",
  "\\u20A0-\\u20BD",
  "\\xA2-\\xA5",
].join("");

const prefixCharacters = [
  // Quotes
  "\"",
  "'",
  "`",

  // Brackets
  "<",
  "(",
  "{",
  "\\[",

  currency,
].join("");

const suffixCharacters = [
  // Quotes
  "\"",
  "'",
  "`",

  // Brackets
  ">",
  ")",
  "}",
  "\\]",

  // Punctuation
  ",",
  ".",
  ":",
  ";",
  "!",
  "\\?",

  // Misc
  "%",
  "/",

  currency,
].join("");

const matchRegex = new RegExp(`([${prefixCharacters}]*[^\\b]*?.\\b(?:'\\w)*[${suffixCharacters}]*\\s*)`, "g");

export const splitWordsWithPunctuation =
  text => text.
    replace(/[\n\s\u00A0]+/g, "\u00A0").
    match(matchRegex);
