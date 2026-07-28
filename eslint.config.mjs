import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      "storybook-static/",
      ".ondevice/storybook.requires*",
      "graphify-out/",
      "handover-output/",
    ],
  },
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    rules: {
      // ponytail: lenient baseline so the existing 171 files pass — promote warns to errors as follow-up
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/static-components": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      // require() is the React Native asset idiom
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // hooks inside story render functions are standard Storybook practice
    files: ["**/*.stories.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
);
