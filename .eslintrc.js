module.exports = {
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: 2017,
      sourceType: "module",
      ecmaFeatures: {
         globalReturn: false,
         impliedStrict: true,
         jsx: false
      },
      tsconfigRootDir: __dirname,
      project: "./tsconfig.json"
   },
   plugins: [
      "@typescript-eslint",
      "functional"
   ],
   extends: [
      "@autumnblaze/eslint-config-h",
      "plugin:functional/recommended"
   ],
   env: {
      node: true
   },
   rules: {
      "@typescript-eslint/no-type-alias": "off",
      "@typescript-eslint/init-declarations": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/restrict-plus-operands": "off"
   }
};
