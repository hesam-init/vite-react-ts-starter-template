/** @type {import('cspell').CSpellUserSettingsWithComments} */

module.exports = {
  version: "0.2",
  language: "en",
  overrides: [
    {
      filename: "**/*.{ts,mts,cts,js,cjs,mjs,tsx,jsx}"
    }
  ],
  ignorePaths: [
    ".vscode/*.json",
    "**/*.{json,svg,log,lock}",
    "**/dist/**",
    "**/node_modules/**",
    "cspell.config.cjs"
  ],
  dictionaryDefinitions: [
    {
      name: "words-list",
      path: "./.cspell/words.txt"
    }
  ],
  dictionaries: ["words-list"],
  flagWords: ["shit"]
};
