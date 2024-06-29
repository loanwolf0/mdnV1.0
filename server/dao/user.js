const Message = require("../models/user");

// Function to get a message from the database
const getMessage = async () => {
  try {
    // Find a message or create a default one
    let message = await Message.findOne();
    if (!message) {
      message = new Message({ text: "Hello World from MongoDB" });
      await message.save();
    }
    return message.text;
  } catch (err) {
    throw new Error("Failed to get message: " + err.message);
  }
};

module.exports = {
  getMessage,
};
