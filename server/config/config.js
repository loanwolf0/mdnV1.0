const mongoose = require("mongoose");

const config = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONNECTION_URI}`);
    console.log("Connected to the Datbase");
  } catch (error) {
    console.log(error.message);
  }
};

config();
