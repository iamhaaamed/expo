module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],

    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["react-native-reanimated/plugin"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            constants: "./src/constants",
            GraphQl: "./src/GraphQl",
            helpers: "./src/helpers",
            hooks: "./src/hooks",
            screens: "./src/screens",
            services: "./src/services",
            store: "./src/store",
            utils: "./src/utils",
            values: "./src/values",
            verifySpeech: "./src/verifySpeech",
          },
        },
      ],
    ],
  };
};
