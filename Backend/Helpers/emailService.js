import transporter from "../Helpers/transporter.js";
import { enquiryTemplate } from "../Helpers/emailTemplates.js";

export const sendEnquiryEmail = async (name, email, phone, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "naveenkumarfsdeveloper@gmail.com",
      subject: "New Enquiry Received",
      html: enquiryTemplate(name, email, phone, message),
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
