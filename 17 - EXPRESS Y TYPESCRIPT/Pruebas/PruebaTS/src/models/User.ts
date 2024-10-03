import mongoose, { Model, Models, Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema: Schema<IUser> = new mongoose.Schema({
    _id: Number,
    name: String,
    surname: String,
    age: Number,
    email: String,
    premium: Boolean,
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;