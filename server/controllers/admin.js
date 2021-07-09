import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


import adminDB from "../models/adminDB.js";

export const signin = async (req, res) => {
  const { AdminID, password } = req.body;

  try {
    const existingUser = await adminDB.findOne({ AdminID });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { AdminID: existingUser.AdminID, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};



export const signup = async (req, res) => {
  const { AdminID,Name, password, confirmPassword } = req.body;

  try {
    const existingUser = await adminDB.findOne({ AdminID });
    if (existingUser)
      return res.status(400).json({ message: "user already exists" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await adminDB.create({
      AdminID,
      password: hashedPassword,
      name: Name,
    });

    const token = jwt.sign({ AdminID: result.AdminID, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
      console.log(error)
  }
};