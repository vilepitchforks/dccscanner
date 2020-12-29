import { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";

import css from "./Scans.module.css";

import ScanThumb from "../ScanThumb/ScanThumb.js";
import ModalBackground from "../ModalBackground/ModalBackground";

import { getScannedMeta } from "../../lib/helpers/processDb";
import { chunkify } from "../../lib/helpers/handleArr";
import ScanData from "../ScanData/ScanData";

const Scans = () => {
  const [metaArray, setMetaArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dbName, setDbName] = useState("");

  const { metadata } = useStoreState(state => state);

  const scanRows = chunkify(metaArray);

  useEffect(() => {
    (async () => {
      // Get metadata for all locally stored website scans
      const m = await getScannedMeta();
      m.ok && setMetaArray(m.meta);
    })();
    // Re-fetch meta from local db after each new website scan
  }, [metadata]);

  return (
    <>
      {scanRows.map((row, i) => (
        <div key={i} className={css["scans-row"] + " row"}>
          {row.map((thumbnail, i) => (
            <ScanThumb
              key={i}
              thumbnail={thumbnail}
              setShowModal={setShowModal}
              setDbName={setDbName}
            />
          ))}
        </div>
      ))}
      {showModal && (
        <ModalBackground trigger={setShowModal}>
          <ScanData dbName={dbName} />
        </ModalBackground>
      )}
    </>
  );
};

export default Scans;
