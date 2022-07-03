(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2597:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "CurrentScan_title__9DHVG",
	"view-log": "CurrentScan_view-log__m8zEo"
};


/***/ }),

/***/ 2153:
/***/ ((module) => {

// Exports
module.exports = {
	"download-icon": "DownloadIcons_download-icon__9Y4aa"
};


/***/ }),

/***/ 9711:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "ModalBackground_background__c_Wtk"
};


/***/ }),

/***/ 1571:
/***/ ((module) => {

// Exports
module.exports = {
	"chip-container": "NewScanForm_chip-container__p3t_G",
	"chip": "NewScanForm_chip__q3h7b",
	"chip-label": "NewScanForm_chip-label__TmqVN",
	"chip-delete": "NewScanForm_chip-delete__E_uIT"
};


/***/ }),

/***/ 7032:
/***/ ((module) => {

// Exports
module.exports = {
	"newScan": "NewScanIcon_newScan__435Bt",
	"label": "NewScanIcon_label__haBKW",
	"icon": "NewScanIcon_icon__TT8lc"
};


/***/ }),

/***/ 6394:
/***/ ((module) => {

// Exports
module.exports = {
	"start": "NewScanInit_start__5J24u"
};


/***/ }),

/***/ 5282:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "NewScanModal_modal__YiAZ_"
};


/***/ }),

/***/ 4162:
/***/ ((module) => {

// Exports
module.exports = {
	"buildView": "ScanLog_buildView__vRWSp",
	"buildStreamFull": "ScanLog_buildStreamFull__ccjKo",
	"buildStream": "ScanLog_buildStream__7hseZ",
	"buildStreamOutput": "ScanLog_buildStreamOutput__90ok4",
	"buildStreamLine": "ScanLog_buildStreamLine__0d7ZY",
	"buildStreamFooter": "ScanLog_buildStreamFooter__DJOzi",
	"gray": "ScanLog_gray__n0EWB",
	"red": "ScanLog_red__Y0xi5"
};


/***/ }),

/***/ 8300:
/***/ ((module) => {

// Exports
module.exports = {
	"thumbnail-plh": "ScanThumb_thumbnail-plh__eJbcM",
	"thumbnail-img-plh": "ScanThumb_thumbnail-img-plh__3_W4T",
	"thumbnail-close-icon": "ScanThumb_thumbnail-close-icon__1RN0M",
	"thumbnail-img": "ScanThumb_thumbnail-img__bKlF7",
	"thumbnail-body-plh": "ScanThumb_thumbnail-body-plh__bm_5W",
	"thumbnail-icon": "ScanThumb_thumbnail-icon__vvMeS",
	"thumbnail-title": "ScanThumb_thumbnail-title__q2FWQ",
	"thumbnail-link": "ScanThumb_thumbnail-link__NNc9A"
};


/***/ }),

/***/ 6840:
/***/ ((module) => {

// Exports
module.exports = {
	"scans-row": "Scans_scans-row__NKnKS"
};


/***/ }),

/***/ 33:
/***/ ((module) => {

// Exports
module.exports = {
	"card-container": "WebCard_card-container__0iwuz",
	"card-image": "WebCard_card-image__NSiif",
	"card-body": "WebCard_card-body__mrwzZ",
	"loading": "WebCard_loading__06Nyj",
	"loading-animation": "WebCard_loading-animation__86pwV"
};


/***/ }),

/***/ 5329:
/***/ ((__unused_webpack_module, exports) => {

exports.N = (timestamp)=>{
    const addZero = (d)=>d = d > 9 ? d : "0" + d;
    const month = addZero(new Date(timestamp).getMonth() + 1);
    const day = addZero(new Date(timestamp).getDate());
    const hour = addZero(new Date(timestamp).getHours());
    const minute = addZero(new Date(timestamp).getMinutes());
    const second = addZero(new Date(timestamp).getSeconds());
    return `${day}-${month} ${hour}-${minute}-${second}`;
};


/***/ }),

/***/ 1878:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line
exports.urlRgx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
// Matches "en-us" or "en-us/"
exports.localeRgx = /[a-z][a-z]-[a-z][a-z]($|\/$)/;
exports.authCreds = /(?:[:\w]+@)/;


/***/ }),

/***/ 4902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { authCreds  } = __webpack_require__(1878);
exports.X = (url)=>{
    // Check if creds are passed in the URL (https://username:password@www.website.com)
    const hasCreds = authCreds.test(url);
    // Extract creds from the URL in format username:password@
    const creds = hasCreds && url.match(authCreds)[0].replace("@", "");
    // If creds are passed, remove them from the URL
    const inputURL = creds ? url.replace(creds + "@", "") : url;
    return inputURL;
};


/***/ }),

/***/ 2631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Navbar/Navbar.js
var Navbar = __webpack_require__(9359);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "easy-peasy"
var external_easy_peasy_ = __webpack_require__(9905);
// EXTERNAL MODULE: ./src/components/CurrentScan/CurrentScan.module.css
var CurrentScan_module = __webpack_require__(2597);
var CurrentScan_module_default = /*#__PURE__*/__webpack_require__.n(CurrentScan_module);
// EXTERNAL MODULE: ./src/components/ScanLog/ScanLog.module.css
var ScanLog_module = __webpack_require__(4162);
var ScanLog_module_default = /*#__PURE__*/__webpack_require__.n(ScanLog_module);
;// CONCATENATED MODULE: ./src/components/ScanLog/ScanLog.js




const ScanLog = ()=>{
    const scanLogRref = (0,external_react_.useRef)();
    const { scanUrl , infoEvents , errorEvents , scanInProgress  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    (0,external_react_.useEffect)(()=>{
        const child = scanLogRref.current.lastElementChild;
        child && child.scrollIntoViewIfNeeded && child.scrollIntoViewIfNeeded(true);
    }, [
        infoEvents
    ]);
    const setScanStatusText = ()=>{
        // if (!scanInProgress && scanUrl.length) return "Scan starting...";
        if (scanInProgress) return "Scan in progress...";
        if (!scanInProgress && scanUrl.length && infoEvents.length) return "Scan completed.";
        return "";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ScanLog_module_default()).buildView,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(ScanLog_module_default()).buildStreamFull} ${(ScanLog_module_default()).buildStream}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: scanLogRref,
                    className: (ScanLog_module_default()).buildStreamOutput,
                    children: infoEvents.map((event, i)=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                            className: (ScanLog_module_default()).buildStreamLine,
                            children: event
                        }, i))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                    className: (ScanLog_module_default()).buildStreamFooter,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: (ScanLog_module_default()).gray,
                            children: [
                                setScanStatusText(),
                                " "
                            ]
                        }),
                        errorEvents.length ? errorEvents.map((event, i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (ScanLog_module_default()).red,
                                children: event
                            }, i)) : ""
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ScanLog_ScanLog = (ScanLog);

