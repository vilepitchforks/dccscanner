import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "../../layouts/Default.js";

import Slug from "../../components/Slug/Slug.js";
import Stream from "../../components/Stream/Stream.js";

const Scan = () => {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState("");

  const classes = useStyles();
  // let query = `url=${url}&categories=${categories.join()}`;

  const clearInputs = () => {
    setUrl("");
    setCategory("");
    setCategories([]);
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
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
      </Paper>
    </Grid>
  );
};

export default Scan;
