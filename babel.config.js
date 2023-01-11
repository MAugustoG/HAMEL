module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@dtos": "./src/dtos",
            "@routes": "./src/routes",
            "@styles": "./src/styles",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
            "@utils": "./src/shared/utils",
            "@hooks": "./src/shared/hooks",
            "@assets": "./src/shared/assets",
            "@components": "./src/shared/components",
          },
        },
      ],
    ],
  };
};
