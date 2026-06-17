import {
    getAllUsersService,
    getUserByIdService,
    banUserService,
    unbanUserService,
    changeUserRoleService,
} from "../services/admin.service.js";

export const getAllUsers = async (req, res) => {
    try {
        const data = await getAllUsersService();
        res.status(200).json({ success: true, message: "Users fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const data = await getUserByIdService(req.params.id);
        res.status(200).json({ success: true, message: "User fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const banUser = async (req, res) => {
    try {
        const data = await banUserService(req.params.id);
        res.status(200).json({ success: true, message: "User banned successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const unbanUser = async (req, res) => {
    try {
        const data = await unbanUserService(req.params.id);
        res.status(200).json({ success: true, message: "User unbanned successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const changeUserRole = async (req, res) => {
    try {
        const data = await changeUserRoleService(req.params.id, req.body.role);
        res.status(200).json({ success: true, message: "User role updated successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getReports = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Reports fetched (not implemented)", data: [] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const resolveReport = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Report resolved (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getSystemHealth = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "System health fetched successfully",
            data: { status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getSystemLogs = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "System logs fetched (not implemented)", data: [] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const toggleMaintenance = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Maintenance mode toggled (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const clearCache = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Cache cleared (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getSecurityEvents = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Security events fetched (not implemented)", data: [] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};
