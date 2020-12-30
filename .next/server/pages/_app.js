module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-datasheet/lib/react-datasheet.css":
/*!**************************************************************!*\
  !*** ./node_modules/react-datasheet/lib/react-datasheet.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRhc2hlZXQvbGliL3JlYWN0LWRhdGFzaGVldC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-datasheet/lib/react-datasheet.css\n");

/***/ }),

/***/ "./src/lib/state/eventHandlers/eventHandlers.js":
/*!******************************************************!*\
  !*** ./src/lib/state/eventHandlers/eventHandlers.js ***!
  \******************************************************/
/*! exports provided: setScanUrl, setScanCtgs, setMetadata, reSetScanUrl, addInfoEvent, addDataEvent, addErrorEvent, setScanCompleted, setProcessInProgress, startStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScanUrl\", function() { return setScanUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScanCtgs\", function() { return setScanCtgs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMetadata\", function() { return setMetadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reSetScanUrl\", function() { return reSetScanUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addInfoEvent\", function() { return addInfoEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDataEvent\", function() { return addDataEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addErrorEvent\", function() { return addErrorEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScanCompleted\", function() { return setScanCompleted; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProcessInProgress\", function() { return setProcessInProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startStream\", function() { return startStream; });\nconst setScanUrl = (state, scanUrl) => {\n  state.scanUrl = scanUrl;\n};\nconst setScanCtgs = (state, scanCtgs) => {\n  state.scanCtgs = scanCtgs;\n};\nconst setMetadata = (state, meta) => {\n  state.metadata = meta;\n};\nconst reSetScanUrl = state => {\n  state.scanUrl = \"\";\n  state.scanCtgs = \"\";\n  state.metadata = {};\n  state.infoEvents = [];\n  state.dataEvents = {};\n  state.errorEvents = [];\n};\nconst addInfoEvent = (state, event) => {\n  state.infoEvents.push(event);\n};\nconst addDataEvent = (state, {\n  url,\n  data\n}) => {\n  const scanData = state.dataEvents[url] || [];\n  state.dataEvents[url] = [...scanData, data];\n};\nconst addErrorEvent = (state, event) => {\n  state.errorEvents.push(event);\n};\nconst setScanCompleted = (state, check) => {\n  state.scanCompleted = check;\n}; // Check switch for the entire process from starting scan to the storing of data in db:\n\nconst setProcessInProgress = (state, check) => {\n  state.processInProgress = check;\n};\nconst startStream = async (actions, query) => {\n  const es = new EventSource(\"/api/stream?\" + query, {\n    withCredentials: true\n  });\n\n  es.onopen = () => {\n    actions.addInfoEvent(\"Connection with server established.\");\n  };\n\n  es.addEventListener(\"info\", ({\n    data\n  }) => {\n    actions.addInfoEvent(JSON.parse(data));\n  });\n  es.addEventListener(\"data\", ({\n    lastEventId: url,\n    data\n  }) => {\n    actions.addDataEvent({\n      url,\n      data: JSON.parse(data)\n    });\n  });\n  es.addEventListener(\"close\", e => {\n    actions.addInfoEvent(\"Connection with server closed.\");\n    actions.addInfoEvent(\"Processing scan data...\");\n    actions.setScanCompleted(true);\n    es.close();\n  });\n  es.addEventListener(\"servererror\", ({\n    lastEventId: url,\n    data\n  }) => {\n    console.log(\"Servererror event lastEventId\", url);\n    console.log(\"Servererror event data\", data);\n    actions.addErrorEvent(\"An error occurred: \" + data);\n    actions.setScanCompleted(true);\n    actions.setProcessInProgress(false); // In case of error, close the process\n\n    es.close();\n  });\n\n  es.onerror = err => {\n    console.warn(\"Actual error event\", err);\n    actions.addErrorEvent(\"An es.onerror occurred\");\n    actions.setScanCompleted(true);\n    actions.setProcessInProgress(false); // In case of error, close the process\n\n    es.close();\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0YXRlL2V2ZW50SGFuZGxlcnMvZXZlbnRIYW5kbGVycy5qcz9kYjk4Il0sIm5hbWVzIjpbInNldFNjYW5VcmwiLCJzdGF0ZSIsInNjYW5VcmwiLCJzZXRTY2FuQ3RncyIsInNjYW5DdGdzIiwic2V0TWV0YWRhdGEiLCJtZXRhIiwibWV0YWRhdGEiLCJyZVNldFNjYW5VcmwiLCJpbmZvRXZlbnRzIiwiZGF0YUV2ZW50cyIsImVycm9yRXZlbnRzIiwiYWRkSW5mb0V2ZW50IiwiZXZlbnQiLCJwdXNoIiwiYWRkRGF0YUV2ZW50IiwidXJsIiwiZGF0YSIsInNjYW5EYXRhIiwiYWRkRXJyb3JFdmVudCIsInNldFNjYW5Db21wbGV0ZWQiLCJjaGVjayIsInNjYW5Db21wbGV0ZWQiLCJzZXRQcm9jZXNzSW5Qcm9ncmVzcyIsInByb2Nlc3NJblByb2dyZXNzIiwic3RhcnRTdHJlYW0iLCJhY3Rpb25zIiwicXVlcnkiLCJlcyIsIkV2ZW50U291cmNlIiwid2l0aENyZWRlbnRpYWxzIiwib25vcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkpTT04iLCJwYXJzZSIsImxhc3RFdmVudElkIiwiZSIsImNsb3NlIiwiY29uc29sZSIsImxvZyIsIm9uZXJyb3IiLCJlcnIiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsT0FBUixLQUFvQjtBQUM1Q0QsT0FBSyxDQUFDQyxPQUFOLEdBQWdCQSxPQUFoQjtBQUNELENBRk07QUFJQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRRyxRQUFSLEtBQXFCO0FBQzlDSCxPQUFLLENBQUNHLFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0QsQ0FGTTtBQUlBLE1BQU1DLFdBQVcsR0FBRyxDQUFDSixLQUFELEVBQVFLLElBQVIsS0FBaUI7QUFD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LENBQUNDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q3ZCLEdBQTdDO0FBQ0FzQixXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ3RCLElBQXRDO0FBQ0FTLFdBQU8sQ0FBQ1AsYUFBUixDQUFzQix3QkFBd0JGLElBQTlDO0FBQ0FTLFdBQU8sQ0FBQ04sZ0JBQVIsQ0FBeUIsSUFBekI7QUFDQU0sV0FBTyxDQUFDSCxvQkFBUixDQUE2QixLQUE3QixFQUxpRSxDQUs1Qjs7QUFDckNLLE1BQUUsQ0FBQ1MsS0FBSDtBQUNELEdBUEQ7O0FBUUFULElBQUUsQ0FBQ1ksT0FBSCxHQUFhQyxHQUFHLElBQUk7QUFDbEJILFdBQU8sQ0FBQ0ksSUFBUixDQUFhLG9CQUFiLEVBQW1DRCxHQUFuQztBQUNBZixXQUFPLENBQUNQLGFBQVIsQ0FBc0Isd0JBQXRCO0FBQ0FPLFdBQU8sQ0FBQ04sZ0JBQVIsQ0FBeUIsSUFBekI7QUFDQU0sV0FBTyxDQUFDSCxvQkFBUixDQUE2QixLQUE3QixFQUprQixDQUltQjs7QUFDckNLLE1BQUUsQ0FBQ1MsS0FBSDtBQUNELEdBTkQ7QUFPRCxDQW5DTSIsImZpbGUiOiIuL3NyYy9saWIvc3RhdGUvZXZlbnRIYW5kbGVycy9ldmVudEhhbmRsZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldFNjYW5VcmwgPSAoc3RhdGUsIHNjYW5VcmwpID0+IHtcbiAgc3RhdGUuc2NhblVybCA9IHNjYW5Vcmw7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0U2NhbkN0Z3MgPSAoc3RhdGUsIHNjYW5DdGdzKSA9PiB7XG4gIHN0YXRlLnNjYW5DdGdzID0gc2NhbkN0Z3M7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TWV0YWRhdGEgPSAoc3RhdGUsIG1ldGEpID0+IHtcbiAgc3RhdGUubWV0YWRhdGEgPSBtZXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlU2V0U2NhblVybCA9IHN0YXRlID0+IHtcbiAgc3RhdGUuc2NhblVybCA9IFwiXCI7XG4gIHN0YXRlLnNjYW5DdGdzID0gXCJcIjtcbiAgc3RhdGUubWV0YWRhdGEgPSB7fTtcbiAgc3RhdGUuaW5mb0V2ZW50cyA9IFtdO1xuICBzdGF0ZS5kYXRhRXZlbnRzID0ge307XG4gIHN0YXRlLmVycm9yRXZlbnRzID0gW107XG59O1xuXG5leHBvcnQgY29uc3QgYWRkSW5mb0V2ZW50ID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICBzdGF0ZS5pbmZvRXZlbnRzLnB1c2goZXZlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERhdGFFdmVudCA9IChzdGF0ZSwgeyB1cmwsIGRhdGEgfSkgPT4ge1xuICBjb25zdCBzY2FuRGF0YSA9IHN0YXRlLmRhdGFFdmVudHNbdXJsXSB8fCBbXTtcbiAgc3RhdGUuZGF0YUV2ZW50c1t1cmxdID0gWy4uLnNjYW5EYXRhLCBkYXRhXTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFcnJvckV2ZW50ID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICBzdGF0ZS5lcnJvckV2ZW50cy5wdXNoKGV2ZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRTY2FuQ29tcGxldGVkID0gKHN0YXRlLCBjaGVjaykgPT4ge1xuICBzdGF0ZS5zY2FuQ29tcGxldGVkID0gY2hlY2s7XG59O1xuLy8gQ2hlY2sgc3dpdGNoIGZvciB0aGUgZW50aXJlIHByb2Nlc3MgZnJvbSBzdGFydGluZyBzY2FuIHRvIHRoZSBzdG9yaW5nIG9mIGRhdGEgaW4gZGI6XG5leHBvcnQgY29uc3Qgc2V0UHJvY2Vzc0luUHJvZ3Jlc3MgPSAoc3RhdGUsIGNoZWNrKSA9PiB7XG4gIHN0YXRlLnByb2Nlc3NJblByb2dyZXNzID0gY2hlY2s7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhcnRTdHJlYW0gPSBhc3luYyAoYWN0aW9ucywgcXVlcnkpID0+IHtcbiAgY29uc3QgZXMgPSBuZXcgRXZlbnRTb3VyY2UoXCIvYXBpL3N0cmVhbT9cIiArIHF1ZXJ5LCB7XG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gIH0pO1xuXG4gIGVzLm9ub3BlbiA9ICgpID0+IHtcbiAgICBhY3Rpb25zLmFkZEluZm9FdmVudChcIkNvbm5lY3Rpb24gd2l0aCBzZXJ2ZXIgZXN0YWJsaXNoZWQuXCIpO1xuICB9O1xuICBlcy5hZGRFdmVudExpc3RlbmVyKFwiaW5mb1wiLCAoeyBkYXRhIH0pID0+IHtcbiAgICBhY3Rpb25zLmFkZEluZm9FdmVudChKU09OLnBhcnNlKGRhdGEpKTtcbiAgfSk7XG4gIGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhXCIsICh7IGxhc3RFdmVudElkOiB1cmwsIGRhdGEgfSkgPT4ge1xuICAgIGFjdGlvbnMuYWRkRGF0YUV2ZW50KHsgdXJsLCBkYXRhOiBKU09OLnBhcnNlKGRhdGEpIH0pO1xuICB9KTtcbiAgZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsIGUgPT4ge1xuICAgIGFjdGlvbnMuYWRkSW5mb0V2ZW50KFwiQ29ubmVjdGlvbiB3aXRoIHNlcnZlciBjbG9zZWQuXCIpO1xuICAgIGFjdGlvbnMuYWRkSW5mb0V2ZW50KFwiUHJvY2Vzc2luZyBzY2FuIGRhdGEuLi5cIik7XG4gICAgYWN0aW9ucy5zZXRTY2FuQ29tcGxldGVkKHRydWUpO1xuICAgIGVzLmNsb3NlKCk7XG4gIH0pO1xuICBlcy5hZGRFdmVudExpc3RlbmVyKFwic2VydmVyZXJyb3JcIiwgKHsgbGFzdEV2ZW50SWQ6IHVybCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXJlcnJvciBldmVudCBsYXN0RXZlbnRJZFwiLCB1cmwpO1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyZXJyb3IgZXZlbnQgZGF0YVwiLCBkYXRhKTtcbiAgICBhY3Rpb25zLmFkZEVycm9yRXZlbnQoXCJBbiBlcnJvciBvY2N1cnJlZDogXCIgKyBkYXRhKTtcbiAgICBhY3Rpb25zLnNldFNjYW5Db21wbGV0ZWQodHJ1ZSk7XG4gICAgYWN0aW9ucy5zZXRQcm9jZXNzSW5Qcm9ncmVzcyhmYWxzZSk7IC8vIEluIGNhc2Ugb2YgZXJyb3IsIGNsb3NlIHRoZSBwcm9jZXNzXG4gICAgZXMuY2xvc2UoKTtcbiAgfSk7XG4gIGVzLm9uZXJyb3IgPSBlcnIgPT4ge1xuICAgIGNvbnNvbGUud2FybihcIkFjdHVhbCBlcnJvciBldmVudFwiLCBlcnIpO1xuICAgIGFjdGlvbnMuYWRkRXJyb3JFdmVudChcIkFuIGVzLm9uZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgYWN0aW9ucy5zZXRTY2FuQ29tcGxldGVkKHRydWUpO1xuICAgIGFjdGlvbnMuc2V0UHJvY2Vzc0luUHJvZ3Jlc3MoZmFsc2UpOyAvLyBJbiBjYXNlIG9mIGVycm9yLCBjbG9zZSB0aGUgcHJvY2Vzc1xuICAgIGVzLmNsb3NlKCk7XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/state/eventHandlers/eventHandlers.js\n");

/***/ }),

