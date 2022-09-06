"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "easy-peasy"
var external_easy_peasy_ = __webpack_require__(9905);
;// CONCATENATED MODULE: external "zangodb"
const external_zangodb_namespaceObject = require("zangodb");
var external_zangodb_default = /*#__PURE__*/__webpack_require__.n(external_zangodb_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/helpers/processDb.js

class Model {
    constructor(){
        const db = new (external_zangodb_default()).Db("dcc", {
            // sets the schema, scannedUrl and url are the same url sent by the user
            metadata: [
                "scannedUrl"
            ],
            dccdata: [
                "url",
                "timestamp"
            ]
        });
        db.open(); // creates the db and collections
        db.on("blocked", ()=>{
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
        return await Promise.all([
            this.db.collection("metadata").remove({
                scannedUrl: url
            }),
            this.db.collection("dccdata").remove({
                url
            })
        ]);
    }
}

;// CONCATENATED MODULE: ./src/lib/state/eventHandlers/eventHandlers.js

const setScanUrl = (state, scanUrl)=>{
    state.scanUrl = scanUrl;
};
const setScanCtgs = (state, scanCtgs)=>{
    state.scanCtgs = scanCtgs;
};
const setScanInProgress = (state, check)=>{
    state.scanInProgress = check;
};
const setMetadata = (state, meta)=>{
    state.metadata = meta;
};
const reSetScanUrl = (state)=>{
    state.scanUrl = "";
    state.scanCtgs = "";
    state.metadata = {};
    state.infoEvents = [];
    state.dataEvents = [];
    state.errorEvents = [];
};
const addInfoEvent = (state, event)=>{
    state.infoEvents.push(event);
};
const addDataEvent = (state, { url , data , timestamp  })=>{
    // Store valid DCC objects, with more than just url, scannedUrl and timestamp.
    if (Object.keys(data).length > 3) state.dataEvents.push({
        url,
        timestamp,
        ...data
    });
};
const addErrorEvent = (state, event)=>{
    state.errorEvents.push(event);
};
const startStream = async (actions, query)=>{
    const es = new EventSource("/api/stream?" + query, {
        withCredentials: true
    });
    const timestamp = new Date().getTime();
    es.onopen = ()=>{
        actions.addInfoEvent("Connection with server established.");
        actions.setScanInProgress(true);
    };
    es.addEventListener("info", ({ data  })=>{
        actions.addInfoEvent(JSON.parse(data));
    });
    es.addEventListener("data", ({ lastEventId: url , data  })=>{
        actions.addDataEvent({
            url,
            data: JSON.parse(data),
            timestamp
        });
    });
    es.addEventListener("close", (e)=>{
        actions.addInfoEvent("Connection with server closed.");
        actions.addInfoEvent("Processing scan data...");
        actions.setScanInProgress(false);
        es.close();
    });
    es.addEventListener("servererror", ({ lastEventId: url , data  })=>{
        console.log("Servererror event lastEventId", url);
        console.log("Servererror event data", data);
        actions.addErrorEvent("An error occurred: " + data);
        actions.setScanInProgress(false);
        es.close();
    });
    es.onerror = (err)=>{
        console.warn("Actual error event", err);
        actions.addErrorEvent("An es.onerror occurred");
        actions.setScanInProgress(false);
        es.close();
    };
};
const setDb = (state, db)=>{
    state.db = db;
};
const initDb = async (actions)=>{
    const db = new Model();
    actions.setDb(db);
};

;// CONCATENATED MODULE: ./src/lib/state/store/Store.js


const Store = (0,external_easy_peasy_.createStore)({
    scanUrl: "",
    scanCtgs: "",
    scanInProgress: false,
    metadata: {},
    infoEvents: [],
    dataEvents: [],
    errorEvents: [],
    db: {},
    setScanUrl: (0,external_easy_peasy_.action)((state, scanUrl)=>setScanUrl(state, scanUrl)),
    setScanCtgs: (0,external_easy_peasy_.action)((state, scanCtgs)=>setScanCtgs(state, scanCtgs)),
    setScanInProgress: (0,external_easy_peasy_.action)((state, check)=>setScanInProgress(state, check)),
    setMetadata: (0,external_easy_peasy_.action)((state, meta)=>setMetadata(state, meta)),
    reSetScanUrl: (0,external_easy_peasy_.action)((state)=>reSetScanUrl(state)),
    addInfoEvent: (0,external_easy_peasy_.action)((state, event)=>{
        addInfoEvent(state, event);
    }),
    addDataEvent: (0,external_easy_peasy_.action)((state, payload)=>{
        addDataEvent(state, payload);
    }),
    addErrorEvent: (0,external_easy_peasy_.action)((state, event)=>{
        addErrorEvent(state, event);
    }),
    startStream: (0,external_easy_peasy_.thunk)((actions, query)=>startStream(actions, query)),
    setDb: (0,external_easy_peasy_.action)((state, db)=>setDb(state, db)),
    initDb: (0,external_easy_peasy_.thunk)((actions)=>initDb(actions))
});
/* harmony default export */ const store_Store = (Store);

;// CONCATENATED MODULE: ./src/pages/_app.js







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_easy_peasy_.StoreProvider, {
        store: store_Store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9905:
/***/ ((module) => {

module.exports = require("easy-peasy");

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
var __webpack_exports__ = (__webpack_exec__(6378));
module.exports = __webpack_exports__;

})();