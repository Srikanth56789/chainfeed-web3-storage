const express = require("express")
const multer = require("multer")
const cors = require("cors")
const storage = require("./storage")

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ dest: "uploads/" })

app.post("/upload", upload.single("file"), async (req, res) => {
    const file = req.file
    const result = await storage.store(file)

    res.json({
        message: "File stored successfully",
        data: result
    })
})

app.get("/media/:id", async (req, res) => {
    const file = await storage.get(req.params.id)
    res.sendFile(file)
})

app.listen(3000, () => {
    console.log("ChainFeed server running on port 3000")
})