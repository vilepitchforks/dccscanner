import zango from "zangodb";

// TO DO: check if db exists before running scan
// export const getDbs = async () =>{}

// TO DO: if existing url has been selected, return metadata
// export const checkMeta = async () =>{}

export const makeStoreData = (url, actions, meta) => async data => {
  let v = 0;
  const collName = meta ? "metadata" : new Date().getTime().toString();

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

  // Modify data when storing scan data. If storing metadata, ignore this block
  if (!meta) {
    // Get only results with valid DCC objects
    data = data[url] && data[url].filter(item => Object.keys(item).length > 1);
    if (typeof data === "undefined" || !data.length)
      return actions.addInfoEvent("Scan data processed. No bvDCC data found.");
  }

  // Define collections without indexes.
  const db = new zango.Db(url, v, [collName]);

  const collection = db.collection(collName);

  collection
    .insert(data)
    .then(() => {
      actions.addInfoEvent(
        `${meta ? "Metadata" : "Scan data"} successfully processed.`
      );
      db.close();
    })
    .catch(error => {
      actions.addErrorEvent("Error processing scanned data: " + error.message);
      console.error(error);
      db.close();
    });

  db.on("blocked", () => {
    console.warn("database version cannot be upgraded");
  });
};

export const getDbNames = async () =>
  window.indexedDB.databases().then(res => res.map(db => db.name));

export const getScannedMeta = async () => {
  try {
    const dbNames = await getDbNames();

    const meta = await Promise.all(
      dbNames.map(
        dbName =>
          new Promise((resolve, reject) => {
            const db = new zango.Db(dbName, ["metadata"]);
            let col = db.collection("metadata");
            col
              .findOne()
              .then(res => resolve({ dbName, ...res }))
              .catch(err => reject(err));
          })
      )
    );

    return {
      ok: true,
      meta
    };
  } catch (error) {
    console.warn("Error occurred while fetching scanned Metadata: ", error);
    return { ok: false };
  }
};

export const getStoresNames = dbName => {
  const db = new zango.Db(dbName);

  return new Promise((resolve, reject) => {
    db.open(() => {
      resolve(db._idb.objectStoreNames);
      db.close();
    });
  });
};

export const getStoreData = async (dbName, store) => {
  try {
    const db = new zango.Db(dbName, [store]);
    let col = db.collection(store);
    const data = await col.find().toArray();
    return { ok: true, data };
  } catch (error) {
    console.warn("Error accessing data: ", error);
    return { ok: false, data: error };
  }
};
