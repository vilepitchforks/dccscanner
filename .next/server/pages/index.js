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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0JKX":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__1cna4",
	"logo": "Navbar_logo__3vj75",
	"avatar": "Navbar_avatar__1fF3I"
};


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "2Lq3":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"chip-container": "NewScanForm_chip-container__13qGe",
	"chip": "NewScanForm_chip__2rt7x",
	"chip-label": "NewScanForm_chip-label__SpQOC",
	"chip-delete": "NewScanForm_chip-delete__1EuhR"
};


/***/ }),

/***/ "5a3Y":
/***/ (function(module, exports) {

module.exports = require("react-datasheet");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "J/vx":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"newScan": "NewScanIcon_newScan__7Yhdj",
	"label": "NewScanIcon_label__3VVIB",
	"icon": "NewScanIcon_icon__2pjj8"
};


/***/ }),

/***/ "O1+1":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scans-row": "Scans_scans-row__qpn9s"
};


/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__("0JKX");
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// CONCATENATED MODULE: ./src/components/Navbar/Navbar.js




const Navbar = ({
  user
}) => {
  user = user[0].toUpperCase();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
    className: Navbar_module_default.a.navbar,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: Navbar_module_default.a.logo,
      src: "/logo192.png"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Navbar_module_default.a.avatar,
      children: user
    })]
  });
};

/* harmony default export */ var Navbar_Navbar = (Navbar);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "easy-peasy"
var external_easy_peasy_ = __webpack_require__("SDXy");

// EXTERNAL MODULE: external "zangodb"
var external_zangodb_ = __webpack_require__("iYlg");
var external_zangodb_default = /*#__PURE__*/__webpack_require__.n(external_zangodb_);

// CONCATENATED MODULE: ./src/lib/helpers/processDb.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // TO DO: check if db exists before running scan
// export const getDbs = async () =>{}
// TO DO: if existing url has been selected, return metadata
// export const checkMeta = async () =>{}

const makeStoreData = (url, actions, meta) => async data => {
  let v = 0;
  const collName = meta ? "metadata" : new Date().getTime().toString(); // Check if DB for current URL exists

  const dbCheck = await window.indexedDB.databases().then(dbs => Array.isArray(dbs) && dbs.find(db => db.name === url)); // If DB existis, increment version in order to add a new collection

  if (typeof dbCheck != "undefined" && dbCheck.name === url && dbCheck.version > 0) v = dbCheck.version + 1; // Modify data when storing scan data. If storing metadata, ignore this block

  if (!meta) {
    // Get only results with valid DCC objects
    data = data[url] && data[url].filter(item => Object.keys(item).length > 1);

    if (typeof data === "undefined" || !data.length) {
      actions.addInfoEvent("Scan data processed. No bvDCC data found.");
      actions.setProcessInProgress(false);
      return;
    }
  } // Define collections without indexes.


  const db = new external_zangodb_default.a.Db(url, v, [collName]);
  const collection = db.collection(collName);
  const successMsg = meta ? `Metadata for ${url} successfully stored.` : `Scan data for ${url} successfully processed.`;
  collection.insert(data).then(() => {
    actions.addInfoEvent(successMsg); // Completes the check switch for the entire process from starting scan to the storing of data in db:

    !meta && actions.setProcessInProgress(false);
    db.close();
  }).catch(error => {
    actions.addErrorEvent("Error processing scanned data: " + error.message);
    console.error(error); // Completes the check switch for the entire process from starting scan to the storing of data in db:

    !meta && actions.setProcessInProgress(false);
    db.close();
  });
  db.on("blocked", () => {
    console.warn(`Database blocked event fired with details: ${meta ? "Metadata" : "Scan data"} store attempt for url ${url}`);
    actions.addInfoEvent(`We are experiencing some issues with ${meta ? "Metadata" : "Scan data"} processing for ${url}.\nPlease expect some delays or reload the page and try again.`);
    db.close();
  });
};
const getDbNames = async () => window.indexedDB.databases().then(res => res.map(db => db.name));
const getAllMeta = async () => {
  try {
    const dbNames = await getDbNames();
    const meta = await Promise.all(dbNames.map(dbName => new Promise((resolve, reject) => {
      const db = new external_zangodb_default.a.Db(dbName, ["metadata"]);
      let col = db.collection("metadata");
      col.findOne().then(res => resolve((() => {
        db.close();
        return _objectSpread({
          dbName
        }, res);
      })())).catch(err => reject((() => {
        db.close();
        return err;
      })()));
    })));
    return {
      ok: true,
      meta
    };
  } catch (error) {
    console.warn("Error occurred while fetching scanned Metadata: ", error);
    return {
      ok: false
    };
  }
};
const getSingleMeta = async dbName => {
  try {
    const db = new external_zangodb_default.a.Db(dbName, ["metadata"]);
    let col = db.collection("metadata");
    const data = await col.findOne();
    return {
      ok: true,
      data
    };
  } catch (error) {
    console.warn("Error accessing data: ", error);
    return {
      ok: false,
      data: error
    };
  }
};
const getStoresNames = dbName => {
  const db = new external_zangodb_default.a.Db(dbName);
  return new Promise((resolve, reject) => {
    db.open(() => {
      resolve(db._idb.objectStoreNames);
      db.close();
    });
  });
};
const getStoreData = async (dbName, store) => {
  try {
    const db = new external_zangodb_default.a.Db(dbName, [store]);
    let col = db.collection(store);
    const data = await col.find().toArray();
    return {
      ok: true,
      data
    };
  } catch (error) {
    console.warn("Error accessing data: ", error);
    return {
      ok: false,
      data: error
    };
  }
};
const dropDb = async dbName => {
  try {
    const db = new external_zangodb_default.a.Db(dbName);
    db.drop();
    return true;
  } catch (error) {
    console.warn("Error dropping db for: ", dbName, error);
    return false;
  }
};
// EXTERNAL MODULE: ./src/components/CurrentScan/CurrentScan.module.css
var CurrentScan_module = __webpack_require__("tZ2U");
var CurrentScan_module_default = /*#__PURE__*/__webpack_require__.n(CurrentScan_module);

