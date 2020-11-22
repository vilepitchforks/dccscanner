import React from "react";

import ScanURLContextProvider from "../../lib/context/scanURLContext.js";

import ScanURL from "../../components/ScanURL/ScanURL.js";
import ScanURLCard from "../../components/ScanURLCard/ScanURLCard.js";

const Scan = () => {
  return (
    <ScanURLContextProvider>
      <ScanURL />
      {/* <ScanURLCard /> */}
    </ScanURLContextProvider>
  );
};

export default Scan;
