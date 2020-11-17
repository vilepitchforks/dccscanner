import React, { useState } from "react";

// import { scanDriver } from "../../lib/driver/driver.js";

// import { urlRgx } from "../../lib/helpers/regex.js";

import Slug from "../Slug/Slug.js";
import Stream from "../Stream/Stream.js";

const Scan = () => {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // const [response, setResponse] = useState([]);
  const [err, setErr] = useState("");

  // let query = `url=${url}&categories=${categories.join()}`;

  const clearInputs = () => {
    setUrl("");
    setCategory("");
    setCategories([]);
    // query = "";
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   setErr("");
  //   try {
  //     if (!urlRgx.test(url)) throw new Error(`Invalid URL: ${url}`);
  //     if (!categories.length) throw new Error("Add at least one category.");

  //     query = `url=${url}&categories=${categories.join()}`;

  //     const rs = await scanDriver({ query });

  //     if (typeof rs !== "undefined" && rs.length) {
  //       setResponse(rs);
  //       clearInputs();
  //     } else {
  //       clearInputs();
  //       throw new Error("No results.");
  //     }
  //   } catch (error) {
  //     console.warn(error);
  //     setErr(error.message);
  //     clearInputs();
  //   }
  // };

  return (
    <>
      <h1>URL:</h1>
      <form>
        <input type="text" name="url" onBlur={e => setUrl(e.target.value)} />
        <Slug
          url={url}
          category={category}
          setCategory={setCategory}
          setErr={setErr}
        />
        <input
          type="button"
          name="add-category"
          value="Add Categories"
          onClick={() => {
            if (category.length) {
              setCategories(ctg => [...ctg, category]);
              setCategory("");
            }
          }}
        />
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
      <Stream
        url={url}
        categories={categories}
        setErr={setErr}
        clearInputs={clearInputs}
      />
    </>
  );
};

export default Scan;
