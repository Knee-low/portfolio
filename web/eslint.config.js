import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import eslintParserTypeScript from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["**/*.js", ".next/**", "node_modules/**"], // Move ignores to a separate config
  },
  {
    files: ["**/*.{ts,tsx,jsx}"], // Only include these file types
    languageOptions: {
      parser: eslintParserTypeScript,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypeScript,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
