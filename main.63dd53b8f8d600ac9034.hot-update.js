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

/***/ "./src/components/ExerciseList/ExerciseList.tsx":
/*!******************************************************!*\
  !*** ./src/components/ExerciseList/ExerciseList.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ExerciseMenuItem_ExerciseMenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ExerciseMenuItem/ExerciseMenuItem */ \"./src/components/ExerciseMenuItem/ExerciseMenuItem.tsx\");\n/* harmony import */ var _exercise_list_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercise-list.scss */ \"./src/components/ExerciseList/exercise-list.scss\");\n/* harmony import */ var _ExpandIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpandIcon */ \"./src/components/ExerciseList/ExpandIcon.tsx\");\n\n\n\n\n\n\n\nvar ExerciseList = function ExerciseList(_ref) {\n  var exercises = _ref.exercises,\n    title = _ref.title,\n    emoji = _ref.emoji,\n    className = _ref.className,\n    _ref$isDarkMode = _ref.isDarkMode,\n    isDarkMode = _ref$isDarkMode === void 0 ? false : _ref$isDarkMode;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(isExpanded),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n    isExpanded = _useState2[0],\n    setIsExpanded = _useState2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_exercise_list_scss__WEBPACK_IMPORTED_MODULE_5__.root, className, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _exercise_list_scss__WEBPACK_IMPORTED_MODULE_5__.darkMode, isDarkMode))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"button\", {\n    className: _exercise_list_scss__WEBPACK_IMPORTED_MODULE_5__.header,\n    \"aria-label\": \"expand or collapse toggle\",\n    onClick: function onClick() {\n      return setIsExpanded(function (expanded) {\n        return !expanded;\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ExpandIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isExpanded: isExpanded\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h3\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"span\", null, emoji)), isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: _exercise_list_scss__WEBPACK_IMPORTED_MODULE_5__.exercises\n  }, exercises.map(function (exercise) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ExerciseMenuItem_ExerciseMenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: exercise.index,\n      exercise: exercise\n    });\n  })) : null);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExerciseList);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/ExerciseList/ExerciseList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6f1b06595776a94d868")
/******/ })();
/******/ 
/******/ }
);