import mongoose from "mongoose"

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String }
},{
    timestamps: true,
})


const enquiryModel = mongoose.model("Enquiry", enquirySchema);


export default enquiryModel;