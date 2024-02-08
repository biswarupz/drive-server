const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const exp = require("constants");
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
///////////////////////////////////////////////
app.get("/files", (req, res) => {
  const uploadPath = path.join(__dirname, "uploads");
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      console.error("Error reading uploads directory:", err);
      return res.status(500).send("Internal Server Error");
    }
    const imagePaths = files.map((file) => file); // Send only the file names
    res.send(imagePaths);
    //console.log(imagePaths);
  });
});
///////////////////////////////////////////////
app.get("/", (req, res) => {
  return res.render("index");
});
///////////////////////////////////////////////
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  return res.redirect("/");
});
///////////////////////////////////////////////
app.post("/img", (req, res) => {
  const imgName = req.query.img;
  let filename = imgName.toString();
  const imagePath = path.join(__dirname, "uploads", filename);
  res.sendFile(imagePath);
  console.log(filename);
});
///////////////////////////////////////////////
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
