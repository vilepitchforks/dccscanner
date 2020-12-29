import { createStore, action, computed, thunk } from "easy-peasy";

import {
  setScanUrl,
  setScanCtgs,
  setMetadata,
  reSetScanUrl,
  setScanCompleted,
  addInfoEvent,
  addErrorEvent,
  addDataEvent,
  startStream
} from "../eventHandlers/eventHandlers.js";

const Store = createStore({
  scanUrl: "",
  scanCtgs: "",
  metadata: {},
  infoEvents: [],
  dataEvents: {},
  errorEvents: [],
  scanCompleted: false,
  setScanUrl: action((state, scanUrl) => setScanUrl(state, scanUrl)),
  setScanCtgs: action((state, scanCtgs) => setScanCtgs(state, scanCtgs)),
  setMetadata: action((state, meta) => setMetadata(state, meta)),
  reSetScanUrl: action(state => reSetScanUrl(state)),
  setScanCompleted: action((state, check) => {
    setScanCompleted(state, check);
  }),
  addInfoEvent: action((state, event) => {
    addInfoEvent(state, event);
  }),
  addDataEvent: action((state, payload) => {
    addDataEvent(state, payload);
  }),
  addErrorEvent: action((state, event) => {
    addErrorEvent(state, event);
  }),
  startStream: thunk((actions, query) => startStream(actions, query))
});

export default Store;
