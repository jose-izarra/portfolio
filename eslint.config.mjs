import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  globalIgnores(["dist/**", ".vercel/**"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [reactHooks.configs.flat["recommended-latest"], reactRefresh.configs.vite],
    plugins: { "jsx-a11y": jsxA11y },
    languageOptions: { globals: globals.browser },
    rules: {
      // Same jsx-a11y subset that eslint-config-next enabled
      "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      // Frontend and API are separate environments
      "no-restricted-imports": ["error", { patterns: ["**/api/**"] }],
    },
  },
  {
    files: ["api/**/*.ts", "vite.config.ts", "vite-plugins/**/*.ts"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["api/**/*.ts"],
    rules: {
      "no-restricted-imports": ["error", { patterns: ["@/*", "**/src/**"] }],
    },
  },
  eslintPluginPrettierRecommended,
]);

export default eslintConfig;
