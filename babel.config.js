module.exports = {
  presets: [
    [
      "@babel/env",
      {
        debug: true,
        useBuiltIns: "entry",
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
  ],
};
