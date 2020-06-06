webpackHotUpdate("static\\development\\pages\\homepage.js",{

/***/ "./pages/homepage.js":
/*!***************************!*\
  !*** ./pages/homepage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/homePage.module.css */ \"./styles/pages/homePage.module.css\");\n/* harmony import */ var _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ \"./components/Contributer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apollo */ \"./lib/apollo.js\");\n/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/queries */ \"./schemas/queries.js\");\n/* harmony import */ var _components_post_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/post/Post */ \"./components/post/Post.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\homepage.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nconst HomePage = props => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, \"Contact | Unilous\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Contact the Unilous team\",\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"navbar-height\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamCreateYourProject}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wide}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Build your team, create your project\"), __jsx(\"p\", {\n    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, \"Unilous is a platform uniquely designed for building teams. At the center of Unilous lies the project post which provides both the information a user would want to know about the project, and features necessary for an effective joining process.\"), __jsx(\"div\", {\n    style: {\n      display: 'flex'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnLight} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 25\n    }\n  }, \"Choose project to join\"), __jsx(\"button\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnLD} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }, \"Create new project\"))), __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamOuterBox}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamImage} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamInnerBox}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, __jsx(_components_post_Post__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    post: props.post,\n    short: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  })))), __jsx(\"div\", {\n    id: \"community\",\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.communityOrProjectsDiv}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"Network\"), __jsx(\"p\", {\n    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, \"Unilous does the networking so you don't need to. We provide you with access to all of our talented users by directly *browsing our users* or indirectly posting projects for all of the potentially interested users to see. The Unilous community although with different interests and skill sets are all looking to create and be part of something great.\"), __jsx(\"button\", {\n    className: ` ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.halfWidthButton}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Browse users\")), __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wide}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"./svg/usaB.svg\",\n    alt: \"community\",\n    width: \"100%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    id: \"projects\",\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.communityOrProjectsDiv}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, \"Projects\"), __jsx(\"p\", {\n    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, \"Unilus contains many different kinds of projects with all kinds of skills needed. Although they have different complexities and different skill requirements, all of them need a team. Project Unilous for example is also on display welcoming new members interested in contributing to it.\"), __jsx(\"button\", {\n    className: ` ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.halfWidthButton}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"Browse projects\")), __jsx(\"div\", {\n    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wide} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projectImages}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"./svg/handshakeB.svg\",\n    alt: \"projects\",\n    width: \"40%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }), __jsx(\"img\", {\n    src: \"./svg/exitB.svg\",\n    alt: \"projects\",\n    width: \"40%\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }))));\n};\n\n_c = HomePage;\n\nHomePage.getInitialProps = async () => {\n  const postQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_6__[\"apolloClient\"].query({\n    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"FIND_POST\"],\n    variables: {\n      title: 'Unilous'\n    }\n  }).catch(err => console.log(err)); // console.log(postQuery)\n\n  return {\n    post: postQuery.data.findPost\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null)(HomePage));\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lcGFnZS5qcz83Y2ViIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJIUCIsInJvd0NvbnRhaW5lciIsImJ1aWxkWW91clRlYW1DcmVhdGVZb3VyUHJvamVjdCIsInRleHRCb3giLCJ3aWRlIiwibGVmdEFsaWduIiwibGdQYXJhIiwiZGlzcGxheSIsImJ1dHRvbiIsImJ0bkxpZ2h0IiwiYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zIiwiYnRuTEQiLCJpbWFnZUJveCIsIm5hcnJvdyIsImJ1aWxkWW91clRlYW1PdXRlckJveCIsImJ1aWxkWW91clRlYW1JbWFnZSIsImJ1aWxkWW91clRlYW1Jbm5lckJveCIsInBvc3QiLCJjb21tdW5pdHlPclByb2plY3RzRGl2IiwiYnRuRGFyayIsImhhbGZXaWR0aEJ1dHRvbiIsInByb2plY3RJbWFnZXMiLCJnZXRJbml0aWFsUHJvcHMiLCJwb3N0UXVlcnkiLCJhcG9sbG9DbGllbnQiLCJxdWVyeSIsIkZJTkRfUE9TVCIsInZhcmlhYmxlcyIsInRpdGxlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZpbmRQb3N0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLDBCQUFqQztBQUE0RCxPQUFHLEVBQUMsYUFBaEU7QUFBQTtBQUFBO0FBQUE7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QXBDO0FBQStDLFNBQUssRUFBQyxLQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLE9BQUcsRUFBQyxpQkFBVDtBQUEyQixPQUFHLEVBQUMsVUFBL0I7QUFBMEMsU0FBSyxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQVJBLENBcENKLENBREo7QUFvREgsQ0FyREQ7O0tBQU12QixROztBQXNETkEsUUFBUSxDQUFDd0IsZUFBVCxHQUEyQixZQUFZO0FBQ25DLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyx3REFBWSxDQUFDQyxLQUFiLENBQW1CO0FBQ3ZDQSxTQUFLLEVBQUVDLDBEQURnQztBQUV2Q0MsYUFBUyxFQUFFO0FBQUNDLFdBQUssRUFBRTtBQUFSO0FBRjRCLEdBQW5CLEVBR3JCQyxLQUhxQixDQUdmQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBSFEsQ0FBeEIsQ0FEbUMsQ0FLbkM7O0FBQ0EsU0FBTztBQUNIYixRQUFJLEVBQUVNLFNBQVMsQ0FBQ1UsSUFBVixDQUFlQztBQURsQixHQUFQO0FBR0gsQ0FURDs7QUFXZUMsMEhBQU8sQ0FDbEIsSUFEa0IsQ0FBUCxDQUVickMsUUFGYSxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIUCBmcm9tICcuLi9zdHlsZXMvcGFnZXMvaG9tZVBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgQ29udHJpYnV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmlidXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHtGSU5EX1BPU1R9IGZyb20gJy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0L1Bvc3QnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db250YWN0IHwgVW5pbG91czwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udGFjdCB0aGUgVW5pbG91cyB0ZWFtXCIga2V5PVwiZGVzY3JpcHRpb25cIi8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hQLnJvd0NvbnRhaW5lcn0gJHtIUC5idWlsZFlvdXJUZWFtQ3JlYXRlWW91clByb2plY3R9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7SFAudGV4dEJveH0gJHtIUC53aWRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e0hQLmxlZnRBbGlnbn0+QnVpbGQgeW91ciB0ZWFtLCBjcmVhdGUgeW91ciBwcm9qZWN0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0hQLmxnUGFyYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVuaWxvdXMgaXMgYSBwbGF0Zm9ybSB1bmlxdWVseSBkZXNpZ25lZCBmb3IgYnVpbGRpbmcgdGVhbXMuIEF0IHRoZSBjZW50ZXIgb2YgVW5pbG91cyBsaWVzIHRoZSBwcm9qZWN0IHBvc3Qgd2hpY2ggcHJvdmlkZXMgYm90aCB0aGUgaW5mb3JtYXRpb24gYSB1c2VyIHdvdWxkIHdhbnQgdG8ga25vdyBhYm91dCB0aGUgcHJvamVjdCwgYW5kIGZlYXR1cmVzIG5lY2Vzc2FyeSBmb3IgYW4gZWZmZWN0aXZlIGpvaW5pbmcgcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuTGlnaHR9ICR7SFAuYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zfWB9PkNob29zZSBwcm9qZWN0IHRvIGpvaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake0hQLmJ1dHRvbn0gJHtIUC5idG5MRH0gJHtIUC5hZGphY2VudEhhbGZXaWR0aEJ1dHRvbnN9YH0+Q3JlYXRlIG5ldyBwcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIUC5pbWFnZUJveH0gJHtIUC5uYXJyb3d9ICR7SFAuYnVpbGRZb3VyVGVhbU91dGVyQm94fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIUC5idWlsZFlvdXJUZWFtSW1hZ2V9ICR7SFAuYnVpbGRZb3VyVGVhbUlubmVyQm94fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwcm9wcy5wb3N0fSBzaG9ydCAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2NvbW11bml0eScgY2xhc3NOYW1lPXtgJHtIUC5yb3dDb250YWluZXJ9ICR7SFAuY29tbXVuaXR5T3JQcm9qZWN0c0Rpdn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hQLnRleHRCb3h9ICR7SFAubmFycm93fWB9PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17SFAubGVmdEFsaWdufT5OZXR3b3JrPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17SFAubGdQYXJhfT5cclxuICAgICAgICAgICAgICAgIFVuaWxvdXMgZG9lcyB0aGUgbmV0d29ya2luZyBzbyB5b3UgZG9uJ3QgbmVlZCB0by4gV2UgcHJvdmlkZSB5b3Ugd2l0aCBhY2Nlc3MgdG8gYWxsIG9mIG91ciB0YWxlbnRlZCB1c2VycyBieSBkaXJlY3RseSAqYnJvd3Npbmcgb3VyIHVzZXJzKiBvciBpbmRpcmVjdGx5IHBvc3RpbmcgcHJvamVjdHMgZm9yIGFsbCBvZiB0aGUgcG90ZW50aWFsbHkgaW50ZXJlc3RlZCB1c2VycyB0byBzZWUuIFRoZSBVbmlsb3VzIGNvbW11bml0eSBhbHRob3VnaCB3aXRoIGRpZmZlcmVudCBpbnRlcmVzdHMgYW5kIHNraWxsIHNldHMgYXJlIGFsbCBsb29raW5nIHRvIGNyZWF0ZSBhbmQgYmUgcGFydCBvZiBzb21ldGhpbmcgZ3JlYXQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCAke0hQLmJ1dHRvbn0gJHtIUC5idG5EYXJrfSAke0hQLmhhbGZXaWR0aEJ1dHRvbn1gfT5Ccm93c2UgdXNlcnM8L2J1dHRvbj4gICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hQLmltYWdlQm94fSAke0hQLndpZGV9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9zdmcvdXNhQi5zdmcnIGFsdD0nY29tbXVuaXR5JyB3aWR0aD0nMTAwJSc+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0ncHJvamVjdHMnIGNsYXNzTmFtZT17YCR7SFAucm93Q29udGFpbmVyfSAke0hQLmNvbW11bml0eU9yUHJvamVjdHNEaXZ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIUC50ZXh0Qm94fSAke0hQLm5hcnJvd31gfT4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtIUC5sZWZ0QWxpZ259PlByb2plY3RzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17SFAubGdQYXJhfT5cclxuICAgICAgICAgICAgICAgIFVuaWx1cyBjb250YWlucyBtYW55IGRpZmZlcmVudCBraW5kcyBvZiBwcm9qZWN0cyB3aXRoIGFsbCBraW5kcyBvZiBza2lsbHMgbmVlZGVkLiBBbHRob3VnaCB0aGV5IGhhdmUgZGlmZmVyZW50IGNvbXBsZXhpdGllcyBhbmQgZGlmZmVyZW50IHNraWxsIHJlcXVpcmVtZW50cywgYWxsIG9mIHRoZW0gbmVlZCBhIHRlYW0uIFByb2plY3QgVW5pbG91cyBmb3IgZXhhbXBsZSBpcyBhbHNvIG9uIGRpc3BsYXkgd2VsY29taW5nIG5ldyBtZW1iZXJzIGludGVyZXN0ZWQgaW4gY29udHJpYnV0aW5nIHRvIGl0LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2AgJHtIUC5idXR0b259ICR7SFAuYnRuRGFya30gJHtIUC5oYWxmV2lkdGhCdXR0b259YH0+QnJvd3NlIHByb2plY3RzPC9idXR0b24+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7SFAuaW1hZ2VCb3h9ICR7SFAud2lkZX0gJHtIUC5wcm9qZWN0SW1hZ2VzfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vc3ZnL2hhbmRzaGFrZUIuc3ZnJyBhbHQ9J3Byb2plY3RzJyB3aWR0aD0nNDAlJz48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N2Zy9leGl0Qi5zdmcnIGFsdD0ncHJvamVjdHMnIHdpZHRoPSc0MCUnPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4gICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3N0UXVlcnkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3Q6IHBvc3RRdWVyeS5kYXRhLmZpbmRQb3N0LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKEhvbWVQYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/homepage.js\n");

/***/ })

})