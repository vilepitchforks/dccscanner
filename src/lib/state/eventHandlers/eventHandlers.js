import { Model } from "../../helpers/processDb_new.js";

export const setScanUrl = (state, scanUrl) => {
  state.scanUrl = scanUrl;
};

export const setScanCtgs = (state, scanCtgs) => {
  state.scanCtgs = scanCtgs;
};

export const setScanInProgress = (state, check) => {
  state.scanInProgress = check;
};

export const setMetadata = (state, meta) => {
  state.metadata = meta;
};

export const reSetScanUrl = state => {
  state.scanUrl = "";
  state.scanCtgs = "";
  state.metadata = {};
  state.infoEvents = [];
  state.dataEvents = [];
  state.errorEvents = [];
};

export const addInfoEvent = (state, event) => {
  state.infoEvents.push(event);
};

export const addDataEvent = (state, { url, data, timestamp }) => {
  // Store valid DCC objects, with more than just url, scannedUrl and timestamp.
  if (Object.keys(data).length > 3)
    state.dataEvents.push({ url, timestamp, ...data });
};

export const addErrorEvent = (state, event) => {
  state.errorEvents.push(event);
};

export const startStream = async (actions, query) => {
  const es = new EventSource("/api/stream?" + query, {
    withCredentials: true
  });

  const timestamp = new Date().getTime();

  es.onopen = () => {
    actions.addInfoEvent("Connection with server established.");
    actions.setScanInProgress(true);
  };
  es.addEventListener("info", ({ data }) => {
    actions.addInfoEvent(JSON.parse(data));
  });
  es.addEventListener("data", ({ lastEventId: url, data }) => {
    actions.addDataEvent({ url, data: JSON.parse(data), timestamp });
  });
  es.addEventListener("close", e => {
    actions.addInfoEvent("Connection with server closed.");
    actions.addInfoEvent("Processing scan data...");
    actions.setScanInProgress(false);
    es.close();
  });
  es.addEventListener("servererror", ({ lastEventId: url, data }) => {
    console.log("Servererror event lastEventId", url);
    console.log("Servererror event data", data);
    actions.addErrorEvent("An error occurred: " + data);
    actions.setScanInProgress(false);
    es.close();
  });
  es.onerror = err => {
    console.warn("Actual error event", err);
    actions.addErrorEvent("An es.onerror occurred");
    actions.setScanInProgress(false);
    es.close();
  };
};

export const setDb = (state, db) => {
  state.db = db;
};

export const initDb = async actions => {
  const db = new Model();
  actions.setDb(db);
};
