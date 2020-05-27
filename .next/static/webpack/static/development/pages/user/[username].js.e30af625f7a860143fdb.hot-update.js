webpackHotUpdate("static\\development\\pages\\user\\[username].js",{

/***/ "./pages/user/[username].js":
/*!**********************************!*\
  !*** ./pages/user/[username].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/schemas/mutations */ \"./src/schemas/mutations.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ \"./redux/reducers/alertNotif.js\");\n/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pages/userPage.module.css */ \"./styles/pages/userPage.module.css\");\n/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_post_PostSmallList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post/PostSmallList */ \"./components/post/PostSmallList.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text-field/FormContainer */ \"./components/text-field/FormContainer.js\");\n/* harmony import */ var _components_text_field_ReferenceLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/text-field/ReferenceLink */ \"./components/text-field/ReferenceLink.js\");\n/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/functions/functions */ \"./src/functions/functions.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);\n\n\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\user\\\\[username].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserPage = Object(next_router__WEBPACK_IMPORTED_MODULE_14__[\"withRouter\"])(_c = _s(props => {\n  _s();\n\n  const currentUser = props.user;\n  const message = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"useField\"])('text');\n\n  const onError = e => {\n    const eMessage = e.message;\n\n    if (eMessage.includes('Path `message` (')) {\n      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"triggerAlert\"])('warning', `message$: message of ${message.fields.value.length} characters cannot be more than 800 characters`, props.setAlert, props.resetAlert);\n    }\n  };\n\n  const [sendMessage] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__[\"MAKE_NOTIFICATION\"], {\n    onError\n  });\n\n  const handleMessage = async () => {\n    if (!message.fields.value.length) {\n      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"triggerAlert\"])('warning', `message$: message field is required`, props.setAlert, props.resetAlert);\n      return null;\n    }\n\n    const result = await sendMessage({\n      variables: {\n        userFromId: props.currentUser._id,\n        userToId: currentUser._id,\n        message: message.fields.value\n      }\n    });\n\n    if (result) {\n      message.reset();\n      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"triggerAlert\"])('success', `sent: message has been sent to ${currentUser.username}`, props.setAlert, props.resetAlert);\n    }\n  };\n\n  const pallette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"palletteGenerator\"])(\"rgb(40,40,40)\").colorPallette;\n\n  const descriptionToShow = () => {\n    const amtOfPosts = currentUser.posts.length;\n    let dFinal = `${currentUser.username} `;\n\n    if (amtOfPosts.length > 0) {\n      console.log(Boolean(amtOfPosts));\n      if (amtOfPosts === 1) dFinal = dFinal + `has ${amtOfPosts} awesome project that needs a team.`;else dFinal = dFinal + `has ${amtOfPosts} awesome projects that need teams.`;\n    } else dFinal = dFinal + 'is looking fresh and ready to work on a project!';\n\n    return dFinal;\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, `${currentUser.username} | Unilous user`), __jsx(\"meta\", {\n    name: \"description\",\n    content: descriptionToShow(),\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar-height\",\n    style: {\n      gridColumn: '1/3'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPContent,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitleContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitleIcon,\n    src: \"/svg/userB.svg\",\n    alt: \"user\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitle,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, currentUser.username)), __jsx(\"h3\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitle,\n    style: {\n      opacity: '0.8'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"profile link\"), __jsx(_components_text_field_ReferenceLink__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    rl: currentUser.referenceLink,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }), __jsx(\"h2\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPTitle,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"posts\"), __jsx(\"div\", {\n    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UPPostsContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(_components_post_PostSmallList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    posts: currentUser.posts,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }))), props.currentUser !== currentUser.username && __jsx(_components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    pallette: pallette,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"form-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, \"contact \", currentUser.username), __jsx(\"h4\", {\n    className: \"form-title-secondary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, \"message\"), __jsx(\"div\", {\n    className: \"form-field-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(\"textarea\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"form-field\"\n  }, message.fields, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    className: \"form-submit-button-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, __jsx(\"h4\", {\n    onClick: () => handleMessage(),\n    className: \"form-submit-button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, \"send\")))));\n}, \"p12fcvy4sQmyP36bHeMfZDZ+CBs=\", false, function () {\n  return [_src_functions_functions__WEBPACK_IMPORTED_MODULE_12__[\"useField\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n}));\n_c2 = UserPage;\n\nconst mapStateToProps = state => {\n  return {\n    alertNotif: state.alertNotif,\n    currentUser: state.currentUser\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setAlert: Object(redux__WEBPACK_IMPORTED_MODULE_13__[\"bindActionCreators\"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__[\"setAlert\"], dispatch),\n    resetAlert: Object(redux__WEBPACK_IMPORTED_MODULE_13__[\"bindActionCreators\"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__[\"resetAlert\"], dispatch)\n  };\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(UserPage)); // uses formContainer.css\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"UserPage$withRouter\");\n$RefreshReg$(_c2, \"UserPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyL1t1c2VybmFtZV0uanM/ZjM5NSJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsIndpdGhSb3V0ZXIiLCJwcm9wcyIsImN1cnJlbnRVc2VyIiwidXNlciIsIm1lc3NhZ2UiLCJ1c2VGaWVsZCIsIm9uRXJyb3IiLCJlIiwiZU1lc3NhZ2UiLCJpbmNsdWRlcyIsInRyaWdnZXJBbGVydCIsImZpZWxkcyIsInZhbHVlIiwibGVuZ3RoIiwic2V0QWxlcnQiLCJyZXNldEFsZXJ0Iiwic2VuZE1lc3NhZ2UiLCJ1c2VNdXRhdGlvbiIsIk1BS0VfTk9USUZJQ0FUSU9OIiwiaGFuZGxlTWVzc2FnZSIsInJlc3VsdCIsInZhcmlhYmxlcyIsInVzZXJGcm9tSWQiLCJfaWQiLCJ1c2VyVG9JZCIsInJlc2V0IiwidXNlcm5hbWUiLCJwYWxsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImRlc2NyaXB0aW9uVG9TaG93IiwiYW10T2ZQb3N0cyIsInBvc3RzIiwiZEZpbmFsIiwiY29uc29sZSIsImxvZyIsIkJvb2xlYW4iLCJVUCIsIlVQQ29udGFpbmVyIiwiZ3JpZENvbHVtbiIsIlVQQ29udGVudCIsIlVQVGl0bGVDb250YWluZXIiLCJVUFRpdGxlSWNvbiIsIlVQVGl0bGUiLCJvcGFjaXR5IiwicmVmZXJlbmNlTGluayIsIlVQUG9zdHNDb250YWluZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFsZXJ0Tm90aWYiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFHQywrREFBVSxTQUFFQyxLQUFELElBQVc7QUFBQTs7QUFDckMsUUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLElBQTFCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQywwRUFBUSxDQUFDLE1BQUQsQ0FBeEI7O0FBQ0EsUUFBTUMsT0FBTyxHQUFJQyxDQUFELElBQU87QUFDckIsVUFBTUMsUUFBUSxHQUFHRCxDQUFDLENBQUNILE9BQW5COztBQUNBLFFBQUlJLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQixrQkFBbEIsQ0FBSixFQUEyQztBQUN6Q0Msb0ZBQVksQ0FBQyxTQUFELEVBQWEsd0JBQXVCTixPQUFPLENBQUNPLE1BQVIsQ0FBZUMsS0FBZixDQUFxQkMsTUFBTyxnREFBaEUsRUFBaUhaLEtBQUssQ0FBQ2EsUUFBdkgsRUFBaUliLEtBQUssQ0FBQ2MsVUFBdkksQ0FBWjtBQUNEO0FBQ0YsR0FMRDs7QUFNQSxRQUFNLENBQUNDLFdBQUQsSUFBZ0JDLHVFQUFXLENBQUNDLHdFQUFELEVBQW9CO0FBQ25EWjtBQURtRCxHQUFwQixDQUFqQzs7QUFHQSxRQUFNYSxhQUFhLEdBQUcsWUFBWTtBQUNoQyxRQUFJLENBQUNmLE9BQU8sQ0FBQ08sTUFBUixDQUFlQyxLQUFmLENBQXFCQyxNQUExQixFQUFrQztBQUNoQ0gsb0ZBQVksQ0FBQyxTQUFELEVBQWEscUNBQWIsRUFBbURULEtBQUssQ0FBQ2EsUUFBekQsRUFBbUViLEtBQUssQ0FBQ2MsVUFBekUsQ0FBWjtBQUNBLGFBQU8sSUFBUDtBQUNEOztBQUNELFVBQU1LLE1BQU0sR0FBRyxNQUFNSixXQUFXLENBQUM7QUFDN0JLLGVBQVMsRUFBRTtBQUNQQyxrQkFBVSxFQUFFckIsS0FBSyxDQUFDQyxXQUFOLENBQWtCcUIsR0FEdkI7QUFFUEMsZ0JBQVEsRUFBRXRCLFdBQVcsQ0FBQ3FCLEdBRmY7QUFHUG5CLGVBQU8sRUFBRUEsT0FBTyxDQUFDTyxNQUFSLENBQWVDO0FBSGpCO0FBRGtCLEtBQUQsQ0FBaEM7O0FBT0EsUUFBSVEsTUFBSixFQUFZO0FBQ1JoQixhQUFPLENBQUNxQixLQUFSO0FBQ0FmLG9GQUFZLENBQUMsU0FBRCxFQUFhLGtDQUFpQ1IsV0FBVyxDQUFDd0IsUUFBUyxFQUFuRSxFQUFzRXpCLEtBQUssQ0FBQ2EsUUFBNUUsRUFBc0ZiLEtBQUssQ0FBQ2MsVUFBNUYsQ0FBWjtBQUNIO0FBQ0YsR0FoQkQ7O0FBaUJBLFFBQU1ZLFFBQVEsR0FBR0MsbUZBQWlCLENBQUMsZUFBRCxDQUFqQixDQUFtQ0MsYUFBcEQ7O0FBRUEsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixVQUFNQyxVQUFVLEdBQUc3QixXQUFXLENBQUM4QixLQUFaLENBQWtCbkIsTUFBckM7QUFDQSxRQUFJb0IsTUFBTSxHQUFJLEdBQUUvQixXQUFXLENBQUN3QixRQUFTLEdBQXJDOztBQUNBLFFBQUlLLFVBQVUsQ0FBQ2xCLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekJxQixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDTCxVQUFELENBQW5CO0FBQ0EsVUFBSUEsVUFBVSxLQUFLLENBQW5CLEVBQXNCRSxNQUFNLEdBQUdBLE1BQU0sR0FBSSxPQUFNRixVQUFXLHFDQUFwQyxDQUF0QixLQUNLRSxNQUFNLEdBQUdBLE1BQU0sR0FBSSxPQUFNRixVQUFXLG9DQUFwQztBQUNOLEtBSkQsTUFLS0UsTUFBTSxHQUFHQSxNQUFNLEdBQUcsa0RBQWxCOztBQUVMLFdBQU9BLE1BQVA7QUFDRCxHQVhEOztBQVlBLFNBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTLEdBQUUvQixXQUFXLENBQUN3QixRQUFTLGlCQUFoQyxDQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVJLGlCQUFpQixFQUFuRDtBQUF1RCxPQUFHLEVBQUMsYUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBRU8sd0VBQUUsQ0FBQ0MsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUU7QUFBYixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUYsd0VBQUUsQ0FBQ0csU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSCx3RUFBRSxDQUFDSSxnQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSix3RUFBRSxDQUFDSyxXQUFuQjtBQUFnQyxPQUFHLEVBQUMsZ0JBQXBDO0FBQXFELE9BQUcsRUFBQyxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBRUwsd0VBQUUsQ0FBQ00sT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QnpDLFdBQVcsQ0FBQ3dCLFFBQXhDLENBRkYsQ0FERixFQUtFO0FBQUksYUFBUyxFQUFFVyx3RUFBRSxDQUFDTSxPQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixFQU1FLE1BQUMsNkVBQUQ7QUFBZSxNQUFFLEVBQUUxQyxXQUFXLENBQUMyQyxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFJLGFBQVMsRUFBRVIsd0VBQUUsQ0FBQ00sT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLEVBUUU7QUFBSyxhQUFTLEVBQUVOLHdFQUFFLENBQUNTLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFlLFNBQUssRUFBRTVDLFdBQVcsQ0FBQzhCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBRkYsRUFjSS9CLEtBQUssQ0FBQ0MsV0FBTixLQUFzQkEsV0FBVyxDQUFDd0IsUUFBbEMsSUFDRixNQUFDLDZFQUFEO0FBQWUsWUFBUSxFQUFFQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ007QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFvQ3pCLFdBQVcsQ0FBQ3dCLFFBQWhELENBRE4sRUFFTTtBQUFJLGFBQVMsRUFBQyxzQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk4sRUFHTTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBVSxhQUFTLEVBQUM7QUFBcEIsS0FBcUN0QixPQUFPLENBQUNPLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQUhOLEVBTU07QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUksV0FBTyxFQUFFLE1BQU1RLGFBQWEsRUFBaEM7QUFBb0MsYUFBUyxFQUFDLG9CQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsQ0FOTixDQWZGLENBTEYsQ0FERjtBQW9DRCxDQS9FMEI7QUFBQSxVQUVUZCxrRUFGUyxFQVNIWSwrREFURztBQUFBLEdBQTNCO01BQU1sQixROztBQXdHTixNQUFNZ0QsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDakMsU0FBTztBQUNMQyxjQUFVLEVBQUVELEtBQUssQ0FBQ0MsVUFEYjtBQUVML0MsZUFBVyxFQUFFOEMsS0FBSyxDQUFDOUM7QUFGZCxHQUFQO0FBSUQsQ0FMRDs7QUFNQSxNQUFNZ0Qsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUN2QyxTQUFPO0FBQ0xyQyxZQUFRLEVBQUVzQyxpRUFBa0IsQ0FBQ3RDLG1FQUFELEVBQVdxQyxRQUFYLENBRHZCO0FBRUxwQyxjQUFVLEVBQUVxQyxpRUFBa0IsQ0FBQ3JDLHFFQUFELEVBQWFvQyxRQUFiO0FBRnpCLEdBQVA7QUFJRCxDQUxEOzs7QUFPZUUsMEhBQU8sQ0FDcEJOLGVBRG9CLEVBRXBCRyxrQkFGb0IsQ0FBUCxDQUdibkQsUUFIYSxDQUFmLEUsQ0FLQSIsImZpbGUiOiIuL3BhZ2VzL3VzZXIvW3VzZXJuYW1lXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTUFLRV9OT1RJRklDQVRJT04gfSBmcm9tICcuLi8uLi9zcmMvc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IEZJTkRfVVNFUiwgQUxMX1VTRVJTLCBGSU5EX1BPU1QgfSBmcm9tICcuLi8uLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBVUCBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvdXNlclBhZ2UubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBQb3N0U21hbGxMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9Qb3N0U21hbGxMaXN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRpbmcnXHJcbmltcG9ydCBGb3JtQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9Gb3JtQ29udGFpbmVyJ1xyXG5pbXBvcnQgUmVmZXJlbmNlTGluayBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtZmllbGQvUmVmZXJlbmNlTGluaydcclxuaW1wb3J0IHsgcGFsbGV0dGVHZW5lcmF0b3IsIHVzZUZpZWxkLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBVc2VyUGFnZSA9IHdpdGhSb3V0ZXIoKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBwcm9wcy51c2VyXHJcbiAgY29uc3QgbWVzc2FnZSA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGVNZXNzYWdlID0gZS5tZXNzYWdlXHJcbiAgICBpZiAoZU1lc3NhZ2UuaW5jbHVkZXMoJ1BhdGggYG1lc3NhZ2VgICgnKSkge1xyXG4gICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBgbWVzc2FnZSQ6IG1lc3NhZ2Ugb2YgJHttZXNzYWdlLmZpZWxkcy52YWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnMgY2Fubm90IGJlIG1vcmUgdGhhbiA4MDAgY2hhcmFjdGVyc2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2VuZE1lc3NhZ2VdID0gdXNlTXV0YXRpb24oTUFLRV9OT1RJRklDQVRJT04sIHtcclxuICAgIG9uRXJyb3JcclxuICB9KVxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW1lc3NhZ2UuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBgbWVzc2FnZSQ6IG1lc3NhZ2UgZmllbGQgaXMgcmVxdWlyZWRgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRNZXNzYWdlKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgdXNlckZyb21JZDogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICB1c2VyVG9JZDogY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIG1lc3NhZ2UucmVzZXQoKVxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsIGBzZW50OiBtZXNzYWdlIGhhcyBiZWVuIHNlbnQgdG8gJHtjdXJyZW50VXNlci51c2VybmFtZX1gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcGFsbGV0dGUgPSBwYWxsZXR0ZUdlbmVyYXRvcihcInJnYig0MCw0MCw0MClcIikuY29sb3JQYWxsZXR0ZVxyXG4gIFxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVG9TaG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYW10T2ZQb3N0cyA9IGN1cnJlbnRVc2VyLnBvc3RzLmxlbmd0aFxyXG4gICAgbGV0IGRGaW5hbCA9IGAke2N1cnJlbnRVc2VyLnVzZXJuYW1lfSBgXHJcbiAgICBpZiAoYW10T2ZQb3N0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKEJvb2xlYW4oYW10T2ZQb3N0cykpXHJcbiAgICAgIGlmIChhbXRPZlBvc3RzID09PSAxKSBkRmluYWwgPSBkRmluYWwgKyBgaGFzICR7YW10T2ZQb3N0c30gYXdlc29tZSBwcm9qZWN0IHRoYXQgbmVlZHMgYSB0ZWFtLmBcclxuICAgICAgZWxzZSBkRmluYWwgPSBkRmluYWwgKyBgaGFzICR7YW10T2ZQb3N0c30gYXdlc29tZSBwcm9qZWN0cyB0aGF0IG5lZWQgdGVhbXMuYFxyXG4gICAgfVxyXG4gICAgZWxzZSBkRmluYWwgPSBkRmluYWwgKyAnaXMgbG9va2luZyBmcmVzaCBhbmQgcmVhZHkgdG8gd29yayBvbiBhIHByb2plY3QhJ1xyXG5cclxuICAgIHJldHVybiBkRmluYWxcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57YCR7Y3VycmVudFVzZXIudXNlcm5hbWV9IHwgVW5pbG91cyB1c2VyYH08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uVG9TaG93KCl9IGtleT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVBDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUC5VUENvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQVGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17VVAuVVBUaXRsZUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1VQLlVQVGl0bGV9PntjdXJyZW50VXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtVUC5VUFRpdGxlfSBzdHlsZT17e29wYWNpdHk6ICcwLjgnfX0+cHJvZmlsZSBsaW5rPC9oMz5cclxuICAgICAgICAgIDxSZWZlcmVuY2VMaW5rIHJsPXtjdXJyZW50VXNlci5yZWZlcmVuY2VMaW5rfSAvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17VVAuVVBUaXRsZX0+cG9zdHM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQUG9zdHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8UG9zdFNtYWxsTGlzdCBwb3N0cz17Y3VycmVudFVzZXIucG9zdHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHByb3BzLmN1cnJlbnRVc2VyICE9PSBjdXJyZW50VXNlci51c2VybmFtZSAmJlxyXG4gICAgICAgIDxGb3JtQ29udGFpbmVyIHBhbGxldHRlPXtwYWxsZXR0ZX0gPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+Y29udGFjdCB7Y3VycmVudFVzZXIudXNlcm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9ybS10aXRsZS1zZWNvbmRhcnlcIj5tZXNzYWdlPC9oND5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiIHsuLi5tZXNzYWdlLmZpZWxkc30gLz5cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdC1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gaGFuZGxlTWVzc2FnZSgpfSBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdC1idXR0b25cIj5zZW5kPC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lc1F1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtxdWVyeTogQUxMX1VTRVJTfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICBjb25zdCBwYXRocyA9IHVzZXJuYW1lc1F1ZXJ5LmRhdGEuYWxsVXNlcnMubWFwKHUgPT4gYC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHUudXNlcm5hbWUpfWApXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zdCB1c2VyUXVlcnkgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IEZJTkRfVVNFUixcclxuICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBwYXJhbXMudXNlcm5hbWV9XHJcbiAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6IHVzZXJRdWVyeS5kYXRhLmZpbmRVc2VyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZixcclxuICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG4gIH1cclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgcmVzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVzZXJQYWdlKVxyXG5cclxuLy8gdXNlcyBmb3JtQ29udGFpbmVyLmNzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/[username].js\n");

/***/ })

})