const eslintPluginTypeScript = await import("@typescript-eslint/eslint-plugin");
const eslintParserTypeScript = await import("@typescript-eslint/parser");

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["**/*.js", ".next/**", "node_modules/**"],
  },
  {
    files: ["**/*.{ts,tsx,jsx}"],
    languageOptions: {
      parser: eslintParserTypeScript.default,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypeScript.default,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
