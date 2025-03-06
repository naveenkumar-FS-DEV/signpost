import appLook from "../assets/app-look.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <section className="mt-36 h-auto md:h-[calc(100vh-10rem)] sm:h-[50vh]">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-20 md:gap-20 justify-between p-8">
          {/* Left side */}
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-fuchsia-950">
              Find <span className="text-orange-700">Anyone, Anytime</span>
            </p>
            <p className="text-gray-700 sm:text-lg md:text-xl w-full sm:w-[80%] md:w-[70%] py-2 font-medium mx-auto lg:mx-0">
              Your All-in-One Mobile Number Finder, Digital Marketing Assistant,
              and Personal Phone Directory
            </p>
            <div className="flex justify-center lg:justify-start gap-5 py-2">
              <p className="bg-fuchsia-950 text-white p-3 rounded-sm text-sm sm:text-base flex items-center gap-2">
                <FaApple /> App Store
              </p>
              <p className="bg-fuchsia-950 text-white p-3 rounded-sm text-sm sm:text-base flex items-center gap-2">
                <FaGooglePlay /> Google Play
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 items-center py-2">
              <div>
                <div className="avatar-group -space-x-6">
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={user1} alt="user1" loading="lazy"/>
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={user2} alt="user2" loading="lazy"/>
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={user3} alt="user3" loading="lazy"/>
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user4" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-medium text-sm sm:text-base text-gray-700">
                1k+ used this app
              </p>
            </div>
          </div>

          {/* Right side with image */}
          <div className="mt-6 lg:mt-0 rounded-b-full bg-fuchsia-950 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto lg:mx-0 relative">
            <img
              className="absolute top-[-60px] sm:top-[-80px] left-[50%] transform -translate-x-[50%] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] app-bounce"
              src={appLook}
              alt="App Look"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
