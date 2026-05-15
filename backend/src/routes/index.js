const express = require("express");
const router = express.Router();

const lawRoutes      = require("./law.routes");
const searchRoutes   = require("./search.routes");
const filterRoutes   = require("./filter.routes");
const analyticsRoutes = require("./analytics.routes");
const statsRoutes    = require("./stats.routes");
const authRoutes     = require("./auth.routes");
const adminRoutes    = require("./admin.routes");

router.use("/laws",      lawRoutes);
router.use("/search",    searchRoutes);
router.use("/laws",      filterRoutes);
router.use("/analytics", analyticsRoutes);
router.use("/stats",     statsRoutes);
router.use("/auth",      authRoutes);
router.use("/admin",     adminRoutes);

module.exports = router;