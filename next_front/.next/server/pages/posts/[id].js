"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SingleLayout.jsx



const SingleLayout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: children
  });
};

/* harmony default export */ const components_SingleLayout = (SingleLayout);
;// CONCATENATED MODULE: ./pages/posts/[id].jsx




const Post = ({
  result
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  const {
    id
  } = router.query;
  console.log('client side rendering');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_SingleLayout, {
    children: ["# Post ", id, " ", result]
  });
};

async function getServerSideProps({
  req,
  res,
  params
}) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  console.log('server side rendering');
  const {
    id
  } = params; // Pass data to the page via props

  return {
    props: {
      result: id
    }
  };
}
/* harmony default export */ const _id_ = (Post);

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(972));
module.exports = __webpack_exports__;

})();