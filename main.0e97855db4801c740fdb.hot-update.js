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

/***/ "./src/components/HebrewTouchTyping/HebrewTouchTyping.tsx":
/*!****************************************************************!*\
  !*** ./src/components/HebrewTouchTyping/HebrewTouchTyping.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ExerciseTextBlock_ExerciseTextBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExerciseTextBlock/ExerciseTextBlock */ \"./src/components/ExerciseTextBlock/ExerciseTextBlock.tsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hebrew_touch_typing_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hebrew-touch-typing.scss */ \"./src/components/HebrewTouchTyping/hebrew-touch-typing.scss\");\n/* harmony import */ var _ExerciseTitle_ExerciseTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ExerciseTitle/ExerciseTitle */ \"./src/components/ExerciseTitle/ExerciseTitle.tsx\");\n/* harmony import */ var _ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ExerciseContext/ExerciseContext */ \"./src/components/ExerciseContext/ExerciseContext.tsx\");\n/* harmony import */ var _ExerciseCompleteCard_ExerciseCompleteCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ExerciseCompleteCard/ExerciseCompleteCard */ \"./src/components/ExerciseCompleteCard/ExerciseCompleteCard.tsx\");\n/* harmony import */ var _HeroSection_HeroSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../HeroSection/HeroSection */ \"./src/components/HeroSection/HeroSection.tsx\");\n/* harmony import */ var _utils_useWPM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/useWPM */ \"./src/utils/useWPM.tsx\");\n/* harmony import */ var _KeyboardSvg_KeyboardSvg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../KeyboardSvg/KeyboardSvg */ \"./src/components/KeyboardSvg/KeyboardSvg.tsx\");\n/* harmony import */ var _UserDataProvider_UserDataProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UserDataProvider/UserDataProvider */ \"./src/components/UserDataProvider/UserDataProvider.tsx\");\n/* harmony import */ var _utils_normalizeGeresh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/normalizeGeresh */ \"./src/utils/normalizeGeresh.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar HebrewTouchTyping = function HebrewTouchTyping(_ref) {\n  var className = _ref.className,\n    _ref$isHidden = _ref.isHidden,\n    isHidden = _ref$isHidden === void 0 ? false : _ref$isHidden,\n    onHide = _ref.onHide;\n  var _useExerciseContext = (0,_ExerciseContext_ExerciseContext__WEBPACK_IMPORTED_MODULE_7__.useExerciseContext)(),\n    selectedExercise = _useExerciseContext.selectedExercise;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n    isExerciseComplete = _useState2[0],\n    setIsExerciseComplete = _useState2[1];\n  var text = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    var _selectedExercise$tex;\n    return (_selectedExercise$tex = selectedExercise === null || selectedExercise === void 0 ? void 0 : selectedExercise.text.join('')) !== null && _selectedExercise$tex !== void 0 ? _selectedExercise$tex : '';\n  }, [selectedExercise]);\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n    inputValue = _useState4[0],\n    setInputValue = _useState4[1];\n  var _useWPM = (0,_utils_useWPM__WEBPACK_IMPORTED_MODULE_10__.useWPM)(inputValue, text),\n    wpm = _useWPM.wpm,\n    elapsedTimeSeconds = _useWPM.elapsedTimeSeconds,\n    resetWPM = _useWPM.resetWPM;\n  var isFinished = text.length === inputValue.length;\n  var _useUserDataContext = (0,_UserDataProvider_UserDataProvider__WEBPACK_IMPORTED_MODULE_12__.useUserDataContext)(),\n    persistExerciseIfNewRecord = _useUserDataContext.persistExerciseIfNewRecord;\n  var currentLetter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    return text[Math.max(0, inputValue.length)];\n  }, [inputValue, text]);\n  var handleKeyboardHidden = function handleKeyboardHidden() {};\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var _inputRef$current;\n    setInputValue('');\n    setIsExerciseComplete(false);\n    resetWPM();\n    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();\n  }, [resetWPM, selectedExercise]);\n  var onExerciseCompleted = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    if (selectedExercise == null) {\n      return;\n    }\n    persistExerciseIfNewRecord({\n      exerciseIndex: selectedExercise.index,\n      wpmRecord: wpm\n    });\n    setIsExerciseComplete(true);\n  }, [persistExerciseIfNewRecord, selectedExercise, wpm]);\n  var onInputChanged = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (newText) {\n    if (selectedExercise == null || isExerciseComplete) {\n      return;\n    }\n    var normalizedText = (0,_utils_normalizeGeresh__WEBPACK_IMPORTED_MODULE_13__.normalizeGeresh)(newText);\n    setInputValue(normalizedText);\n    if (newText.length === text.length) {\n      onExerciseCompleted();\n    }\n  }, [isExerciseComplete, onExerciseCompleted, selectedExercise, text.length]);\n  if (selectedExercise == null) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_HeroSection_HeroSection__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_hebrew_touch_typing_scss__WEBPACK_IMPORTED_MODULE_5__.root, className)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"input\", {\n    \"aria-hidden\": \"true\",\n    \"data-testid\": \"input\",\n    className: _hebrew_touch_typing_scss__WEBPACK_IMPORTED_MODULE_5__.input,\n    ref: inputRef,\n    autoFocus: true,\n    onBlur: function onBlur() {\n      var _inputRef$current2;\n      return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();\n    },\n    value: inputValue,\n    onChange: function onChange(e) {\n      return onInputChanged(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ExerciseTitle_ExerciseTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _hebrew_touch_typing_scss__WEBPACK_IMPORTED_MODULE_5__.title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ExerciseTextBlock_ExerciseTextBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    userInputText: inputValue\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_hebrew_touch_typing_scss__WEBPACK_IMPORTED_MODULE_5__.wpm, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _hebrew_touch_typing_scss__WEBPACK_IMPORTED_MODULE_5__.wpmShown, elapsedTimeSeconds > 1 && !isFinished))\n  }, wpm.toFixed(0), \" WPM\"), isExerciseComplete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ExerciseCompleteCard_ExerciseCompleteCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    wpm: wpm,\n    inputText: inputValue,\n    exerciseText: text\n  }) : !isHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_KeyboardSvg_KeyboardSvg__WEBPACK_IMPORTED_MODULE_11__.KeyboardSvg, {\n    currentLetter: currentLetter\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HebrewTouchTyping);\n\n//# sourceURL=webpack://hebrew-touch-typing/./src/components/HebrewTouchTyping/HebrewTouchTyping.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6bfd1a240e17179f2a52")
/******/ })();
/******/ 
/******/ }
);