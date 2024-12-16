import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = async (req, res, next) => {
  let token;

  // Check if token is present in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Extract token from Authorization header
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.Authorization) {
    // Extract token from cookies
    token = req.cookies.Authorization;
  }

  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Check user role
    if (req.user.Role === "hod" || req.user.Role === "vp") {
      // Authorized, proceed to next middleware
      next();
    } else {
      // Unauthorized user role
      return next(createError(403, "You are not authorized!"));
    }
  } catch (err) {
    // Token verification failed
    return next(createError(403, "Token is not valid!"));
  }
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
