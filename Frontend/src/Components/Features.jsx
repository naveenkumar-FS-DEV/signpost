import appLook from "../assets/app-look.png";
import { AiFillDatabase } from "react-icons/ai";
import { PiDevicesBold } from "react-icons/pi";
import { TbMessageCircleSearch } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

const Features = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-between gap-8 items-center p-8 mt-20 bg-gray-50">
        {/* Left Side (Text content) */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="flex items-start animate-pulse">
            <AiFillDatabase size={38} className="text-fuchsia-950 mr-3" />
            <div>
              <p className="text-orange-700 font-semibold text-md py-2">
                Massive Listings Database
              </p>
              <p className="py-1">
                Access an extensive directory featuring millions of listings,
                including businesses, professionals, MSMEs, schools, malls,
                medical services, and more.
              </p>
            </div>
          </div>
          <div className="flex items-start animate-pulse">
            <PiDevicesBold size={38} className="text-fuchsia-950 mr-3" />
            <div>
              <p className="text-orange-700 font-semibold text-md py-2">
                Device Compatibility
              </p>
              <p className="py-1">
                Works seamlessly on all devices, from old feature phones to modern
                smartphones.
              </p>
            </div>
          </div>
        </div>

        {/* Center Image (App look) */}
        <div className="flex justify-center md:w-1/3">
          <img
            src={appLook}
            alt="App Look"
            className="w-[80%] sm:w-[90%] md:w-[100%] lg:w-[110%] xl:w-[120%]"
            loading="lazy"
          />
        </div>

        {/* Right Side (Text content) */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="flex items-start animate-pulse">
            <TbMessageCircleSearch size={38} className="text-sky-600 mr-3" />
            <div>
              <p className="text-orange-700 font-semibold text-md py-2">
                Advanced Search Functionality
              </p>
              <p className="py-1">
                Use powerful search tools to find contacts alphabetically, by
                category, or by location, with over 10,000 categories to explore.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-6 animate-pulse">
            <MdSupportAgent size={38} className="text-sky-600 mr-3" />
            <div>
              <p className="text-orange-700 font-semibold text-md py-2">24 / 7 Support</p>
              <p className="py-1">
                Connect with our support team within minutes to clear your queries
                as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
