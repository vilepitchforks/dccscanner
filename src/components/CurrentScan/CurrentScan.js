import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { makeStoreData } from "../../lib/helpers/processDb.js";

import css from "./CurrentScan.module.css";

import ScanLog from "../ScanLog/ScanLog";

const CurrentScan = () => {
  const [viewLog, setViewLog] = useState(true);

  const { scanUrl, metadata, dataEvents, scanCompleted } = useStoreState(
    state => state
  );
  const actions = useStoreActions(actions => actions);

  useEffect(() => {
    (async () => {
      const storeScanData = makeStoreData(scanUrl, actions, false);
      scanCompleted && (await storeScanData(dataEvents));
    })();
  }, [scanCompleted]);

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
          <h5 className={css.title}>{title}</h5>
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
