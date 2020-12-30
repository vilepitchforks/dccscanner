export const setScanUrl = (state, scanUrl) => {
  state.scanUrl = scanUrl;
};

export const setScanCtgs = (state, scanCtgs) => {
  state.scanCtgs = scanCtgs;
};

export const setMetadata = (state, meta) => {
  state.metadata = meta;
};

export const reSetScanUrl = state => {
  state.scanUrl = "";
  state.scanCtgs = "";
  state.metadata = {};
  state.infoEvents = [];
  state.dataEvents = {};
  state.errorEvents = [];
};

export const addInfoEvent = (state, event) => {
  state.infoEvents.push(event);
};

export const addDataEvent = (state, { url, data }) => {
  const scanData = state.dataEvents[url] || [];
  state.dataEvents[url] = [...scanData, data];
};

export const addErrorEvent = (state, event) => {
  state.errorEvents.push(event);
};

export const setScanCompleted = (state, check) => {
  state.scanCompleted = check;
};
// Check switch for the entire process from starting scan to the storing of data in db:
export const setProcessInProgress = (state, check) => {
  state.processInProgress = check;
};

export const startStream = async (actions, query) => {
  const es = new EventSource("/api/stream?" + query, {
    withCredentials: true
  });

  es.onopen = () => {
    actions.addInfoEvent("Connection with server established.");
  };
  es.addEventListener("info", ({ data }) => {
    actions.addInfoEvent(JSON.parse(data));
  });
  es.addEventListener("data", ({ lastEventId: url, data }) => {
    actions.addDataEvent({ url, data: JSON.parse(data) });
  });
  es.addEventListener("close", e => {
    actions.addInfoEvent("Connection with server closed.");
    actions.addInfoEvent("Processing scan data...");
    actions.setScanCompleted(true);
    es.close();
  });
  es.addEventListener("servererror", ({ lastEventId: url, data }) => {
    console.log("Servererror event lastEventId", url);
    console.log("Servererror event data", data);
    actions.addErrorEvent("An error occurred: " + data);
    actions.setScanCompleted(true);
    actions.setProcessInProgress(false); // In case of error, close the process
    es.close();
  });
  es.onerror = err => {
    console.warn("Actual error event", err);
    actions.addErrorEvent("An es.onerror occurred");
    actions.setScanCompleted(true);
    actions.setProcessInProgress(false); // In case of error, close the process
    es.close();
  };
};
