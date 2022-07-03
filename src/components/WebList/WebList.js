import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import CurrentScan from "../CurrentScan/CurrentScan";
import Scans from "../Scans/Scans";

import css from "./WebList.module.css";

const WebList = () => {
  const { scanUrl } = useStoreState(state => state);
  const { initDb } = useStoreActions(actions => actions);

  // Initialize the database
  useEffect(() => {
    initDb();
  }, []);

  return (
    <div className="container">
      <CurrentScan />
      <Scans />
    </div>
  );
};

export default WebList;
