const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

let exports1 = withCSS(withSass());
let exports2 = {
  // assetPrefix: "/golang-cheat-sheet/"
};

let exports3 = {
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/gorm": { page: "/gorm" }
      // "/post/:id": { page: "/post", id: { id } }
    };
  }
};
module.exports = { ...exports1, ...exports2, ...exports3 };
