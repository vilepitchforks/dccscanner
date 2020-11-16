import React from "react";

const Stream = () => {
  const startStream = () => {
    let es = new EventSource("/api/stream", { withCredentials: true });

    es.onopen = () => {
      console.log("Connection open.", es.readyState);
    };
    es.addEventListener("message", function (message) {
      console.log("msg");
      console.log(message.data);
    });
    es.addEventListener("customevent", function (message) {
      console.log("customevent");
      console.log(message.data);
    });
    // es.onmessage = console.log;

    es.onerror = err => {
      // console.error("EventSource failed:", err);
      es.close();
    };
  };

  return (
    <div>
      <input type="button" value="Start" onClick={() => startStream()} />
    </div>
  );
};

export default Stream;
