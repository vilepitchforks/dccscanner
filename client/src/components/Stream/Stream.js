import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";

import { useScanURLContext } from "../../lib/context/scanURLContext.js";

// Custom styles
const useCustomStyles = makeStyles(theme => ({
  // root: {
  //   "& .MuiTextField-root": {
  //     margin: theme.spacing(1),
  //     width: "30ch"
  //   }
  // },
  buildView: {
    display: "flex",
    paddingTop: "16px",
    boxOrient: "vertical",
    boxDirection: "normal",
    flexDirection: "column",
    flexGrow: 1
  },
  pageBreadcrumb: {
    color: "#62738D",
    fontWeight: 700,
    fontSize: "12px",
    paddingBottom: "20px"
  },
  pullRight: {
    float: "right!important"
  },
  buildStreamFull: {
    display: "flex",
    minHeight: "272px",
    flexGrow: 1,
    boxOrient: "vertical",
    boxDirection: "normal",
    flexDirection: "column",
    position: "relative",
    marginTop: 0,
    height: "calc(100% - 80px)"
  },
  buildStream: {
    margin: "11px 0 4px",
    backgroundColor: "#F7F8FB",
    border: "1px solid #E3E7EF",
    borderRadius: "4px"
  },
  buildStreamOutput: {
    height: "240px",
    minHeight: "240px",
    flexGrow: 1,
    position: "relative",
    height: "160px",
    margin: "0 5px 0 9px",
    padding: "9px 5px 9px 0",
    overflow: "auto",
    transition: "height ease .3s"
  },
  buildStreamLine: {
    fontSize: "12px",
    margin: 0,
    padding: 0,
    background: "0 0",
    border: "none",
    borderRadius: 0,
    color: "#323B49",
    fontSize: "11px",
    lineHeight: "18px",
    overflowWrap: "break-word"
  },
  buildStreamFooter: {
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
    height: "30px",
    padding: "6px 10px",
    overflow: "hidden",
    fontSize: "12px",
    borderTop: "1px solid #E3E7EF",
    backgroundColor: "#fff",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px"
  },
  gray: { color: "#62738d" },
  red: { color: "red" }
}));

const Stream = () => {
  const { domain } = useScanURLContext();

  const { infoEvents, errorEvents } = useStoreState(state => state);

  // Custom classes
  const customClasses = useCustomStyles();

  return (
    <>
      <div className={customClasses.buildView}>
        <div className={customClasses.pageBreadcrumb}>
          Scan Log
          <div className={customClasses.pullRight}>URL: {domain}</div>
        </div>
        <div
          className={`${customClasses.buildStreamFull} ${customClasses.buildStream}`}
        >
          <div className={customClasses.buildStreamOutput}>
            {infoEvents.map((event, i) => (
              <pre key={i} className={customClasses.buildStreamLine}>
                {event}
              </pre>
            ))}
          </div>
          <footer className={customClasses.buildStreamFooter}>
            {/close/gi.test(infoEvents[infoEvents.length - 1]) && (
              <label className={customClasses.gray}>Scan completed.</label>
            )}
            {errorEvents.length
              ? errorEvents.map((event, i) => (
                  <label className={customClasses.red}>{event}</label>
                ))
              : ""}
          </footer>
        </div>
      </div>
    </>
  );
};

export default Stream;
