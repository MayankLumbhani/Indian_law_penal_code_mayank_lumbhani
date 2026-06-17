import User from "../models/user.model.js";

export const getAllUsersService = async () => {
    const users = await User.find();
    return users;
};

export const getUserByIdService = async (id) => {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    return user;
};

export const banUserService = async (id) => {
    const user = await User.findByIdAndUpdate(id, { isBanned: true }, { new: true });
    if (!user) throw new Error("User not found");
    return user;
};

export const unbanUserService = async (id) => {
    const user = await User.findByIdAndUpdate(id, { isBanned: false }, { new: true });
    if (!user) throw new Error("User not found");
    return user;
};

export const changeUserRoleService = async (id, role) => {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true, runValidators: true });
    if (!user) throw new Error("User not found");
    return user;
};
