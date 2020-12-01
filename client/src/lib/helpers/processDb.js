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
  const { name, version } = await indexedDB
    .databases()
    .then(dbs => dbs.find(db => db.name === url));
  console.log("name, version", name, version);
  console.log("v before:", v);
  if (name === url && version > 0) v = version + 1;
  console.log("v after:", v);

  // Define collections without indexes.
  const db = new zango.Db(url, v, [collName]);
  console.log("db from processDb", db);
  const collection = db.collection(collName);
  console.log("collection from processDb", collection);
  data = data[url].filter(item => Object.keys(item).length > 1);

  console.log("data from processDb", data);
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
