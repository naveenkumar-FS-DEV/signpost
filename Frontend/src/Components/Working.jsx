import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { IoIosCloudDone } from "react-icons/io";

const Working = () => {
  return (
    <div className="mt-20 px-1 bg-gray-50 py-8">
      <div className="text-center">
        <p className="text-3xl font-bold py-2">
          How it works - <span className="text-orange-700">3 easy steps</span>
        </p>
      </div>
      <div className="w-full p-6 md:p-12">
        <ul className="timeline timeline-vertical space-y-6">
          {/* Step 1: Download */}
          <li className="flex flex-col items-center`">
            <time className="font-mono text-3xl md:text-4xl text-gray-600 italic mb-4">01</time>
            <div className="timeline-start timeline-box bg-white text-black p-4 rounded-lg shadow-lg max-w-md w-full text-center">
              <FaCloudDownloadAlt className="text-orange-700 text-4xl mb-2 mx-auto" />
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Download</h3>
              <p className="text-lg text-gray-700">Download App either for Windows or Android</p>
            </div>
            <hr className="my-6 w-3/4 mx-auto border-gray-300" />
          </li>

          {/* Step 2: Create Account */}
          <li className="flex flex-col items-center">
            <hr className="my-6 w-3/4 mx-auto border-gray-300" />
            <time className="font-mono text-3xl md:text-4xl text-gray-600 italic mb-4">02</time>
            <div className="timeline-end timeline-box bg-white text-black p-4 rounded-lg shadow-lg max-w-md w-full text-center">
              <IoIosCreate className="text-orange-700 text-4xl mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Create account</h3>
              <p className="text-lg text-gray-700">Sign up free for an account. One account for all devices.</p>
            </div>
            <hr className="my-6 w-3/4 mx-auto border-gray-300" />
          </li>

          {/* Step 3: Enjoy */}
          <li className="flex flex-col items-center">
            <hr className="my-6 w-3/4 mx-auto border-gray-300" />
            <time className="font-mono text-3xl md:text-4xl text-gray-600 italic mb-4">03</time>
            <div className="timeline-start timeline-box bg-white text-black p-4 rounded-lg shadow-lg max-w-md w-full text-center">
              <IoIosCloudDone className="text-orange-700 text-4xl mb-2 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-orange-700">It’s done, enjoy the app</h3>
              <p className="text-lg text-gray-700">Get the most amazing app experience. Explore and share the app.</p>
            </div>
            <hr className="my-6 w-3/4 mx-auto border-gray-300" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Working;
