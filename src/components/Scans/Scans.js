import { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";

import css from "./Scans.module.css";

import ScanThumb from "../ScanThumb/ScanThumb.js";
import ModalBackground from "../ModalBackground/ModalBackground";

import { chunkify } from "../../lib/helpers/arrayHelpers";
import ScanData from "../ScanData/ScanData";

const Scans = () => {
  const [metaArray, setMetaArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWeb, setsSlectedWeb] = useState("");

  const { scanUrl, db } = useStoreState(state => state);

  const scanRows = chunkify(metaArray);

  useEffect(() => {
    (async () => {
      // Get metadata for all locally stored website scans for initial render
      const websites = Object.keys(db).length
        ? await db.col("metadata").findAsArray()
        : [];

      setMetaArray(websites);
    })();
    // Re-fetch meta from local db after each new website has beem added
  }, [scanUrl, db]);

  return (
    <>
      {scanRows.map((row, i) => (
        <div key={i} className={css["scans-row"] + " row"}>
          {row.map((thumbnail, i) => (
            <ScanThumb
              key={i}
              thumbnail={thumbnail}
              setShowModal={setShowModal}
              setsSlectedWeb={setsSlectedWeb}
              setMetaArray={setMetaArray}
            />
          ))}
        </div>
      ))}
      {showModal && (
        <ModalBackground trigger={setShowModal}>
          <ScanData selectedWeb={selectedWeb} />
        </ModalBackground>
      )}
    </>
  );
};

export default Scans;
