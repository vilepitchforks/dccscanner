"use strict";
(() => {
var exports = {};
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 1400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9359);
/* harmony import */ var _lib_helpers_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9192);






const Rnr = ({ user , availableBrands  })=>{
    const { 0: selectedBrand , 1: setSelectedBrand  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedLocale , 1: setSelectedLocale  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errMsg , 1: setErrMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const mapRes = (data)=>data.map((result)=>{
            const deets = result?.dccValidation?.details;
            const getReviewsRes = result?.getReviews?.getReviewsResponse;
            const submitReviewRes = result?.submitReview?.submitReviewResponse;
            return {
                Locale: result.locale,
                "Has DCC": result?.dccValidation?.dccExists,
                "Wrong Locale": !deets.locale?.ok ? deets.locale?.fromSite : "",
                "Invalid Keys": deets?.keys?.invalidKeys.join(", "),
                "Missing Required Keys": deets?.keys?.missingRequiredKeys.join(", "),
                "Wrong PDP URL": !deets?.productPageURL?.ok ? deets?.productPageURL?.fromSite : "",
                "Wrong Img URL": !deets?.productImageURL?.ok ? deets?.productImageURL?.productImageURL : "",
                "Category Path": !deets?.categoryPath?.ok ? JSON.stringify(deets?.categoryPath?.categoryPath) : "",
                "GTIN Errors": deets?.GTINs?.messages.join(", "),
                "Get Reviews Errors": getReviewsRes?.HasErrors ? getReviewsRes?.Errors.map((error)=>error.Message).join(", ") : "",
                "Post Review Errors": submitReviewRes?.HasErrors ? submitReviewRes?.Errors.map((error)=>error.Message).join(", ") : "",
                "Auth Email": result?.submitReview?.submitReviewParams?.HostedAuthentication_AuthenticationEmail,
                "Auth CB": result?.submitReview?.submitReviewParams?.HostedAuthentication_CallbackURL,
                FP: result?.submitReview?.submitReviewParams?.fp
            };
        });
    const handleSubmitSingle = async (locale)=>{
        setLoading(true);
        setErrMsg(null);
        // const endpoint = selectedLocale ? "/single" : "/multi";
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default()(// `/api${endpoint}?brand=${selectedBrand}&locale=${locale}`
            `/api/single?brand=${selectedBrand}&locale=${locale}`);
            setResults((prevRes)=>[
                    ...prevRes,
                    ...mapRes(data)
                ]);
            setLoading(false);
        } catch (error) {
            console.warn("Error occurred while scanning all locales.", error.message);
            setLoading(false);
            setErrMsg("Error occurred while scaning locales, please try again.");
        }
    };
    const handleSubmitMulti = async ()=>{
        if (!selectedBrand) return;
        const { locales  } = availableBrands.find(({ brand  })=>selectedBrand === brand);
        for await (const locale of locales){
            console.log("Scanning locale: ", locale);
            await handleSubmitSingle(locale);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "RnR Checker"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                user: user
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-3 xl:w-96",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-10",
                            children: "Brand:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none",
                            "aria-label": "Default select example",
                            defaultValue: "Open this select menu",
                            onInput: (e)=>setSelectedBrand(e.target.value),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "--Select Brand--"
                                }),
                                availableBrands.map(({ brand  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: brand,
                                        children: brand
                                    }, brand))
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-10",
                            children: "Locale:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none",
                            "aria-label": "Default select example",
                            defaultValue: "Open this select menu",
                            onInput: (e)=>setSelectedLocale(e.target.value),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: !selectedBrand ? "--Select Brand--" : "--Select Locale--"
                                }),
                                selectedBrand ? availableBrands.find(({ brand  })=>selectedBrand === brand)?.locales.map((locale)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: locale,
                                        children: locale
                                    }, locale)) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg",
                                            onClick: ()=>selectedBrand && handleSubmitSingle(selectedLocale),
                                            children: !loading ? "Scan" : "Loading..."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg",
                                            onClick: selectedBrand && handleSubmitMulti,
                                            children: "Scan all"
                                        })
                                    ]
                                }),
                                errMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-red-500",
                                    children: errMsg
                                }) : null
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto mt-10 flex w-[1280px] flex-col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "overflow-x-auto sm:-mx-6 lg:-mx-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-block min-w-full py-2 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "min-w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                        className: "border-b bg-white",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                results.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-4 text-left text-xl font-medium text-gray-900",
                                                    children: "#"
                                                }) : null,
                                                Object.keys(results[0] || {}).map((key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        scope: "col",
                                                        className: "px-6 py-4 text-left text-xl font-medium text-gray-900",
                                                        children: key
                                                    }, key))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: results.map((result, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "whitespace-nowrap px-6 py-4 text-xl font-medium text-gray-900",
                                                        children: i + 1
                                                    }),
                                                    Object.keys(result).map((key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "whitespace-nowrap px-6 py-4 text-xl font-light text-gray-900",
                                                            children: typeof result[key] === "boolean" ? result[key] ? "\u2714" : "\u2716" : result[key]
                                                        }, key))
                                                ]
                                            }, i))
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
const getServerSideProps = async (ctx)=>{
    const userAuthProps = await (0,_lib_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .authHelper */ .$)(ctx);
    const dev = "production" === "development";
    // Construct App URL for server side fetching
    const protocol = dev ? "http" : "https";
    const url = protocol + "://" + ctx.req.get("host");
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
            method: "get",
            url: url + "/api/single",
            headers: ctx.req.headers
        });
        return {
            props: {
                ...userAuthProps.props,
                ...data
            }
        };
    } catch (error) {
        console.warn("Error occurred while fetching Brands list: ", error.message);
        return userAuthProps;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rnr);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,51], () => (__webpack_exec__(1400)));
module.exports = __webpack_exports__;

})();