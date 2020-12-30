import { useEffect, useState } from "react";

import Worksheet from "../Worksheet/Worksheet";

import { getStoresNames, getStoreData } from "../../lib/helpers/processDb";
import { createTableData } from "../../lib/helpers/handleArr";

const ScanData = ({ dbName }) => {
  const [dates, setDates] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const stores = await getStoresNames(dbName);
      const rawDates = Object.values(stores).filter(
        store => store !== "metadata"
      );
      setDates(rawDates);
    })();
  }, []);

  const handleGetStoreData = async (dbName, date) => {
    const d = await getStoreData(dbName, date);
    const formattedDdata = d.ok && createTableData(d.data);
    setData(formattedDdata);
  };

  return (
    <>
      <div className="data-container">
        <div className="data-head">
          <div className="data-head-url">{dbName}</div>
          <div className="data-head-element">
            <span>Rest of the head section</span>
            <svg className="data-close-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
            </svg>
          </div>
        </div>
        <div className="data-body">
          <div className="data-spreadsheet">
            <Worksheet data={data} />
          </div>
          <div className="data-dates">
            {dates.map((date, i) => (
              <div key={i} onClick={() => handleGetStoreData(dbName, date)}>
                {date}
              </div>
            ))}
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
        }
        .data-spreadsheet {
          background: coral;
          overflow-y: auto;
        }
        .data-dates {
          background: blueviolet;
          display: flex;
        }
        .data-close-icon {
          width: 15px;
        }
      `}</style>
    </>
  );
};

export default ScanData;
