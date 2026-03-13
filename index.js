import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const url = process.env.url
if (!url) {
  console.error("Set url in .env")
  process.exit(1)
}
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
