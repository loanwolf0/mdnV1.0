const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");

require("./config/config");

// Use routes defined in routes.js
app.use("/", routes);

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
