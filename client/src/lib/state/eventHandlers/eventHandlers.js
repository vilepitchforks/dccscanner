export const addInfoEvent = (state, event) => {
  state.infoEvents.push(event);
};

export const addErrorEvent = (state, event) => {
  state.errorEvents.push(event);
};

export const addDataEvent = (state, url, data) => {
  state.dataEvents.push(event);
};

export const startStream = (actions, query) => {
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
    actions.addDataEvent(url, data);
  });
  es.addEventListener("close", ({ data }) => {
    actions.addInfoEvent("Connection with server closed.");
    es.close();
  });
  es.addEventListener("servererror", ({ lastEventId, data }) => {
    console.log("Servererror event lastEventId", lastEventId);
    console.log("Servererror event data", data);
    actions.addErrorEvent("An error occurred: " + data);
    es.close();
  });
  es.onerror = err => {
    console.log("Actual error event");
    actions.addErrorEvent("An error occurred: " + err.type + err.message);
    es.close();
  };
};
