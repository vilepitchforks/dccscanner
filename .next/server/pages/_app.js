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

/***/ "./src/lib/helpers/processDb.js":
/*!**************************************!*\
  !*** ./src/lib/helpers/processDb.js ***!
  \**************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony import */ var zangodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zangodb */ \"zangodb\");\n/* harmony import */ var zangodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zangodb__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Model {\n  constructor() {\n    const db = new zangodb__WEBPACK_IMPORTED_MODULE_0___default.a.Db(\"dcc\", {\n      // sets the schema, scannedUrl and url are the same url sent by the user\n      metadata: [\"scannedUrl\"],\n      dccdata: [\"url\", \"timestamp\"]\n    });\n    db.open(); // creates the db and collections\n\n    db.on(\"blocked\", () => {\n      console.warn(\"database version cannot be upgraded\");\n    });\n    this.db = db;\n    this.colLabel = \"\";\n  }\n\n  col(collection) {\n    // Used in conjuction with methods that return Cursor and need extra processing, for example db.find()\n    this.colLabel = collection;\n    return this;\n  }\n\n  collection(collection) {\n    // Returns Collection on Model.db instance\n    return this.db.collection(collection);\n  }\n\n  async findAsArray(query, options) {\n    // Used in conjuction with db.col()\n    return await this.db.collection(this.colLabel).find(query, options).toArray();\n  }\n\n  async remove(url) {\n    return await Promise.all([this.db.collection(\"metadata\").remove({\n      scannedUrl: url\n    }), this.db.collection(\"dccdata\").remove({\n      url\n    })]);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2hlbHBlcnMvcHJvY2Vzc0RiLmpzP2E5ZjUiXSwibmFtZXMiOlsiTW9kZWwiLCJjb25zdHJ1Y3RvciIsImRiIiwiemFuZ28iLCJEYiIsIm1ldGFkYXRhIiwiZGNjZGF0YSIsIm9wZW4iLCJvbiIsImNvbnNvbGUiLCJ3YXJuIiwiY29sTGFiZWwiLCJjb2wiLCJjb2xsZWN0aW9uIiwiZmluZEFzQXJyYXkiLCJxdWVyeSIsIm9wdGlvbnMiLCJmaW5kIiwidG9BcnJheSIsInJlbW92ZSIsInVybCIsIlByb21pc2UiLCJhbGwiLCJzY2FubmVkVXJsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsS0FBTixDQUFZO0FBQ2pCQyxhQUFXLEdBQUc7QUFDWixVQUFNQyxFQUFFLEdBQUcsSUFBSUMsOENBQUssQ0FBQ0MsRUFBVixDQUFhLEtBQWIsRUFBb0I7QUFDN0I7QUFDQUMsY0FBUSxFQUFFLENBQUMsWUFBRCxDQUZtQjtBQUc3QkMsYUFBTyxFQUFFLENBQUMsS0FBRCxFQUFRLFdBQVI7QUFIb0IsS0FBcEIsQ0FBWDtBQUtBSixNQUFFLENBQUNLLElBQUgsR0FOWSxDQU1EOztBQUNYTCxNQUFFLENBQUNNLEVBQUgsQ0FBTSxTQUFOLEVBQWlCLE1BQU07QUFDckJDLGFBQU8sQ0FBQ0MsSUFBUixDQUFhLHFDQUFiO0FBQ0QsS0FGRDtBQUdBLFNBQUtSLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtTLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7QUFFREMsS0FBRyxDQUFDQyxVQUFELEVBQWE7QUFDZDtBQUNBLFNBQUtGLFFBQUwsR0FBZ0JFLFVBQWhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURBLFlBQVUsQ0FBQ0EsVUFBRCxFQUFhO0FBQ3JCO0FBQ0EsV0FBTyxLQUFLWCxFQUFMLENBQVFXLFVBQVIsQ0FBbUJBLFVBQW5CLENBQVA7QUFDRDs7QUFFRCxRQUFNQyxXQUFOLENBQWtCQyxLQUFsQixFQUF5QkMsT0FBekIsRUFBa0M7QUFDaEM7QUFDQSxXQUFPLE1BQU0sS0FBS2QsRUFBTCxDQUNWVyxVQURVLENBQ0MsS0FBS0YsUUFETixFQUVWTSxJQUZVLENBRUxGLEtBRkssRUFFRUMsT0FGRixFQUdWRSxPQUhVLEVBQWI7QUFJRDs7QUFFRCxRQUFNQyxNQUFOLENBQWFDLEdBQWIsRUFBa0I7QUFDaEIsV0FBTyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUN2QixLQUFLcEIsRUFBTCxDQUFRVyxVQUFSLENBQW1CLFVBQW5CLEVBQStCTSxNQUEvQixDQUFzQztBQUFFSSxnQkFBVSxFQUFFSDtBQUFkLEtBQXRDLENBRHVCLEVBRXZCLEtBQUtsQixFQUFMLENBQVFXLFVBQVIsQ0FBbUIsU0FBbkIsRUFBOEJNLE1BQTlCLENBQXFDO0FBQUVDO0FBQUYsS0FBckMsQ0FGdUIsQ0FBWixDQUFiO0FBSUQ7O0FBdkNnQiIsImZpbGUiOiIuL3NyYy9saWIvaGVscGVycy9wcm9jZXNzRGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgemFuZ28gZnJvbSBcInphbmdvZGJcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZGIgPSBuZXcgemFuZ28uRGIoXCJkY2NcIiwge1xuICAgICAgLy8gc2V0cyB0aGUgc2NoZW1hLCBzY2FubmVkVXJsIGFuZCB1cmwgYXJlIHRoZSBzYW1lIHVybCBzZW50IGJ5IHRoZSB1c2VyXG4gICAgICBtZXRhZGF0YTogW1wic2Nhbm5lZFVybFwiXSxcbiAgICAgIGRjY2RhdGE6IFtcInVybFwiLCBcInRpbWVzdGFtcFwiXVxuICAgIH0pO1xuICAgIGRiLm9wZW4oKTsgLy8gY3JlYXRlcyB0aGUgZGIgYW5kIGNvbGxlY3Rpb25zXG4gICAgZGIub24oXCJibG9ja2VkXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihcImRhdGFiYXNlIHZlcnNpb24gY2Fubm90IGJlIHVwZ3JhZGVkXCIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGIgPSBkYjtcbiAgICB0aGlzLmNvbExhYmVsID0gXCJcIjtcbiAgfVxuXG4gIGNvbChjb2xsZWN0aW9uKSB7XG4gICAgLy8gVXNlZCBpbiBjb25qdWN0aW9uIHdpdGggbWV0aG9kcyB0aGF0IHJldHVybiBDdXJzb3IgYW5kIG5lZWQgZXh0cmEgcHJvY2Vzc2luZywgZm9yIGV4YW1wbGUgZGIuZmluZCgpXG4gICAgdGhpcy5jb2xMYWJlbCA9IGNvbGxlY3Rpb247XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb2xsZWN0aW9uKGNvbGxlY3Rpb24pIHtcbiAgICAvLyBSZXR1cm5zIENvbGxlY3Rpb24gb24gTW9kZWwuZGIgaW5zdGFuY2VcbiAgICByZXR1cm4gdGhpcy5kYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgYXN5bmMgZmluZEFzQXJyYXkocXVlcnksIG9wdGlvbnMpIHtcbiAgICAvLyBVc2VkIGluIGNvbmp1Y3Rpb24gd2l0aCBkYi5jb2woKVxuICAgIHJldHVybiBhd2FpdCB0aGlzLmRiXG4gICAgICAuY29sbGVjdGlvbih0aGlzLmNvbExhYmVsKVxuICAgICAgLmZpbmQocXVlcnksIG9wdGlvbnMpXG4gICAgICAudG9BcnJheSgpO1xuICB9XG5cbiAgYXN5bmMgcmVtb3ZlKHVybCkge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmRiLmNvbGxlY3Rpb24oXCJtZXRhZGF0YVwiKS5yZW1vdmUoeyBzY2FubmVkVXJsOiB1cmwgfSksXG4gICAgICB0aGlzLmRiLmNvbGxlY3Rpb24oXCJkY2NkYXRhXCIpLnJlbW92ZSh7IHVybCB9KVxuICAgIF0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/helpers/processDb.js\n");

