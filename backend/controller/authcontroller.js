
import validator from 'validator';
import User from '../models/usermodel.js';
import bcrypt from 'bcryptjs';
import { generatetoken, gentoken1 } from '../config/token.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Valid email daalo" });

    if (password.length < 8)
      return res.status(400).json({ message: "Password 8 characters ka hona chahiye" });

    const existuser = await User.findOne({ email });
    if (existuser)
      return res.status(400).json({ message: "User pehle se exist karta hai" });

    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashpassword });
    const token = generatetoken(user._id);

    res.cookie("token", token, {
      httpOnly: true, secure: true, sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({ success: true, token, user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Email ya password galat hai" });

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch)
      return res.status(400).json({ message: "Email ya password galat hai" });

    const token = generatetoken(user._id);

    res.cookie("token", token, {
      httpOnly: true, secure: true, sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ success: true, token, user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout ho gaye" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const googlelogin = async (req, res) => {
  try {
    const { email, name } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, provider: "google" });
    }

    const token = generatetoken(user._id);

    res.cookie("token", token, {
      httpOnly: true, secure: true, sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ success: true, token, user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Google login failed: ${error.message}` });
  }
};

export const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = gentoken1(email);

      res.cookie("token", token, {
        httpOnly: true, secure: true, sameSite: "none",
        maxAge: 1 * 24 * 60 * 60 * 1000
      });

      return res.status(200).json({ success: true, token });
    }

    return res.status(400).json({ message: "Invalid admin credentials" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Admin login error: ${error.message}` });
  }
};
