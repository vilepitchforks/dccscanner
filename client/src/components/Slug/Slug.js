import React, { useEffect, useState } from "react";

import { slugDriver } from "../../lib/driver/driver.js";

import { urlRgx } from "../../lib/helpers/regex.js";

const Slug = props => {
  const { url, category, setCategory, setErr } = props;

  const [slugs, setSlugs] = useState([]);

  const query = `url=${url}`;

  useEffect(() => {
    (async () => {
      try {
        if (urlRgx.test(url)) {
          const res = await slugDriver({ query });
          res.length && setSlugs(res);
        }
      } catch (error) {
        console.warn(error);
        setErr(error.message);
      }
    })();
    // eslint-disable-next-line
  }, [url]);

  return (
    <>
      <input
        list="slugs"
        name="slug-selector"
        value={category}
        onInput={e => setCategory(e.target.value)}
      />
      <datalist id="slugs">
        {slugs.map((slug, i) => (
          <option key={i} value={slug} />
        ))}
      </datalist>
    </>
  );
};

export default Slug;