;// CONCATENATED MODULE: ./src/components/CurrentScan/CurrentScan.js





const CurrentScan = ()=>{
    const { 0: viewLog , 1: setViewLog  } = (0,external_react_.useState)(false);
    const { scanUrl , metadata , dataEvents , db , scanInProgress  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    const actions = (0,external_easy_peasy_.useStoreActions)((actions)=>actions);
    (0,external_react_.useEffect)(()=>{
        scanUrl && !scanInProgress && actions.addInfoEvent(`Scan data for ${scanUrl} successfully processed.`);
        scanUrl && !scanInProgress && !dataEvents.length && actions.addInfoEvent(`No bvDCC data found for ${scanUrl}.`);
    }, [
        scanInProgress,
        dataEvents
    ]);
    // Process scan data
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const dataItem = dataEvents[dataEvents.length - 1];
            dataItem && /* dataItem.url === scanUrl && */ (await db.collection("dccdata").insert(dataItem, ()=>{
                actions.addInfoEvent(`Scan data for item ${dataItem.scannedUrl} successfully stored.`);
            }));
        })();
    }, [
        dataEvents
    ]);
    // Available items: description, icon, image, title, url
    const { icon , title  } = metadata;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "column",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "u-pull-left icon",
                            src: icon || "./logo192.png",
                            alt: "icon"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: (CurrentScan_module_default()).title,
                            children: scanUrl && title.length ? title : "Click on the + icon in the lower right corner of the screen to start a new scan."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: (CurrentScan_module_default())["view-log"],
                    onClick: ()=>setViewLog(!viewLog),
                    children: [
                        viewLog ? "Hide" : "View",
                        " scan log"
                    ]
                }),
                viewLog && /*#__PURE__*/ jsx_runtime_.jsx(ScanLog_ScanLog, {})
            ]
        })
    });
};
/* harmony default export */ const CurrentScan_CurrentScan = (CurrentScan);

// EXTERNAL MODULE: ./src/components/Scans/Scans.module.css
var Scans_module = __webpack_require__(6840);
var Scans_module_default = /*#__PURE__*/__webpack_require__.n(Scans_module);
// EXTERNAL MODULE: ./src/components/DownloadIcons/DownloadIcons.module.css
var DownloadIcons_module = __webpack_require__(2153);
var DownloadIcons_module_default = /*#__PURE__*/__webpack_require__.n(DownloadIcons_module);
;// CONCATENATED MODULE: external "xlsx"
const external_xlsx_namespaceObject = require("xlsx");
// EXTERNAL MODULE: ./src/lib/helpers/formatTimestamps.js
var formatTimestamps = __webpack_require__(5329);
// EXTERNAL MODULE: ./src/lib/helpers/regex.js
var regex = __webpack_require__(1878);
;// CONCATENATED MODULE: ./src/components/DownloadIcons/DownloadIcons.helper.js



