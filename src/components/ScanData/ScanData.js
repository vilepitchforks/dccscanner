import { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";

import Worksheet from "../Worksheet/Worksheet";

import {
  DownloadXls,
  DownloadCsv,
  DownloadJson
} from "../DownloadIcons/DownloadIcons.js";

import {
  handleDownloadXls,
  handleDownloadCsv,
  handleDownloadJson
} from "../DownloadIcons/DownloadIcons.helper.js";

import { createTableData } from "../../lib/helpers/arrayHelpers.js";
import { formatTs } from "../../lib/helpers/formatTimestamps.js";

const ScanData = ({ selectedWeb }) => {
  const [hasDccData, setHasDccData] = useState(true);
  const [timestamps, setTimestamps] = useState([]);
  const [selectedTs, setSelectedTs] = useState(null);
  const [allTsData, setAllTsData] = useState([]);
  const [allTsGroupedData, setAllTsGroupedData] = useState([]);
  const [allSheetData, setAllSheetData] = useState([]);
  const [sheetData, setSheetData] = useState([]);
  const [reportData, setReportData] = useState([]);

  const { db } = useStoreState(state => state);

  // Get all dcc data for one website
  useEffect(() => {
    (async () => {
      const websiteData = await db
        .col("dccdata")
        .findAsArray({ url: selectedWeb }, { _id: 0, url: 0 });
      websiteData.length ? setAllTsData(websiteData) : setHasDccData(false);
    })();
  }, []);

  // Make timestamps
  useEffect(() => {
    const tsSet = new Set(allTsData.map(d => d.timestamp));
    const ts = Array.from(tsSet);
    ts.length && setTimestamps(ts.reverse());
  }, [allTsData]);

  // Group all data into array of arrays for each timestamp [[ts1],[ts2],[ts3]]
  useEffect(() => {
    const tsGroupDataTmp =
      timestamps.length &&
      timestamps.map(t => allTsData.filter(c => c.timestamp === t));
    tsGroupDataTmp.length && setAllTsGroupedData(tsGroupDataTmp);
  }, [timestamps]);

  // Prepare the arrays for the format required by react-datasheet
  useEffect(() => {
    const sheetAllDataTmp = allTsGroupedData.length
      ? allTsGroupedData.map(d => createTableData(d))
      : [];
    sheetAllDataTmp.length && setAllSheetData(sheetAllDataTmp);
  }, [allTsGroupedData]);

  // Display the selected timestamp data
  useEffect(() => {
    // Find the index of selected timestamp dataset and send that data to react-datasheet
    let index =
      allTsGroupedData.length &&
      allTsGroupedData.findIndex(ds => ds[0].timestamp === selectedTs);
    index = index === -1 ? 0 : index;

    // Set data for display in react-worksheet
    allSheetData.length && setSheetData(allSheetData[index] || []);

    // Set data for display in xlsx, csv and json reports
    allSheetData.length && setReportData(allTsGroupedData[index] || []);
  }, [allTsGroupedData, selectedTs, allSheetData]);

  return (
    <>
      <div className="data-container">
        <div className="data-head">
          <div className="data-head-url">{selectedWeb}</div>
          <div className="data-head-element">
            <span>{!sheetData.length && hasDccData && "Loading..."}</span>
            {!hasDccData && <span>DCC data unavailable for {selectedWeb}</span>}
            {sheetData.length && hasDccData ? (
              <>
                <DownloadXls
                  selectedWeb={selectedWeb}
                  reportData={reportData}
                />
                <DownloadCsv
                  selectedWeb={selectedWeb}
                  reportData={reportData}
                />
                <DownloadJson
                  selectedWeb={selectedWeb}
                  reportData={reportData}
                />
              </>
            ) : (
              ""
            )}
            <svg className="data-close-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
            </svg>
          </div>
        </div>
        <div className="data-body">
          <div className="data-spreadsheet">
            {sheetData.length ? (
              <Worksheet data={sheetData} />
            ) : (
              <Worksheet data={createTableData([])} />
            )}
          </div>
          <div className="data-dates-placeholder">
            <div className="data-dates">
              {timestamps.map((timestamp, i) => (
                <div key={i} onClick={() => setSelectedTs(timestamp)}>
                  {formatTs(timestamp)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .data-container {
          background: red;
          margin: 20px;
          height: calc(100vh - 40px);
          display: flex;
          flex-direction: column;
        }
        .data-head {
          background: green;
          display: flex;
        }
        .data-head-url {
          background: darkmagenta;
          width: 25rem;
          flex: none;
        }
        .data-head-element {
          background: darkorange;
          flex: 1 1 0%;
          display: flex;
          justify-content: space-between;
        }
        .data-body {
          background: blue;
          display: flex;
          flex-direction: column;
          overflow-y: hidden;
          height: 100%;
        }
        .data-spreadsheet {
          background: coral;
          overflow-y: auto;
          flex: 1 1 0%;
        }

        data-dates-placeholder {
          overflow-x: hidden;
        }

        .data-dates {
          background: blueviolet;
          display: flex;
          overflow-x: auto;
        }

        .data-dates div {
          border: 1px solid;
          margin: 5px;
          white-space: nowrap;
        }

        .data-close-icon {
          width: 15px;
        }
      `}</style>
    </>
  );
};

export default ScanData;
