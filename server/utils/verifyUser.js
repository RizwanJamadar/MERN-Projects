import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization || req.cookies.Authorization;
  console.log(token);

  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    // console.log(user);
    if (req.user.Role === "hod") {
      next();
    } else if (req.user.Role === "vp") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyVP = async (req, res, next) => {
  const token = req.headers.authorization || req.cookies.Authorization;

  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;

    if (req.user.Role === "vp") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
