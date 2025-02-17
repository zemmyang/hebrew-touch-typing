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

/***/ "./src/components/HeroSection/HeroSection.tsx":
/*!****************************************************!*\
  !*** ./src/components/HeroSection/HeroSection.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExerciseContext/ExerciseContext */ \"./src/components/ExerciseContext/ExerciseContext.tsx\");\n/* harmony import */ var _HebrewTouchTyping_KeyboardWarriorSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HebrewTouchTyping/KeyboardWarriorSvg */ \"./src/components/HebrewTouchTyping/KeyboardWarriorSvg.tsx\");\n/* harmony import */ var _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-section.scss */ \"./src/components/HeroSection/hero-section.scss\");\n/* harmony import */ var _LeftArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LeftArrow */ \"./src/components/HeroSection/LeftArrow.tsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar HeroSection = function HeroSection() {\n  var _classNames, _classNames2;\n  var _useExerciseContext = (0,_ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_3__.useExerciseContext)(),\n    setSelectedExerciseNumber = _useExerciseContext.setSelectedExerciseNumber;\n\n  // Dark mode toggle\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n    isDarkModeToggled = _React$useState2[0],\n    setIsDarkModeToggled = _React$useState2[1];\n  var handleDarkModeToggle = function handleDarkModeToggle() {\n    setIsDarkModeToggled(!isDarkModeToggled);\n  };\n\n  // Show keyboard toggle\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),\n    _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n    isHidden = _React$useState4[0],\n    setIsHidden = _React$useState4[1];\n  var handleKeyboardToggle = function handleKeyboardToggle() {\n    setIsHidden(!isHidden);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.emptyState\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.textContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h1\", null, \"\\u05D4\\u05D0\\u05EA\\u05E8 \\u05DC\\u05DC\\u05DE\\u05D5\\u05D3 \\u05D1\\u05D5 \\u05D4\\u05E7\\u05DC\\u05D3\\u05D4 \\u05E2\\u05D9\\u05D5\\u05D5\\u05E8\\u05EA \\u05D1\\u05E2\\u05D1\\u05E8\\u05D9\\u05EA\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", {\n    className: _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.sharedButton,\n    onClick: function onClick() {\n      return setSelectedExerciseNumber(0);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"span\", null, \"\\u05D4\\u05EA\\u05D7\\u05DC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_LeftArrow__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.toggleButton, _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.sharedButton, (_classNames = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames, _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.on, isDarkModeToggled), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames, _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.off, !isDarkModeToggled), _classNames)),\n    onClick: handleDarkModeToggle\n  }, isDarkModeToggled ? 'Dark' : 'Light'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.keyboardToggleButton, (_classNames2 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames2, _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.on, isHidden), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames2, _hero_section_scss__WEBPACK_IMPORTED_MODULE_5__.off, !isHidden), _classNames2)),\n    onClick: handleKeyboardToggle\n  }, isHidden ? 'Show' : 'Hide')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_HebrewTouchTyping_KeyboardWarriorSvg__WEBPACK_IMPORTED_MODULE_4__.KeyboardWarriorSvg, null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/HeroSection/HeroSection.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5b8c6339187de7ecb17a")
/******/ })();
/******/ 
/******/ }
);