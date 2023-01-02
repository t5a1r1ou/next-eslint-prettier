module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "sort-keys-custom-order",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-undef": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    // For JS objects sorting
    "sort-keys-custom-order/object-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
