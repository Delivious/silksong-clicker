import { MongoClient } from "mongodb"
const url = "mongodb+srv://masoncosta31210_db_user:Delivious414@silksongclickerdb.kubcfiy.mongodb.net/?appName=SilksongClickerDB"
const client = new MongoClient(url);
const dbName = "SilksongClickerDB"
async function run() {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

run();
