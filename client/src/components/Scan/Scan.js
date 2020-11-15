import React, { useState } from "react";

import { scanDriver } from "../../lib/driver/driver.js";

import { urlRgx } from "../../lib/helpers/regex.js";

const Scan = () => {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [response, setResponse] = useState([]);
  const [err, setErr] = useState("");

  let query = "";

  const clearInputs = () => {
    setUrl("");
    setCategory("");
    setCategories([]);
    query = "";
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErr("");
    try {
      query = `url=${url}&categories=${categories.join()}`;

      if (!urlRgx.test(url)) throw new Error(`Invalid URL: ${url}`);
      if (!categories.length) throw new Error("Add at least one category.");

      const rs = await scanDriver({ query });

      if (typeof rs !== "undefined" && rs.length) {
        setResponse(rs);
        clearInputs();
      } else {
        clearInputs();
        throw new Error("No results.");
      }
    } catch (error) {
      console.warn(error);
      setErr(error.message);
      clearInputs();
    }
  };

  return (
    <>
      <h1>URL:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          onInput={e => setUrl(e.target.value)}
        />
        <input
          type="text"
          name="category"
          value={category}
          onInput={e => setCategory(e.target.value)}
        />
        <input
          type="button"
          name="add-category"
          value="Add Categories"
          onClick={() => {
            setCategories(ctg => [...ctg, category]);
            setCategory("");
          }}
        />
        <input type="submit" name="submit" value="Submit" />
      </form>
      {err && <p>{err}</p>}
      <h4>Categories:</h4>
      <div>
        {categories.map((category, i) =>
          i === categories.length - 1 ? (
            <span key={i}>{category}</span>
          ) : (
            <span key={i}>{`${category}, `}</span>
          )
        )}
      </div>
      <table>
        <thead>
          <tr>
            {response[0] &&
              Object.keys(response[0]).map((res, i) => (
                <th key={i} scope="col">
                  {res}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {response.length
            ? response.map((res, i) => {
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

export default Scan;