// EXTERNAL MODULE: ./src/components/ScanLog/ScanLog.module.css
var ScanLog_module = __webpack_require__("mNts");
var ScanLog_module_default = /*#__PURE__*/__webpack_require__.n(ScanLog_module);

// CONCATENATED MODULE: ./src/components/ScanLog/ScanLog.js






const ScanLog = () => {
  const scanLogRref = Object(external_react_["useRef"])();
  const {
    scanUrl,
    infoEvents,
    errorEvents,
    scanInProgress
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  Object(external_react_["useEffect"])(() => {
    const child = scanLogRref.current.lastElementChild;
    child && child.scrollIntoViewIfNeeded && child.scrollIntoViewIfNeeded(true);
  }, [infoEvents]);

  const setScanStatusText = () => {
    // if (!scanInProgress && scanUrl.length) return "Scan starting...";
    if (scanInProgress) return "Scan in progress...";
    if (!scanInProgress && scanUrl.length && infoEvents.length) return "Scan completed.";
    return "";
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ScanLog_module_default.a.buildView,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${ScanLog_module_default.a.buildStreamFull} ${ScanLog_module_default.a.buildStream}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        ref: scanLogRref,
        className: ScanLog_module_default.a.buildStreamOutput,
        children: infoEvents.map((event, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("pre", {
          className: ScanLog_module_default.a.buildStreamLine,
          children: event
        }, i))
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
        className: ScanLog_module_default.a.buildStreamFooter,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          className: ScanLog_module_default.a.gray,
          children: [setScanStatusText(), " "]
        }), errorEvents.length ? errorEvents.map((event, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: ScanLog_module_default.a.red,
          children: event
        }, i)) : ""]
      })]
    })
  });
};

/* harmony default export */ var ScanLog_ScanLog = (ScanLog);
// CONCATENATED MODULE: ./src/components/CurrentScan/CurrentScan.js








const CurrentScan = () => {
  const {
    0: viewLog,
    1: setViewLog
  } = Object(external_react_["useState"])(false);
  const {
    scanUrl,
    metadata,
    dataEvents,
    db,
    scanInProgress
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  const actions = Object(external_easy_peasy_["useStoreActions"])(actions => actions);
  Object(external_react_["useEffect"])(() => {
    scanUrl && !scanInProgress && actions.addInfoEvent(`Scan data for ${scanUrl} successfully processed.`);
    scanUrl && !scanInProgress && !dataEvents.length && actions.addInfoEvent(`No bvDCC data found for ${scanUrl}.`);
  }, [scanInProgress, dataEvents]); // Process scan data

  Object(external_react_["useEffect"])(() => {
    (async () => {
      const dataItem = dataEvents[dataEvents.length - 1];
      dataItem && (
      /* dataItem.url === scanUrl && */
      await db.collection("dccdata").insert(dataItem, () => {
        actions.addInfoEvent(`Scan data for item ${dataItem.scannedUrl} successfully stored.`);
      }));
    })();
  }, [dataEvents]); // Available items: description, icon, image, title, url

  const {
    icon,
    title
  } = metadata;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "column",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: "u-pull-left icon",
          src: icon || "./logo192.png",
          alt: "icon"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
          className: CurrentScan_module_default.a.title,
          children: scanUrl && title.length ? title : "Click on the + icon in the lower right corner of the screen to start a new scan."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: CurrentScan_module_default.a["view-log"],
        onClick: () => setViewLog(!viewLog),
        children: [viewLog ? "Hide" : "View", " scan log"]
      }), viewLog && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScanLog_ScanLog, {})]
    })
  });
};

