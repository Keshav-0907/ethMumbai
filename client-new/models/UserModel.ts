import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    walletAddress: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
export default User;