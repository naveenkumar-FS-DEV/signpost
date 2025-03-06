import Company1 from "../assets/Company6.png";
import Company2 from "../assets/Company2.jpg";
import Company3 from "../assets/Company3.png";
import Company4 from "../assets/Company4.png";
import Company5 from "../assets/Company5.png";
import Company6 from "../assets/Company7.png";
import Company7 from "../assets/Company8.png";

export default function TrustedPartners() {
  return (
    <div className="py-20 sm:py-28 mt-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-gray-900">
          Trusted by <span className="text-orange-700">150+</span> Companies
        </h2>
        <div className="trusted-partners-container mt-10">
          <div className="trusted-partners-images">
            <img
              src={Company1}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company2}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company3}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company4}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company5}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company6}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company7}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            {/* Repeat the images to create a continuous scroll */}
            <img
              src={Company1}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company2}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company3}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company4}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company5}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company6}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
            <img
              src={Company7}
              width={158}
              height={48}
              className="max-h-12 w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
