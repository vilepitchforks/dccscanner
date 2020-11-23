import React from "react";

import ScanURLContextProvider from "../../lib/context/scanURLContext.js";

import ScanURL from "../../components/ScanURL/ScanURL.js";
import WebsiteCard from "../../components/WebsiteCard/WebsiteCard.js";
import Stream from "../../components/Stream/Stream.js";

const Scan = () => {
  return (
    <ScanURLContextProvider>
      <ScanURL />
      <WebsiteCard />
      <Stream />
    </ScanURLContextProvider>
  );
};

export default Scan;
