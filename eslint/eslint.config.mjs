/*
 * This program has been developed by students from the bachelor
 * Computer Science at Utrecht University within the Software Project course.
 *
 * © Copyright Utrecht University
 * (Department of Information and Computing Sciences)
 */

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import copyrightPlugin from "./copyright.mjs";

const compat = new FlatCompat();

export default tseslint.config(
  {
    ignores: ["**/*.config.*"],
    plugins: { custom: copyrightPlugin },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends(
    "plugin:sonarjs/recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/strict"
  ),
  {
    rules: {
      "custom/enforce-copyright-comment": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["camelCase"],
          leadingUnderscore: "allow",
          selector: "default",
          trailingUnderscore: "allow"
        },
        {
          format: ["camelCase"],
          selector: "import"
        },
        {
          format: ["camelCase"],
          leadingUnderscore: "allow",
          selector: "variable",
          trailingUnderscore: "allow"
        },
        {
          format: ["PascalCase"],
          selector: "typeLike"
        },
        {
          format: null,
          selector: "objectLiteralProperty"
        },
        {
          format: ["UPPER_CASE"],
          selector: "enumMember"
        }
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "camelCase"
        }
      ],
      "unicorn/no-array-callback-reference": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            e: false,
            i: false // "e" and "i" are industry standard.
          }
        }
      ]
    }
  },
  {
    ignores: [
      "build",
      "data",
      "load_addons.js",
      "addons",
      "coverage",
      "**/*.config.*"
    ]
  }
);