import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const HeroFourthSection = () => {
  return (
    <div className="bg-gray-50 py-2 mt-20">
      <section className="p-3 mt-16 bg-white text-black m-5 rounded-lg shadow-lg">
        <div className="flex flex-col w-[100%] gap-6 py-8 px-2 m-auto">
          <p className="text-3xl font-bold">
            Let’s download free from Apple and Play Store
          </p>
          <p className="text-lg font-medium text-gray-700">
            Instant free download from Apple and Play Store. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the standard.
          </p>
          <div className="flex gap-5 mt-2">
            <button className="bg-orange-700 text-white font-semibold px-3 py-2 rounded-xl flex items-center gap-2">
              <FaApple className="text-xl" /> App Store
            </button>
            <button className="bg-orange-700 text-white font-semibold px-3 py-2 rounded-xl flex items-center gap-2">
              <FaGooglePlay className="text-xl" /> Play Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroFourthSection;
