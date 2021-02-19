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

/***/ "1Qhm":
/***/ (function(module, exports) {

exports.formatTs = timestamp => {
  const addZero = d => d = d > 9 ? d : "0" + d;

  const month = addZero(new Date(timestamp).getMonth() + 1);
  const day = addZero(new Date(timestamp).getDate());
  const hour = addZero(new Date(timestamp).getHours());
  const minute = addZero(new Date(timestamp).getMinutes());
  const second = addZero(new Date(timestamp).getSeconds());
  return `${day}-${month} ${hour}-${minute}-${second}`;
};

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

// EXTERNAL MODULE: ./src/components/DownloadIcons/DownloadIcons.module.css
var DownloadIcons_module = __webpack_require__("mzHp");
var DownloadIcons_module_default = /*#__PURE__*/__webpack_require__.n(DownloadIcons_module);

// EXTERNAL MODULE: external "xlsx"
var external_xlsx_ = __webpack_require__("X1wy");
var external_xlsx_default = /*#__PURE__*/__webpack_require__.n(external_xlsx_);

// EXTERNAL MODULE: ./src/lib/helpers/formatTimestamps.js
var formatTimestamps = __webpack_require__("1Qhm");

// EXTERNAL MODULE: ./src/lib/helpers/regex.js
var regex = __webpack_require__("kHgJ");

// CONCATENATED MODULE: ./src/components/DownloadIcons/DownloadIcons.helper.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const handleDownloadXlsAll = async (db, scannedUrl) => {
  const title = makeReportName(scannedUrl, "xlsx");

  try {
    // Fetch all data for one website from db
    let websiteData = await db.col("dccdata").findAsArray({
      url: scannedUrl
    }, {
      _id: 0,
      url: 0
    });
    websiteData = websiteData // Where category field is an array of objects, extract only the "name" value
    .map(item => {
      if (Array.isArray(item.categoryPath)) item.categoryPath = item.categoryPath.reduce((acc, curr) => {
        if (curr.Name) return acc = curr.Name;
      }, "");
      return item;
    });
    const tsSet = new Set(websiteData.map(d => d.timestamp));
    const timestamps = Array.from(tsSet).reverse(); // Group data by timestamp

    const workbookData = timestamps.map(tStamp => websiteData.filter(row => row.timestamp === tStamp));
    const workbook = external_xlsx_default.a.utils.book_new();
    workbookData.forEach((sheet, i) => {
      sheet.forEach(row => delete row.timestamp);
      const wsName = Object(formatTimestamps["formatTs"])(timestamps[i]);
      const worksheet = external_xlsx_default.a.utils.json_to_sheet(sheet);
      external_xlsx_default.a.utils.book_append_sheet(workbook, worksheet, wsName);
    });
    external_xlsx_default.a.writeFile(workbook, title);
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};
const handleDownloadXls = async (scannedUrl, reportData) => {
  // Remove timestamps
  reportData = reportData.map(row => {
    const {
      timestamp
    } = row,
          remainingKeys = _objectWithoutProperties(row, ["timestamp"]);

    return remainingKeys;
  });
  const title = makeReportName(scannedUrl, "xlsx");

  try {
    const workbook = external_xlsx_default.a.utils.book_new();
    const wsName = Object(formatTimestamps["formatTs"])(new Date().getTime());
    const worksheet = external_xlsx_default.a.utils.json_to_sheet(reportData);
    external_xlsx_default.a.utils.book_append_sheet(workbook, worksheet, wsName);
    external_xlsx_default.a.writeFile(workbook, title);
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};
const handleDownloadCsvBlob = (scannedUrl, reportData) => {
  // Remove timestamps
  reportData = reportData.map(row => {
    const {
      timestamp
    } = row,
          remainingKeys = _objectWithoutProperties(row, ["timestamp"]);

    return remainingKeys;
  });
  const reportTitle = makeReportName(scannedUrl, "csv");

  try {
    const worksheet = external_xlsx_default.a.utils.json_to_sheet(reportData);
    const csv = external_xlsx_default.a.utils.sheet_to_csv(worksheet);
    window.URL = window.URL || window.webkiURL;
    const blob = new Blob([csv]);
    const blobURL = window.URL.createObjectURL(blob);
    return {
      reportTitle,
      blobURL
    };
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};
const handleDownloadJsonBlob = (scannedUrl, reportData) => {
  // Remove timestamps
  reportData = reportData.map(row => {
    const {
      timestamp
    } = row,
          remainingKeys = _objectWithoutProperties(row, ["timestamp"]);

    return remainingKeys;
  });
  const reportTitle = makeReportName(scannedUrl, "json");

  try {
    window.URL = window.URL || window.webkiURL;
    const blob = new Blob([JSON.stringify(reportData, null, 2)]);
    const blobURL = window.URL.createObjectURL(blob);
    return {
      reportTitle,
      blobURL
    };
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};

const makeReportName = (scannedUrl, extension) => {
  let urlRN = scannedUrl.replace(/http(|s)\:\/\//, "").split(regex["localeRgx"])[0];
  if (urlRN.slice(-1) === "/") urlRN = urlRN.slice(0, urlRN.length - 1);
  return `bvDCC_extract_${urlRN}_${new Date().getTime()}.${extension}`;
};
// CONCATENATED MODULE: ./src/components/DownloadIcons/DownloadIcons.js





const xlsx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFIUlEQVR4Xu2bS0hWQRTH51pBQiFFhAS5CVfpoo1EkBRILpIwgqiMyoVBq+hpkbQIIexhtQoysCItgkjCFqZUKIi0KdJWEkGLsOhBVLSwvHnED67XmTMz38x9fHfOt8wzM3f+v5nznzn35jH6JaqAl+joNDgjAAkvAgJAABJWIOHhaQcUOoAlR9f7Cc9Ba/jph2373T5ySqtRhMHGO6DQAICWaYLgJIA0QXAGwOHNO9i15w/nJJM07ARnALw+c5V1Dg+lDoJTAGD5pw2CcwDSBsFJAGmC4CyAtEBwGkAaIDgPIGkIBGD2ZpDU6YgABK5mSUAgAKFCW9wQCACn0hknBAIgKDXHBYEAILX+OCAQAMnLlqghEACFt11RQiAACgCivKwRAEUAIgi/2keMNDRqDA9VKO+E4YWMjV84HREAG6oa9EEADMSz0ZQA2FDRoA8CYCCejaYEwIaKBn0QAAPxbDTNDIDSkuVs/OwToSYtvZfmfdODCbitchPrOnCeGzL6cZxtuLzPhv4sMwBAjQv1R9ihjTu5wnz/85NVXdzFJn58UxJu+NgdVrmqnBtb3baXvfr8TqkfWVCmAMBkP7Q+ZcuKl3LnfX3oATvZc0WmCYPPEFvrjhv1IR1kNiBzALDUoboLRBBV26uKD3GZAwCTwtKHbBdgq7/h1mn2ePSFjr7S2EwCWLdyDRtsvqvtBWDkL0/c56aw3rFBtruzWSqobkAmAcgMWbQLRCYeRerJgcosAGw1w+TLz22dcyLCdo3uEVZnF2QWAIigc5q519jG6iqq52ln88zPA5NpADJDzu0CbPVHYbxBEJkHgB1Lc8YqOjVFZbxOAYDJitIL/A3yO+/SFaXxOgdAVifi5eYojdc5ALJjaRhA1MbrJACYNFYnCopis9gmO5Jm3oSDAmCGnIuTlSpkgur+3SkA2L2AAOguHc142c2YUpCmoLrh2FGUTFhXTc14Ue6Hsz78eC9w6BiqKbIoHEs9IPL7L1+F737DBTtLjzSnm8ybsCj1wOova9kyIwaVIqJYWtN9YsfOYIrB4qgYZwBHtLJ5N11RbNQ1ocymIOwTFd6qxkrS+VzOqipLlJbOs8Y+o0/8jRrDE0bx/wMwMbE6D3ZU1U1FTgPAvorAhMwXHG+pOwsAKzeovGDBUpfO3cBJALJyg0qV00YfsCPCABb0r1byhFxQf/dNpfSuFISNbNMDsByusvpzz4ntAtV+nAMgKzXr3Gplu0DFkJ0CIBMsn2Mk5iUqdwOnAGgl15iCCUBMQouGIQAEQE0Bm6cgtRHjiaIdEI/OwlEIAAFQU6DQUpBqiSE8eyduwmrIzaIIgJl+xq0JgLGEZh0QADP9jFuHAUx+WsEWvyk27jefDnzm9aSqGprPJHTb8HaArsHqjsmLB/EHuju2OwcAxEgaguexCW+hV9N3u+OtkwCg+lpW9m/ewoxrJxQt8ipAfHgAJwHAxHkQ4vCDIs872NfV0ZGj7ywAUSqKEkIu7we3ntMA4vQDnvhOp6DgKozalIOmGzYe53eAyA/g322ZctB0CYDgEB+VKYdNlwAgtyheKjIxZVHeJxPWhJBPKlIRn0xYAMLUlDHTpRSkUMgxvSljpmsdgMJ8MhNS29DUNOX7N7AJyUyXABguh5o9TY885tfzulHN+1ZN2HA+BdmcByEf8a2YcEEqaPjQtfub1vp//QHfZ6UzIgbKy7pdG9+EdQfMSjxAmJr0x2A+OqZLHmBxBYApQ3fB8rJu9/8B9g+8QHotYFcAAAAASUVORK5CYII=";
const DownloadIcons_csv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAGSElEQVR4Xu2cXYhVVRTH9xHDh0JMFJsCkYmiqcwicmIg7MsxIgqxQsbIB8ceEp+y8iERyQfNfLJ6aGYgy4bBFKlAmhm0JBjU6MOmmkiUEnKaklGKCYaiW2u4+7LPcn/O3udjd9Z9UThrf/1/e6211z73TsLoU6gCSaGj0+CMABS8CQgAAShYgYKHJw+IHcDx8ydqBa/BafgkYTtbm1o3OzXK0NjbA2IDAFqWCUIlAZQJQmUALJh1DRub/CUVTMrgCZUB0DK3mY1P/Fk6CJUCANu/bBAqB6BsECoJoEwQKgugLBAqDaAMEHIDcObSWad68vo5zSl73/ZwClJ9ikzMBKBOpSgIBEBwiyIgEAAUl/KGkBsApwSQgbEuB+Dh8oRAABSw84JAADTelgcEAmAId1lDyA2A7znet71LDsgzJxAAy4SflScQAEsAqmuLu69t9dLQqzFMyvadsG8I8W3vE4JERtgTogHgsNGiMiUABeMiAAQgri9mheZVuAc83f1CVN+MCw3g7c5XvA4yXo1hMQSAAITe1E79kQc4yRXemACE19Spx8oCmHfl1Q2hLkxcdBItpHFUAEC0ZTfdxW5beANbNHfhlA6/T15gI+Nn2aenhtnwzz8YtVl1Zzu7t2UJmz1rXsr2xOhJtv/YUYZhcHtuDFcJWw+9Lh3HxZZ3EA2AxdfdyDY9tE4r8AdfHWEHPx+Q2gC8je0dDXAyI4D55sfvp0DKxn2ub8dloKC/PU89nwKrm09UAGzE5wt69aMeqSdsW7lBKz5vDxC2HepOCbx33c4UL9kYAHj36vQPZ1RzETuLwgOweD+On2NDY0Psqsn5qXDEQ9LGfbtSgskAwu489v1nrGnOfPbMfY9pd+6zD69irU1LG31CuHrj8EHjGGt7XjSGxNIDwOLJFo8B4Z0HsfnR2x9QCojHAMBinF/RdgfraFndaI+fwwPTGCoSpQeAFyZza2yDY6/pOYiDw4y4e2XhBe9uvAl6R/pY/9CX8XsAdn9ZAjQJbLODTUqZvAwDVCVqPE7pPQAv3Cau4kXKdjCEkQMnB62OrrIQI3qZKYTp4FYCgExALgrkFJsaQieyyQMJQF0BHM5EYWw8QpUncL82x89o6oAQIUgUGvLBI80PXlYJm+oIeK7KR7gAcwmTlQlBOAwAiLYFbdLiTJVAcTLntYRYgMmOyRSCNApAbMeFmEpEnMzBDr7uItYItsfPaEKQzTEURHx86fKGzF+fO526E4Ln4gdf2uEEC9cRuJrm7cWQyC8CxSrZ9vgZDYAQhRiO0Vgkm0KLC4bnAxD4zaqsQjbVF6XPAXh3ym4YTUWS6bkLAN3FoM3tZ3SFGExYVuaf/2liai33LFmcuiiThQ/ZruXXziD+k8vuT/Vh2sn4OGpzglJ5Quk9ACae53U0jGc6x8vqCV3eiPoUxCdvA0F3AoGdvnVlp/L8z8exOUbi4yi0tWknAxGFB/CJq15JfjJyaupu3+bdruqVJH/HYHODOd2XL9EDMJ0oXJ6DiPAyBj6jl36zgufSP7YdPTru1Hywt9vqS29WRrqRq/LNOALgtP/CGxOA8Jo69UgAnOQKb0wAwmvq1GNpAdj+SM9ptSU03rKpy2lWuZ2CCICcCwFw2q9mY/IAs0aZWkQPwPeH1kW3JwAF/9E/AkAA5CHW9hRUdAjxHT96D8g0Q+bQOQHIQWTdEASAAPjlgIL18x4+eg/wTYJZtYdXmK4Xbd406x0kLNni/Ubs/3AKOtzzBft1NOffGidsZPDd7psJQH03vrX9SKiNbe7nP/FnzEye6N/b9S0BqMsFXxQbeOe4WbwAFjOuSG4F8aGr3AAEmHfmXcAvbbKGAHF/oLdrO18MAUBY4c8dDH94JhPYWHzyAIXMe3YfCJ+U60kXD0keIIEwNvYH27+vPxwEIekSAMvgAhBe29Vnaa03E5MuAXCQNERSlsV9cQoUggxAfJKySXxKwpbeMK2krEi6FIIsRRfNnJOyJukSgGkAgCYuSVmXdIMDmOZ6omzW3rH+pRqrvaybvE3cD5qEo1TSY9I6CK7iB0nCHmuJtunyNZ3fsRprSS3AMulSCAqAfcXa9bf883ftvQYEh6RLAAIAgC6mIPxV+wb+75J0CUAgANAN5AP4V7xedu3+XxQVLi2DPqcGAAAAAElFTkSuQmCC";
const json = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFQUlEQVR4Xu2cv2sUQRTH55JGIYhCAiagSIoEFRWtFGOXaGWRQhCDjRgL/wCx0EIUQf+AFCbYxATBIoKVJo0kop0YQdEiWF2EBJSQwiY58+AmzL17Mzt7b+529+Zto97tm9n5fub9mLeJJSVXpgqUMp1dJlcCIONNIAAEQMYKZDy9eEDRAXz+MVbJeA2ppq+o0pMzgy/upjJq4s1sDygaANAyTxCiBJAnCNEA6Nl/Sa39fVsTTPLgCdEAGDj8WP3ZeJ87CFEBgO2fNwjRAcgbhCgB5AlCtADyAiFqAHmAED2ArCEIgOrJIKvqSAAYR7MsIAgA1GhrNQQBQHQ6WwlBAFhaza2CIAAcvf5WQBAACS9bmg1BAHi87WomBAHgAaCZhzUB4AnABuH04AxLQ5YxPFRR3gnDC5kQFw5HAiCEqowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmhQEwObFcs97x2yfr1r++9k99XCqr36ubu98d7O1SR/r3qROnuq16uex6+7pUd8+eOts3cys185w930fOkfTcbQMAC4IVAxDnhvrqxPz6ZV19+lB2bmZKXDwfjH95tL9unCgA+IgIymCRfO3AFkOggFOgogCAF6nDzq+VjZowgYXEdiAghBy4cCiDz8ywRwGgvKDtAVC72BQKf69Fwp/7hBnzHlvIG70yUBPmogPguwuxgFRSt8EDb7ABwPO3PQCoYOZe/aypenAyhHvMC6oaU0BbAnWN7Ur6phe0PQAQlsoBVMVjQjBtbACosbWnUFWQLn/NUBUFAFs1o5MqVcebwthqeOwBZiKmzgFmOatBRQHAFZOp8hPvbN8Q5AIAYcesnDTUaACAOOAJVOmpIZhhKbQHAAC4dD7SUKMCoGO8CwQVGkJ5AE7u4AX4lI2rrbZpRdT1AKoegQWgQkNIAGY+gnHNvhQ+zMG/Cw8AFmxeuOlmq+V9qiDXIQ8nYVfpaT5fbj0g6WRqi6VJMdZWy/scxFwNNxcAV4+pMADMsJDmQIRLykZbEVQJ6mpFJLUgtBfkFoBtwdAcw40xUwhqt+n6f7W8WZcEXYck3cQDsagWtasZhwHYvCC3AJJqeb2DqISZpq1sCpXGLqkdjQFQG6oQSTjpxQpeqAaTZAf3USdeHwg+nVLquahnyrUHuOp4W7vArDCoV4taeNurRfge7CBcmYc4HY58X0lSAFytDP3chSlDqTq/HT4TABlTFAACoFj/bWVoXuIBoRW1jHfnwd5UM83PTnn9+pfXTa6Zi/I7YqnUI24WAFwFmfYCgCkg11wAcBVk2gsApoBccwHAVZBpLwCYAnLNBQBXQaa9AGAKyDUXAFwFmfYCgCkg11wAcBVk2gsApoBccwHAVdBiD+99F5ePN2l097AlVbov3dAdjdLu7iC0Sur7/MzUMQFQVbOlEHbEV1vbw/Mvn5cFQBUA/ATE04kDQTZ30iCVzo4LC9PPluA+AWCoBT9jNP36UJJ+rO8h7r+bnXykBxEASM5mJmUsvniAZS83JR9Uky6eUjygFRCMpCsAPCN4yKRsJl0B4AkAbguRlKm4bz6ChKAEIJyknCS+JGFPb2goKVuSroQgT9HxbakgOJKuAGgQQJqk7Eq6wQE0uJ5Cml28Nn6voioPXQ/vE/eDJuFCKsl4aBeEtOIHScKMtRTWdGTs5jdVUUdrFuCZdCUEBcA+cvVGn+rsWNiFkCLpCoAAAGCI4eu3hkpb24vw9zRJVwAEAgDDQD6AP832ctrh/wNiXwwt6bNvAgAAAABJRU5ErkJggg==";

const DownloadXlsAll = ({
  scannedUrl
}) => {
  const {
    db
  } = Object(external_easy_peasy_["useStoreState"])(state => state);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: DownloadIcons_module_default.a["download-icon"] + " u-pull-right",
    src: xlsx,
    alt: scannedUrl,
    title: "Download as .xlsx",
    onClick: async () => await handleDownloadXlsAll(db, scannedUrl)
  });
};

const DownloadXls = ({
  selectedWeb,
  reportData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: DownloadIcons_module_default.a["download-icon"],
    src: xlsx,
    title: "Download current sheet as .xlsx",
    onClick: () => handleDownloadXls(selectedWeb, reportData)
  });
};

const DownloadCsv = ({
  selectedWeb,
  reportData
}) => {
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])("");
  const {
    0: url,
    1: setUrl
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    const {
      reportTitle,
      blobURL
    } = handleDownloadCsvBlob(selectedWeb, reportData);
    setTitle(reportTitle);
    setUrl(blobURL);
    return () => window.URL.revokeObjectURL(blobURL);
  }, [reportData]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    title: "Download current sheet as .csv",
    href: url,
    download: title,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: DownloadIcons_module_default.a["download-icon"],
      src: DownloadIcons_csv
    })
  });
};