const handleDownloadXlsAll = async (db, scannedUrl)=>{
    const title = makeReportName(scannedUrl, "xlsx");
    try {
        // Fetch all data for one website from db
        let websiteData = await db.col("dccdata").findAsArray({
            url: scannedUrl
        }, {
            _id: 0,
            url: 0
        });
        websiteData = websiteData// Where category field is an array of objects, extract only the "name" value
        .map((item)=>{
            if (Array.isArray(item.categoryPath)) item.categoryPath = item.categoryPath.reduce((acc, curr)=>{
                if (curr.Name) return acc = curr.Name;
            }, "");
            return item;
        });
        const tsSet = new Set(websiteData.map((d)=>d.timestamp));
        const timestamps = Array.from(tsSet).reverse();
        // Group data by timestamp
        const workbookData = timestamps.map((tStamp)=>websiteData.filter((row)=>row.timestamp === tStamp));
        const workbook = external_xlsx_namespaceObject.utils.book_new();
        workbookData.forEach((sheet, i)=>{
            sheet.forEach((row)=>delete row.timestamp);
            const wsName = (0,formatTimestamps/* formatTs */.N)(timestamps[i]);
            const worksheet = external_xlsx_namespaceObject.utils.json_to_sheet(sheet);
            external_xlsx_namespaceObject.utils.book_append_sheet(workbook, worksheet, wsName);
        });
        external_xlsx_namespaceObject.writeFile(workbook, title);
    } catch (error) {
        console.warn("An error occurred while creating the report!", error);
    }
};
const handleDownloadXls = async (scannedUrl, reportData)=>{
    // Remove timestamps
    reportData = reportData.map((row)=>{
        const { timestamp , ...remainingKeys } = row;
        return remainingKeys;
    });
    const title = makeReportName(scannedUrl, "xlsx");
    try {
        const workbook = external_xlsx_namespaceObject.utils.book_new();
        const wsName = (0,formatTimestamps/* formatTs */.N)(new Date().getTime());
        const worksheet = external_xlsx_namespaceObject.utils.json_to_sheet(reportData);
        external_xlsx_namespaceObject.utils.book_append_sheet(workbook, worksheet, wsName);
        external_xlsx_namespaceObject.writeFile(workbook, title);
    } catch (error) {
        console.warn("An error occurred while creating the report!", error);
    }
};
const handleDownloadCsvBlob = (scannedUrl, reportData)=>{
    // Remove timestamps
    reportData = reportData.map((row)=>{
        const { timestamp , ...remainingKeys } = row;
        return remainingKeys;
    });
    const reportTitle = makeReportName(scannedUrl, "csv");
    try {
        const worksheet = external_xlsx_namespaceObject.utils.json_to_sheet(reportData);
        const csv = external_xlsx_namespaceObject.utils.sheet_to_csv(worksheet);
        window.URL = window.URL || window.webkiURL;
        const blob = new Blob([
            csv
        ]);
        const blobURL = window.URL.createObjectURL(blob);
        return {
            reportTitle,
            blobURL
        };
    } catch (error) {
        console.warn("An error occurred while creating the report!", error);
    }
};
const handleDownloadJsonBlob = (scannedUrl, reportData)=>{
    // Remove timestamps
    reportData = reportData.map((row)=>{
        const { timestamp , ...remainingKeys } = row;
        return remainingKeys;
    });
    const reportTitle = makeReportName(scannedUrl, "json");
    try {
        window.URL = window.URL || window.webkiURL;
        const blob = new Blob([
            JSON.stringify(reportData, null, 2)
        ]);
        const blobURL = window.URL.createObjectURL(blob);
        return {
            reportTitle,
            blobURL
        };
    } catch (error) {
        console.warn("An error occurred while creating the report!", error);
    }
};
const makeReportName = (scannedUrl, extension)=>{
    let urlRN = scannedUrl.replace(/http(|s)\:\/\//, "").split(regex.localeRgx)[0];
    if (urlRN.slice(-1) === "/") urlRN = urlRN.slice(0, urlRN.length - 1);
    return `bvDCC_extract_${urlRN}_${new Date().getTime()}.${extension}`;
};

;// CONCATENATED MODULE: ./src/components/DownloadIcons/DownloadIcons.js





const xlsx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFIUlEQVR4Xu2bS0hWQRTH51pBQiFFhAS5CVfpoo1EkBRILpIwgqiMyoVBq+hpkbQIIexhtQoysCItgkjCFqZUKIi0KdJWEkGLsOhBVLSwvHnED67XmTMz38x9fHfOt8wzM3f+v5nznzn35jH6JaqAl+joNDgjAAkvAgJAABJWIOHhaQcUOoAlR9f7Cc9Ba/jph2373T5ySqtRhMHGO6DQAICWaYLgJIA0QXAGwOHNO9i15w/nJJM07ARnALw+c5V1Dg+lDoJTAGD5pw2CcwDSBsFJAGmC4CyAtEBwGkAaIDgPIGkIBGD2ZpDU6YgABK5mSUAgAKFCW9wQCACn0hknBAIgKDXHBYEAILX+OCAQAMnLlqghEACFt11RQiAACgCivKwRAEUAIgi/2keMNDRqDA9VKO+E4YWMjV84HREAG6oa9EEADMSz0ZQA2FDRoA8CYCCejaYEwIaKBn0QAAPxbDTNDIDSkuVs/OwToSYtvZfmfdODCbitchPrOnCeGzL6cZxtuLzPhv4sMwBAjQv1R9ihjTu5wnz/85NVXdzFJn58UxJu+NgdVrmqnBtb3baXvfr8TqkfWVCmAMBkP7Q+ZcuKl3LnfX3oATvZc0WmCYPPEFvrjhv1IR1kNiBzALDUoboLRBBV26uKD3GZAwCTwtKHbBdgq7/h1mn2ePSFjr7S2EwCWLdyDRtsvqvtBWDkL0/c56aw3rFBtruzWSqobkAmAcgMWbQLRCYeRerJgcosAGw1w+TLz22dcyLCdo3uEVZnF2QWAIigc5q519jG6iqq52ln88zPA5NpADJDzu0CbPVHYbxBEJkHgB1Lc8YqOjVFZbxOAYDJitIL/A3yO+/SFaXxOgdAVifi5eYojdc5ALJjaRhA1MbrJACYNFYnCopis9gmO5Jm3oSDAmCGnIuTlSpkgur+3SkA2L2AAOguHc142c2YUpCmoLrh2FGUTFhXTc14Ue6Hsz78eC9w6BiqKbIoHEs9IPL7L1+F737DBTtLjzSnm8ybsCj1wOova9kyIwaVIqJYWtN9YsfOYIrB4qgYZwBHtLJ5N11RbNQ1ocymIOwTFd6qxkrS+VzOqipLlJbOs8Y+o0/8jRrDE0bx/wMwMbE6D3ZU1U1FTgPAvorAhMwXHG+pOwsAKzeovGDBUpfO3cBJALJyg0qV00YfsCPCABb0r1byhFxQf/dNpfSuFISNbNMDsByusvpzz4ntAtV+nAMgKzXr3Gplu0DFkJ0CIBMsn2Mk5iUqdwOnAGgl15iCCUBMQouGIQAEQE0Bm6cgtRHjiaIdEI/OwlEIAAFQU6DQUpBqiSE8eyduwmrIzaIIgJl+xq0JgLGEZh0QADP9jFuHAUx+WsEWvyk27jefDnzm9aSqGprPJHTb8HaArsHqjsmLB/EHuju2OwcAxEgaguexCW+hV9N3u+OtkwCg+lpW9m/ewoxrJxQt8ipAfHgAJwHAxHkQ4vCDIs872NfV0ZGj7ywAUSqKEkIu7we3ntMA4vQDnvhOp6DgKozalIOmGzYe53eAyA/g322ZctB0CYDgEB+VKYdNlwAgtyheKjIxZVHeJxPWhJBPKlIRn0xYAMLUlDHTpRSkUMgxvSljpmsdgMJ8MhNS29DUNOX7N7AJyUyXABguh5o9TY885tfzulHN+1ZN2HA+BdmcByEf8a2YcEEqaPjQtfub1vp//QHfZ6UzIgbKy7pdG9+EdQfMSjxAmJr0x2A+OqZLHmBxBYApQ3fB8rJu9/8B9g+8QHotYFcAAAAASUVORK5CYII=";
const csv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAGSElEQVR4Xu2cXYhVVRTH9xHDh0JMFJsCkYmiqcwicmIg7MsxIgqxQsbIB8ceEp+y8iERyQfNfLJ6aGYgy4bBFKlAmhm0JBjU6MOmmkiUEnKaklGKCYaiW2u4+7LPcn/O3udjd9Z9UThrf/1/e6211z73TsLoU6gCSaGj0+CMABS8CQgAAShYgYKHJw+IHcDx8ydqBa/BafgkYTtbm1o3OzXK0NjbA2IDAFqWCUIlAZQJQmUALJh1DRub/CUVTMrgCZUB0DK3mY1P/Fk6CJUCANu/bBAqB6BsECoJoEwQKgugLBAqDaAMEHIDcObSWad68vo5zSl73/ZwClJ9ikzMBKBOpSgIBEBwiyIgEAAUl/KGkBsApwSQgbEuB+Dh8oRAABSw84JAADTelgcEAmAId1lDyA2A7znet71LDsgzJxAAy4SflScQAEsAqmuLu69t9dLQqzFMyvadsG8I8W3vE4JERtgTogHgsNGiMiUABeMiAAQgri9mheZVuAc83f1CVN+MCw3g7c5XvA4yXo1hMQSAAITe1E79kQc4yRXemACE19Spx8oCmHfl1Q2hLkxcdBItpHFUAEC0ZTfdxW5beANbNHfhlA6/T15gI+Nn2aenhtnwzz8YtVl1Zzu7t2UJmz1rXsr2xOhJtv/YUYZhcHtuDFcJWw+9Lh3HxZZ3EA2AxdfdyDY9tE4r8AdfHWEHPx+Q2gC8je0dDXAyI4D55sfvp0DKxn2ub8dloKC/PU89nwKrm09UAGzE5wt69aMeqSdsW7lBKz5vDxC2HepOCbx33c4UL9kYAHj36vQPZ1RzETuLwgOweD+On2NDY0Psqsn5qXDEQ9LGfbtSgskAwu489v1nrGnOfPbMfY9pd+6zD69irU1LG31CuHrj8EHjGGt7XjSGxNIDwOLJFo8B4Z0HsfnR2x9QCojHAMBinF/RdgfraFndaI+fwwPTGCoSpQeAFyZza2yDY6/pOYiDw4y4e2XhBe9uvAl6R/pY/9CX8XsAdn9ZAjQJbLODTUqZvAwDVCVqPE7pPQAv3Cau4kXKdjCEkQMnB62OrrIQI3qZKYTp4FYCgExALgrkFJsaQieyyQMJQF0BHM5EYWw8QpUncL82x89o6oAQIUgUGvLBI80PXlYJm+oIeK7KR7gAcwmTlQlBOAwAiLYFbdLiTJVAcTLntYRYgMmOyRSCNApAbMeFmEpEnMzBDr7uItYItsfPaEKQzTEURHx86fKGzF+fO526E4Ln4gdf2uEEC9cRuJrm7cWQyC8CxSrZ9vgZDYAQhRiO0Vgkm0KLC4bnAxD4zaqsQjbVF6XPAXh3ym4YTUWS6bkLAN3FoM3tZ3SFGExYVuaf/2liai33LFmcuiiThQ/ZruXXziD+k8vuT/Vh2sn4OGpzglJ5Quk9ACae53U0jGc6x8vqCV3eiPoUxCdvA0F3AoGdvnVlp/L8z8exOUbi4yi0tWknAxGFB/CJq15JfjJyaupu3+bdruqVJH/HYHODOd2XL9EDMJ0oXJ6DiPAyBj6jl36zgufSP7YdPTru1Hywt9vqS29WRrqRq/LNOALgtP/CGxOA8Jo69UgAnOQKb0wAwmvq1GNpAdj+SM9ptSU03rKpy2lWuZ2CCICcCwFw2q9mY/IAs0aZWkQPwPeH1kW3JwAF/9E/AkAA5CHW9hRUdAjxHT96D8g0Q+bQOQHIQWTdEASAAPjlgIL18x4+eg/wTYJZtYdXmK4Xbd406x0kLNni/Ubs/3AKOtzzBft1NOffGidsZPDd7psJQH03vrX9SKiNbe7nP/FnzEye6N/b9S0BqMsFXxQbeOe4WbwAFjOuSG4F8aGr3AAEmHfmXcAvbbKGAHF/oLdrO18MAUBY4c8dDH94JhPYWHzyAIXMe3YfCJ+U60kXD0keIIEwNvYH27+vPxwEIekSAMvgAhBe29Vnaa03E5MuAXCQNERSlsV9cQoUggxAfJKySXxKwpbeMK2krEi6FIIsRRfNnJOyJukSgGkAgCYuSVmXdIMDmOZ6omzW3rH+pRqrvaybvE3cD5qEo1TSY9I6CK7iB0nCHmuJtunyNZ3fsRprSS3AMulSCAqAfcXa9bf883ftvQYEh6RLAAIAgC6mIPxV+wb+75J0CUAgANAN5AP4V7xedu3+XxQVLi2DPqcGAAAAAElFTkSuQmCC";
const json = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFQUlEQVR4Xu2cv2sUQRTH55JGIYhCAiagSIoEFRWtFGOXaGWRQhCDjRgL/wCx0EIUQf+AFCbYxATBIoKVJo0kop0YQdEiWF2EBJSQwiY58+AmzL17Mzt7b+529+Zto97tm9n5fub9mLeJJSVXpgqUMp1dJlcCIONNIAAEQMYKZDy9eEDRAXz+MVbJeA2ppq+o0pMzgy/upjJq4s1sDygaANAyTxCiBJAnCNEA6Nl/Sa39fVsTTPLgCdEAGDj8WP3ZeJ87CFEBgO2fNwjRAcgbhCgB5AlCtADyAiFqAHmAED2ArCEIgOrJIKvqSAAYR7MsIAgA1GhrNQQBQHQ6WwlBAFhaza2CIAAcvf5WQBAACS9bmg1BAHi87WomBAHgAaCZhzUB4AnABuH04AxLQ5YxPFRR3gnDC5kQFw5HAiCEqowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmAiCEiowxBABDvBCmhQEwObFcs97x2yfr1r++9k99XCqr36ubu98d7O1SR/r3qROnuq16uex6+7pUd8+eOts3cys185w930fOkfTcbQMAC4IVAxDnhvrqxPz6ZV19+lB2bmZKXDwfjH95tL9unCgA+IgIymCRfO3AFkOggFOgogCAF6nDzq+VjZowgYXEdiAghBy4cCiDz8ywRwGgvKDtAVC72BQKf69Fwp/7hBnzHlvIG70yUBPmogPguwuxgFRSt8EDb7ABwPO3PQCoYOZe/aypenAyhHvMC6oaU0BbAnWN7Ur6phe0PQAQlsoBVMVjQjBtbACosbWnUFWQLn/NUBUFAFs1o5MqVcebwthqeOwBZiKmzgFmOatBRQHAFZOp8hPvbN8Q5AIAYcesnDTUaACAOOAJVOmpIZhhKbQHAAC4dD7SUKMCoGO8CwQVGkJ5AE7u4AX4lI2rrbZpRdT1AKoegQWgQkNIAGY+gnHNvhQ+zMG/Cw8AFmxeuOlmq+V9qiDXIQ8nYVfpaT5fbj0g6WRqi6VJMdZWy/scxFwNNxcAV4+pMADMsJDmQIRLykZbEVQJ6mpFJLUgtBfkFoBtwdAcw40xUwhqt+n6f7W8WZcEXYck3cQDsagWtasZhwHYvCC3AJJqeb2DqISZpq1sCpXGLqkdjQFQG6oQSTjpxQpeqAaTZAf3USdeHwg+nVLquahnyrUHuOp4W7vArDCoV4taeNurRfge7CBcmYc4HY58X0lSAFytDP3chSlDqTq/HT4TABlTFAACoFj/bWVoXuIBoRW1jHfnwd5UM83PTnn9+pfXTa6Zi/I7YqnUI24WAFwFmfYCgCkg11wAcBVk2gsApoBccwHAVZBpLwCYAnLNBQBXQaa9AGAKyDUXAFwFmfYCgCkg11wAcBVk2gsApoBccwHAVdBiD+99F5ePN2l097AlVbov3dAdjdLu7iC0Sur7/MzUMQFQVbOlEHbEV1vbw/Mvn5cFQBUA/ATE04kDQTZ30iCVzo4LC9PPluA+AWCoBT9jNP36UJJ+rO8h7r+bnXykBxEASM5mJmUsvniAZS83JR9Uky6eUjygFRCMpCsAPCN4yKRsJl0B4AkAbguRlKm4bz6ChKAEIJyknCS+JGFPb2goKVuSroQgT9HxbakgOJKuAGgQQJqk7Eq6wQE0uJ5Cml28Nn6voioPXQ/vE/eDJuFCKsl4aBeEtOIHScKMtRTWdGTs5jdVUUdrFuCZdCUEBcA+cvVGn+rsWNiFkCLpCoAAAGCI4eu3hkpb24vw9zRJVwAEAgDDQD6AP832ctrh/wNiXwwt6bNvAgAAAABJRU5ErkJggg==";
const DownloadXlsAll = ({ scannedUrl  })=>{
    const { db  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: (DownloadIcons_module_default())["download-icon"] + " u-pull-right",
        src: xlsx,
        alt: scannedUrl,
        title: "Download as .xlsx",
        onClick: async ()=>await handleDownloadXlsAll(db, scannedUrl)
    });
};
const DownloadXls = ({ selectedWeb , reportData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: (DownloadIcons_module_default())["download-icon"],
        src: xlsx,
        title: "Download current sheet as .xlsx",
        onClick: ()=>handleDownloadXls(selectedWeb, reportData)
    });
};
const DownloadCsv = ({ selectedWeb , reportData  })=>{
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)("");
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const { reportTitle , blobURL  } = handleDownloadCsvBlob(selectedWeb, reportData);
        setTitle(reportTitle);
        setUrl(blobURL);
        return ()=>window.URL.revokeObjectURL(blobURL);
    }, [
        reportData
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        title: "Download current sheet as .csv",
        href: url,
        download: title,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            className: (DownloadIcons_module_default())["download-icon"],
            src: csv
        })
    });
};
const DownloadJson = ({ selectedWeb , reportData  })=>{
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)("");
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const { reportTitle , blobURL  } = handleDownloadJsonBlob(selectedWeb, reportData);
        setTitle(reportTitle);
        setUrl(blobURL);
        return ()=>window.URL.revokeObjectURL(blobURL);
    }, [
        reportData
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        title: "Download current sheet as .json",
        href: url,
        download: title,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            className: (DownloadIcons_module_default())["download-icon"],
            src: json
        })
    });
};