/***/ "./src/lib/state/store/Store.js":
/*!**************************************!*\
  !*** ./src/lib/state/store/Store.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eventHandlers/eventHandlers.js */ \"./src/lib/state/eventHandlers/eventHandlers.js\");\n\n\nconst Store = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  scanUrl: \"\",\n  scanCtgs: \"\",\n  metadata: {},\n  infoEvents: [],\n  dataEvents: {},\n  errorEvents: [],\n  scanCompleted: false,\n  processInProgress: false,\n  setScanUrl: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, scanUrl) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setScanUrl\"])(state, scanUrl)),\n  setScanCtgs: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, scanCtgs) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setScanCtgs\"])(state, scanCtgs)),\n  setMetadata: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, meta) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setMetadata\"])(state, meta)),\n  reSetScanUrl: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])(state => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"reSetScanUrl\"])(state)),\n  setScanCompleted: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, check) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setScanCompleted\"])(state, check);\n  }),\n  // Check switch for the entire process from starting scan to the storing of data in db:\n  setProcessInProgress: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, check) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setProcessInProgress\"])(state, check);\n  }),\n  addInfoEvent: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, event) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"addInfoEvent\"])(state, event);\n  }),\n  addDataEvent: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, payload) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"addDataEvent\"])(state, payload);\n  }),\n  addErrorEvent: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, event) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"addErrorEvent\"])(state, event);\n  }),\n  startStream: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"thunk\"])((actions, query) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"startStream\"])(actions, query))\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0YXRlL3N0b3JlL1N0b3JlLmpzPzMzMzMiXSwibmFtZXMiOlsiU3RvcmUiLCJjcmVhdGVTdG9yZSIsInNjYW5VcmwiLCJzY2FuQ3RncyIsIm1ldGFkYXRhIiwiaW5mb0V2ZW50cyIsImRhdGFFdmVudHMiLCJlcnJvckV2ZW50cyIsInNjYW5Db21wbGV0ZWQiLCJwcm9jZXNzSW5Qcm9ncmVzcyIsInNldFNjYW5VcmwiLCJhY3Rpb24iLCJzdGF0ZSIsInNldFNjYW5DdGdzIiwic2V0TWV0YWRhdGEiLCJtZXRhIiwicmVTZXRTY2FuVXJsIiwic2V0U2NhbkNvbXBsZXRlZCIsImNoZWNrIiwic2V0UHJvY2Vzc0luUHJvZ3Jlc3MiLCJhZGRJbmZvRXZlbnQiLCJldmVudCIsImFkZERhdGFFdmVudCIsInBheWxvYWQiLCJhZGRFcnJvckV2ZW50Iiwic3RhcnRTdHJlYW0iLCJ0aHVuayIsImFjdGlvbnMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBYUEsTUFBTUEsS0FBSyxHQUFHQyw4REFBVyxDQUFDO0FBQ3hCQyxTQUFPLEVBQUUsRUFEZTtBQUV4QkMsVUFBUSxFQUFFLEVBRmM7QUFHeEJDLFVBQVEsRUFBRSxFQUhjO0FBSXhCQyxZQUFVLEVBQUUsRUFKWTtBQUt4QkMsWUFBVSxFQUFFLEVBTFk7QUFNeEJDLGFBQVcsRUFBRSxFQU5XO0FBT3hCQyxlQUFhLEVBQUUsS0FQUztBQVF4QkMsbUJBQWlCLEVBQUUsS0FSSztBQVN4QkMsWUFBVSxFQUFFQyx5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUVYsT0FBUixLQUFvQlEsa0ZBQVUsQ0FBQ0UsS0FBRCxFQUFRVixPQUFSLENBQS9CLENBVE07QUFVeEJXLGFBQVcsRUFBRUYseURBQU0sQ0FBQyxDQUFDQyxLQUFELEVBQVFULFFBQVIsS0FBcUJVLG1GQUFXLENBQUNELEtBQUQsRUFBUVQsUUFBUixDQUFqQyxDQVZLO0FBV3hCVyxhQUFXLEVBQUVILHlEQUFNLENBQUMsQ0FBQ0MsS0FBRCxFQUFRRyxJQUFSLEtBQWlCRCxtRkFBVyxDQUFDRixLQUFELEVBQVFHLElBQVIsQ0FBN0IsQ0FYSztBQVl4QkMsY0FBWSxFQUFFTCx5REFBTSxDQUFDQyxLQUFLLElBQUlJLG9GQUFZLENBQUNKLEtBQUQsQ0FBdEIsQ0FaSTtBQWF4Qkssa0JBQWdCLEVBQUVOLHlEQUFNLENBQUMsQ0FBQ0MsS0FBRCxFQUFRTSxLQUFSLEtBQWtCO0FBQ3pDRCw0RkFBZ0IsQ0FBQ0wsS0FBRCxFQUFRTSxLQUFSLENBQWhCO0FBQ0QsR0FGdUIsQ0FiQTtBQWdCeEI7QUFDQUMsc0JBQW9CLEVBQUVSLHlEQUFNLENBQUMsQ0FBQ0MsS0FBRCxFQUFRTSxLQUFSLEtBQWtCO0FBQzdDQyxnR0FBb0IsQ0FBQ1AsS0FBRCxFQUFRTSxLQUFSLENBQXBCO0FBQ0QsR0FGMkIsQ0FqQko7QUFvQnhCRSxjQUFZLEVBQUVULHlEQUFNLENBQUMsQ0FBQ0MsS0FBRCxFQUFRUyxLQUFSLEtBQWtCO0FBQ3JDRCx3RkFBWSxDQUFDUixLQUFELEVBQVFTLEtBQVIsQ0FBWjtBQUNELEdBRm1CLENBcEJJO0FBdUJ4QkMsY0FBWSxFQUFFWCx5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUVcsT0FBUixLQUFvQjtBQUN2Q0Qsd0ZBQVksQ0FBQ1YsS0FBRCxFQUFRVyxPQUFSLENBQVo7QUFDRCxHQUZtQixDQXZCSTtBQTBCeEJDLGVBQWEsRUFBRWIseURBQU0sQ0FBQyxDQUFDQyxLQUFELEVBQVFTLEtBQVIsS0FBa0I7QUFDdENHLHlGQUFhLENBQUNaLEtBQUQsRUFBUVMsS0FBUixDQUFiO0FBQ0QsR0FGb0IsQ0ExQkc7QUE2QnhCSSxhQUFXLEVBQUVDLHdEQUFLLENBQUMsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CSCxtRkFBVyxDQUFDRSxPQUFELEVBQVVDLEtBQVYsQ0FBaEM7QUE3Qk0sQ0FBRCxDQUF6QjtBQWdDZTVCLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9zdGF0ZS9zdG9yZS9TdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhY3Rpb24sIGNvbXB1dGVkLCB0aHVuayB9IGZyb20gXCJlYXN5LXBlYXN5XCI7XG5cbmltcG9ydCB7XG4gIHNldFNjYW5VcmwsXG4gIHNldFNjYW5DdGdzLFxuICBzZXRNZXRhZGF0YSxcbiAgcmVTZXRTY2FuVXJsLFxuICBzZXRTY2FuQ29tcGxldGVkLFxuICBzZXRQcm9jZXNzSW5Qcm9ncmVzcyxcbiAgYWRkSW5mb0V2ZW50LFxuICBhZGRFcnJvckV2ZW50LFxuICBhZGREYXRhRXZlbnQsXG4gIHN0YXJ0U3RyZWFtXG59IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL2V2ZW50SGFuZGxlcnMuanNcIjtcblxuY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZSh7XG4gIHNjYW5Vcmw6IFwiXCIsXG4gIHNjYW5DdGdzOiBcIlwiLFxuICBtZXRhZGF0YToge30sXG4gIGluZm9FdmVudHM6IFtdLFxuICBkYXRhRXZlbnRzOiB7fSxcbiAgZXJyb3JFdmVudHM6IFtdLFxuICBzY2FuQ29tcGxldGVkOiBmYWxzZSxcbiAgcHJvY2Vzc0luUHJvZ3Jlc3M6IGZhbHNlLFxuICBzZXRTY2FuVXJsOiBhY3Rpb24oKHN0YXRlLCBzY2FuVXJsKSA9PiBzZXRTY2FuVXJsKHN0YXRlLCBzY2FuVXJsKSksXG4gIHNldFNjYW5DdGdzOiBhY3Rpb24oKHN0YXRlLCBzY2FuQ3RncykgPT4gc2V0U2NhbkN0Z3Moc3RhdGUsIHNjYW5DdGdzKSksXG4gIHNldE1ldGFkYXRhOiBhY3Rpb24oKHN0YXRlLCBtZXRhKSA9PiBzZXRNZXRhZGF0YShzdGF0ZSwgbWV0YSkpLFxuICByZVNldFNjYW5Vcmw6IGFjdGlvbihzdGF0ZSA9PiByZVNldFNjYW5Vcmwoc3RhdGUpKSxcbiAgc2V0U2NhbkNvbXBsZXRlZDogYWN0aW9uKChzdGF0ZSwgY2hlY2spID0+IHtcbiAgICBzZXRTY2FuQ29tcGxldGVkKHN0YXRlLCBjaGVjayk7XG4gIH0pLFxuICAvLyBDaGVjayBzd2l0Y2ggZm9yIHRoZSBlbnRpcmUgcHJvY2VzcyBmcm9tIHN0YXJ0aW5nIHNjYW4gdG8gdGhlIHN0b3Jpbmcgb2YgZGF0YSBpbiBkYjpcbiAgc2V0UHJvY2Vzc0luUHJvZ3Jlc3M6IGFjdGlvbigoc3RhdGUsIGNoZWNrKSA9PiB7XG4gICAgc2V0UHJvY2Vzc0luUHJvZ3Jlc3Moc3RhdGUsIGNoZWNrKTtcbiAgfSksXG4gIGFkZEluZm9FdmVudDogYWN0aW9uKChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBhZGRJbmZvRXZlbnQoc3RhdGUsIGV2ZW50KTtcbiAgfSksXG4gIGFkZERhdGFFdmVudDogYWN0aW9uKChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICAgIGFkZERhdGFFdmVudChzdGF0ZSwgcGF5bG9hZCk7XG4gIH0pLFxuICBhZGRFcnJvckV2ZW50OiBhY3Rpb24oKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGFkZEVycm9yRXZlbnQoc3RhdGUsIGV2ZW50KTtcbiAgfSksXG4gIHN0YXJ0U3RyZWFtOiB0aHVuaygoYWN0aW9ucywgcXVlcnkpID0+IHN0YXJ0U3RyZWFtKGFjdGlvbnMsIHF1ZXJ5KSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/state/store/Store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/normalize.css */ \"./src/styles/normalize.css\");\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_skeleton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/skeleton.css */ \"./src/styles/skeleton.css\");\n/* harmony import */ var _styles_skeleton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_skeleton_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_datasheet_lib_react_datasheet_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datasheet/lib/react-datasheet.css */ \"./node_modules/react-datasheet/lib/react-datasheet.css\");\n/* harmony import */ var react_datasheet_lib_react_datasheet_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datasheet_lib_react_datasheet_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_state_store_Store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/state/store/Store.js */ \"./src/lib/state/store/Store.js\");\n\nvar _jsxFileName = \"/home/angelovski/Documents/Projects/dccscanner/web/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(easy_peasy__WEBPACK_IMPORTED_MODULE_1__[\"StoreProvider\"], {\n    store: _lib_state_store_Store_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSxxRUFBQyx3REFBRDtBQUFlLFNBQUssRUFBRUMsaUVBQXRCO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZVByb3ZpZGVyIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9za2VsZXRvbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbmltcG9ydCBcInJlYWN0LWRhdGFzaGVldC9saWIvcmVhY3QtZGF0YXNoZWV0LmNzc1wiO1xuXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL2xpYi9zdGF0ZS9zdG9yZS9TdG9yZS5qc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U3RvcmVQcm92aWRlciBzdG9yZT17U3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU3RvcmVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.css\n");

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/normalize.css\n");

/***/ }),

/***/ "./src/styles/skeleton.css":
/*!*********************************!*\
  !*** ./src/styles/skeleton.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvc2tlbGV0b24uY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/skeleton.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"easy-peasy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlYXN5LXBlYXN5XCI/Y2MyNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJlYXN5LXBlYXN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWFzeS1wZWFzeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///easy-peasy\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });