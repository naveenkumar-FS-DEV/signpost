import { sendEnquiryEmail } from "../Helpers/emailService.js";
import Enquiry from "../Models/enquirySchema.js";

export const sendEmailController = async (req, res) => {
  const { name, email, number, message } = req.body;
  
  try {
    // Save the enquiry data to MongoDB
    const newEnquiry = new Enquiry({ name, email, number, message });
    await newEnquiry.save();

    const result = await sendEnquiryEmail(name, email, number, message);
    
    if (result) {
      res.status(200).json({ message: "Enquiry saved and email sent successfully" });
    } else {
      res.status(500).json({ error: "Enquiry saved but failed to send email" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
