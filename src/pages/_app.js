import { StoreProvider } from "easy-peasy";

import "../styles/normalize.css";
import "../styles/skeleton.css";
import "../styles/global.css";

import "react-datasheet/lib/react-datasheet.css";

import Store from "../lib/state/store/Store.js";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={Store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
