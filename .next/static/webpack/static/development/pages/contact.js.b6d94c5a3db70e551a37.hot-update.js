webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/contact.module.css */ \"./styles/pages/contact.module.css\");\n/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ \"./components/Contributer.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Contact = () => {\n  _s();\n\n  const onError = e => console.log(e);\n\n  const {\n    loading,\n    error,\n    data,\n    fetchMore\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_6__[\"SOME_USERS\"], {\n    variables: {\n      skip: 0,\n      first: 5\n    },\n    onError\n  });\n\n  if (data && data.someUsers) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }\n    }, __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 21\n      }\n    }, \"Contact | Unilous\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"Contact the Unilous team\",\n      key: \"description\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }\n    })), __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }), __jsx(\"ol\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }, data.someUsers.map(u => __jsx(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 25\n      }\n    }, __jsx(\"h3\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 29\n      }\n    }, u.username)))), __jsx(\"button\", {\n      onClick: () => loadMore(data, fetchMore),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, loading ? 'loading...' : 'show more'), __jsx(\"div\", {\n      className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactsContainer,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }\n    }, __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Sebastian Sosa\",\n      link: \"/user/SebastianSosa\",\n      image: \"https://i.imgur.com/zgwIwOS.png\",\n      position: \"Founder, full-stack developer\",\n      phone: \"+1 (786)-270-7297\",\n      email: \"1sebastian1sosa1@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Umyarov Mikhail\",\n      link: \"/user/nesutortik\",\n      image: \"https://images-ext-1.discordapp.net/external/QGS82PyB45LevyTO8rhEeJ7bE-fp2zgNzZNyWWjwmTY/%3Fava%3D1%2C/https/sun9-59.userapi.com/c844720/v844720993/b1248/ttDbUpebJaU.jpg\",\n      position: \"UX\\\\UI designer\",\n      phone: \"+7 (952)-156-9649\",\n      email: \"silverusdragonitos@yandex.ru\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }\n    }), __jsx(_components_Contributer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"Oliver Fu\",\n      link: \"/user/ofu997\",\n      image: \"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/82568549_10107194006724684_7566546681110462464_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rTPS8BHNVG4AX_bjvT0&_nc_ht=scontent-sjc3-1.xx&oh=3334b94c1b3abe80e2f1219e745b84e1&oe=5EF5CE32\",\n      position: \"Front-end developer\",\n      phone: \"+1 (951)-232-3178\",\n      email: \"ofu997@gmail.com\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }\n    })));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"navbar-height\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }\n    }), __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    }, \"Loading...\"));\n  }\n}; // Contact.getInitialProps = async () => {\n//     const postQuery = await apolloClient.query({\n//         query: FIND_POST,\n//         variables: {title: 'Unilous'} \n//     }).catch(err => console.log(err))\n//     console.log(postQuery)\n//     return {\n//         post: postQuery.data.findPost,\n//     }\n// }\n\n\n_s(Contact, \"Jgxtny207IQMM2ZSYWIKYhxQqsg=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Contact;\n\nconst mapStateToProps = state => {\n  return {};\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Contact));\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsIm9uRXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmZXRjaE1vcmUiLCJ1c2VRdWVyeSIsIlNPTUVfVVNFUlMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJzb21lVXNlcnMiLCJtYXAiLCJ1IiwidXNlcm5hbWUiLCJsb2FkTW9yZSIsIkNUIiwiY29udGFjdHNDb250YWluZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFBQTs7QUFDbEIsUUFBTUMsT0FBTyxHQUFJQyxDQUFELElBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQXZCOztBQUVBLFFBQU07QUFBRUcsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQyxRQUFsQjtBQUF3QkM7QUFBeEIsTUFBc0NDLG9FQUFRLENBQUNDLCtEQUFELEVBQWE7QUFDN0RDLGFBQVMsRUFBRTtBQUFDQyxVQUFJLEVBQUUsQ0FBUDtBQUFVQyxXQUFLLEVBQUU7QUFBakIsS0FEa0Q7QUFFN0RaO0FBRjZELEdBQWIsQ0FBcEQ7O0FBTUEsTUFBSU0sSUFBSSxJQUFJQSxJQUFJLENBQUNPLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDLDBCQUFqQztBQUE0RCxTQUFHLEVBQUMsYUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREosRUFLSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS1AsSUFBSSxDQUFDTyxTQUFMLENBQWVDLEdBQWYsQ0FBbUJDLENBQUMsSUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsQ0FBQyxDQUFDQyxRQUFQLENBQUosQ0FESCxDQURMLENBTkosRUFXSTtBQUFRLGFBQU8sRUFBRSxNQUFNQyxRQUFRLENBQUNYLElBQUQsRUFBT0MsU0FBUCxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tILE9BQU8sR0FBRyxZQUFILEdBQWtCLFdBRDlCLENBWEosRUFjSTtBQUFLLGVBQVMsRUFBRWMsdUVBQUUsQ0FBQ0MsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLCtEQUFEO0FBQ0ksVUFBSSxFQUFDLGdCQURUO0FBRUksVUFBSSxFQUFDLHFCQUZUO0FBR0ksV0FBSyxFQUFDLGlDQUhWO0FBSUksY0FBUSxFQUFDLCtCQUpiO0FBS0ksV0FBSyxFQUFDLG1CQUxWO0FBTUksV0FBSyxFQUFDLDRCQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQVNJLE1BQUMsK0RBQUQ7QUFDSSxVQUFJLEVBQUMsaUJBRFQ7QUFFSSxVQUFJLEVBQUMsa0JBRlQ7QUFHSSxXQUFLLEVBQUMsMktBSFY7QUFJSSxjQUFRLEVBQUMsaUJBSmI7QUFLSSxXQUFLLEVBQUMsbUJBTFY7QUFNSSxXQUFLLEVBQUMsOEJBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRKLEVBaUJJLE1BQUMsK0RBQUQ7QUFDSSxVQUFJLEVBQUMsV0FEVDtBQUVJLFVBQUksRUFBQyxjQUZUO0FBR0ksV0FBSyxFQUFDLHFPQUhWO0FBSUksY0FBUSxFQUFDLHFCQUpiO0FBS0ksV0FBSyxFQUFDLG1CQUxWO0FBTUksV0FBSyxFQUFDLGtCQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFqQkosQ0FkSixDQURKO0FBMkNILEdBNUNELE1BNkNLO0FBQ0QsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLENBREo7QUFNSDtBQUNKLENBOURELEMsQ0FpRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTFFTXBCLE87VUFHMENTLDREOzs7S0FIMUNULE87O0FBNEVOLE1BQU1xQixlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxTQUFPLEVBQVA7QUFHQSxDQUpEOztBQUtBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDckMsU0FBTyxFQUFQO0FBR0gsQ0FKRDs7QUFNZUMsMEhBQU8sQ0FDbEJKLGVBRGtCLEVBRWxCRSxrQkFGa0IsQ0FBUCxDQUdidkIsT0FIYSxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENUIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9jb250YWN0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENvbnRyaWJ1dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZXInXHJcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7U09NRV9VU0VSU30gZnJvbSAnLi4vc3JjL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4gY29uc29sZS5sb2coZSlcclxuXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KFNPTUVfVVNFUlMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtza2lwOiAwLCBmaXJzdDogNX0sXHJcbiAgICAgICAgb25FcnJvclxyXG4gICAgfSlcclxuXHJcbiAgICBcclxuICAgIGlmIChkYXRhICYmIGRhdGEuc29tZVVzZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Db250YWN0IHwgVW5pbG91czwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhY3QgdGhlIFVuaWxvdXMgdGVhbVwiIGtleT1cImRlc2NyaXB0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zb21lVXNlcnMubWFwKHUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoMz57dS51c2VybmFtZX08L2gzPjwvbGk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZShkYXRhLCBmZXRjaE1vcmUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdsb2FkaW5nLi4uJyA6ICdzaG93IG1vcmUnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q1QuY29udGFjdHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250cmlidXRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNlYmFzdGlhbiBTb3NhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi91c2VyL1NlYmFzdGlhblNvc2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vaS5pbWd1ci5jb20vemd3SXdPUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIkZvdW5kZXIsIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9XCIrMSAoNzg2KS0yNzAtNzI5N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwiMXNlYmFzdGlhbjFzb3NhMUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiVW15YXJvdiBNaWtoYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi91c2VyL25lc3V0b3J0aWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vaW1hZ2VzLWV4dC0xLmRpc2NvcmRhcHAubmV0L2V4dGVybmFsL1FHUzgyUHlCNDVMZXZ5VE84cmhFZUo3YkUtZnAyemdOelpOeVdXandtVFkvJTNGYXZhJTNEMSUyQy9odHRwcy9zdW45LTU5LnVzZXJhcGkuY29tL2M4NDQ3MjAvdjg0NDcyMDk5My9iMTI0OC90dERiVXBlYkphVS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIlVYXFxVSSBkZXNpZ25lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lPVwiKzcgKDk1MiktMTU2LTk2NDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD1cInNpbHZlcnVzZHJhZ29uaXRvc0B5YW5kZXgucnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiT2xpdmVyIEZ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi91c2VyL29mdTk5N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zY29udGVudC1zamMzLTEueHguZmJjZG4ubmV0L3YvdDEuMC05LzgyNTY4NTQ5XzEwMTA3MTk0MDA2NzI0Njg0Xzc1NjY1NDY2ODExMTA0NjI0NjRfby5qcGc/X25jX2NhdD0xMDUmX25jX3NpZD0wOWNiZmUmX25jX29oYz1yVFBTOEJITlZHNEFYX2JqdlQwJl9uY19odD1zY29udGVudC1zamMzLTEueHgmb2g9MzMzNGI5NGMxYjNhYmU4MGUyZjEyMTllNzQ1Yjg0ZTEmb2U9NUVGNUNFMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cIkZyb250LWVuZCBkZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZT1cIisxICg5NTEpLTIzMi0zMTc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9XCJvZnU5OTdAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIENvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuLy8gICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4vLyAgICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4vLyAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbi8vICAgICBjb25zb2xlLmxvZyhwb3N0UXVlcnkpXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHBvc3Q6IHBvc3RRdWVyeS5kYXRhLmZpbmRQb3N0LFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENvbnRhY3QpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})