// EXTERNAL MODULE: ./src/components/ScanThumb/ScanThumb.module.css
var ScanThumb_module = __webpack_require__(8300);
var ScanThumb_module_default = /*#__PURE__*/__webpack_require__.n(ScanThumb_module);
;// CONCATENATED MODULE: ./src/components/ScanThumb/ScanThumb.js




const ScanThumb = ({ thumbnail , setShowModal , setsSlectedWeb , setMetaArray  })=>{
    const { url , image , icon , title , description , scannedUrl  } = thumbnail;
    const { scanUrl , db  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    const handleDelete = async ()=>{
        await db.remove(scannedUrl);
        // Re-renders the website thumbnails list
        setMetaArray((metaArray)=>metaArray.filter((item)=>item.scannedUrl !== scannedUrl));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ScanThumb_module_default())["thumbnail-plh"] + " columns three",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ScanThumb_module_default())["thumbnail-img-plh"],
                children: [
                    scannedUrl !== scanUrl && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: (ScanThumb_module_default())["thumbnail-close-icon"],
                        onClick: ()=>handleDelete(),
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (ScanThumb_module_default())["thumbnail-img"],
                        src: image || "./placeholder.gif",
                        alt: description,
                        title: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ScanThumb_module_default())["thumbnail-body-plh"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (ScanThumb_module_default())["thumbnail-icon"] + " u-pull-left",
                        src: icon || "./favicon.ico",
                        alt: "icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: (ScanThumb_module_default())["thumbnail-title"],
                        alt: title,
                        title: title,
                        children: title || "Lorem ipsum dolor sit."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        title: url,
                        className: (ScanThumb_module_default())["thumbnail-link"],
                        onClick: ()=>{
                            setShowModal(true);
                            setsSlectedWeb(scannedUrl);
                        },
                        children: "View DCC data"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DownloadXlsAll, {
                        scannedUrl: scannedUrl
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ScanThumb_ScanThumb = (ScanThumb);

// EXTERNAL MODULE: ./src/components/ModalBackground/ModalBackground.module.css
var ModalBackground_module = __webpack_require__(9711);
var ModalBackground_module_default = /*#__PURE__*/__webpack_require__.n(ModalBackground_module);
;// CONCATENATED MODULE: ./src/components/ModalBackground/ModalBackground.js


const ModalBackground = ({ children , trigger  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ModalBackground_module_default()).background,
        onClick: (e)=>/background/.test(e.target.className) && trigger(false),
        children: children
    });
};
/* harmony default export */ const ModalBackground_ModalBackground = (ModalBackground);

;// CONCATENATED MODULE: ./src/lib/helpers/arrayHelpers.js
const chunkify = (array)=>{
    return Array.from({
        length: Math.ceil(array.length / 4)
    }, (_, i)=>{
        const start = i * 4;
        return array.slice(start, start + 4);
    });
};
const createTableData = (dataRaw)=>{
    // Creates 15X36 empty spreadsheet as a default placeholder
    const numberOfColumns = dataRaw.length ? Object.keys(dataRaw[0]).length : 15;
    const row = Array.from({
        length: numberOfColumns
    }, (_, i)=>({
            value: " "
        }));
    const emptyTable = Array.from({
        length: 36
    }, (_, i)=>row);
    if (!dataRaw.length) return emptyTable;
    // dataRaw format:
    // [
    //   {url: "url", timestamp: "timestamp", scannedUrl: "scannedUrl", locale: "locale", productId: "productId", …},
    //   {url: "url", timestamp: "timestamp", scannedUrl: "scannedUrl", locale: "locale", productId: "productId", …}
    // ]
    // Format needed for react-datasheet:
    // [
    //   [{value:  1}, {value:  3}],
    //   [{value:  2}, {value:  4}]
    // ]
    const title = Object.keys(dataRaw[0]).map((titleKey)=>({
            value: titleKey
        }));
    const bodyRaw = dataRaw.map((row)=>Object.values(row));
    const body = bodyRaw.map((row)=>row.map((cell)=>({
                value: Array.isArray(cell) ? JSON.stringify(cell) : cell
            })));
    return [
        title,
        ...body,
        ...emptyTable
    ];
};

;// CONCATENATED MODULE: external "next/dist/shared/lib/styled-jsx"
const styled_jsx_namespaceObject = require("next/dist/shared/lib/styled-jsx");
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_namespaceObject);
;// CONCATENATED MODULE: external "react-datasheet"
const external_react_datasheet_namespaceObject = require("react-datasheet");
var external_react_datasheet_default = /*#__PURE__*/__webpack_require__.n(external_react_datasheet_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Worksheet/Worksheet.js



class Worksheet extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            grid: []
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {
            grid: props.data
        };
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_datasheet_default()), {
            data: this.state.grid,
            valueRenderer: (cell)=>cell.value,
            overflow: "nowrap",
            onCellsChanged: (changes)=>{
                const grid = this.props.data.map((row)=>[
                        ...row
                    ]);
                changes.forEach(({ cell , row , col , value  })=>{
                    grid[row][col] = {
                        ...grid[row][col],
                        value
                    };
                });
                this.setState({
                    grid
                });
            }
        });
    }
}
/* harmony default export */ const Worksheet_Worksheet = (Worksheet);

