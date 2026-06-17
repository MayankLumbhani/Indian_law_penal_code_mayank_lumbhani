import {
    registerService,
    loginService,
    getProfileService,
    updateProfileService,
    changePasswordService,
} from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const data = await registerService(req.body);
        res.status(201).json({ success: true, message: "User registered successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const data = await loginService(req.body);
        res.status(200).json({ success: true, message: "Login successful", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Logout successful", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        const data = await getProfileService(req.user.id);
        res.status(200).json({ success: true, message: "Profile fetched successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const data = await updateProfileService(req.user.id, req.body);
        res.status(200).json({ success: true, message: "Profile updated successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const forgotPassword = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Password reset email sent (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const resetPassword = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Password reset successful (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const changePassword = async (req, res) => {
    try {
        const data = await changePasswordService(req.user.id, req.body);
        res.status(200).json({ success: true, message: "Password changed successfully", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const verifyEmail = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Email verified (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const sendOtp = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "OTP sent (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const verifyOtp = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "OTP verified (not implemented)", data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};

export const getSessions = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Sessions fetched (not implemented)", data: [] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
    }
};
