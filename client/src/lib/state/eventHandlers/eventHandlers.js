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
    es.close();
  });
  es.onerror = err => {
    console.warn("Actual error event", err);
    actions.addErrorEvent("An es.onerror occurred");
    actions.setScanCompleted(true);
    es.close();
  };
};
