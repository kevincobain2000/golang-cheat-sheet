const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

let exports1 = withCSS(withSass());
let exports2 = {
  // assetPrefix: "/list-of-anything/"
};

let exports3 = {
  exportPathMap: () => {
    return {
      "/": { page: "/" }
      // "/post/:id": { page: "/post", id: { id } }
    };
  }
};
module.exports = { ...exports1, ...exports2, ...exports3 };
