import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: { type: String, required: true },
    AdminID: { type: String, required: true },
    password: { type: String, required: true },
    id:{type:String}
});

export default mongoose.model("AdminDB",adminSchema)