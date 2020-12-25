import zango from "zangodb";

// TO DO: check if db exists before running scan
// export const getDbs = async () =>{}

// TO DO: if existing url has been selected, return metadata
// export const checkMeta = async () =>{}

export const processDb = async (
  url,
  data,
  addInfoEvent,
  addErrorEvent,
  setScanCompleted
) => {
  let v = 0;
  const collName = new Date().getTime().toString();

  // Check if DB for current URL exists
  const dbCheck = await window.indexedDB
    .databases()
    .then(dbs => Array.isArray(dbs) && dbs.find(db => db.name === url));

  // If DB existis, increment version in order to add a new collection
  if (
    typeof dbCheck != "undefined" &&
    dbCheck.name === url &&
    dbCheck.version > 0
  )
    v = dbCheck.version + 1;

  // Get only results with valid DCC objects
  data = data[url] && data[url].filter(item => Object.keys(item).length > 1);
  if (typeof data === "undefined" || !data.length)
    return addInfoEvent("Scan data processed. No bvDCC data found.");

  // Define collections without indexes.
  const db = new zango.Db(url, v, [collName]);
  const collection = db.collection(collName);

  collection
    .insert(data)
    .then(() => {
      addInfoEvent("Scan data successfully processed.");
      setScanCompleted(false);
    })
    .catch(error => {
      addErrorEvent("Error processing scanned data: " + error.message);
      setScanCompleted(false);
      console.error(error);
    });
};
