import { createStore, action, thunk } from "easy-peasy";

import {
  addInfoEvent,
  addErrorEvent,
  addDataEvent,
  startStream
} from "../eventHandlers/eventHandlers.js";

const store = createStore({
  infoEvents: [],
  errorEvents: [],
  dataEvents: [],
  addInfoEvent: action((state, event) => {
    addInfoEvent(state, event);
  }),
  addErrorEvent: action((state, event) => {
    addErrorEvent(state, event);
  }),
  addDataEvent: action((state, event) => {
    addDataEvent(state, event);
  }),
  startStream: thunk((actions, query) => startStream(actions, query))
});

export default store;
