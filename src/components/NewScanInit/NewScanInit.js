import { useStoreActions, useStoreState } from "easy-peasy";

import css from "./NewScanInit.module.css";

// const NewScanInit = ({ setNewScan }) => {
const NewScanInit = ({ url, setUrl, setNewScan }) => {
  const { scanUrl, scanCtgs } = useStoreState(state => state);
  // const { startStream } = useStoreActions(actions => actions);
  const { setScanUrl, startStream } = useStoreActions(actions => actions);

  // const handleInitScan = () => {
  //   startStream(`url=${scanUrl}&categories=${scanCtgs}`);
  //   // Removes the modal overlay
  //   setNewScan(false);
  // };

  const handleInitScan = () => {
    startStream(`url=${url}&categories=${scanCtgs}`);

    // Sets scanUrl in Redux store
    setScanUrl(url);

    // Removes url value from local state
    setUrl("");

    // Removes the modal overlay
    setNewScan(false);
  };

  return (
    <button
      className={css.start + " u-full-width"}
      onClick={() => handleInitScan()}
    >
      Start scan
    </button>
  );
};

export default NewScanInit;
