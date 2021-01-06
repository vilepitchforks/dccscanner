import { useEffect, useRef } from "react";
import { useStoreState } from "easy-peasy";

import css from "./ScanLog.module.css";

const ScanLog = () => {
  const scanLogRref = useRef();

  const { scanUrl, infoEvents, errorEvents, scanInProgress } = useStoreState(
    state => state
  );

  useEffect(() => {
    const child = scanLogRref.current.lastElementChild;

    child && child.scrollIntoViewIfNeeded && child.scrollIntoViewIfNeeded(true);
  }, [infoEvents]);

  const setScanStatusText = () => {
    // if (!scanInProgress && scanUrl.length) return "Scan starting...";
    if (scanInProgress) return "Scan in progress...";
    if (!scanInProgress && scanUrl.length && infoEvents.length)
      return "Scan completed.";
    return "";
  };

  return (
    <div className={css.buildView}>
      <div className={`${css.buildStreamFull} ${css.buildStream}`}>
        <div ref={scanLogRref} className={css.buildStreamOutput}>
          {infoEvents.map((event, i) => (
            <pre key={i} className={css.buildStreamLine}>
              {event}
            </pre>
          ))}
        </div>
        <footer className={css.buildStreamFooter}>
          {/* {!scanInProgress && infoEvents.length ? (
            <span className={css.gray}>Scan completed. </span>
          ) : (
            ""
          )} */}
          <span className={css.gray}>{setScanStatusText()} </span>
          {errorEvents.length
            ? errorEvents.map((event, i) => (
                <span key={i} className={css.red}>
                  {event}
                </span>
              ))
            : ""}
        </footer>
      </div>
    </div>
  );
};

export default ScanLog;
