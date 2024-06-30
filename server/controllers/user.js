const User = require("../dao/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.existingUser(username);

    if (!existingUser) {
      res.status(400).json({ message: "InValid Creadentials." });
      return;
    }
    await bcrypt.compare(password, existingUser.password, (err, data) => {
      if (data) {
        const authClaims = {
          name: existingUser.username,
          role: existingUser.role,
        };

        const token = jwt.sign(authClaims, process.env.SECRET_KEY, {
          expiresIn: "30d",
        });
        res.status(200).json({
          id: existingUser._id,
          role: existingUser.role,
          token: token,
        });
      } else {
        res.status(400).json({ message: "Invalid Credentials." });
      }
    });
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const signUp = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // check username length
    if (username.length < 4) {
      return res
        .status(400)
        .json({ message: "username should be greater than 4" });
    }

    // check username already exist
    const existingUsername = await User.existingUser(username);
    if (existingUsername) {
      return res.status(400).json({ message: "Username already Exists" });
    }

    // check if email already exist
    const existingEmail = await User.existingUserEmail(email);
    if (existingEmail) {
      return res.status(400).json({ message: "UserEmail already Exists" });
    }

    // check password length < 6
    if (password.length <= 5) {
      return res
        .status(400)
        .json({ message: "Password Length should be greater than 5" });
    }

    await User.signUp(username, email, password, address);
    return res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const updateUserAddress = async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;
    await User.updateUserAddress(id, address);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};
module.exports = {
  logIn,
  signUp,
  getUserById,
  updateUserAddress,
};
