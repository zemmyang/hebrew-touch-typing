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

/***/ "./src/components/ExerciseMenuItem/ExerciseMenuItem.tsx":
/*!**************************************************************!*\
  !*** ./src/components/ExerciseMenuItem/ExerciseMenuItem.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _constants_practiceAndReviewLetterSets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/practiceAndReviewLetterSets */ \"./src/constants/practiceAndReviewLetterSets.ts\");\n/* harmony import */ var _utils_exerciseUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/exerciseUtils */ \"./src/utils/exerciseUtils.ts\");\n/* harmony import */ var _ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ExerciseContext/ExerciseContext */ \"./src/components/ExerciseContext/ExerciseContext.tsx\");\n/* harmony import */ var _LetterKeycap_LetterKeycap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LetterKeycap/LetterKeycap */ \"./src/components/LetterKeycap/LetterKeycap.tsx\");\n/* harmony import */ var _UserDataProvider_UserDataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UserDataProvider/UserDataProvider */ \"./src/components/UserDataProvider/UserDataProvider.tsx\");\n/* harmony import */ var _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exercise-menu-item.scss */ \"./src/components/ExerciseMenuItem/exercise-menu-item.scss\");\n\n\n\n\n\n\n\n\n\nvar ExerciseMenuItem = function ExerciseMenuItem(_ref) {\n  var exercise = _ref.exercise,\n    _ref$isDarkMode = _ref.isDarkMode,\n    isDarkMode = _ref$isDarkMode === void 0 ? false : _ref$isDarkMode;\n  var _useUserDataContext = (0,_UserDataProvider_UserDataProvider__WEBPACK_IMPORTED_MODULE_7__.useUserDataContext)(),\n    userData = _useUserDataContext.userData;\n  var _useExerciseContext = (0,_ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_5__.useExerciseContext)(),\n    selectedExercise = _useExerciseContext.selectedExercise,\n    setSelectedExercise = _useExerciseContext.setSelectedExercise;\n  var wpmRecord = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    var _userData$exercises$e;\n    return (_userData$exercises$e = userData.exercises[exercise.index]) === null || _userData$exercises$e === void 0 ? void 0 : _userData$exercises$e.wpmRecord;\n  }, [exercise.index, userData]);\n  var isSelected = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    return (selectedExercise === null || selectedExercise === void 0 ? void 0 : selectedExercise.index) === exercise.index;\n  }, [exercise.index, selectedExercise === null || selectedExercise === void 0 ? void 0 : selectedExercise.index]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.root, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.selectedExercise, isSelected)),\n    \"data-testid\": \"exercise-menu-item\",\n    onClick: function onClick() {\n      return setSelectedExercise(exercise);\n    }\n  }, wpmRecord && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.wpm\n  }, wpmRecord.toFixed(0), \" WPM\"), (0,_utils_exerciseUtils__WEBPACK_IMPORTED_MODULE_4__.isLettersExercise)(exercise) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.lessonType\n  }, exercise.type === _constants_practiceAndReviewLetterSets__WEBPACK_IMPORTED_MODULE_3__.ExerciseType.PRACTICE ? 'תרגול' : 'שיעור'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.keycaps\n  }, (0,_utils_exerciseUtils__WEBPACK_IMPORTED_MODULE_4__.assertLettersExercise)(exercise).newLetters.map(function (letter) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_LetterKeycap_LetterKeycap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: letter,\n      letter: letter,\n      isDarkMode: isDarkMode\n    });\n  }))), exercise.type === _constants_practiceAndReviewLetterSets__WEBPACK_IMPORTED_MODULE_3__.ExerciseType.TEXT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.textExerciseLabel\n  }, exercise.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    \"data-testid\": \"exercise-number-pill-\".concat(exercise.index + 1),\n    className: _exercise_menu_item_scss__WEBPACK_IMPORTED_MODULE_8__.exerciseNumberPill\n  }, exercise.index + 1));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExerciseMenuItem);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/ExerciseMenuItem/ExerciseMenuItem.tsx?");

/***/ }),

/***/ "./src/components/LetterKeycap/LetterKeycap.tsx":
/*!******************************************************!*\
  !*** ./src/components/LetterKeycap/LetterKeycap.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _letter_keycap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letter-keycap.scss */ \"./src/components/LetterKeycap/letter-keycap.scss\");\n\n\nvar LetterKeycap = function LetterKeycap(_ref) {\n  var letter = _ref.letter,\n    _ref$isDarkMode = _ref.isDarkMode,\n    isDarkMode = _ref$isDarkMode === void 0 ? false : _ref$isDarkMode;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _letter_keycap_scss__WEBPACK_IMPORTED_MODULE_1__.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: _letter_keycap_scss__WEBPACK_IMPORTED_MODULE_1__.letter\n  }, letter));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LetterKeycap);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/LetterKeycap/LetterKeycap.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0624ede9b896e1cd47f7")
/******/ })();
/******/ 
/******/ }
);