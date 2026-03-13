import express from "express"
import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const MONGO_URL = process.env.url
if (!MONGO_URL) {
  console.error("Set url in .env")
  process.exit(1)
}

const client = new MongoClient(MONGO_URL)
async function start() {
  await client.connect()
  const db = client.db("SilksongClickerDB")
  const users = db.collection("users")

  const app = express()
  app.use(cors())
  app.use(express.json())
  // serve your static frontend folder
  app.use(express.static("silksongClicker"))

  app.post("/api/signup", async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ error: "missing" })
    const existing = await users.findOne({ username })
    if (existing) return res.status(409).json({ error: "user exists" })
    const hash = await bcrypt.hash(password, 10)
    await users.insertOne({ username, password: hash, createdAt: new Date() })
    res.json({ ok: true })
  })

  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ error: "missing" })
    const user = await users.findOne({ username })
    if (!user) return res.status(401).json({ error: "invalid credentials" })
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(401).json({ error: "invalid credentials" })
    res.json({ ok: true, username: user.username })
  })

  // Load user game data
  app.get("/api/user-data/:username", async (req, res) => {
    const { username } = req.params
    const user = await users.findOne({ username })
    if (!user) return res.status(404).json({ error: "user not found" })
    res.json({
      roseValue: user.roseValue || 0,
      multiplier: user.multiplier || 1,
      throwerCount: user.throwerCount || 0,
      sharpCount: user.sharpCount || 0,
      threefoldCount: user.threefoldCount || 0,
      throwerCost: user.throwerCost || 50,
      sharpCost: user.sharpCost || 200,
      threefoldCost: user.threefoldCost || 750
    })
  })

  // Save user game data
  app.post("/api/save-data", async (req, res) => {
    const { username, gameData } = req.body
    if (!username) return res.status(400).json({ error: "username required" })

    await users.updateOne(
      { username },
      { $set: { ...gameData, lastSaved: new Date() } }
    )
    res.json({ ok: true })
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => console.log("Server listening on", port))
}

start().catch((err) => {
  console.error("Startup error:", err)
  process.exit(1)
})