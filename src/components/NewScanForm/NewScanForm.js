import { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";

import css from "./NewScanForm.module.css";

const Category = ({ ctg, deleteCategory }) => (
  <div className={css.chip} role="button">
    <span className={css["chip-label"]}>{ctg}</span>
    <svg
      className={css["chip-delete"]}
      onClick={e => deleteCategory(ctg)}
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
    </svg>
  </div>
);

const NewScanForm = ({ url, setUrl, slugs, handleSlugs }) => {
  const [categories, setCategories] = useState([]);

  const { setScanCtgs } = useStoreActions(actions => actions);

  const deleteCategory = ctg =>
    setCategories(categories.filter(category => category !== ctg));

  useEffect(() => {
    const ctgsSet = new Set(categories);
    // ?url=https://www.url.com&categories=shop,first,second
    setScanCtgs(Array.from(ctgsSet).join());
  }, [categories]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSlugs();
      }}
    >
      <label htmlFor="url">URL</label>
      <input
        className="u-full-width"
        type="url"
        placeholder="https://www.website.com"
        id="url"
        value={url}
        onInput={e => setUrl(e.target.value)}
        onBlur={() => handleSlugs()}
      />
      <label htmlFor="slugs">Category</label>
      <select
        name="slugs"
        id="slig-list"
        className="u-full-width"
        onInput={e => setCategories(ctgs => [...ctgs, e.target.value])}
      >
        <option value="">--Select a slug--</option>
        {slugs.map((slug, i) => (
          <option key={i} value={slug}>
            {slug}
          </option>
        ))}
      </select>
      <div className={css["chip-container"]}>
        {categories.map((category, i) => (
          <Category key={i} ctg={category} deleteCategory={deleteCategory} />
        ))}
      </div>
    </form>
  );
};

export default NewScanForm;
