const xlsx = require("xlsx");

const createXlsx = (spreadsheet, reportName) => {
  console.log("Updating report...");

  // Create and save xlsx file
  const newWB = xlsx.utils.book_new();
  const newWS = xlsx.utils.json_to_sheet(spreadsheet);
  xlsx.utils.book_append_sheet(newWB, newWS, "bvDCC");
  xlsx.writeFile(newWB, reportName);
};
