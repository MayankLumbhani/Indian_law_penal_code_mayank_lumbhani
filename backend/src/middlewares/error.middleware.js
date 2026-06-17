import ApiError from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {
  // If it's our custom ApiError, use its values
  // Otherwise it's an unexpected error — default to 500
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Handle Mongoose duplicate key error (e.g. duplicate email)
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate field value entered",
      errors: err.keyValue,
    });
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors,
    });
  }

  // Handle invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || [],
    // Only show stack trace in development
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export default errorMiddleware;