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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "easy-peasy"
var external_easy_peasy_ = __webpack_require__("SDXy");

// EXTERNAL MODULE: ./src/styles/normalize.css
var normalize = __webpack_require__("zlK1");

// EXTERNAL MODULE: ./src/styles/skeleton.css
var skeleton = __webpack_require__("xXxE");

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__("rMck");

// EXTERNAL MODULE: ./node_modules/react-datasheet/lib/react-datasheet.css
var react_datasheet = __webpack_require__("ZJU2");

// EXTERNAL MODULE: external "zangodb"
var external_zangodb_ = __webpack_require__("iYlg");
var external_zangodb_default = /*#__PURE__*/__webpack_require__.n(external_zangodb_);

// CONCATENATED MODULE: ./src/lib/helpers/processDb_new.js

class processDb_new_Model {
  constructor() {
    const db = new external_zangodb_default.a.Db("dcc", {
      // sets the schema, scannedUrl and url are the same url sent by the user
      metadata: ["scannedUrl"],
      dccdata: ["url", "timestamp"]
    });
    db.open(); // creates the db and collections

    db.on("blocked", () => {
      console.warn("database version cannot be upgraded");
    });
    this.db = db;
    this.colLabel = "";
  }

  col(collection) {
    // Used in conjuction with methods that return Cursor and need extra processing, for example db.find()
    this.colLabel = collection;
    return this;
  }

  collection(collection) {
    // Returns Collection on Model.db instance
    return this.db.collection(collection);
  }

  async findAsArray(query, options) {
    // Used in conjuction with db.col()
    return await this.db.collection(this.colLabel).find(query, options).toArray();
  }

  async remove(url) {
    return await Promise.all([this.db.collection("metadata").remove({
      scannedUrl: url
    }), this.db.collection("dccdata").remove({
      url
    })]);
  }

}
// CONCATENATED MODULE: ./src/lib/state/eventHandlers/eventHandlers.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const setScanUrl = (state, scanUrl) => {
  state.scanUrl = scanUrl;
};
const setScanCtgs = (state, scanCtgs) => {
  state.scanCtgs = scanCtgs;
};
const setScanInProgress = (state, check) => {
  state.scanInProgress = check;
};
const setMetadata = (state, meta) => {
  state.metadata = meta;
};
const reSetScanUrl = state => {
  state.scanUrl = "";
  state.scanCtgs = "";
  state.metadata = {};
  state.infoEvents = [];
  state.dataEvents = [];
  state.errorEvents = [];
};
const addInfoEvent = (state, event) => {
  state.infoEvents.push(event);
};
const addDataEvent = (state, {
  url,
  data,
  timestamp
}) => {
  // Store valid DCC objects, with more than just url, scannedUrl and timestamp.
  if (Object.keys(data).length > 3) state.dataEvents.push(_objectSpread({
    url,
    timestamp
  }, data));
};
const addErrorEvent = (state, event) => {
  state.errorEvents.push(event);
};
const startStream = async (actions, query) => {
  const es = new EventSource("/api/stream?" + query, {
    withCredentials: true
  });
  const timestamp = new Date().getTime();

  es.onopen = () => {
    actions.addInfoEvent("Connection with server established.");
    actions.setScanInProgress(true);
  };

  es.addEventListener("info", ({
    data
  }) => {
    actions.addInfoEvent(JSON.parse(data));
  });
  es.addEventListener("data", ({
    lastEventId: url,
    data
  }) => {
    actions.addDataEvent({
      url,
      data: JSON.parse(data),
      timestamp
    });
  });
  es.addEventListener("close", e => {
    actions.addInfoEvent("Connection with server closed.");
    actions.addInfoEvent("Processing scan data...");
    actions.setScanInProgress(false);
    es.close();
  });
  es.addEventListener("servererror", ({
    lastEventId: url,
    data
  }) => {
    console.log("Servererror event lastEventId", url);
    console.log("Servererror event data", data);
    actions.addErrorEvent("An error occurred: " + data);
    actions.setScanInProgress(false);
    es.close();
  });

  es.onerror = err => {
    console.warn("Actual error event", err);
    actions.addErrorEvent("An es.onerror occurred");
    actions.setScanInProgress(false);
    es.close();
  };
};
const setDb = (state, db) => {
  state.db = db;
};
const initDb = async actions => {
  const db = new processDb_new_Model();
  actions.setDb(db);
};
// CONCATENATED MODULE: ./src/lib/state/store/Store.js


const Store = Object(external_easy_peasy_["createStore"])({
  scanUrl: "",
  scanCtgs: "",
  scanInProgress: false,
  metadata: {},
  infoEvents: [],
  dataEvents: [],
  errorEvents: [],
  db: {},
  setScanUrl: Object(external_easy_peasy_["action"])((state, scanUrl) => setScanUrl(state, scanUrl)),
  setScanCtgs: Object(external_easy_peasy_["action"])((state, scanCtgs) => setScanCtgs(state, scanCtgs)),
  setScanInProgress: Object(external_easy_peasy_["action"])((state, check) => setScanInProgress(state, check)),
  setMetadata: Object(external_easy_peasy_["action"])((state, meta) => setMetadata(state, meta)),
  reSetScanUrl: Object(external_easy_peasy_["action"])(state => reSetScanUrl(state)),
  addInfoEvent: Object(external_easy_peasy_["action"])((state, event) => {
    addInfoEvent(state, event);
  }),
  addDataEvent: Object(external_easy_peasy_["action"])((state, payload) => {
    addDataEvent(state, payload);
  }),
  addErrorEvent: Object(external_easy_peasy_["action"])((state, event) => {
    addErrorEvent(state, event);
  }),
  startStream: Object(external_easy_peasy_["thunk"])((actions, query) => startStream(actions, query)),
  setDb: Object(external_easy_peasy_["action"])((state, db) => setDb(state, db)),
  initDb: Object(external_easy_peasy_["thunk"])(actions => initDb(actions))
});
/* harmony default export */ var store_Store = (Store);
// CONCATENATED MODULE: ./src/pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_easy_peasy_["StoreProvider"], {
    store: store_Store,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "SDXy":
/***/ (function(module, exports) {

module.exports = require("easy-peasy");

/***/ }),

/***/ "ZJU2":
/***/ (function(module, exports) {



/***/ }),

/***/ "iYlg":
/***/ (function(module, exports) {

module.exports = require("zangodb");

/***/ }),

/***/ "rMck":
/***/ (function(module, exports) {



/***/ }),

/***/ "xXxE":
/***/ (function(module, exports) {



/***/ }),

/***/ "zlK1":
/***/ (function(module, exports) {



/***/ })

/******/ });