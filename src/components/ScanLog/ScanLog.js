import { useEffect, useRef } from "react";
import { useStoreState } from "easy-peasy";

import css from "./ScanLog.module.css";

const ScanLog = () => {
  const scanLogRref = useRef();

  const { scanCompleted, infoEvents, errorEvents } = useStoreState(
    state => state
  );

  useEffect(() => {
    const child = scanLogRref.current.lastElementChild;
    // Autoscroll
    !scanCompleted && child && child.scrollIntoView(true);
  }, [infoEvents]);

  return (
    <>
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
            {/processed/gi.test(infoEvents[infoEvents.length - 1]) && (
              <span className={css.gray}>Scan completed.</span>
            )}
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
    </>
  );
};

export default ScanLog;
