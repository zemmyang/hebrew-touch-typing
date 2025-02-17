"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatehebrew_touch_typing"]("main",{

/***/ "./src/components/Root/Root.tsx":
/*!**************************************!*\
  !*** ./src/components/Root/Root.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HebrewTouchTyping_HebrewTouchTyping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HebrewTouchTyping/HebrewTouchTyping */ \"./src/components/HebrewTouchTyping/HebrewTouchTyping.tsx\");\n/* harmony import */ var _SideBar_SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SideBar/SideBar */ \"./src/components/SideBar/SideBar.tsx\");\n/* harmony import */ var _ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ExerciseContext/ExerciseContext */ \"./src/components/ExerciseContext/ExerciseContext.tsx\");\n/* harmony import */ var _root_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root.scss */ \"./src/components/Root/root.scss\");\n/* harmony import */ var _UserDataProvider_UserDataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UserDataProvider/UserDataProvider */ \"./src/components/UserDataProvider/UserDataProvider.tsx\");\n/* harmony import */ var _public_css_themes_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/css/themes.scss */ \"./public/css/themes.scss\");\n\n\n\n\n\n\n\n\n\nvar HebrewTouchTypingPage = function HebrewTouchTypingPage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light'),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    theme = _useState2[0],\n    setTheme = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');\n    var handleChange = function handleChange(e) {\n      setTheme(e.matches ? 'dark' : 'light');\n    };\n    setTheme(mediaQuery.matches ? 'dark' : 'light');\n    mediaQuery.addEventListener('change', handleChange);\n    return function () {\n      mediaQuery.removeEventListener('change', handleChange);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    \"data-theme\": theme,\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_root_scss__WEBPACK_IMPORTED_MODULE_6__.root)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"a\", {\n    href: \"https://dlvhdr.me\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_root_scss__WEBPACK_IMPORTED_MODULE_6__.dlvhdr)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h3\", null, \"DLVHDR\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_5__.ExerciseProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UserDataProvider_UserDataProvider__WEBPACK_IMPORTED_MODULE_7__.UserDataProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    theme: theme\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HebrewTouchTyping_HebrewTouchTyping__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HebrewTouchTypingPage);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/Root/Root.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f462ea932adfacda8a5")
/******/ })();
/******/ 
/******/ }
);