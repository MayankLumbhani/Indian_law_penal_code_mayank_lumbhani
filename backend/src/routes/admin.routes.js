import express from "express";
import {
    getAllUsers,
    getUserById,
    banUser,
    unbanUser,
    changeUserRole,
    getReports,
    resolveReport,
    getSystemHealth,
    getSystemLogs,
    toggleMaintenance,
    clearCache,
    getSecurityEvents,
} from "../controllers/admin.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/users", protect, getAllUsers);
router.get("/users/:id", protect, getUserById);
router.patch("/users/:id/ban", protect, banUser);
router.patch("/users/:id/unban", protect, unbanUser);
router.patch("/users/:id/role", protect, changeUserRole);
router.get("/reports", protect, getReports);
router.patch("/reports/:id/resolve", protect, resolveReport);
router.get("/system/health", protect, getSystemHealth);
router.get("/system/logs", protect, getSystemLogs);
router.post("/system/maintenance", protect, toggleMaintenance);
router.delete("/cache/clear", protect, clearCache);
router.get("/security/events", protect, getSecurityEvents);

export default router;