/* harmony default export */ var CurrentScan_CurrentScan = (CurrentScan);
// EXTERNAL MODULE: ./src/components/Scans/Scans.module.css
var Scans_module = __webpack_require__("O1+1");
var Scans_module_default = /*#__PURE__*/__webpack_require__.n(Scans_module);

// EXTERNAL MODULE: ./src/components/ScanThumb/ScanThumb.module.css
var ScanThumb_module = __webpack_require__("ZRC5");
var ScanThumb_module_default = /*#__PURE__*/__webpack_require__.n(ScanThumb_module);

// CONCATENATED MODULE: ./src/components/ScanThumb/ScanThumb.js






const ScanThumb = ({
  thumbnail,
  setShowModal,
  setsSlectedWeb,
  setMetaArray
}) => {
  const {
    url,
    image,
    icon,
    title,
    description,
    scannedUrl
  } = thumbnail;
  const {
    scanUrl,
    db
  } = Object(external_easy_peasy_["useStoreState"])(state => state);

  const handleDelete = async () => {
    await db.remove(scannedUrl); // Re-renders the website thumbnails list

    setMetaArray(metaArray => metaArray.filter(item => item.scannedUrl !== scannedUrl));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: ScanThumb_module_default.a["thumbnail-plh"] + " columns three",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ScanThumb_module_default.a["thumbnail-img-plh"],
      children: [scannedUrl !== scanUrl && /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: ScanThumb_module_default.a["thumbnail-close-icon"],
        onClick: () => handleDelete(),
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: ScanThumb_module_default.a["thumbnail-img"],
        src: image || "./placeholder.gif",
        alt: description,
        title: description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ScanThumb_module_default.a["thumbnail-body-plh"],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: ScanThumb_module_default.a["thumbnail-icon"] + " u-pull-left",
        src: icon || "./favicon.ico",
        alt: "icon"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
        className: ScanThumb_module_default.a["thumbnail-title"],
        alt: title,
        title: title,
        children: title || "Lorem ipsum dolor sit."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        title: url,
        className: ScanThumb_module_default.a["thumbnail-link"],
        onClick: () => {
          setShowModal(true);
          setsSlectedWeb(scannedUrl);
        },
        children: "View DCC data"
      })]
    })]
  });
};

/* harmony default export */ var ScanThumb_ScanThumb = (ScanThumb);
// EXTERNAL MODULE: ./src/components/ModalBackground/ModalBackground.module.css
var ModalBackground_module = __webpack_require__("Zhz7");
var ModalBackground_module_default = /*#__PURE__*/__webpack_require__.n(ModalBackground_module);

// CONCATENATED MODULE: ./src/components/ModalBackground/ModalBackground.js



const ModalBackground = ({
  children,
  trigger
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ModalBackground_module_default.a.background,
    onClick: e => /background/.test(e.target.className) && trigger(false),
    children: children
  });
};

/* harmony default export */ var ModalBackground_ModalBackground = (ModalBackground);
// CONCATENATED MODULE: ./src/lib/helpers/arrayHelpers.js
const chunkify = array => {
  return Array.from({
    length: Math.ceil(array.length / 4)
  }, (_, i) => {
    const start = i * 4;
    return array.slice(start, start + 4);
  });
};
const createTableData = dataRaw => {
  // Creates 15X36 empty spreadsheet as a default placeholder
  const numberOfColumns = dataRaw.length ? Object.keys(dataRaw[0]).length : 15;
  const row = Array.from({
    length: numberOfColumns
  }, (_, i) => ({
    value: " "
  }));
  const emptyTable = Array.from({
    length: 36
  }, (_, i) => row);
  if (!dataRaw.length) return emptyTable; // dataRaw format:
  // [
  //   {url: "url", timestamp: "timestamp", scannedUrl: "scannedUrl", locale: "locale", productId: "productId", …},
  //   {url: "url", timestamp: "timestamp", scannedUrl: "scannedUrl", locale: "locale", productId: "productId", …}
  // ]
  // Format needed for react-datasheet:
  // [
  //   [{value:  1}, {value:  3}],
  //   [{value:  2}, {value:  4}]
  // ]

  const title = Object.keys(dataRaw[0]).map(titleKey => ({
    value: titleKey
  }));
  const bodyRaw = dataRaw.map(row => Object.values(row));
  const body = bodyRaw.map(row => row.map(cell => ({
    value: Array.isArray(cell) ? JSON.stringify(cell) : cell
  })));
  return [title, ...body, ...emptyTable];
};
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-datasheet"
var external_react_datasheet_ = __webpack_require__("5a3Y");
var external_react_datasheet_default = /*#__PURE__*/__webpack_require__.n(external_react_datasheet_);

// CONCATENATED MODULE: ./src/components/Worksheet/Worksheet.js


