module.exports = {
  style: {
    postcss: {
      mode: "file",
    },
  },
  // So we can import the tailwind.dist.css file from our design system through yarn link
  webpack: {
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
  },
};
