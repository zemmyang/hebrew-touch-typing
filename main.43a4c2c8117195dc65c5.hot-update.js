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

/***/ "./src/components/SideBar/SideBar.tsx":
/*!********************************************!*\
  !*** ./src/components/SideBar/SideBar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_generateLetterExercises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/generateLetterExercises */ \"./src/utils/generateLetterExercises.ts\");\n/* harmony import */ var _ExerciseList_ExerciseList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ExerciseList/ExerciseList */ \"./src/components/ExerciseList/ExerciseList.tsx\");\n/* harmony import */ var _side_bar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar.scss */ \"./src/components/SideBar/side-bar.scss\");\n\n\n\n\nvar SideBar = function SideBar() {\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var lettersExercises = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return (0,_utils_generateLetterExercises__WEBPACK_IMPORTED_MODULE_1__.getFullListOfPracticeAndReviewExercises)();\n  }, []);\n  var textExercises = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return (0,_utils_generateLetterExercises__WEBPACK_IMPORTED_MODULE_1__.getListOfTextExercises)();\n  }, []);\n  var vocabExercises = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return (0,_utils_generateLetterExercises__WEBPACK_IMPORTED_MODULE_1__.getListOfTextExercises)();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _side_bar_scss__WEBPACK_IMPORTED_MODULE_3__.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"\\u05D4\\u05E7\\u05DC\\u05D3\\u05D4 \\u05E2\\u05D9\\u05D5\\u05D5\\u05E8\\u05EA\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExerciseList_ExerciseList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _side_bar_scss__WEBPACK_IMPORTED_MODULE_3__.list,\n    title: \"\\u05E9\\u05D9\\u05E2\\u05D5\\u05E8\\u05D9 \\u05D0\\u05D5\\u05EA\\u05D9\\u05D5\\u05EA\",\n    emoji: \"\\u2328\\uFE0F\",\n    exercises: lettersExercises\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExerciseList_ExerciseList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Vocabulary\",\n    emoji: \"\\uFE0F\\uD83D\\uDCD3\",\n    exercises: vocabExercises\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExerciseList_ExerciseList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\\u05D8\\u05E7\\u05E1\\u05D8\\u05D9\\u05DD\",\n    emoji: \"\\uFE0F\\uD83D\\uDCD6\",\n    exercises: textExercises\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/SideBar/SideBar.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ab0147b05bd8d7063df")
/******/ })();
/******/ 
/******/ }
);