function Worksheet_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Worksheet_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Worksheet_ownKeys(Object(source), true).forEach(function (key) { Worksheet_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Worksheet_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Worksheet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Worksheet_Worksheet extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [] // grid: [
      //   [{ value: 1 }, { value: 3 }],
      //   [{ value: 2 }, { value: 4 }]
      // ]

    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      grid: props.data
    };
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_datasheet_default.a, {
      data: this.state.grid,
      valueRenderer: cell => cell.value,
      onCellsChanged: changes => {
        const grid = this.props.data.map(row => [...row]);
        changes.forEach(({
          cell,
          row,
          col,
          value
        }) => {
          grid[row][col] = Worksheet_objectSpread(Worksheet_objectSpread({}, grid[row][col]), {}, {
            value
          });
        });
        this.setState({
          grid
        });
      }
    });
  }

}

/* harmony default export */ var components_Worksheet_Worksheet = (Worksheet_Worksheet);
// CONCATENATED MODULE: ./src/components/ScanData/ScanData.js










const ScanData = ({
  selectedWeb
}) => {
  const {
    0: hasDccData,
    1: setHasDccData
  } = Object(external_react_["useState"])(true);
  const {
    0: timestamps,
    1: setTimestamps
  } = Object(external_react_["useState"])([]);
  const {
    0: selectedTs,
    1: setSelectedTs
  } = Object(external_react_["useState"])(null);
  const {
    0: allTsData,
    1: setAllTsData
  } = Object(external_react_["useState"])([]);
  const {
    0: allTsGroupedData,
    1: setAllTsGroupedData
  } = Object(external_react_["useState"])([]);
  const {
    0: allSheetData,
    1: setAllSheetData
  } = Object(external_react_["useState"])([]);
  const {
    0: sheetData,
    1: setSheetData
  } = Object(external_react_["useState"])([]);
  const {
    db
  } = Object(external_easy_peasy_["useStoreState"])(state => state); // Get all dcc data for one website

  Object(external_react_["useEffect"])(() => {
    (async () => {
      const websiteData = await db.col("dccdata").findAsArray({
        url: selectedWeb
      }, {
        _id: 0,
        url: 0
      });
      websiteData.length ? setAllTsData(websiteData) : setHasDccData(false);
    })();
  }, []); // Make timestamps

  Object(external_react_["useEffect"])(() => {
    const tsSet = new Set(allTsData.map(d => d.timestamp));
    const ts = Array.from(tsSet);
    ts.length && setTimestamps(ts.reverse());
  }, [allTsData]); // Group all data into array of arrays for each timestamp [[ts1],[ts2],[ts3]]

  Object(external_react_["useEffect"])(() => {
    const tsGroupDataTmp = timestamps.length && timestamps.map(t => allTsData.filter(c => c.timestamp === t));
    tsGroupDataTmp.length && setAllTsGroupedData(tsGroupDataTmp);
  }, [timestamps]); // Prepare the arrays for the format required by react-datasheet

  Object(external_react_["useEffect"])(() => {
    const sheetAllDataTmp = allTsGroupedData.length ? allTsGroupedData.map(d => createTableData(d)) : [];
    sheetAllDataTmp.length && setAllSheetData(sheetAllDataTmp);
  }, [allTsGroupedData]); // Display the selected timestamp data

  Object(external_react_["useEffect"])(() => {
    // Find the index of selected timestamp dataset and send that data to react-datasheet
    let index = allTsGroupedData.length && allTsGroupedData.findIndex(ds => ds[0].timestamp === selectedTs);
    index = index === -1 ? 0 : index;
    allSheetData.length && setSheetData(allSheetData[index] || []);
  }, [allTsGroupedData, selectedTs, allSheetData]);

  const formatTs = timestamp => {
    const addZero = d => d = d > 9 ? d : "0" + d;

    const year = new Date(timestamp).getFullYear();
    const month = addZero(new Date(timestamp).getMonth() + 1);
    const day = addZero(new Date(timestamp).getDate());
    const hour = addZero(new Date(timestamp).getHours());
    const minute = addZero(new Date(timestamp).getMinutes());
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "jsx-3655797331" + " " + "data-container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "jsx-3655797331" + " " + "data-head",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "jsx-3655797331" + " " + "data-head-url",
          children: selectedWeb
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "jsx-3655797331" + " " + "data-head-element",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "jsx-3655797331",
            children: !sheetData.length && hasDccData && "Loading..."
          }), !hasDccData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: "jsx-3655797331",
            children: ["DCC data unavailable for ", selectedWeb]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            viewBox: "0 0 24 24",
            className: "jsx-3655797331" + " " + "data-close-icon",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
              className: "jsx-3655797331"
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "jsx-3655797331" + " " + "data-body",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "jsx-3655797331" + " " + "data-spreadsheet",
          children: sheetData.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Worksheet_Worksheet, {
            data: sheetData
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Worksheet_Worksheet, {
            data: createTableData([])
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "jsx-3655797331" + " " + "data-dates-placeholder",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "jsx-3655797331" + " " + "data-dates",
            children: timestamps.map((timestamp, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              onClick: () => setSelectedTs(timestamp),
              className: "jsx-3655797331",
              children: formatTs(timestamp)
            }, i))
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "3655797331",
      children: [".data-container.jsx-3655797331{background:red;margin:20px;height:calc(100vh - 40px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".data-head.jsx-3655797331{background:green;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".data-head-url.jsx-3655797331{background:darkmagenta;width:25rem;-webkit-flex:none;-ms-flex:none;flex:none;}", ".data-head-element.jsx-3655797331{background:darkorange;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".data-body.jsx-3655797331{background:blue;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-y:hidden;height:100%;}", ".data-spreadsheet.jsx-3655797331{background:coral;overflow-y:auto;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;}", "data-dates-placeholder.jsx-3655797331{overflow-x:hidden;}", ".data-dates.jsx-3655797331{background:blueviolet;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:auto;}", ".data-dates.jsx-3655797331 div.jsx-3655797331{border:1px solid;margin:5px;white-space:nowrap;}", ".data-close-icon.jsx-3655797331{width:15px;}"]
    })]
  });
};

