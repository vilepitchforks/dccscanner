import { createStore, action, computed, thunk } from "easy-peasy";

import {
  setScanCompleted,
  addInfoEvent,
  addErrorEvent,
  addDataEvent,
  startStream
} from "../eventHandlers/eventHandlers.js";

const store = createStore({
  infoEvents: [],
  dataEvents: {},
  errorEvents: [],
  scanCompleted: false,
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

export default store;
