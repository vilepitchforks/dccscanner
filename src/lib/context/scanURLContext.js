import React, { useState, useContext } from "react";

import { slugDriver } from "../drivers/restDrivers.js";

import { urlRgx } from "../helpers/regex.js";

const scanURLContext = React.createContext();

export const useScanURLContext = () => useContext(scanURLContext);

const ScanURLContextProvider = ({ children }) => {
  const [domain, setDomain] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState("");

  const [slugs, setSlugs] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `url=${domain}`;

  const getURLInfo = async () => {
    setErr("");
    setLoading(true);
    try {
      if (urlRgx.test(domain)) {
        const res = domain.length ? await slugDriver({ query }) : "";
        res.slugs && setSlugs(res.slugs);
        res.metadata && setMetadata(res.metadata);
        setLoading(false);
      } else {
        setErr("Invalid URL.");
        setLoading(false);
        setDomain("");
      }
    } catch (error) {
      console.warn(error);
      setErr(error.message);
      setLoading(false);
      setDomain("");
    }
  };

  return (
    <scanURLContext.Provider
      value={{
        domain,
        setDomain,
        category,
        setCategory,
        categories,
        setCategories,
        slugs,
        loading,
        err,
        setErr,
        getURLInfo,
        metadata
      }}
    >
      {children}
    </scanURLContext.Provider>
  );
};

export default ScanURLContextProvider;