/* harmony default export */ var ScanData_ScanData = (ScanData);
// CONCATENATED MODULE: ./src/components/Scans/Scans.js











const Scans = () => {
  const {
    0: metaArray,
    1: setMetaArray
  } = Object(external_react_["useState"])([]);
  const {
    0: showModal,
    1: setShowModal
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedWeb,
    1: setsSlectedWeb
  } = Object(external_react_["useState"])("");
  const {
    scanUrl,
    db
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  const scanRows = chunkify(metaArray);
  Object(external_react_["useEffect"])(() => {
    (async () => {
      // Get metadata for all locally stored website scans for initial render
      const websites = Object.keys(db).length ? await db.col("metadata").findAsArray() : [];
      setMetaArray(websites);
    })(); // Re-fetch meta from local db after each new website has beem added

  }, [scanUrl, db]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [scanRows.map((row, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Scans_module_default.a["scans-row"] + " row",
      children: row.map((thumbnail, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScanThumb_ScanThumb, {
        thumbnail: thumbnail,
        setShowModal: setShowModal,
        setsSlectedWeb: setsSlectedWeb,
        setMetaArray: setMetaArray
      }, i))
    }, i)), showModal && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalBackground_ModalBackground, {
      trigger: setShowModal,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScanData_ScanData, {
        selectedWeb: selectedWeb
      })
    })]
  });
};

/* harmony default export */ var Scans_Scans = (Scans);
// CONCATENATED MODULE: ./src/components/WebList/WebList.js








const WebList = () => {
  const {
    scanUrl
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  const {
    initDb
  } = Object(external_easy_peasy_["useStoreActions"])(actions => actions); // Initialize the database

  Object(external_react_["useEffect"])(() => initDb(), []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CurrentScan_CurrentScan, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Scans_Scans, {})]
  });
};

/* harmony default export */ var WebList_WebList = (WebList);
// EXTERNAL MODULE: ./src/components/NewScanForm/NewScanForm.module.css
var NewScanForm_module = __webpack_require__("2Lq3");
var NewScanForm_module_default = /*#__PURE__*/__webpack_require__.n(NewScanForm_module);

// CONCATENATED MODULE: ./src/components/NewScanForm/NewScanForm.js






const Category = ({
  ctg,
  deleteCategory
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: NewScanForm_module_default.a.chip,
  role: "button",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    className: NewScanForm_module_default.a["chip-label"],
    children: ctg
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
    className: NewScanForm_module_default.a["chip-delete"],
    onClick: e => deleteCategory(ctg),
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    })
  })]
});

const NewScanForm = ({
  loading,
  url,
  setUrl,
  slugs,
  handleSlugs
}) => {
  const {
    0: categories,
    1: setCategories
  } = Object(external_react_["useState"])([]);
  const {
    setScanCtgs
  } = Object(external_easy_peasy_["useStoreActions"])(actions => actions);

  const deleteCategory = ctg => setCategories(categories.filter(category => category !== ctg));

  Object(external_react_["useEffect"])(() => {
    const ctgsSet = new Set(categories); // ?url=https://www.url.com&categories=shop,first,second

    setScanCtgs(Array.from(ctgsSet).join());
  }, [categories]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => {
      e.preventDefault();
      handleSlugs();
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "url",
      children: "URL"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      className: "u-full-width",
      type: "url",
      placeholder: "https://www.website.com",
      id: "url",
      value: url,
      onInput: e => setUrl(e.target.value),
      onBlur: () => handleSlugs()
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "slugs",
      children: "Category"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
      name: "slugs",
      id: "slig-list",
      className: "u-full-width",
      onInput: e => setCategories(ctgs => [...ctgs, e.target.value]),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
        value: "",
        children: loading ? "--Fetching slugs...--" : "--Select a slug--"
      }), slugs.map((slug, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
        value: slug,
        children: slug
      }, i))]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: NewScanForm_module_default.a["chip-container"],
      children: categories.map((category, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Category, {
        ctg: category,
        deleteCategory: deleteCategory
      }, i))
    })]
  });
};

