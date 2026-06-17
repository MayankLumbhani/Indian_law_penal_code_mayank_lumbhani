import jwt from "jsonwebtoken";
import env from "../config/env.js";

export const getJwtProfile = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "JWT profile fetched successfully", data: req.user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getDashboard = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Dashboard fetched successfully", data: { user: req.user } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const generateToken = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ success: false, message: "User id is required", error: "Missing id" });
        const token = jwt.sign({ id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
        res.status(201).json({ success: true, message: "Token generated successfully", data: { token } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const verifyToken = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(400).json({ success: false, message: "Token is required", error: "Missing token" });
        const decoded = jwt.verify(token, env.JWT_SECRET);
        res.status(200).json({ success: true, message: "Token is valid", data: decoded });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const refreshToken = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(400).json({ success: false, message: "Token is required", error: "Missing token" });
        const decoded = jwt.verify(token, env.JWT_SECRET);
        const newToken = jwt.sign({ id: decoded.id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
        res.status(200).json({ success: true, message: "Token refreshed successfully", data: { token: newToken } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const revokeToken = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Token revoked (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getPrivateLaws = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Private laws accessed successfully", data: { user: req.user } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getPrivateAnalytics = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Private analytics accessed successfully", data: { user: req.user } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};
