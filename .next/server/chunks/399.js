"use strict";
exports.id = 399;
exports.ids = [399];
exports.modules = {

/***/ 5399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ authDriver),
/* harmony export */   "Z": () => (/* binding */ slugDriver)
/* harmony export */ });
const makeDriver = ({ method , endpoint , format  })=>async ({ email , query , body  })=>{
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
            const result = await fetch(endpoint, options).then((res)=>{
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


/***/ })

};
;