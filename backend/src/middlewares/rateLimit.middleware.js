import rateLimit from "express-rate-limit";

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // max 100 requests per 15 min per IP
  message: {
    success: false,
    message: "Too many requests, please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // only 10 login/register attempts per 15 min
  message: {
    success: false,
    message: "Too many auth attempts, please try again after 15 minutes",
  },
});

export { globalLimiter, authLimiter };