const DownloadJson = ({
  selectedWeb,
  reportData
}) => {
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])("");
  const {
    0: url,
    1: setUrl
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    const {
      reportTitle,
      blobURL
    } = handleDownloadJsonBlob(selectedWeb, reportData);
    setTitle(reportTitle);
    setUrl(blobURL);
    return () => window.URL.revokeObjectURL(blobURL);
  }, [reportData]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    title: "Download current sheet as .json",
    href: url,
    download: title,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: DownloadIcons_module_default.a["download-icon"],
      src: json
    })
  });
};


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
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DownloadXlsAll, {
        scannedUrl: scannedUrl
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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
      overflow: "nowrap",
      onCellsChanged: changes => {
        const grid = this.props.data.map(row => [...row]);
        changes.forEach(({
          cell,
          row,
          col,
          value
        }) => {
          grid[row][col] = _objectSpread(_objectSpread({}, grid[row][col]), {}, {
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
    0: reportData,
    1: setReportData
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
    index = index === -1 ? 0 : index; // Set data for display in react-worksheet

    allSheetData.length && setSheetData(allSheetData[index] || []); // Set data for display in xlsx, csv and json reports

    allSheetData.length && setReportData(allTsGroupedData[index] || []);
  }, [allTsGroupedData, selectedTs, allSheetData]);
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
          }), sheetData.length && hasDccData ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DownloadXls, {
              selectedWeb: selectedWeb,
              reportData: reportData
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DownloadCsv, {
              selectedWeb: selectedWeb,
              reportData: reportData
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DownloadJson, {
              selectedWeb: selectedWeb,
              reportData: reportData
            })]
          }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
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
              children: Object(formatTimestamps["formatTs"])(timestamp)
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
    // Check if creds are passed in the URL (https://username:password@www.website.com)

    const hasCreds = regex["authCreds"].test(url); // Extract creds from the URL in format username:password@

    const creds = hasCreds && url.match(regex["authCreds"])[0]; // If creds are passed, remove them from the URL

    const inputURL = creds ? url.replace(creds, "") : url;
    setScanUrl(inputURL); // Removes url value from local state

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

// EXTERNAL MODULE: ./src/lib/helpers/withoutCreds.js
var withoutCreds = __webpack_require__("Vt2K");

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
        scannedUrl: Object(withoutCreds["withoutCreds"])(url),
        slugs: fetchedMeta.slugs
      }, fetchedMeta.metadata);
    }

    if (isMetaAvailable) {
      // Store website metadata and slugs to local db
      await db.collection("metadata").insert(meta, () => {
        actions.addInfoEvent(`Metadata for ${Object(withoutCreds["withoutCreds"])(url)} successfully stored.`);
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
  }; // Cleanup function, resets all url data each time Modal component unmounts


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
  const dev = false; // Construct App URL for server side fetching

  const protocol = dev ? "http" : "https";
  const url = protocol + "://" + ctx.req.get("host");

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

/***/ "Vt2K":
/***/ (function(module, exports, __webpack_require__) {

const {
  authCreds
} = __webpack_require__("kHgJ");

exports.withoutCreds = url => {
  // Check if creds are passed in the URL (https://username:password@www.website.com)
  const hasCreds = authCreds.test(url); // Extract creds from the URL in format username:password@

  const creds = hasCreds && url.match(authCreds)[0].replace("@", ""); // If creds are passed, remove them from the URL

  const inputURL = creds ? url.replace(creds + "@", "") : url;
  return inputURL;
};

/***/ }),

/***/ "X1wy":
/***/ (function(module, exports) {

module.exports = require("xlsx");

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

/***/ "kHgJ":
/***/ (function(module, exports) {

// eslint-disable-next-line
exports.urlRgx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/; // Matches "en-us" or "en-us/"

exports.localeRgx = /[a-z][a-z]-[a-z][a-z]($|\/$)/;
exports.authCreds = /(?:[:\w]+@)/;

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

/***/ "mzHp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"download-icon": "DownloadIcons_download-icon__TPVcG"
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

    if (body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

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