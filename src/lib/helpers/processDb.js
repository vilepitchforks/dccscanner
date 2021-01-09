import zango from "zangodb";

export class Model {
  constructor() {
    const db = new zango.Db("dcc", {
      // sets the schema, scannedUrl and url are the same url sent by the user
      metadata: ["scannedUrl"],
      dccdata: ["url", "timestamp"]
    });
    db.open(); // creates the db and collections
    db.on("blocked", () => {
      console.warn("database version cannot be upgraded");
    });
    this.db = db;
    this.colLabel = "";
  }

  col(collection) {
    // Used in conjuction with methods that return Cursor and need extra processing, for example db.find()
    this.colLabel = collection;
    return this;
  }

  collection(collection) {
    // Returns Collection on Model.db instance
    return this.db.collection(collection);
  }

  async findAsArray(query, options) {
    // Used in conjuction with db.col()
    return await this.db
      .collection(this.colLabel)
      .find(query, options)
      .toArray();
  }

  async remove(url) {
    return await Promise.all([
      this.db.collection("metadata").remove({ scannedUrl: url }),
      this.db.collection("dccdata").remove({ url })
    ]);
  }
}
