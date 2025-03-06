import MobileImage from "../assets/MoBile Image (1).png";
import MobileAboutImage from "../assets/Mobile-about_app.png";

const HeroSecondSection = () => {
  return (
    <div>
      <section className="mt-20 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20 md:items-start px-10 py-8">
          {/* Left side */}
          <div className="relative w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px]">
            {/* Background Circle */}
            <div className="absolute -top-12 -left-12 bg-fuchsia-950 h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-full -z-10"></div>
            
            {/* Images with Bounce Animation */}
            <img 
              src={MobileAboutImage} 
              alt="Mobile About" 
              className="relative z-10 h-[300px] sm:h-[400px] md:h-[500px] app-bounce"
              loading="lazy" 
            />
            <img 
              src={MobileImage} 
              alt="Mobile" 
              className="absolute top-20 left-40 z-20 h-[250px] sm:h-[350px] md:h-[450px] app-bounce"
              loading="lazy" 
            />
          </div>

          {/* Right side */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-3xl font-semibold mb-4 text-fuchsia-950">
              Ready to Supercharge Your Business?{" "}
              <span className="text-orange-700">Find Mobile Numbers Easily</span>
            </p>
            <p className="mb-4 text-gray-700 text-md">
              Signpost PHONE BOOK extends your phone’s contacts directory to
              millions of firms, professionals, and individuals in your city and
              across India. Whether it's businesses, government departments,
              schools, or individuals, you’ll find what you need in seconds.
            </p>
            <p className="text-lg font-semibold mb-4 text-orange-700">Nearby Promotion</p>
            <p className="mb-4 text-md text-gray-700">
              Target prospects in a specific area, by user type (Business, Male,
              Female, All) and location (Pincode). Ideal for B2C and D2C
              businesses.
            </p>

            <div className="flex justify-center md:justify-start gap-10 mb-6">
              <div className="text-lg font-semibold flex flex-col gap-3">
                <p className="bg-gray-50 px-3 py-1 rounded-b-full rounded-s-full">
                  <span className="text-orange-700">17M+</span> downloads
                </p>
                <p className="bg-gray-50 px-3 py-1 rounded-b-full rounded-s-full">
                  <span className="text-orange-700">2300 </span>Reviews
                </p>
              </div>
              <div className="text-lg font-semibold flex flex-col gap-3">
                <p className="bg-gray-50 px-3 py-1 rounded-b-full rounded-s-full">
                  <span className="text-orange-700">8M+ </span>Followers
                </p>
                <p className="bg-gray-50 px-3 py-1 rounded-b-full rounded-s-full">
                  <span className="text-orange-700">150+ </span>Countries
                </p>
              </div>
            </div>

            <button className="bg-orange-700 text-white py-2 font-semibold px-4 rounded-3xl">
              START FREE TRIAL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSecondSection;