import { useStoreActions, useStoreState } from "easy-peasy";

import { authCreds } from "../../lib/helpers/regex";

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
    // Check if creds are passed in the URL (https://username:password@www.website.com)
    const hasCreds = authCreds.test(url);

    // Extract creds from the URL in format username:password@
    const creds = hasCreds && url.match(authCreds)[0];

    // If creds are passed, remove them from the URL
    const inputURL = creds ? url.replace(creds, "") : url;
    setScanUrl(inputURL);

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
