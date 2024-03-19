import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.model.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Invalid username or password!"));

    const token = jwt.sign({ id: user._id, Role: user.Role }, process.env.JWT);

    const { password, Role, ...otherDetails } = user._doc;

    res
      .cookie("Authorization", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, Role, token });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("Authorization", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("Logout Successfully");
};

export const getAllUsers = async (req, res, next) => {
  try {
    const requests = await UserModel.find({
      Role: { $nin: ["vp"] },
    }).sort({ Role: 1 });
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};
