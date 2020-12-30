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
    if (typeof data === "undefined" || !data.length) {
      actions.addInfoEvent("Scan data processed. No bvDCC data found.");
      actions.setProcessInProgress(false);
      return;
    }
  }

  // Define collections without indexes.
  const db = new zango.Db(url, v, [collName]);

  const collection = db.collection(collName);

  const successMsg = meta
    ? `Metadata for ${url} successfully stored.`
    : `Scan data for ${url} successfully processed.`;

  collection
    .insert(data)
    .then(() => {
      actions.addInfoEvent(successMsg);
      // Completes the check switch for the entire process from starting scan to the storing of data in db:
      !meta && actions.setProcessInProgress(false);
      db.close();
    })
    .catch(error => {
      actions.addErrorEvent("Error processing scanned data: " + error.message);
      console.error(error);
      // Completes the check switch for the entire process from starting scan to the storing of data in db:
      !meta && actions.setProcessInProgress(false);
      db.close();
    });

  db.on("blocked", () => {
    console.warn(
      `Database blocked event fired with details: ${
        meta ? "Metadata" : "Scan data"
      } store attempt for url ${url}`
    );
    actions.addInfoEvent(
      `We are experiencing some issues with ${
        meta ? "Metadata" : "Scan data"
      } processing for ${url}.\nPlease expect some delays or reload the page and try again.`
    );
    db.close();
  });
};

export const getDbNames = async () =>
  window.indexedDB.databases().then(res => res.map(db => db.name));

export const getAllMeta = async () => {
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
              .then(res =>
                resolve(
                  (() => {
                    db.close();
                    return { dbName, ...res };
                  })()
                )
              )
              .catch(err =>
                reject(
                  (() => {
                    db.close();
                    return err;
                  })()
                )
              );
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

export const getSingleMeta = async dbName => {
  try {
    const db = new zango.Db(dbName, ["metadata"]);
    let col = db.collection("metadata");
    const data = await col.findOne();
    return { ok: true, data };
  } catch (error) {
    console.warn("Error accessing data: ", error);
    return { ok: false, data: error };
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

export const dropDb = async dbName => {
  try {
    const db = new zango.Db(dbName);
    db.drop();
    return true;
  } catch (error) {
    console.warn("Error dropping db for: ", dbName, error);
    return false;
  }
};
