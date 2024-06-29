const mongoose = require("mongoose");

// Define a simple schema and model for demonstration
const MessageSchema = new mongoose.Schema({
  text: String,
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