/* harmony default export */ var NewScanForm_NewScanForm = (NewScanForm);
// EXTERNAL MODULE: ./src/components/WebCard/WebCard.module.css
var WebCard_module = __webpack_require__("peZr");
var WebCard_module_default = /*#__PURE__*/__webpack_require__.n(WebCard_module);

// CONCATENATED MODULE: ./src/components/WebCard/WebCard.js



 // Styles

const cardImage = WebCard_module_default.a["card-image"] + " three columns"; // Skeletons to be displayed while the website is loading

const ImageSkeleton = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: WebCard_module_default.a.loading + " " + cardImage,
  children: "\xA0"
});

const TitleSkeleton = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
  className: WebCard_module_default.a.loading,
  children: "\xA0"
});

const TextSkeleton = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
  className: WebCard_module_default.a.loading,
  children: "\xA0"
}); // Default copy to be displayed on new scan


const newTitle = "New DCC Scan";
const newDescription = "Initiate a new scan by entering a website URL and selecting the slugs for scanning.";

const WebCard = ({
  loading,
  isNew
}) => {
  const {
    metadata
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  const {
    description,
    icon,
    image,
    title,
    url
  } = metadata;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: WebCard_module_default.a["card-container"] + " nine columns",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      href: url,
      target: "_blank",
      children: [loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageSkeleton, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: cardImage,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: image || "./placeholder.gif",
          alt: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: WebCard_module_default.a["card-body"] + " nine columns",
        children: [loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TitleSkeleton, {}) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: "u-pull-left icon",
            src: icon || "./logo192.png",
            alt: "icon"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            children: isNew ? newTitle : title
          })]
        }), loading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextSkeleton, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: isNew ? newDescription : description
        })]
      })]
    })
  });
};

/* harmony default export */ var WebCard_WebCard = (WebCard);
// EXTERNAL MODULE: ./src/components/NewScanInit/NewScanInit.module.css
var NewScanInit_module = __webpack_require__("h+Fo");
var NewScanInit_module_default = /*#__PURE__*/__webpack_require__.n(NewScanInit_module);

// CONCATENATED MODULE: ./src/components/NewScanInit/NewScanInit.js


 // const NewScanInit = ({ setNewScan }) => {

const NewScanInit = ({
  url,
  setUrl,
  setNewScan
}) => {
  const {
    scanUrl,
    scanCtgs
  } = Object(external_easy_peasy_["useStoreState"])(state => state); // const { startStream } = useStoreActions(actions => actions);

  const {
    setScanUrl,
    startStream
  } = Object(external_easy_peasy_["useStoreActions"])(actions => actions); // const handleInitScan = () => {
  //   startStream(`url=${scanUrl}&categories=${scanCtgs}`);
  //   // Removes the modal overlay
  //   setNewScan(false);
  // };

  const handleInitScan = () => {
    startStream(`url=${url}&categories=${scanCtgs}`); // Sets scanUrl in Redux store

    setScanUrl(url); // Removes url value from local state

    setUrl(""); // Removes the modal overlay

    setNewScan(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
    className: NewScanInit_module_default.a.start + " u-full-width",
    onClick: () => handleInitScan(),
    children: "Start scan"
  });
};

/* harmony default export */ var NewScanInit_NewScanInit = (NewScanInit);
// EXTERNAL MODULE: ./src/components/NewScanModal/NewScanModal.module.css
var NewScanModal_module = __webpack_require__("l0SO");
var NewScanModal_module_default = /*#__PURE__*/__webpack_require__.n(NewScanModal_module);

// EXTERNAL MODULE: ./src/lib/drivers/restDrivers.js
var restDrivers = __webpack_require__("zgqH");

// EXTERNAL MODULE: ./src/lib/helpers/regex.js
var regex = __webpack_require__("kHgJ");

// CONCATENATED MODULE: ./src/components/NewScanModal/NewScanModal.js



function NewScanModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NewScanModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NewScanModal_ownKeys(Object(source), true).forEach(function (key) { NewScanModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NewScanModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NewScanModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NewScanModal = ({
  isNew,
  setIsNew,
  setNewScan
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: url,
    1: setUrl
  } = Object(external_react_["useState"])("");
  const {
    0: slugs,
    1: setSlugs
  } = Object(external_react_["useState"])([]);
  const {
    scanCtgs,
    db
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  const actions = Object(external_easy_peasy_["useStoreActions"])(actions => actions);

  const getMetaFromDb = async () => {
    setLoading(true); // Check if metadata exists in local db. typeof meta<{res}:Object || undefined>

    const meta = await db.collection("metadata").findOne({
      scannedUrl: url
    });

    if (meta) {
      actions.addInfoEvent(`Metadata for ${url} successfully fetched.`);
      setLoading(false);
      return {
        ok: true,
        meta
      };
    } else {
      setLoading(false);
      return {
        ok: false,
        meta: {}
      };
    }
  };

  const getMetaFromWebsite = async () => {
    setLoading(true);
    let meta = {},
        isMetaAvailable = false,
        isMetaStored = false; // If website does not exist in local db, fetch metadata

    const fetchedMeta = await Object(restDrivers["b" /* slugDriver */])({
      query: "url=" + url
    });
    if (fetchedMeta && fetchedMeta.metadata) isMetaAvailable = true; // Website details are fetched and metadata exists

    if (isMetaAvailable) {
      meta = NewScanModal_objectSpread({
        scannedUrl: url,
        slugs: fetchedMeta.slugs
      }, fetchedMeta.metadata);
    }

    if (isMetaAvailable) {
      // Store website metadata and slugs to local db
      await db.collection("metadata").insert(meta, () => {
        actions.addInfoEvent(`Metadata for ${url} successfully stored.`);
        isMetaStored = true;
      });
    }

    if (isMetaStored) {
      setLoading(false);
      return {
        ok: true,
        meta
      };
    } else {
      setLoading(false);
      return {
        ok: false,
        meta
      };
    }
  };

  const getMeta = async () => {
    let data = await getMetaFromDb();
    if (data.ok) return data.meta;
    data = await getMetaFromWebsite();
    if (data.ok) return data.meta;
    return false;
  };

  const handleSlugs = async () => {
    if (!regex["urlRgx"].test(url)) return; // setIsNew(false) Removes the default "New DCC scan" text

    setIsNew(false);
    const meta = await getMeta();

    if (meta) {
      actions.setMetadata(meta); // setSlugs(meta.slugs);
      // return actions.setScanUrl(url);

      return setSlugs(meta.slugs); // return actions.setScanUrl(url);
    } else {
      // If fetching metadata fails, reset the default "New DCC scan" details and remove url from state
      setIsNew(true);
      setUrl("");
    }

    return;
  }; // Cleanup function, resets all url data each tome Modal component unmounts


  Object(external_react_["useEffect"])(() => () => setIsNew(true), []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalBackground_ModalBackground, {
    trigger: setNewScan,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: NewScanModal_module_default.a.modal,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "three columns",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewScanForm_NewScanForm, {
            loading: loading,
            url: url,
            setUrl: setUrl,
            slugs: slugs,
            handleSlugs: handleSlugs
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(WebCard_WebCard, {
          loading: loading,
          isNew: isNew
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: scanCtgs && /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewScanInit_NewScanInit, {
          url: url,
          setUrl: setUrl,
          setNewScan: setNewScan
        })
      })]
    })
  });
};

/* harmony default export */ var NewScanModal_NewScanModal = (NewScanModal);
// EXTERNAL MODULE: ./src/components/NewScanIcon/NewScanIcon.module.css
var NewScanIcon_module = __webpack_require__("J/vx");
var NewScanIcon_module_default = /*#__PURE__*/__webpack_require__.n(NewScanIcon_module);

// CONCATENATED MODULE: ./src/components/NewScanIcon/NewScanIcon.js




const NewScanIcon = ({
  setNewScan
}) => {
  const {
    reSetScanUrl
  } = Object(external_easy_peasy_["useStoreActions"])(actions => actions);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
    className: NewScanIcon_module_default.a.newScan,
    type: "button",
    onClick: () => {
      // Reset all before initiating a new scan
      reSetScanUrl();
      setNewScan(true);
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: NewScanIcon_module_default.a.label,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: NewScanIcon_module_default.a.icon,
        focusable: "false",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        })
      })
    })
  });
};

/* harmony default export */ var NewScanIcon_NewScanIcon = (NewScanIcon);
// CONCATENATED MODULE: ./src/components/NewScan/NewScan.js








const NewScan = () => {
  const {
    0: isNew,
    1: setIsNew
  } = Object(external_react_["useState"])(true);
  const {
    0: newScan,
    1: setNewScan
  } = Object(external_react_["useState"])(false);
  const {
    scanInProgress
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [newScan && /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewScanModal_NewScanModal, {
      isNew: isNew,
      setIsNew: setIsNew,
      setNewScan: setNewScan
    }), !scanInProgress && /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewScanIcon_NewScanIcon, {
      setNewScan: setNewScan
    })]
  });
};

