module.exports = (api) => {
    api.cache(true);
    return {
      presets: [
        "@babel/preset-env",
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
        "@babel/preset-typescript",
      ],
      plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
      ],
      env: {
        build: {
          ignore: [
            "**/*.test.tsx",
            "**/*.test.js",
            "**/*.story.tsx",
            "__snapshots__",
            "__tests__",
            "__stories__",
          ],
        },
      },
      ignore: ["node_modules"],
      babelrcRoots: [".", "./packages/**/*"],
    };
  };
  