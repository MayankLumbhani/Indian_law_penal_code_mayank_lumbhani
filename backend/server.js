require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/config/db");
const env = require("./src/config/env");

const startServer = async () => {
  // First connect to DB, then start server
  // Never start listening if DB connection fails
  await connectDB();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
    console.log(`📍 http://localhost:${env.PORT}`);
    console.log(`🌍 Environment: ${env.NODE_ENV}`);
  });
};

startServer();