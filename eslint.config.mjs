import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module", // Permite import/export
      ecmaVersion: "latest" // Asegura compatibilidad con ES6+
    }
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
