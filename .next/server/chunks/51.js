exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 9946:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__7Exjr",
	"logo": "Navbar_logo__keI4H",
	"avatar": "Navbar_avatar__GT_gS"
};


/***/ }),

/***/ 9359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9946);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Navbar = ({ user  })=>{
    user = user[0].toUpperCase();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbar),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo) + " cursor-pointer",
                            src: "/logo192.png"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/rnr",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-white",
                            children: "R&R"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().avatar),
                children: user
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 9192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ authHelper)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const authHelper = async (ctx)=>{
    const dev = "production" === "development";
    // Construct App URL for server side fetching
    const protocol = dev ? "http" : "https";
    const url = protocol + "://" + ctx.req.get("host");
    try {
        // Check if user is authenticated
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
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
        console.warn("Error from Index.js: ", error.message);
        // If user is not authenticated, redirect to /login
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


/***/ })

};
;