import { createStore, action, computed, thunk } from "easy-peasy";

import {
  setScanUrl,
  setScanCtgs,
  setScanInProgress,
  setMetadata,
  reSetScanUrl,
  addInfoEvent,
  addErrorEvent,
  addDataEvent,
  startStream,
  setDb,
  initDb
} from "../eventHandlers/eventHandlers.js";

const Store = createStore({
  scanUrl: "",
  scanCtgs: "",
  scanInProgress: false,
  metadata: {},
  infoEvents: [],
  dataEvents: [],
  errorEvents: [],
  db: {},
  setScanUrl: action((state, scanUrl) => setScanUrl(state, scanUrl)),
  setScanCtgs: action((state, scanCtgs) => setScanCtgs(state, scanCtgs)),
  setScanInProgress: action((state, check) => setScanInProgress(state, check)),
  setMetadata: action((state, meta) => setMetadata(state, meta)),
  reSetScanUrl: action(state => reSetScanUrl(state)),
  addInfoEvent: action((state, event) => {
    addInfoEvent(state, event);
  }),
  addDataEvent: action((state, payload) => {
    addDataEvent(state, payload);
  }),
  addErrorEvent: action((state, event) => {
    addErrorEvent(state, event);
  }),
  startStream: thunk((actions, query) => startStream(actions, query)),
  setDb: action((state, db) => setDb(state, db)),
  initDb: thunk(actions => initDb(actions))
});

export default Store;