;// CONCATENATED MODULE: ./src/components/ScanData/ScanData.js









const ScanData = ({ selectedWeb  })=>{
    const { 0: hasDccData , 1: setHasDccData  } = (0,external_react_.useState)(true);
    const { 0: timestamps , 1: setTimestamps  } = (0,external_react_.useState)([]);
    const { 0: selectedTs , 1: setSelectedTs  } = (0,external_react_.useState)(null);
    const { 0: allTsData , 1: setAllTsData  } = (0,external_react_.useState)([]);
    const { 0: allTsGroupedData , 1: setAllTsGroupedData  } = (0,external_react_.useState)([]);
    const { 0: allSheetData , 1: setAllSheetData  } = (0,external_react_.useState)([]);
    const { 0: sheetData , 1: setSheetData  } = (0,external_react_.useState)([]);
    const { 0: reportData , 1: setReportData  } = (0,external_react_.useState)([]);
    const { db  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    // Get all dcc data for one website
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const websiteData = await db.col("dccdata").findAsArray({
                url: selectedWeb
            }, {
                _id: 0,
                url: 0
            });
            websiteData.length ? setAllTsData(websiteData) : setHasDccData(false);
        })();
    }, []);
    // Make timestamps
    (0,external_react_.useEffect)(()=>{
        const tsSet = new Set(allTsData.map((d)=>d.timestamp));
        const ts = Array.from(tsSet);
        ts.length && setTimestamps(ts.reverse());
    }, [
        allTsData
    ]);
    // Group all data into array of arrays for each timestamp [[ts1],[ts2],[ts3]]
    (0,external_react_.useEffect)(()=>{
        const tsGroupDataTmp = timestamps.length && timestamps.map((t)=>allTsData.filter((c)=>c.timestamp === t));
        tsGroupDataTmp.length && setAllTsGroupedData(tsGroupDataTmp);
    }, [
        timestamps
    ]);
    // Prepare the arrays for the format required by react-datasheet
    (0,external_react_.useEffect)(()=>{
        const sheetAllDataTmp = allTsGroupedData.length ? allTsGroupedData.map((d)=>createTableData(d)) : [];
        sheetAllDataTmp.length && setAllSheetData(sheetAllDataTmp);
    }, [
        allTsGroupedData
    ]);
    // Display the selected timestamp data
    (0,external_react_.useEffect)(()=>{
        // Find the index of selected timestamp dataset and send that data to react-datasheet
        let index = allTsGroupedData.length && allTsGroupedData.findIndex((ds)=>ds[0].timestamp === selectedTs);
        index = index === -1 ? 0 : index;
        // Set data for display in react-worksheet
        allSheetData.length && setSheetData(allSheetData[index] || []);
        // Set data for display in xlsx, csv and json reports
        allSheetData.length && setReportData(allTsGroupedData[index] || []);
    }, [
        allTsGroupedData,
        selectedTs,
        allSheetData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-d3f9c5d3169746de" + " " + "data-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-d3f9c5d3169746de" + " " + "data-head",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-d3f9c5d3169746de" + " " + "data-head-url",
                                children: selectedWeb
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-d3f9c5d3169746de" + " " + "data-head-element",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-d3f9c5d3169746de",
                                        children: !sheetData.length && hasDccData && "Loading..."
                                    }),
                                    !hasDccData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "jsx-d3f9c5d3169746de",
                                        children: [
                                            "DCC data unavailable for ",
                                            selectedWeb
                                        ]
                                    }),
                                    sheetData.length && hasDccData ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(DownloadXls, {
                                                selectedWeb: selectedWeb,
                                                reportData: reportData
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DownloadCsv, {
                                                selectedWeb: selectedWeb,
                                                reportData: reportData
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DownloadJson, {
                                                selectedWeb: selectedWeb,
                                                reportData: reportData
                                            })
                                        ]
                                    }) : "",
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "jsx-d3f9c5d3169746de" + " " + "data-close-icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
                                            className: "jsx-d3f9c5d3169746de"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-d3f9c5d3169746de" + " " + "data-body",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-d3f9c5d3169746de" + " " + "data-spreadsheet",
                                children: sheetData.length ? /*#__PURE__*/ jsx_runtime_.jsx(Worksheet_Worksheet, {
                                    data: sheetData
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Worksheet_Worksheet, {
                                    data: createTableData([])
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-d3f9c5d3169746de" + " " + "data-dates-placeholder",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-d3f9c5d3169746de" + " " + "data-dates",
                                    children: timestamps.map((timestamp, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: ()=>setSelectedTs(timestamp),
                                            className: "jsx-d3f9c5d3169746de",
                                            children: (0,formatTimestamps/* formatTs */.N)(timestamp)
                                        }, i))
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "d3f9c5d3169746de",
                children: ".data-container.jsx-d3f9c5d3169746de{background:red;margin:20px;height:-webkit-calc(100vh - 40px);height:-moz-calc(100vh - 40px);height:calc(100vh - 40px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.data-head.jsx-d3f9c5d3169746de{background:green;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.data-head-url.jsx-d3f9c5d3169746de{background:darkmagenta;width:25rem;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none}.data-head-element.jsx-d3f9c5d3169746de{background:darkorange;-webkit-box-flex:1;-webkit-flex:1 1 0%;-moz-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.data-body.jsx-d3f9c5d3169746de{background:blue;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-y:hidden;height:100%}.data-spreadsheet.jsx-d3f9c5d3169746de{background:coral;overflow-y:auto;-webkit-box-flex:1;-webkit-flex:1 1 0%;-moz-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}data-dates-placeholder.jsx-d3f9c5d3169746de{overflow-x:hidden}.data-dates.jsx-d3f9c5d3169746de{background:blueviolet;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow-x:auto}.data-dates.jsx-d3f9c5d3169746de div.jsx-d3f9c5d3169746de{border:1px solid;margin:5px;white-space:nowrap}.data-close-icon.jsx-d3f9c5d3169746de{width:15px}"
            })
        ]
    });
};
/* harmony default export */ const ScanData_ScanData = (ScanData);

