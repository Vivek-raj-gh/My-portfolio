import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "coverage"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // 0-hardcoded guard: block literal URLs and personal contact literals
      // anywhere except the data directory. Config values live in src/data.
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Literal[value=/^https?:\\/\\//]",
          message:
            "No hardcoded URLs in code. Put external links in src/data/*.ts and reference them by key.",
        },
        {
          selector:
            "Literal[value=/^mailto:/]",
          message:
            "No hardcoded mailto links in code. Configure the email in src/data/profile.ts.",
        },
      ],
    },
  },
  {
    files: ["src/data/**/*.ts"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
);