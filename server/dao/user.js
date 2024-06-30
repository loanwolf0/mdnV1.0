const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const signUp = async (username, email, password, address) => {
  try {
    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hashPassword,
      address: address,
    });
    return await newUser.save();
  } catch (error) {
    throw new Error("Failed to signUp: " + error.message);
  }
};

const getUserById = async (id) => {
  try {
    const data = await userModel.findById(id).select("-password");
    return data;
  } catch (error) {
    throw new Error("Failed to getUserById: " + error.message);
  }
};

const updateUserAddress = async (id, address) => {
  try {
    return await userModel.findByIdAndUpdate(id, { address: address });
  } catch (error) {
    throw new Error("Failed to updateUserAddress: " + error.message);
  }
};

//
const existingUser = async (username) => {
  try {
    const existingUser = await userModel.findOne({ username: username });
    return existingUser;
  } catch (error) {
    throw new Error("Failed to existingUser: " + error.message);
  }
};

const existingUserEmail = async (email) => {
  try {
    const existingUserEmail = await userModel.findOne({ email: email });
    return existingUserEmail;
  } catch (error) {
    throw new Error("Failed to existingUserEmail: " + error.message);
  }
};

module.exports = {
  signUp,
  getUserById,
  updateUserAddress,
  existingUser,
  existingUserEmail,
};