/***/ }),

/***/ "./src/lib/state/eventHandlers/eventHandlers.js":
/*!******************************************************!*\
  !*** ./src/lib/state/eventHandlers/eventHandlers.js ***!
  \******************************************************/
/*! exports provided: setScanUrl, setScanCtgs, setScanInProgress, setMetadata, reSetScanUrl, addInfoEvent, addDataEvent, addErrorEvent, startStream, setDb, initDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScanUrl\", function() { return setScanUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScanCtgs\", function() { return setScanCtgs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScanInProgress\", function() { return setScanInProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMetadata\", function() { return setMetadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reSetScanUrl\", function() { return reSetScanUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addInfoEvent\", function() { return addInfoEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDataEvent\", function() { return addDataEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addErrorEvent\", function() { return addErrorEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startStream\", function() { return startStream; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDb\", function() { return setDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDb\", function() { return initDb; });\n/* harmony import */ var _helpers_processDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/processDb.js */ \"./src/lib/helpers/processDb.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst setScanUrl = (state, scanUrl) => {\n  state.scanUrl = scanUrl;\n};\nconst setScanCtgs = (state, scanCtgs) => {\n  state.scanCtgs = scanCtgs;\n};\nconst setScanInProgress = (state, check) => {\n  state.scanInProgress = check;\n};\nconst setMetadata = (state, meta) => {\n  state.metadata = meta;\n};\nconst reSetScanUrl = state => {\n  state.scanUrl = \"\";\n  state.scanCtgs = \"\";\n  state.metadata = {};\n  state.infoEvents = [];\n  state.dataEvents = [];\n  state.errorEvents = [];\n};\nconst addInfoEvent = (state, event) => {\n  state.infoEvents.push(event);\n};\nconst addDataEvent = (state, {\n  url,\n  data,\n  timestamp\n}) => {\n  // Store valid DCC objects, with more than just url, scannedUrl and timestamp.\n  if (Object.keys(data).length > 3) state.dataEvents.push(_objectSpread({\n    url,\n    timestamp\n  }, data));\n};\nconst addErrorEvent = (state, event) => {\n  state.errorEvents.push(event);\n};\nconst startStream = async (actions, query) => {\n  const es = new EventSource(\"/api/stream?\" + query, {\n    withCredentials: true\n  });\n  const timestamp = new Date().getTime();\n\n  es.onopen = () => {\n    actions.addInfoEvent(\"Connection with server established.\");\n    actions.setScanInProgress(true);\n  };\n\n  es.addEventListener(\"info\", ({\n    data\n  }) => {\n    actions.addInfoEvent(JSON.parse(data));\n  });\n  es.addEventListener(\"data\", ({\n    lastEventId: url,\n    data\n  }) => {\n    actions.addDataEvent({\n      url,\n      data: JSON.parse(data),\n      timestamp\n    });\n  });\n  es.addEventListener(\"close\", e => {\n    actions.addInfoEvent(\"Connection with server closed.\");\n    actions.addInfoEvent(\"Processing scan data...\");\n    actions.setScanInProgress(false);\n    es.close();\n  });\n  es.addEventListener(\"servererror\", ({\n    lastEventId: url,\n    data\n  }) => {\n    console.log(\"Servererror event lastEventId\", url);\n    console.log(\"Servererror event data\", data);\n    actions.addErrorEvent(\"An error occurred: \" + data);\n    actions.setScanInProgress(false);\n    es.close();\n  });\n\n  es.onerror = err => {\n    console.warn(\"Actual error event\", err);\n    actions.addErrorEvent(\"An es.onerror occurred\");\n    actions.setScanInProgress(false);\n    es.close();\n  };\n};\nconst setDb = (state, db) => {\n  state.db = db;\n};\nconst initDb = async actions => {\n  const db = new _helpers_processDb_js__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]();\n  actions.setDb(db);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0YXRlL2V2ZW50SGFuZGxlcnMvZXZlbnRIYW5kbGVycy5qcz9kYjk4Il0sIm5hbWVzIjpbInNldFNjYW5VcmwiLCJzdGF0ZSIsInNjYW5VcmwiLCJzZXRTY2FuQ3RncyIsInNjYW5DdGdzIiwic2V0U2NhbkluUHJvZ3Jlc3MiLCJjaGVjayIsInNjYW5JblByb2dyZXNzIiwic2V0TWV0YWRhdGEiLCJtZXRhIiwibWV0YWRhdGEiLCJyZVNldFNjYW5VcmwiLCJpbmZvRXZlbnRzIiwiZGF0YUV2ZW50cyIsImVycm9yRXZlbnRzIiwiYWRkSW5mb0V2ZW50IiwiZXZlbnQiLCJwdXNoIiwiYWRkRGF0YUV2ZW50IiwidXJsIiwiZGF0YSIsInRpbWVzdGFtcCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJhZGRFcnJvckV2ZW50Iiwic3RhcnRTdHJlYW0iLCJhY3Rpb25zIiwicXVlcnkiLCJlcyIsIkV2ZW50U291cmNlIiwid2l0aENyZWRlbnRpYWxzIiwiRGF0ZSIsImdldFRpbWUiLCJvbm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiSlNPTiIsInBhcnNlIiwibGFzdEV2ZW50SWQiLCJlIiwiY2xvc2UiLCJjb25zb2xlIiwibG9nIiwib25lcnJvciIsImVyciIsIndhcm4iLCJzZXREYiIsImRiIiwiaW5pdERiIiwiTW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFVBQVUsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsS0FBb0I7QUFDNUNELE9BQUssQ0FBQ0MsT0FBTixHQUFnQkEsT0FBaEI7QUFDRCxDQUZNO0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUNGLEtBQUQsRUFBUUcsUUFBUixLQUFxQjtBQUM5Q0gsT0FBSyxDQUFDRyxRQUFOLEdBQWlCQSxRQUFqQjtBQUNELENBRk07QUFJQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDSixLQUFELEVBQVFLLEtBQVIsS0FBa0I7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LFdBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaLEVBQTZDdkIsR0FBN0M7QUFDQXNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDdEIsSUFBdEM7QUFDQU8sV0FBTyxDQUFDRixhQUFSLENBQXNCLHdCQUF3QkwsSUFBOUM7QUFDQU8sV0FBTyxDQUFDdEIsaUJBQVIsQ0FBMEIsS0FBMUI7QUFDQXdCLE1BQUUsQ0FBQ1csS0FBSDtBQUNELEdBTkQ7O0FBT0FYLElBQUUsQ0FBQ2MsT0FBSCxHQUFhQyxHQUFHLElBQUk7QUFDbEJILFdBQU8sQ0FBQ0ksSUFBUixDQUFhLG9CQUFiLEVBQW1DRCxHQUFuQztBQUNBakIsV0FBTyxDQUFDRixhQUFSLENBQXNCLHdCQUF0QjtBQUNBRSxXQUFPLENBQUN0QixpQkFBUixDQUEwQixLQUExQjtBQUNBd0IsTUFBRSxDQUFDVyxLQUFIO0FBQ0QsR0FMRDtBQU1ELENBcENNO0FBc0NBLE1BQU1NLEtBQUssR0FBRyxDQUFDN0MsS0FBRCxFQUFROEMsRUFBUixLQUFlO0FBQ2xDOUMsT0FBSyxDQUFDOEMsRUFBTixHQUFXQSxFQUFYO0FBQ0QsQ0FGTTtBQUlBLE1BQU1DLE1BQU0sR0FBRyxNQUFNckIsT0FBTixJQUFpQjtBQUNyQyxRQUFNb0IsRUFBRSxHQUFHLElBQUlFLDJEQUFKLEVBQVg7QUFDQXRCLFNBQU8sQ0FBQ21CLEtBQVIsQ0FBY0MsRUFBZDtBQUNELENBSE0iLCJmaWxlIjoiLi9zcmMvbGliL3N0YXRlL2V2ZW50SGFuZGxlcnMvZXZlbnRIYW5kbGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcHJvY2Vzc0RiLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRTY2FuVXJsID0gKHN0YXRlLCBzY2FuVXJsKSA9PiB7XG4gIHN0YXRlLnNjYW5VcmwgPSBzY2FuVXJsO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFNjYW5DdGdzID0gKHN0YXRlLCBzY2FuQ3RncykgPT4ge1xuICBzdGF0ZS5zY2FuQ3RncyA9IHNjYW5DdGdzO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFNjYW5JblByb2dyZXNzID0gKHN0YXRlLCBjaGVjaykgPT4ge1xuICBzdGF0ZS5zY2FuSW5Qcm9ncmVzcyA9IGNoZWNrO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldE1ldGFkYXRhID0gKHN0YXRlLCBtZXRhKSA9PiB7XG4gIHN0YXRlLm1ldGFkYXRhID0gbWV0YTtcbn07XG5cbmV4cG9ydCBjb25zdCByZVNldFNjYW5VcmwgPSBzdGF0ZSA9PiB7XG4gIHN0YXRlLnNjYW5VcmwgPSBcIlwiO1xuICBzdGF0ZS5zY2FuQ3RncyA9IFwiXCI7XG4gIHN0YXRlLm1ldGFkYXRhID0ge307XG4gIHN0YXRlLmluZm9FdmVudHMgPSBbXTtcbiAgc3RhdGUuZGF0YUV2ZW50cyA9IFtdO1xuICBzdGF0ZS5lcnJvckV2ZW50cyA9IFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEluZm9FdmVudCA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgc3RhdGUuaW5mb0V2ZW50cy5wdXNoKGV2ZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREYXRhRXZlbnQgPSAoc3RhdGUsIHsgdXJsLCBkYXRhLCB0aW1lc3RhbXAgfSkgPT4ge1xuICAvLyBTdG9yZSB2YWxpZCBEQ0Mgb2JqZWN0cywgd2l0aCBtb3JlIHRoYW4ganVzdCB1cmwsIHNjYW5uZWRVcmwgYW5kIHRpbWVzdGFtcC5cbiAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDMpXG4gICAgc3RhdGUuZGF0YUV2ZW50cy5wdXNoKHsgdXJsLCB0aW1lc3RhbXAsIC4uLmRhdGEgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRXJyb3JFdmVudCA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgc3RhdGUuZXJyb3JFdmVudHMucHVzaChldmVudCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhcnRTdHJlYW0gPSBhc3luYyAoYWN0aW9ucywgcXVlcnkpID0+IHtcbiAgY29uc3QgZXMgPSBuZXcgRXZlbnRTb3VyY2UoXCIvYXBpL3N0cmVhbT9cIiArIHF1ZXJ5LCB7XG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gIH0pO1xuXG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIGVzLm9ub3BlbiA9ICgpID0+IHtcbiAgICBhY3Rpb25zLmFkZEluZm9FdmVudChcIkNvbm5lY3Rpb24gd2l0aCBzZXJ2ZXIgZXN0YWJsaXNoZWQuXCIpO1xuICAgIGFjdGlvbnMuc2V0U2NhbkluUHJvZ3Jlc3ModHJ1ZSk7XG4gIH07XG4gIGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbmZvXCIsICh7IGRhdGEgfSkgPT4ge1xuICAgIGFjdGlvbnMuYWRkSW5mb0V2ZW50KEpTT04ucGFyc2UoZGF0YSkpO1xuICB9KTtcbiAgZXMuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFcIiwgKHsgbGFzdEV2ZW50SWQ6IHVybCwgZGF0YSB9KSA9PiB7XG4gICAgYWN0aW9ucy5hZGREYXRhRXZlbnQoeyB1cmwsIGRhdGE6IEpTT04ucGFyc2UoZGF0YSksIHRpbWVzdGFtcCB9KTtcbiAgfSk7XG4gIGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBlID0+IHtcbiAgICBhY3Rpb25zLmFkZEluZm9FdmVudChcIkNvbm5lY3Rpb24gd2l0aCBzZXJ2ZXIgY2xvc2VkLlwiKTtcbiAgICBhY3Rpb25zLmFkZEluZm9FdmVudChcIlByb2Nlc3Npbmcgc2NhbiBkYXRhLi4uXCIpO1xuICAgIGFjdGlvbnMuc2V0U2NhbkluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgIGVzLmNsb3NlKCk7XG4gIH0pO1xuICBlcy5hZGRFdmVudExpc3RlbmVyKFwic2VydmVyZXJyb3JcIiwgKHsgbGFzdEV2ZW50SWQ6IHVybCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXJlcnJvciBldmVudCBsYXN0RXZlbnRJZFwiLCB1cmwpO1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyZXJyb3IgZXZlbnQgZGF0YVwiLCBkYXRhKTtcbiAgICBhY3Rpb25zLmFkZEVycm9yRXZlbnQoXCJBbiBlcnJvciBvY2N1cnJlZDogXCIgKyBkYXRhKTtcbiAgICBhY3Rpb25zLnNldFNjYW5JblByb2dyZXNzKGZhbHNlKTtcbiAgICBlcy5jbG9zZSgpO1xuICB9KTtcbiAgZXMub25lcnJvciA9IGVyciA9PiB7XG4gICAgY29uc29sZS53YXJuKFwiQWN0dWFsIGVycm9yIGV2ZW50XCIsIGVycik7XG4gICAgYWN0aW9ucy5hZGRFcnJvckV2ZW50KFwiQW4gZXMub25lcnJvciBvY2N1cnJlZFwiKTtcbiAgICBhY3Rpb25zLnNldFNjYW5JblByb2dyZXNzKGZhbHNlKTtcbiAgICBlcy5jbG9zZSgpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldERiID0gKHN0YXRlLCBkYikgPT4ge1xuICBzdGF0ZS5kYiA9IGRiO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXREYiA9IGFzeW5jIGFjdGlvbnMgPT4ge1xuICBjb25zdCBkYiA9IG5ldyBNb2RlbCgpO1xuICBhY3Rpb25zLnNldERiKGRiKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/state/eventHandlers/eventHandlers.js\n");

