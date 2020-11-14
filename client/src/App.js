import React, { useState } from "react";

const App = () => {
  const [response, setResponse] = useState("");
  return (
    <>
      <h1>Ollo</h1>
      <button
        onClick={() =>
          fetch("/api").then(raw =>
            raw
              .text()
              .then(res => setResponse(res))
              .catch(err => setResponse(err))
          )
        }
      >
        say whaaat
      </button>
      <p>{response}</p>
    </>
  );
};

export default App;
