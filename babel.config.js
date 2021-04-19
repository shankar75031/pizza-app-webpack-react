module.exports = {
  plugins: [
    // Stage 2
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-proposal-json-strings",
  ],
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: ["> 1%", "last 2 versions"],
        },
      },
    ],
    "@babel/preset-stage-2",
    "@babel/preset-react",
  ],
};
