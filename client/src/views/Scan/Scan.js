import React from "react";

import ScanURLContextProvider from "../../lib/context/scanURLContext.js";

import ScanURL from "../../components/ScanURL/ScanURL.js";
import WebsiteCard from "../../components/WebsiteCard/WebsiteCard.js";

const Scan = () => {
  return (
    <ScanURLContextProvider>
      <ScanURL />
      <WebsiteCard />
    </ScanURLContextProvider>
  );
};

export default Scan;
