import BackBtn from "../Components/BackBtn";
const About = () => {
  return (
    <div>
      <section className="h-auto mt-20 p-5">
        <div>
          <div className="flex gap-3 items-center">
            <BackBtn />
            <p className="font-semibold text-lg">About Us</p>
          </div>

          <div className="bg-gray-50 px-6 py-10 flex justify-center mt-5">
            <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-6">
              <p className="text-gray-800 text-lg sm:text-base leading-relaxed text-justify">
                <span className="font-semibold">Signpost Group of Firms</span>{" "}
                was founded by
                <span className="font-semibold">
                  {" "}
                  Lion Dr. Er. J. Shivakumaar
                </span>{" "}
                in 1981 with the publication of the{" "}
                <span className="font-semibold">
                  Coimbatore Industrial Directory
                </span>
                . At a time when citywise directories were uncommon, this
                initiative paved the way for similar editions in Madurai, Salem,
                Madras, and later, the entire Tamil Nadu from 1982.
              </p>
              <p className="mt-4 text-gray-700 text-lg sm:text-base leading-relaxed text-justify">
                Embracing technological advancements, we were pioneers in
                releasing directories on floppy diskettes, CDs, websites,
                eBooks, and mobile apps. Our innovations continue to be
                supported by industry leaders, local associations like{" "}
                <span className="font-semibold">
                  CODISSIA, Chamber of Commerce, COSIEMA, and Lions Clubs
                </span>
                , and our dedicated team of graduates and postgraduates.
              </p>
              <p className="mt-4 text-gray-700 text-lg sm:text-base leading-relaxed text-justify">
                Partnering with{" "}
                <span className="font-semibold">
                  Techno Consulting Partners, UK
                </span>
                , we began publishing digital directories in 2016 for seamless
                reading on smartphones and eReaders. The introduction of{" "}
                <span className="font-semibold">JIO's mobile services</span>
                in 2017, making internet access affordable, further boosted the
                reach of our digital editions. We have proudly assisted{" "}
                <span className="font-semibold">
                  73 Lions Districts in India
                </span>{" "}
                in digitizing their directories, benefiting lakhs of Lion
                members across the country.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="flex justify-center flex-col items-center py-4 mt-5 gap-10">
            <p className="text-2xl font-semibold text-orange-700">How it Works</p>
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step text-fuchsia-950 text-lg">Register</li>
              <li className="step text-fuchsia-950 text-lg">Promote</li>
              <li className="step text-fuchsia-950 text-md">Location</li>
              <li className="step text-fuchsia-950 text- step-success">Get Business</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
