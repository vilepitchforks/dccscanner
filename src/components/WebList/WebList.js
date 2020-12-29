import { useStoreState } from "easy-peasy";

import CurrentScan from "../CurrentScan/CurrentScan";
import Scans from "../Scans/Scans";

import css from "./WebList.module.css";

const WebList = () => {
  const { metadata } = useStoreState(state => state);

  return (
    <div className="container">
      {Object.keys(metadata).length ? <CurrentScan /> : ""}
      <Scans />
    </div>
  );
};

export default WebList;