;// CONCATENATED MODULE: ./src/components/Scans/Scans.js








const Scans = ()=>{
    const { 0: metaArray , 1: setMetaArray  } = (0,external_react_.useState)([]);
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    const { 0: selectedWeb , 1: setsSlectedWeb  } = (0,external_react_.useState)("");
    const { scanUrl , db  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    const scanRows = chunkify(metaArray);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            // Get metadata for all locally stored website scans for initial render
            const websites = Object.keys(db).length ? await db.col("metadata").findAsArray() : [];
            setMetaArray(websites);
        })();
    // Re-fetch meta from local db after each new website has beem added
    }, [
        scanUrl,
        db
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            scanRows.map((row, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Scans_module_default())["scans-row"] + " row",
                    children: row.map((thumbnail, i)=>/*#__PURE__*/ jsx_runtime_.jsx(ScanThumb_ScanThumb, {
                            thumbnail: thumbnail,
                            setShowModal: setShowModal,
                            setsSlectedWeb: setsSlectedWeb,
                            setMetaArray: setMetaArray
                        }, i))
                }, i)),
            showModal && /*#__PURE__*/ jsx_runtime_.jsx(ModalBackground_ModalBackground, {
                trigger: setShowModal,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ScanData_ScanData, {
                    selectedWeb: selectedWeb
                })
            })
        ]
    });
};
/* harmony default export */ const Scans_Scans = (Scans);

