const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

let cssSaas = withCSS(withSass());
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
