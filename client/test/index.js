let es;
const startStream = () => {
  const url =
    "/api/stream?url=https://www.metamucil.com.br&categories=nossos-produtos";
  console.log("Scanning URL: ", url);

  es = new EventSource(url, { withCredentials: true });

  es.onopen = () => {
    console.log("Connection open.", es.readyState);
  };
  es.addEventListener("info", function (message) {
    console.log("Message type: ", message.type);
    console.log("Message ID: ", message.lastEventId);
    console.log("Message data: ", message.data);
  });
  es.addEventListener("body", function (message) {
    console.log("Message type: ", message.type);
    console.log("Message ID: ", message.lastEventId);
    console.log("Message data: ", message.data);
  });
  es.addEventListener("close", function (message) {
    console.log("Message type: ", message.type);
    console.log("Message ID: ", message.lastEventId);
    console.log("Message data: ", message.data);
    es.close();
  });
  es.addEventListener("servererror", function (message) {
    console.log("Message type: ", message.type);
    console.log("Message ID: ", message.lastEventId);
    console.log("Message data: ", message.data);
    es.close();
  });

  es.onerror = err => {
    console.error("EventSource failed:", err.type);
    es.close();
  };
};

document.getElementById("start").addEventListener("click", startStream);
document.getElementById("stop").addEventListener("click", () => {
  es.close();
  console.log("Connection closed.");
});