/***/ }),

/***/ "./src/lib/state/store/Store.js":
/*!**************************************!*\
  !*** ./src/lib/state/store/Store.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eventHandlers/eventHandlers.js */ \"./src/lib/state/eventHandlers/eventHandlers.js\");\n\n\nconst Store = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  scanUrl: \"\",\n  scanCtgs: \"\",\n  scanInProgress: false,\n  metadata: {},\n  infoEvents: [],\n  dataEvents: [],\n  errorEvents: [],\n  db: {},\n  setScanUrl: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, scanUrl) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setScanUrl\"])(state, scanUrl)),\n  setScanCtgs: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, scanCtgs) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setScanCtgs\"])(state, scanCtgs)),\n  setScanInProgress: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, check) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setScanInProgress\"])(state, check)),\n  setMetadata: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, meta) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setMetadata\"])(state, meta)),\n  reSetScanUrl: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])(state => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"reSetScanUrl\"])(state)),\n  addInfoEvent: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, event) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"addInfoEvent\"])(state, event);\n  }),\n  addDataEvent: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, payload) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"addDataEvent\"])(state, payload);\n  }),\n  addErrorEvent: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, event) => {\n    Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"addErrorEvent\"])(state, event);\n  }),\n  startStream: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"thunk\"])((actions, query) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"startStream\"])(actions, query)),\n  setDb: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])((state, db) => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"setDb\"])(state, db)),\n  initDb: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"thunk\"])(actions => Object(_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"initDb\"])(actions))\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0YXRlL3N0b3JlL1N0b3JlLmpzPzMzMzMiXSwibmFtZXMiOlsiU3RvcmUiLCJjcmVhdGVTdG9yZSIsInNjYW5VcmwiLCJzY2FuQ3RncyIsInNjYW5JblByb2dyZXNzIiwibWV0YWRhdGEiLCJpbmZvRXZlbnRzIiwiZGF0YUV2ZW50cyIsImVycm9yRXZlbnRzIiwiZGIiLCJzZXRTY2FuVXJsIiwiYWN0aW9uIiwic3RhdGUiLCJzZXRTY2FuQ3RncyIsInNldFNjYW5JblByb2dyZXNzIiwiY2hlY2siLCJzZXRNZXRhZGF0YSIsIm1ldGEiLCJyZVNldFNjYW5VcmwiLCJhZGRJbmZvRXZlbnQiLCJldmVudCIsImFkZERhdGFFdmVudCIsInBheWxvYWQiLCJhZGRFcnJvckV2ZW50Iiwic3RhcnRTdHJlYW0iLCJ0aHVuayIsImFjdGlvbnMiLCJxdWVyeSIsInNldERiIiwiaW5pdERiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFjQSxNQUFNQSxLQUFLLEdBQUdDLDhEQUFXLENBQUM7QUFDeEJDLFNBQU8sRUFBRSxFQURlO0FBRXhCQyxVQUFRLEVBQUUsRUFGYztBQUd4QkMsZ0JBQWMsRUFBRSxLQUhRO0FBSXhCQyxVQUFRLEVBQUUsRUFKYztBQUt4QkMsWUFBVSxFQUFFLEVBTFk7QUFNeEJDLFlBQVUsRUFBRSxFQU5ZO0FBT3hCQyxhQUFXLEVBQUUsRUFQVztBQVF4QkMsSUFBRSxFQUFFLEVBUm9CO0FBU3hCQyxZQUFVLEVBQUVDLHlEQUFNLENBQUMsQ0FBQ0MsS0FBRCxFQUFRVixPQUFSLEtBQW9CUSxrRkFBVSxDQUFDRSxLQUFELEVBQVFWLE9BQVIsQ0FBL0IsQ0FUTTtBQVV4QlcsYUFBVyxFQUFFRix5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUVQsUUFBUixLQUFxQlUsbUZBQVcsQ0FBQ0QsS0FBRCxFQUFRVCxRQUFSLENBQWpDLENBVks7QUFXeEJXLG1CQUFpQixFQUFFSCx5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUUcsS0FBUixLQUFrQkQseUZBQWlCLENBQUNGLEtBQUQsRUFBUUcsS0FBUixDQUFwQyxDQVhEO0FBWXhCQyxhQUFXLEVBQUVMLHlEQUFNLENBQUMsQ0FBQ0MsS0FBRCxFQUFRSyxJQUFSLEtBQWlCRCxtRkFBVyxDQUFDSixLQUFELEVBQVFLLElBQVIsQ0FBN0IsQ0FaSztBQWF4QkMsY0FBWSxFQUFFUCx5REFBTSxDQUFDQyxLQUFLLElBQUlNLG9GQUFZLENBQUNOLEtBQUQsQ0FBdEIsQ0FiSTtBQWN4Qk8sY0FBWSxFQUFFUix5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUVEsS0FBUixLQUFrQjtBQUNyQ0Qsd0ZBQVksQ0FBQ1AsS0FBRCxFQUFRUSxLQUFSLENBQVo7QUFDRCxHQUZtQixDQWRJO0FBaUJ4QkMsY0FBWSxFQUFFVix5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUVUsT0FBUixLQUFvQjtBQUN2Q0Qsd0ZBQVksQ0FBQ1QsS0FBRCxFQUFRVSxPQUFSLENBQVo7QUFDRCxHQUZtQixDQWpCSTtBQW9CeEJDLGVBQWEsRUFBRVoseURBQU0sQ0FBQyxDQUFDQyxLQUFELEVBQVFRLEtBQVIsS0FBa0I7QUFDdENHLHlGQUFhLENBQUNYLEtBQUQsRUFBUVEsS0FBUixDQUFiO0FBQ0QsR0FGb0IsQ0FwQkc7QUF1QnhCSSxhQUFXLEVBQUVDLHdEQUFLLENBQUMsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CSCxtRkFBVyxDQUFDRSxPQUFELEVBQVVDLEtBQVYsQ0FBaEMsQ0F2Qk07QUF3QnhCQyxPQUFLLEVBQUVqQix5REFBTSxDQUFDLENBQUNDLEtBQUQsRUFBUUgsRUFBUixLQUFlbUIsNkVBQUssQ0FBQ2hCLEtBQUQsRUFBUUgsRUFBUixDQUFyQixDQXhCVztBQXlCeEJvQixRQUFNLEVBQUVKLHdEQUFLLENBQUNDLE9BQU8sSUFBSUcsOEVBQU0sQ0FBQ0gsT0FBRCxDQUFsQjtBQXpCVyxDQUFELENBQXpCO0FBNEJlMUIsb0VBQWYiLCJmaWxlIjoiLi9zcmMvbGliL3N0YXRlL3N0b3JlL1N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFjdGlvbiwgY29tcHV0ZWQsIHRodW5rIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcblxuaW1wb3J0IHtcbiAgc2V0U2NhblVybCxcbiAgc2V0U2NhbkN0Z3MsXG4gIHNldFNjYW5JblByb2dyZXNzLFxuICBzZXRNZXRhZGF0YSxcbiAgcmVTZXRTY2FuVXJsLFxuICBhZGRJbmZvRXZlbnQsXG4gIGFkZEVycm9yRXZlbnQsXG4gIGFkZERhdGFFdmVudCxcbiAgc3RhcnRTdHJlYW0sXG4gIHNldERiLFxuICBpbml0RGJcbn0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvZXZlbnRIYW5kbGVycy5qc1wiO1xuXG5jb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgc2NhblVybDogXCJcIixcbiAgc2NhbkN0Z3M6IFwiXCIsXG4gIHNjYW5JblByb2dyZXNzOiBmYWxzZSxcbiAgbWV0YWRhdGE6IHt9LFxuICBpbmZvRXZlbnRzOiBbXSxcbiAgZGF0YUV2ZW50czogW10sXG4gIGVycm9yRXZlbnRzOiBbXSxcbiAgZGI6IHt9LFxuICBzZXRTY2FuVXJsOiBhY3Rpb24oKHN0YXRlLCBzY2FuVXJsKSA9PiBzZXRTY2FuVXJsKHN0YXRlLCBzY2FuVXJsKSksXG4gIHNldFNjYW5DdGdzOiBhY3Rpb24oKHN0YXRlLCBzY2FuQ3RncykgPT4gc2V0U2NhbkN0Z3Moc3RhdGUsIHNjYW5DdGdzKSksXG4gIHNldFNjYW5JblByb2dyZXNzOiBhY3Rpb24oKHN0YXRlLCBjaGVjaykgPT4gc2V0U2NhbkluUHJvZ3Jlc3Moc3RhdGUsIGNoZWNrKSksXG4gIHNldE1ldGFkYXRhOiBhY3Rpb24oKHN0YXRlLCBtZXRhKSA9PiBzZXRNZXRhZGF0YShzdGF0ZSwgbWV0YSkpLFxuICByZVNldFNjYW5Vcmw6IGFjdGlvbihzdGF0ZSA9PiByZVNldFNjYW5Vcmwoc3RhdGUpKSxcbiAgYWRkSW5mb0V2ZW50OiBhY3Rpb24oKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGFkZEluZm9FdmVudChzdGF0ZSwgZXZlbnQpO1xuICB9KSxcbiAgYWRkRGF0YUV2ZW50OiBhY3Rpb24oKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgYWRkRGF0YUV2ZW50KHN0YXRlLCBwYXlsb2FkKTtcbiAgfSksXG4gIGFkZEVycm9yRXZlbnQ6IGFjdGlvbigoc3RhdGUsIGV2ZW50KSA9PiB7XG4gICAgYWRkRXJyb3JFdmVudChzdGF0ZSwgZXZlbnQpO1xuICB9KSxcbiAgc3RhcnRTdHJlYW06IHRodW5rKChhY3Rpb25zLCBxdWVyeSkgPT4gc3RhcnRTdHJlYW0oYWN0aW9ucywgcXVlcnkpKSxcbiAgc2V0RGI6IGFjdGlvbigoc3RhdGUsIGRiKSA9PiBzZXREYihzdGF0ZSwgZGIpKSxcbiAgaW5pdERiOiB0aHVuayhhY3Rpb25zID0+IGluaXREYihhY3Rpb25zKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/state/store/Store.js\n");

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

/***/ }),

/***/ "zangodb":
/*!**************************!*\
  !*** external "zangodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zangodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6YW5nb2RiXCI/ZmRmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ6YW5nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemFuZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///zangodb\n");

/***/ })

/******/ });