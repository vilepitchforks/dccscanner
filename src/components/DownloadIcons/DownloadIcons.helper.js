import xlsx from "xlsx";

import { formatTs } from "../../lib/helpers/formatTimestamps.js";
import { localeRgx } from "../../lib/helpers/regex.js";

export const handleDownloadXlsAll = async (db, scannedUrl) => {
  const title = makeReportName(scannedUrl, "xlsx");

  try {
    // Fetch all data for one website from db
    let websiteData = await db
      .col("dccdata")
      .findAsArray({ url: scannedUrl }, { _id: 0, url: 0 });

    websiteData = websiteData
      // Where category field is an array of objects, extract only the "name" value
      .map(item => {
        if (Array.isArray(item.categoryPath))
          item.categoryPath = item.categoryPath.reduce((acc, curr) => {
            if (curr.Name) return (acc = curr.Name);
          }, "");
        return item;
      });

    const tsSet = new Set(websiteData.map(d => d.timestamp));
    const timestamps = Array.from(tsSet).reverse();

    // Group data by timestamp
    const workbookData = timestamps.map(tStamp =>
      websiteData.filter(row => row.timestamp === tStamp)
    );

    const workbook = xlsx.utils.book_new();

    workbookData.forEach((sheet, i) => {
      sheet.forEach(row => delete row.timestamp);

      const wsName = formatTs(timestamps[i]);

      const worksheet = xlsx.utils.json_to_sheet(sheet);
      xlsx.utils.book_append_sheet(workbook, worksheet, wsName);
    });

    xlsx.writeFile(workbook, title);
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};

export const handleDownloadXls = async (scannedUrl, reportData) => {
  // Remove timestamps
  reportData = reportData.map(row => {
    const { timestamp, ...remainingKeys } = row;
    return remainingKeys;
  });

  const title = makeReportName(scannedUrl, "xlsx");

  try {
    const workbook = xlsx.utils.book_new();

    const wsName = formatTs(new Date().getTime());

    const worksheet = xlsx.utils.json_to_sheet(reportData);

    xlsx.utils.book_append_sheet(workbook, worksheet, wsName);

    xlsx.writeFile(workbook, title);
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};

export const handleDownloadCsvBlob = (scannedUrl, reportData) => {
  // Remove timestamps
  reportData = reportData.map(row => {
    const { timestamp, ...remainingKeys } = row;
    return remainingKeys;
  });

  const reportTitle = makeReportName(scannedUrl, "csv");

  try {
    const worksheet = xlsx.utils.json_to_sheet(reportData);

    const csv = xlsx.utils.sheet_to_csv(worksheet);

    window.URL = window.URL || window.webkiURL;
    const blob = new Blob([csv]);
    const blobURL = window.URL.createObjectURL(blob);

    return { reportTitle, blobURL };
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};

export const handleDownloadJsonBlob = (scannedUrl, reportData) => {
  // Remove timestamps
  reportData = reportData.map(row => {
    const { timestamp, ...remainingKeys } = row;
    return remainingKeys;
  });

  const reportTitle = makeReportName(scannedUrl, "json");

  try {
    window.URL = window.URL || window.webkiURL;
    const blob = new Blob([JSON.stringify(reportData, null, 2)]);
    const blobURL = window.URL.createObjectURL(blob);

    return { reportTitle, blobURL };
  } catch (error) {
    console.warn("An error occurred while creating the report!", error);
  }
};

const makeReportName = (scannedUrl, extension) => {
  let urlRN = scannedUrl.replace(/http(|s)\:\/\//, "").split(localeRgx)[0];
  if (urlRN.slice(-1) === "/") urlRN = urlRN.slice(0, urlRN.length - 1);
  return `bvDCC_extract_${urlRN}_${new Date().getTime()}.${extension}`;
};
