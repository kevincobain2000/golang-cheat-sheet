webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MarkdownContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MarkdownContent */ "./components/MarkdownContent.tsx");



var Card = function Card(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.item.subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2 mono"
  }, "(", props.item.title, ")"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, function () {
    if (props.item.subtitle != props.item.subsubtitle) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mono"
      }, props.item.subsubtitle);
    }
  }(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MarkdownContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    raw: props.item.raw
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.7460dcfe3bb992504205.hot-update.js.map