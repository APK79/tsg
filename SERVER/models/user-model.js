import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, }, 
    lastName: { type: String, required: true, }, 
    email: { type: String, required: true, unique: true, },
    phone: { type: String, required: true, },
    passwordHash: { type: String, required: true, }, 
    avatarUrl: { type: String },
    isActivated: { type: Boolean, default: false },
    activationLink:  { type: String, },
    date: { type: Date, default: Date.now }   
});

export default mongoose.model('User', UserSchema);  