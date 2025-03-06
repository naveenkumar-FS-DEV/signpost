import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Signpost Celfon.in Technology
        </h2>
        <div className="space-y-6 text-gray-700">
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 text-center sm:text-left">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <p className="max-w-xs">No.46, SIDCO Industrial Estate, Coimbatore-641 021.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 text-center sm:text-left">
            <FaEnvelope className="text-blue-600 text-xl" />
            <p className="max-w-xs">support@example.com</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 text-center sm:text-left">
            <FaPhone className="text-blue-600 text-xl" />
            <p className="max-w-xs">98436 57564</p>
          </div>
        </div>
      </div>
    </div>
  );
}