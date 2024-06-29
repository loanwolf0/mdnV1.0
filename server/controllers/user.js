const User = require("../dao/user");

const sayHello = async (req, res) => {
  try {
    const message = await User.getMessage();
    res.send(message);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
};

module.exports = {
  sayHello,
};
