import { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";

import css from "./Scans.module.css";

import ScanThumb from "../ScanThumb/ScanThumb.js";
import ModalBackground from "../ModalBackground/ModalBackground";

import { getAllMeta } from "../../lib/helpers/processDb";
import { chunkify } from "../../lib/helpers/handleArr";
import ScanData from "../ScanData/ScanData";

const Scans = () => {
  const [metaArray, setMetaArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dbName, setDbName] = useState("");
  const [deleteDb, setdeleteDb] = useState(false);

  const { processInProgress } = useStoreState(state => state);

  const scanRows = chunkify(metaArray);

  useEffect(() => {
    (async () => {
      // Get metadata for all locally stored website scans
      const m = await getAllMeta();
      m.ok && setMetaArray(m.meta);
    })();
    // Re-fetch meta from local db after each new website scan has completed and once a db has been deleted
  }, [processInProgress, deleteDb]);

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
              setdeleteDb={setdeleteDb}
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
