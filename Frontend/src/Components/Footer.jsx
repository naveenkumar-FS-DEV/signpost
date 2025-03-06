import { useFormik } from "formik";
import axios from "axios";
import { contactFormSchema } from "../Utils/validationSchema.js";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("http://localhost:8080/api/send-email", values);
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        toast.error("Failed to send message!");
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <div className="mt-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <footer className="bg-fuchsia-950 text-white py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
          {/* Address Section */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg mb-2">Address</p>
            <p>Signpost Celfon.in Technology</p>
            <p>No.46, SIDCO Industrial Estate, Coimbatore-641 021.</p>
            <p>support@example.com</p>
            <p>98436 57564</p>
          </div>

          {/* Help & Support Section */}
          <div>
            <p className="font-semibold text-lg mb-2">Help & Support</p>
            <ul className="space-y-1 flex flex-col gap-2">
              <li>FAQs</li>
              <li>How it works</li>
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          {/* App Download Section */}
          <div>
            <p className="font-semibold text-lg mb-2">Let's Try Out</p>
            <div className="flex gap-4 text-3xl font-light">
              <FaGooglePlay className="text-white cursor-pointer hover:text-gray-300" />
              <FaApple className="text-white cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <p className="font-semibold text-lg mb-2">For Enquiry</p>
            <form onSubmit={formik.handleSubmit} className="space-y-2">
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 bg-white text-black border-2 border-gray-700 rounded-lg"
                placeholder="Your Name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}

              <input
                type="text"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 bg-white text-black border-2 border-gray-700 rounded-lg"
                placeholder="Your Number"
              />
              {formik.touched.number && formik.errors.number && (
                <p className="text-red-500 text-sm">{formik.errors.number}</p>
              )}

              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 bg-white text-black border-2 border-gray-700 rounded-lg"
                placeholder="Your Email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 bg-white text-black border-2 border-gray-700 rounded-lg"
                cols="20"
                rows="4"
                placeholder="Your Message (Optional)"
              />

              <button
                type="submit"
                className="bg-orange-700 text-white py-2 px-4 rounded-full w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>
      <hr className="text-white" />
      <div className="flex flex-col sm:flex-row text-white font-medium bg-fuchsia-950 justify-center sm:justify-between items-center px-6 sm:px-10 py-3 text-sm text-center">
        <p>© Copyrights 2025. All rights reserved.</p>
        <p>
          Design & developed by <span className="underline">signpostphonebook</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
