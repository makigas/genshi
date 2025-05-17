/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-property-sort-order-smacss"],
  plugins: ["stylelint-prettier", "stylelint-order"],
  rules: {
    "prettier/prettier": true,
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*|Genshi([A-Z])([A-Za-z0-9]*)$",
      {
        message: "Expected class selector to be kebab-case",
      },
    ],
  },
};
