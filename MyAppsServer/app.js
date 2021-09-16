const express = require("express");
const app = express();
const cors = requires("cors");
app.use(cors());
if (app.listen(6000)) {
  console.log("connected to local server:6000");
}