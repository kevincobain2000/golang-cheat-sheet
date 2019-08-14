const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

let cssSaas = withCSS(withSass());
let assetsPrefix = {
  assetPrefix: process.env.ASSET_PREFIX || "/"
};

let routePaths = {
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/gorm": { page: "/gorm" }
    };
  }
};
module.exports = { ...cssSaas, ...assetsPrefix, ...routePaths };
