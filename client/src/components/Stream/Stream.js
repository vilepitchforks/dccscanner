import React, { useState } from "react";

import { urlRgx } from "../../lib/helpers/regex.js";

const Stream = ({ url, categories, setErr, clearInputs }) => {
  const [open, setOpen] = useState("");
  const [time, setTime] = useState(0);
  const [timePassed, setTimePassed] = useState(0);
  const [info, setInfo] = useState([]);
  const [body, setBody] = useState([]);
  const [close, setClose] = useState("");
  const [servererror, setServererror] = useState("");

  let es, query;
  const startStream = () => {
    setTime(new Date().getTime());

    es = new EventSource("/api/stream?" + query, { withCredentials: true });

    es.onopen = () => {
      console.log("Connection open.", es.readyState);
      setOpen("Connection established.");
    };
    es.addEventListener("info", ({ lastEventId, data }) => {
      setTimePassed(lastEventId - time);
      setInfo(currInfo => [...currInfo, data]);
      console.log("data", data);
    });
    es.addEventListener("body", ({ lastEventId, data }) => {
      setTimePassed(lastEventId - time);
      setBody(currBody => [...currBody, JSON.parse(data)]);
      console.log("data", data);
    });
    es.addEventListener("close", ({ lastEventId, data }) => {
      es.close();
      setTimePassed(lastEventId - time);
      setClose("Connection closed.");
      console.log("data", data);
    });
    es.addEventListener("servererror", ({ lastEventId, data }) => {
      es.close();
      setTimePassed(lastEventId - time);
      setServererror(data);
      console.log("data", data);
    });

    es.onerror = err => {
      es.close();
      setTimePassed(new Date().getTime() - time);
      console.error("EventSource failed:", err.type);
      setErr(err.message);
    };
  };

  const handleSubmit = async e => {
    setErr("");
    try {
      if (!urlRgx.test(url)) throw new Error(`Invalid URL: ${url}`);
      if (!categories.length) throw new Error("Add at least one category.");

      query = `url=${url}&categories=${categories.join()}`;

      startStream();
    } catch (error) {
      console.warn(error);
      setErr(error.message);
      clearInputs();
    }
  };

  const handleAbort = () => {
    es && es.close();
  };

  return (
    <>
      <input type="button" value="Start" onClick={() => handleSubmit()} />
      <input type="button" value="Abort" onClick={() => handleAbort()} />

      <div>
        {open && (
          <p>
            {open} | Time passed: {new Date().getTime() - time}
          </p>
        )}
        {info.map((line, i) => (
          <p key={i}>
            {line} | Time passed: {timePassed}
          </p>
        ))}
        {close && (
          <p>
            {close} | Time passed: {timePassed}
          </p>
        )}
        {servererror && (
          <p>
            {servererror} | Time passed: {timePassed}
          </p>
        )}
      </div>

      <table>
        <thead>
          <tr>
            {body[0] &&
              Object.keys(body[0]).map((res, i) => (
                <th key={i} scope="col">
                  {res}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {body.length
            ? body.map((res, i) => {
                return (
                  <tr key={i}>
                    {Object.values(res).map((val, i) => (
                      <td key={i}>{`${val}`}</td>
                    ))}
                  </tr>
                );
              })
            : undefined}
        </tbody>
      </table>
    </>
  );
};

export default Stream;
