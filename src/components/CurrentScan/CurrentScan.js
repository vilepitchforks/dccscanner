import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { makeStoreData } from "../../lib/helpers/processDb.js";

import css from "./CurrentScan.module.css";

import ScanLog from "../ScanLog/ScanLog";

const CurrentScan = () => {
  const [viewLog, setViewLog] = useState(false);

  const { scanUrl, metadata, dataEvents, db, scanInProgress } = useStoreState(
    state => state
  );
  const actions = useStoreActions(actions => actions);

  useEffect(() => {
    scanUrl &&
      !scanInProgress &&
      actions.addInfoEvent(`Scan data for ${scanUrl} successfully processed.`);

    scanUrl &&
      !scanInProgress &&
      !dataEvents.length &&
      actions.addInfoEvent(`No bvDCC data found for ${scanUrl}.`);
  }, [scanInProgress, dataEvents]);

  // Process scan data
  useEffect(() => {
    (async () => {
      const dataItem = dataEvents[dataEvents.length - 1];
      dataItem &&
        /* dataItem.url === scanUrl && */
        (await db.collection("dccdata").insert(dataItem, () => {
          actions.addInfoEvent(
            `Scan data for item ${dataItem.scannedUrl} successfully stored.`
          );
        }));
    })();
  }, [dataEvents]);

  // Available items: description, icon, image, title, url
  const { icon, title } = metadata;

  return (
    <div className="row">
      <div className="column">
        <div>
          <img
            className="u-pull-left icon"
            src={icon || "./logo192.png"}
            alt="icon"
          />
          <h5 className={css.title}>
            {scanUrl && title.length
              ? title
              : "Click on the + icon in the lower right corner of the screen to start a new scan."}
          </h5>
        </div>
        <span className={css["view-log"]} onClick={() => setViewLog(!viewLog)}>
          {viewLog ? "Hide" : "View"} scan log
        </span>
        {viewLog && <ScanLog />}
      </div>
    </div>
  );
};

export default CurrentScan;
