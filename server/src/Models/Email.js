import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Email = mongoose.model("email",EmailSchema);