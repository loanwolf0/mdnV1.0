const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");
require("./config/config");

app.use(cors());
app.use(express.json());
// Use routes defined in routes.js
app.use("/api/v1", routes);

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
