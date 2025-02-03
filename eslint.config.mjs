// .eslintrc.js (フラット設定)

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import pluginReact from "eslint-plugin-react"

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 共通設定
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    rules: {
      semi: ["error", "never"],         // セミコロンを禁止
      "comma-dangle": ["error", "never"], // 末尾カンマを禁止
      "react/react-in-jsx-scope": "off",  // React 17以降のJSXの自動インポート対応
    },
  },
  // JavaScript用の推奨設定を適用
  pluginJs.configs.recommended,

  // TypeScript用の推奨設定を適用
  tseslint.configs.recommended,

  // React用の推奨設定を適用
  pluginReact.configs.recommended,
]
