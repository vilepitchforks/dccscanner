import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import NewScanForm from "../NewScanForm/NewScanForm.js";
import WebCard from "../WebCard/WebCard.js";
import NewScanInit from "../NewScanInit/NewScanInit.js";
import ModalBackground from "../ModalBackground/ModalBackground.js";

import css from "./NewScanModal.module.css";

import { slugDriver } from "../../lib/drivers/restDrivers";
import { getSingleMeta, makeStoreData } from "../../lib/helpers/processDb.js";
import { urlRgx } from "../../lib/helpers/regex";

const NewScanModal = ({ isNew, setIsNew, setNewScan }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [slugs, setSlugs] = useState([]);

  const { scanCtgs } = useStoreState(state => state);
  const actions = useStoreActions(actions => actions);

  const handleSlugs = async () => {
    setUrl("");

    if (!urlRgx.test(url)) return;

    // Remove "New DCC scan" title and set loading animation
    setIsNew(false);
    setLoading(true);

    let website;

    // Check if metadata exists in local db
    const { ok, data } = await getSingleMeta(url);

    if (ok && data) {
      actions.addInfoEvent(`Metadata for ${url} successfully fetched.`);
      actions.setMetadata(data);
      setSlugs(data.slugs);
    } else {
      // If website does not exist in local db, fetch metadata
      website = await slugDriver({ query: "url=" + url });

      // Store website metadata and slugs to local db
      const storeMetaData = website && makeStoreData(url, actions, true);

      website &&
        (await storeMetaData({ ...website.metadata, slugs: website.slugs }));

      website && website.metadata && actions.setMetadata(website.metadata);
      website && setSlugs(website.slugs);
      website && setLoading(false);
    }

    actions.setScanUrl(url);
    // In case of errors while fetching metadata, reset the loading screen
    if (!website) {
      setIsNew(true);
      setLoading(false);
    }
  };

  // Cleanup function, resets all url data each tome Modal component unmounts
  useEffect(() => () => setIsNew(true), []);

  return (
    <ModalBackground trigger={setNewScan}>
      <div className={css.modal}>
        <div className="row flex">
          <div className="three columns">
            <NewScanForm
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
