import express from "express";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/getvideo", (req, res) => {
  const file = `${__dirname}/public/videoplayback.mp4`;
  console.log(file);
  //   res.send("file");
  res.sendFile(file);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