;// CONCATENATED MODULE: ./src/components/WebList/WebList.js






const WebList = ()=>{
    const { scanUrl  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    const { initDb  } = (0,external_easy_peasy_.useStoreActions)((actions)=>actions);
    // Initialize the database
    (0,external_react_.useEffect)(()=>{
        initDb();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CurrentScan_CurrentScan, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Scans_Scans, {})
        ]
    });
};
/* harmony default export */ const WebList_WebList = (WebList);

// EXTERNAL MODULE: ./src/components/NewScanForm/NewScanForm.module.css
var NewScanForm_module = __webpack_require__(1571);
var NewScanForm_module_default = /*#__PURE__*/__webpack_require__.n(NewScanForm_module);
;// CONCATENATED MODULE: ./src/components/NewScanForm/NewScanForm.js




const Category = ({ ctg , deleteCategory  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NewScanForm_module_default()).chip,
        role: "button",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (NewScanForm_module_default())["chip-label"],
                children: ctg
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: (NewScanForm_module_default())["chip-delete"],
                onClick: (e)=>deleteCategory(ctg),
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                })
            })
        ]
    });
const NewScanForm = ({ loading , url , setUrl , slugs , handleSlugs  })=>{
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)([]);
    const { setScanCtgs  } = (0,external_easy_peasy_.useStoreActions)((actions)=>actions);
    const deleteCategory = (ctg)=>setCategories(categories.filter((category)=>category !== ctg));
    (0,external_react_.useEffect)(()=>{
        const ctgsSet = new Set(categories);
        // ?url=https://www.url.com&categories=shop,first,second
        setScanCtgs(Array.from(ctgsSet).join());
    }, [
        categories
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            handleSlugs();
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "url",
                children: "URL"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "u-full-width",
                type: "url",
                placeholder: "https://www.website.com",
                id: "url",
                value: url,
                onInput: (e)=>setUrl(e.target.value),
                onBlur: ()=>handleSlugs()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "slugs",
                children: "Category"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                name: "slugs",
                id: "slig-list",
                className: "u-full-width",
                onInput: (e)=>setCategories((ctgs)=>[
                            ...ctgs,
                            e.target.value
                        ]),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "",
                        children: loading ? "--Fetching slugs...--" : "--Select a slug--"
                    }),
                    slugs.map((slug, i)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: slug,
                            children: slug
                        }, i))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NewScanForm_module_default())["chip-container"],
                children: categories.map((category, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Category, {
                        ctg: category,
                        deleteCategory: deleteCategory
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const NewScanForm_NewScanForm = (NewScanForm);

// EXTERNAL MODULE: ./src/components/WebCard/WebCard.module.css
var WebCard_module = __webpack_require__(33);
var WebCard_module_default = /*#__PURE__*/__webpack_require__.n(WebCard_module);
;// CONCATENATED MODULE: ./src/components/WebCard/WebCard.js



// Styles
const cardImage = (WebCard_module_default())["card-image"] + " three columns";
// Skeletons to be displayed while the website is loading
const ImageSkeleton = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (WebCard_module_default()).loading + " " + cardImage,
        children: "\xa0"
    });
const TitleSkeleton = ()=>/*#__PURE__*/ jsx_runtime_.jsx("h5", {
        className: (WebCard_module_default()).loading,
        children: "\xa0"
    });
const TextSkeleton = ()=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: (WebCard_module_default()).loading,
        children: "\xa0"
    });