/* harmony default export */ var NewScan_NewScan = (NewScan);
// CONCATENATED MODULE: ./src/pages/index.js









const Home = ({
  user
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "DCC Scanner"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar_Navbar, {
      user: user
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(WebList_WebList, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewScan_NewScan, {})]
  });
};

const getServerSideProps = async ctx => {
  // Construct App URL for server side fetching
  const url = ctx.req.protocol + "://" + ctx.req.get("host");

  try {
    // Check if user is authenticated
    const {
      data
    } = await external_axios_default()({
      method: "post",
      url: url + "/api/auth",
      headers: ctx.req.headers
    });
    return {
      props: {
        user: data
      }
    };
  } catch (error) {
    console.warn("Error from Index.js: ", error.message); // If user is not authenticated, redirect to /login

    if (error.response.status > 400 && ctx.req) ctx.res.writeHead(302, {
      Location: url + "/login"
    });
    ctx.res.end();
    return {
      props: {
        data: error.response.data
      }
    };
  }
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "SDXy":
/***/ (function(module, exports) {

module.exports = require("easy-peasy");

/***/ }),

/***/ "ZRC5":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"thumbnail-plh": "ScanThumb_thumbnail-plh__11EGn",
	"thumbnail-img-plh": "ScanThumb_thumbnail-img-plh__tkcn2",
	"thumbnail-close-icon": "ScanThumb_thumbnail-close-icon__2lrHq",
	"thumbnail-img": "ScanThumb_thumbnail-img__3VFlc",
	"thumbnail-body-plh": "ScanThumb_thumbnail-body-plh__3KXKY",
	"thumbnail-icon": "ScanThumb_thumbnail-icon__3gDuL",
	"thumbnail-title": "ScanThumb_thumbnail-title__1pURv",
	"thumbnail-link": "ScanThumb_thumbnail-link__3i9ua"
};


/***/ }),

/***/ "Zhz7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"background": "ModalBackground_background__1f-zj"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h+Fo":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"start": "NewScanInit_start__3jSr5"
};


/***/ }),

/***/ "iYlg":
/***/ (function(module, exports) {

module.exports = require("zangodb");

/***/ }),

/***/ "kHgJ":
/***/ (function(module, exports) {

// eslint-disable-next-line
exports.urlRgx = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/; // Matches "en-us" or "en-us/"

exports.localeRgx = /[a-z][a-z]-[a-z][a-z]($|\/$)/;

/***/ }),

/***/ "l0SO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "NewScanModal_modal__1qttA"
};


/***/ }),

/***/ "mNts":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"buildView": "ScanLog_buildView__tyXUG",
	"buildStreamFull": "ScanLog_buildStreamFull__VlJyr",
	"buildStream": "ScanLog_buildStream__3_0JL",
	"buildStreamOutput": "ScanLog_buildStreamOutput__3FJL-",
	"buildStreamLine": "ScanLog_buildStreamLine__1yV4N",
	"buildStreamFooter": "ScanLog_buildStreamFooter__2EP3e",
	"gray": "ScanLog_gray__1tH_j",
	"red": "ScanLog_red__26k7i"
};


/***/ }),

/***/ "peZr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card-container": "WebCard_card-container__2eWrn",
	"card-image": "WebCard_card-image__2WgNG",
	"card-body": "WebCard_card-body__1z8Ni",
	"loading": "WebCard_loading__TS1wT",
	"loading-animation": "WebCard_loading-animation__bSVT3"
};


/***/ }),

/***/ "tZ2U":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "CurrentScan_title__2klhu",
	"view-log": "CurrentScan_view-log__2Zw2P"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zgqH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authDriver; });
/* unused harmony export scanDriver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slugDriver; });
const makeDriver = ({
  method,
  endpoint,
  format
}) => async ({
  email,
  query,
  body
}) => {
  try {
    // Reset repeated additions of query to endpoint
    endpoint = endpoint.split("?")[0];
    endpoint = query ? endpoint + "?" + query : endpoint;
    const options = {
      method,
      credentials: "same-origin",
      headers: {}
    };
    if (email) options.headers.Authorization = "Basic " + btoa(email);
    if (body) options.body = JSON.stringify(body);
    let status;
    const result = await fetch(endpoint, options).then(res => {
      status = res.status;
      return res[format]();
    });

    if (status === 200 || status === 201) {
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.warn("driver err", error);
    return false;
  }
};

const authDriver = makeDriver({
  method: "POST",
  endpoint: "/api/auth",
  format: "text"
});
const scanDriver = makeDriver({
  method: "GET",
  endpoint: "/api/scan",
  format: "json"
});
const slugDriver = makeDriver({
  method: "GET",
  endpoint: "/api/slug",
  format: "json"
});

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });