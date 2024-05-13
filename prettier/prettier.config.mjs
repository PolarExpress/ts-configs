/*
 * This program has been developed by students from the bachelor
 * Computer Science at Utrecht University within the Software Project course.
 *
 * © Copyright Utrecht University
 * (Department of Information and Computing Sciences)
 */

export default config = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "avoid",
  endOfLine: "lf",

  plugins: ["prettier-plugin-jsdoc"],
  jsdocCommentLineStrategy: "multiline",
  jsdocDescriptionWithDot: true,
  jsdocSeparateTagGroups: true,
  jsdocVerticalAlignment: true
};