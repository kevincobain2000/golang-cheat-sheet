const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let cssSaas = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "raw-loader"
      });
      if (config.mode === "production") {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
      }
      return config;
    }
  })
);

let assetsPrefix = {
  assetPrefix: process.env.GITHUB_PAGES_PREFIX || "/"
};

let routePaths = {
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/gorm": { page: "/gorm" },
      "/credits": { page: "/credits" }
    };
  }
};
let settings = { ...cssSaas, ...assetsPrefix, ...routePaths };

console.log(settings);
module.exports = settings;
