import { useState } from "react";
import { useStoreState } from "easy-peasy";

import NewScanModal from "../NewScanModal/NewScanModal";
import NewScanIcon from "../NewScanIcon/NewScanIcon";

const NewScan = () => {
  const [isNew, setIsNew] = useState(true);
  const [newScan, setNewScan] = useState(false);

  const { scanCompleted } = useStoreState(state => state);

  return (
    <>
      {newScan && (
        <NewScanModal
          isNew={isNew}
          setIsNew={setIsNew}
          setNewScan={setNewScan}
        />
      )}
      <NewScanIcon setNewScan={setNewScan} />
    </>
  );
};

export default NewScan;
