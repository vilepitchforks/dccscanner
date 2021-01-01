import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import NewScanForm from "../NewScanForm/NewScanForm.js";
import WebCard from "../WebCard/WebCard.js";
import NewScanInit from "../NewScanInit/NewScanInit.js";
import ModalBackground from "../ModalBackground/ModalBackground.js";

import css from "./NewScanModal.module.css";

import { slugDriver } from "../../lib/drivers/restDrivers";
import { urlRgx } from "../../lib/helpers/regex";

const NewScanModal = ({ isNew, setIsNew, setNewScan }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [slugs, setSlugs] = useState([]);

  const { scanCtgs, db } = useStoreState(state => state);
  const actions = useStoreActions(actions => actions);

  const getMetaFromDb = async () => {
    setLoading(true);
    // Check if metadata exists in local db. typeof meta<{res}:Object || undefined>
    const meta = await db
      .collection("metadata")
      .findOne(
        { scannedUrl: url },
        actions.addInfoEvent(`Metadata for ${url} successfully fetched.`)
      );

    if (meta) {
      setLoading(false);
      return {
        ok: true,
        meta
      };
    } else {
      setLoading(false);
      return {
        ok: false,
        meta: {}
      };
    }
  };

  const getMetaFromWebsite = async () => {
    setLoading(true);
    let meta = {},
      isMetaAvailable = false,
      isMetaStored = false;

    // If website does not exist in local db, fetch metadata
    const fetchedMeta = await slugDriver({ query: "url=" + url });

    if (fetchedMeta && fetchedMeta.metadata) isMetaAvailable = true;

    // Website details are fetched and metadata exists
    if (isMetaAvailable) {
      meta = {
        scannedUrl: url,
        slugs: fetchedMeta.slugs,
        ...fetchedMeta.metadata
      };
    }

    if (isMetaAvailable) {
      // Store website metadata and slugs to local db
      await db.collection("metadata").insert(meta, () => {
        actions.addInfoEvent(`Metadata for ${url} successfully stored.`);
        isMetaStored = true;
      });
    }

    if (isMetaStored) {
      setLoading(false);
      return {
        ok: true,
        meta
      };
    } else {
      setLoading(false);
      return {
        ok: false,
        meta
      };
    }
  };

  const getMeta = async () => {
    let data = await getMetaFromDb();
    if (data.ok) return data.meta;

    data = await getMetaFromWebsite();
    if (data.ok) return data.meta;

    return false;
  };

  const handleSlugs = async () => {
    if (!urlRgx.test(url)) return;

    // setIsNew(false) Removes the default "New DCC scan" text
    setIsNew(false);

    const meta = await getMeta();

    if (meta) {
      actions.setMetadata(meta);
      setSlugs(meta.slugs);
      return actions.setScanUrl(url);
    } else {
      // If fetching metadata fails, reset the default "New DCC scan" details and remove url from state
      setIsNew(true);
      setUrl("");
    }
    return;
  };

  // Cleanup function, resets all url data each tome Modal component unmounts
  useEffect(() => () => setIsNew(true), []);

  return (
    <ModalBackground trigger={setNewScan}>
      <div className={css.modal}>
        <div className="row flex">
          <div className="three columns">
            <NewScanForm
              loading={loading}
              url={url}
              setUrl={setUrl}
              slugs={slugs}
              handleSlugs={handleSlugs}
            />
          </div>
          <WebCard loading={loading} isNew={isNew} />
        </div>
        <div className="row">
          {/* Do not display START SCAN button until URL and categories are prepared */}
          {scanCtgs && <NewScanInit setNewScan={setNewScan} />}
        </div>
      </div>
    </ModalBackground>
  );
};

export default NewScanModal;
