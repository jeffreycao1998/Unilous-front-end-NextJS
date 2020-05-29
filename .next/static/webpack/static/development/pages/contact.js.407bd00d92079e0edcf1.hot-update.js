webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/contact.module.css */ \"./styles/pages/contact.module.css\");\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ \"./components/Contributer.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Contact = () => {\n  _s();\n\n  const {\n    loading,\n    error,\n    data,\n    fetchMore\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__[\"SOME_USERS\"], {\n    variables: {\n      skip: 0,\n      first: 5\n    }\n  });\n\n  function loadMore(data, fetchMore) {\n    return fetchMore({\n      variables: {\n        skip: data.someUsers.length\n      },\n      updateQuery: (previousResult, {\n        fetchMoreResult\n      }) => {\n        if (!fetMoreResult) {\n          return;\n        }\n      }\n    });\n  }\n\n  if (data && data.someUsers) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }, __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }\n    }, \"Contact | Unilous\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"Contact the Unilous team\",\n      key: \"description\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 21\n      }\n    })), __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }), __jsx(\"ol\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, data.someUsers.map(u => __jsx(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 25\n      }\n    }, __jsx(\"h3\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 29\n      }\n    }, u.username)))), __jsx(\"button\", {\n      onClick: () => loadMore(data, fetchMore),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }\n    }, \"show more\"), __jsx(\"div\", {\n      className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactsContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }\n    }, __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Sebastian Sosa\",\n      link: \"/user/SebastianSosa\",\n      image: \"https://i.imgur.com/zgwIwOS.png\",\n      position: \"Founder, full-stack developer\",\n      phone: \"+1 (786)-270-7297\",\n      email: \"1sebastian1sosa1@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Umyarov Mikhail\",\n      link: \"/user/nesutortik\",\n      image: \"https://images-ext-1.discordapp.net/external/QGS82PyB45LevyTO8rhEeJ7bE-fp2zgNzZNyWWjwmTY/%3Fava%3D1%2C/https/sun9-59.userapi.com/c844720/v844720993/b1248/ttDbUpebJaU.jpg\",\n      position: \"UX\\\\UI designer\",\n      phone: \"+7 (952)-156-9649\",\n      email: \"silverusdragonitos@yandex.ru\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Oliver Fu\",\n      link: \"/user/ofu997\",\n      image: \"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/82568549_10107194006724684_7566546681110462464_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rTPS8BHNVG4AX_bjvT0&_nc_ht=scontent-sjc3-1.xx&oh=3334b94c1b3abe80e2f1219e745b84e1&oe=5EF5CE32\",\n      position: \"Front-end developer\",\n      phone: \"+1 (951)-232-3178\",\n      email: \"ofu997@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 21\n      }\n    })));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    }), __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    }, \"Loading...\"));\n  }\n}; // Contact.getInitialProps = async () => {\n//     const postQuery = await apolloClient.query({\n//         query: FIND_POST,\n//         variables: {title: 'Unilous'} \n//     }).catch(err => console.log(err))\n//     console.log(postQuery)\n//     return {\n//         post: postQuery.data.findPost,\n//     }\n// }\n\n\n_s(Contact, \"Jgxtny207IQMM2ZSYWIKYhxQqsg=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Contact;\n\nconst mapStateToProps = state => {\n  return {};\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Contact));\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmZXRjaE1vcmUiLCJ1c2VRdWVyeSIsIlNPTUVfVVNFUlMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJsb2FkTW9yZSIsInNvbWVVc2VycyIsImxlbmd0aCIsInVwZGF0ZVF1ZXJ5IiwicHJldmlvdXNSZXN1bHQiLCJmZXRjaE1vcmVSZXN1bHQiLCJmZXRNb3JlUmVzdWx0IiwibWFwIiwidSIsInVzZXJuYW1lIiwiQ1QiLCJjb250YWN0c0NvbnRhaW5lciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkMsUUFBbEI7QUFBd0JDO0FBQXhCLE1BQXNDQyxvRUFBUSxDQUFDQywrREFBRCxFQUFhO0FBQzdEQyxhQUFTLEVBQUU7QUFBQ0MsVUFBSSxFQUFFLENBQVA7QUFBVUMsV0FBSyxFQUFFO0FBQWpCO0FBRGtELEdBQWIsQ0FBcEQ7O0FBR0EsV0FBU0MsUUFBVCxDQUFrQlAsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQW1DO0FBQy9CLFdBQU9BLFNBQVMsQ0FBQztBQUNiRyxlQUFTLEVBQUU7QUFBQ0MsWUFBSSxFQUFFTCxJQUFJLENBQUNRLFNBQUwsQ0FBZUM7QUFBdEIsT0FERTtBQUViQyxpQkFBVyxFQUFFLENBQUNDLGNBQUQsRUFBaUI7QUFBQ0M7QUFBRCxPQUFqQixLQUF1QztBQUNoRCxZQUFJLENBQUNDLGFBQUwsRUFBb0I7QUFDaEI7QUFDSDtBQUNKO0FBTlksS0FBRCxDQUFo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Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENUIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9jb250YWN0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENvbnRyaWJ1dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZXInXHJcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7U09NRV9VU0VSU30gZnJvbSAnLi4vc3JjL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoU09NRV9VU0VSUywge1xyXG4gICAgICAgIHZhcmlhYmxlczoge3NraXA6IDAsIGZpcnN0OiA1fVxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIGxvYWRNb3JlKGRhdGEsIGZldGNoTW9yZSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaE1vcmUoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtza2lwOiBkYXRhLnNvbWVVc2Vycy5sZW5ndGh9LFxyXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7ZmV0Y2hNb3JlUmVzdWx0fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmZXRNb3JlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChkYXRhICYmIGRhdGEuc29tZVVzZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Db250YWN0IHwgVW5pbG91czwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhY3QgdGhlIFVuaWxvdXMgdGVhbVwiIGtleT1cImRlc2NyaXB0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zb21lVXNlcnMubWFwKHUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoMz57dS51c2VybmFtZX08L2gzPjwvbGk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZShkYXRhLCBmZXRjaE1vcmUpfT5zaG93IG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDVC5jb250YWN0c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU2ViYXN0aWFuIFNvc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3VzZXIvU2ViYXN0aWFuU29zYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS96Z3dJd09TLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiRm91bmRlciwgZnVsbC1zdGFjayBkZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZT1cIisxICg3ODYpLTI3MC03Mjk3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9XCIxc2ViYXN0aWFuMXNvc2ExQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJVbXlhcm92IE1pa2hhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3VzZXIvbmVzdXRvcnRpa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9pbWFnZXMtZXh0LTEuZGlzY29yZGFwcC5uZXQvZXh0ZXJuYWwvUUdTODJQeUI0NUxldnlUTzhyaEVlSjdiRS1mcDJ6Z056Wk55V1dqd21UWS8lM0ZhdmElM0QxJTJDL2h0dHBzL3N1bjktNTkudXNlcmFwaS5jb20vYzg0NDcyMC92ODQ0NzIwOTkzL2IxMjQ4L3R0RGJVcGViSmFVLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiVVhcXFVJIGRlc2lnbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9XCIrNyAoOTUyKS0xNTYtOTY0OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwic2lsdmVydXNkcmFnb25pdG9zQHlhbmRleC5ydVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJPbGl2ZXIgRnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3VzZXIvb2Z1OTk3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3Njb250ZW50LXNqYzMtMS54eC5mYmNkbi5uZXQvdi90MS4wLTkvODI1Njg1NDlfMTAxMDcxOTQwMDY3MjQ2ODRfNzU2NjU0NjY4MTExMDQ2MjQ2NF9vLmpwZz9fbmNfY2F0PTEwNSZfbmNfc2lkPTA5Y2JmZSZfbmNfb2hjPXJUUFM4QkhOVkc0QVhfYmp2VDAmX25jX2h0PXNjb250ZW50LXNqYzMtMS54eCZvaD0zMzM0Yjk0YzFiM2FiZTgwZTJmMTIxOWU3NDViODRlMSZvZT01RUY1Q0UzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiRnJvbnQtZW5kIGRldmVsb3BlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lPVwiKzEgKDk1MSktMjMyLTMxNzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD1cIm9mdTk5N0BnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb250YWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHBvc3RRdWVyeSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbi8vICAgICAgICAgcXVlcnk6IEZJTkRfUE9TVCxcclxuLy8gICAgICAgICB2YXJpYWJsZXM6IHt0aXRsZTogJ1VuaWxvdXMnfSBcclxuLy8gICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4vLyAgICAgY29uc29sZS5sb2cocG9zdFF1ZXJ5KVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwb3N0OiBwb3N0UXVlcnkuZGF0YS5maW5kUG9zdCxcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShDb250YWN0KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})