// Default copy to be displayed on new scan
const newTitle = "New DCC Scan";
const newDescription = "Initiate a new scan by entering a website URL and selecting the slugs for scanning.";
const WebCard = ({ loading , isNew  })=>{
    const { metadata  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    const { description , icon , image , title , url  } = metadata;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (WebCard_module_default())["card-container"] + " nine columns",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: url,
            target: "_blank",
            children: [
                loading ? /*#__PURE__*/ jsx_runtime_.jsx(ImageSkeleton, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: cardImage,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: image || "./placeholder.gif",
                        alt: title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (WebCard_module_default())["card-body"] + " nine columns",
                    children: [
                        loading ? /*#__PURE__*/ jsx_runtime_.jsx(TitleSkeleton, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "u-pull-left icon",
                                    src: icon || "./logo192.png",
                                    alt: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: isNew ? newTitle : title
                                })
                            ]
                        }),
                        loading ? /*#__PURE__*/ jsx_runtime_.jsx(TextSkeleton, {}) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: isNew ? newDescription : description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const WebCard_WebCard = (WebCard);

// EXTERNAL MODULE: ./src/components/NewScanInit/NewScanInit.module.css
var NewScanInit_module = __webpack_require__(6394);
var NewScanInit_module_default = /*#__PURE__*/__webpack_require__.n(NewScanInit_module);
;// CONCATENATED MODULE: ./src/components/NewScanInit/NewScanInit.js




// const NewScanInit = ({ setNewScan }) => {
const NewScanInit = ({ url , setUrl , setNewScan  })=>{
    const { scanUrl , scanCtgs  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    // const { startStream } = useStoreActions(actions => actions);
    const { setScanUrl , startStream  } = (0,external_easy_peasy_.useStoreActions)((actions)=>actions);
    // const handleInitScan = () => {
    //   startStream(`url=${scanUrl}&categories=${scanCtgs}`);
    //   // Removes the modal overlay
    //   setNewScan(false);
    // };
    const handleInitScan = ()=>{
        startStream(`url=${url}&categories=${scanCtgs}`);
        // Sets scanUrl in Redux store
        // Check if creds are passed in the URL (https://username:password@www.website.com)
        const hasCreds = regex.authCreds.test(url);
        // Extract creds from the URL in format username:password@
        const creds = hasCreds && url.match(regex.authCreds)[0];
        // If creds are passed, remove them from the URL
        const inputURL = creds ? url.replace(creds, "") : url;
        setScanUrl(inputURL);
        // Removes url value from local state
        setUrl("");
        // Removes the modal overlay
        setNewScan(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (NewScanInit_module_default()).start + " u-full-width",
        onClick: ()=>handleInitScan(),
        children: "Start scan"
    });
};
/* harmony default export */ const NewScanInit_NewScanInit = (NewScanInit);

// EXTERNAL MODULE: ./src/components/NewScanModal/NewScanModal.module.css
var NewScanModal_module = __webpack_require__(5282);
var NewScanModal_module_default = /*#__PURE__*/__webpack_require__.n(NewScanModal_module);
// EXTERNAL MODULE: ./src/lib/drivers/restDrivers.js
var restDrivers = __webpack_require__(5399);
// EXTERNAL MODULE: ./src/lib/helpers/withoutCreds.js
var withoutCreds = __webpack_require__(4902);
;// CONCATENATED MODULE: ./src/components/NewScanModal/NewScanModal.js











const NewScanModal = ({ isNew , setIsNew , setNewScan  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)("");
    const { 0: slugs , 1: setSlugs  } = (0,external_react_.useState)([]);
    const { scanCtgs , db  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    const actions = (0,external_easy_peasy_.useStoreActions)((actions)=>actions);
    const getMetaFromDb = async ()=>{
        setLoading(true);
        // Check if metadata exists in local db. typeof meta<{res}:Object || undefined>
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
    const getMetaFromWebsite = async ()=>{
        setLoading(true);
        let meta = {}, isMetaAvailable = false, isMetaStored = false;
        // If website does not exist in local db, fetch metadata
        const fetchedMeta = await (0,restDrivers/* slugDriver */.Z)({
            query: "url=" + url
        });
        if (fetchedMeta && fetchedMeta.metadata) isMetaAvailable = true;
        // Website details are fetched and metadata exists
        if (isMetaAvailable) {
            meta = {
                scannedUrl: (0,withoutCreds/* withoutCreds */.X)(url),
                slugs: fetchedMeta.slugs,
                ...fetchedMeta.metadata
            };
        }
        if (isMetaAvailable) {
            // Store website metadata and slugs to local db
            await db.collection("metadata").insert(meta, ()=>{
                actions.addInfoEvent(`Metadata for ${(0,withoutCreds/* withoutCreds */.X)(url)} successfully stored.`);
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
    const getMeta = async ()=>{
        let data = await getMetaFromDb();
        if (data.ok) return data.meta;
        data = await getMetaFromWebsite();
        if (data.ok) return data.meta;
        return false;
    };
    const handleSlugs = async ()=>{
        if (!regex.urlRgx.test(url)) return;
        // setIsNew(false) Removes the default "New DCC scan" text
        setIsNew(false);
        const meta = await getMeta();
        if (meta) {
            actions.setMetadata(meta);
            // setSlugs(meta.slugs);
            // return actions.setScanUrl(url);
            return setSlugs(meta.slugs);
        // return actions.setScanUrl(url);
        } else {
            // If fetching metadata fails, reset the default "New DCC scan" details and remove url from state
            setIsNew(true);
            setUrl("");
        }
        return;
    };
    // Cleanup function, resets all url data each time Modal component unmounts
    (0,external_react_.useEffect)(()=>()=>setIsNew(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx(ModalBackground_ModalBackground, {
        trigger: setNewScan,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (NewScanModal_module_default()).modal,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "three columns",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewScanForm_NewScanForm, {
                                loading: loading,
                                url: url,
                                setUrl: setUrl,
                                slugs: slugs,
                                handleSlugs: handleSlugs
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(WebCard_WebCard, {
                            loading: loading,
                            isNew: isNew
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: scanCtgs && /*#__PURE__*/ jsx_runtime_.jsx(NewScanInit_NewScanInit, {
                        url: url,
                        setUrl: setUrl,
                        setNewScan: setNewScan
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const NewScanModal_NewScanModal = (NewScanModal);

// EXTERNAL MODULE: ./src/components/NewScanIcon/NewScanIcon.module.css
var NewScanIcon_module = __webpack_require__(7032);
var NewScanIcon_module_default = /*#__PURE__*/__webpack_require__.n(NewScanIcon_module);
;// CONCATENATED MODULE: ./src/components/NewScanIcon/NewScanIcon.js



const NewScanIcon = ({ setNewScan  })=>{
    const { reSetScanUrl  } = (0,external_easy_peasy_.useStoreActions)((actions)=>actions);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (NewScanIcon_module_default()).newScan,
        type: "button",
        onClick: ()=>{
            // Reset all before initiating a new scan
            reSetScanUrl();
            setNewScan(true);
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (NewScanIcon_module_default()).label,
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: (NewScanIcon_module_default()).icon,
                focusable: "false",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                })
            })
        })
    });
};
/* harmony default export */ const NewScanIcon_NewScanIcon = (NewScanIcon);

;// CONCATENATED MODULE: ./src/components/NewScan/NewScan.js





const NewScan = ()=>{
    const { 0: isNew , 1: setIsNew  } = (0,external_react_.useState)(true);
    const { 0: newScan , 1: setNewScan  } = (0,external_react_.useState)(false);
    const { scanInProgress  } = (0,external_easy_peasy_.useStoreState)((state)=>state);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            newScan && /*#__PURE__*/ jsx_runtime_.jsx(NewScanModal_NewScanModal, {
                isNew: isNew,
                setIsNew: setIsNew,
                setNewScan: setNewScan
            }),
            !scanInProgress && /*#__PURE__*/ jsx_runtime_.jsx(NewScanIcon_NewScanIcon, {
                setNewScan: setNewScan
            })
        ]
    });
};
/* harmony default export */ const NewScan_NewScan = (NewScan);

// EXTERNAL MODULE: ./src/lib/helpers/auth.js
var auth = __webpack_require__(9192);
;// CONCATENATED MODULE: ./src/pages/index.js






const Home = ({ user  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "DCC Scanner"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WebList_WebList, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NewScan_NewScan, {})
        ]
    });
};
const getServerSideProps = async (ctx)=>(0,auth/* authHelper */.$)(ctx);
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9905:
/***/ ((module) => {

"use strict";
module.exports = require("easy-peasy");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,51,399], () => (__webpack_exec__(2631)));
module.exports = __webpack_exports__;

})();