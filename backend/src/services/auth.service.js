import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import env from "../config/env.js";

export const registerService = async ({ name, email, password }) => {
    const existing = await User.findOne({ email });
    if (existing) throw new Error("User already exists with this email");
    const user = await User.create({ name, email, password });
    return { _id: user._id, name: user.name, email: user.email };
};

export const loginService = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("Invalid email or password");
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid email or password");
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
    return { token, user: { _id: user._id, name: user.name, email: user.email } };
};

export const getProfileService = async (userId) => {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    return user;
};

export const updateProfileService = async (userId, updates) => {
    const allowed = { name: updates.name };
    const user = await User.findByIdAndUpdate(userId, allowed, { new: true, runValidators: true });
    if (!user) throw new Error("User not found");
    return user;
};

export const changePasswordService = async (userId, { currentPassword, newPassword }) => {
    const user = await User.findById(userId).select("+password");
    if (!user) throw new Error("User not found");
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) throw new Error("Current password is incorrect");
    user.password = newPassword;
    await user.save();
    return { message: "Password changed successfully" };
};
