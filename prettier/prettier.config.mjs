const config = {
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

export default config;