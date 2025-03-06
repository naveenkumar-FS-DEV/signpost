const Accordian = () => {
  return (
    <div>
      <section className="mt-32">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">
            <span className="text-orange-700">FAQ</span> - Frequently Asked
            Questions
          </p>
          <p className="text-sm sm:text-md md:text-lg">Your answers are right here</p>
        </div>
        <div className="p-3 mt-5">
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4 shadow-lg">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-medium text-base sm:text-lg md:text-xl">
              What is Signpost PHONE BOOK ?
            </div>
            <div className="collapse-content text-sm sm:text-md md:text-lg px-2 text-gray-600">
              Signpost PHONE BOOK is an all-in-one contact directory and
              marketing tool that helps you find millions of mobile numbers for
              businesses, professionals, and individuals across India. It also
              allows you to market your products and services easily and
              efficiently.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4 shadow-lg">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium text-base sm:text-lg md:text-xl">
              How can I use Signpost PHONEBOOK ?
            </div>
            <div className="collapse-content text-sm sm:text-md md:text-lg text-gray-600">
              You can use Signpost PHONE BOOK to:
              <ul className="list-disc px-2 text-sm sm:text-md md:text-lg">
                <li>
                  Find contacts for businesses, professionals, and individuals.
                </li>
                <li>
                  Send targeted promotional messages to prospects in your area.
                </li>
                <li>
                  Store and access your personal contacts from any device.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-4 shadow-lg">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium text-base sm:text-lg md:text-xl">
              Is Signpost PHONEBOOK Free to use ?
            </div>
            <div className="collapse-content text-sm sm:text-md md:text-lg px-2 text-gray-600">
              Yes, Signpost PHONE BOOK is completely free to use! You can enjoy
              features like free messaging (via Call, SMS, Email, or WhatsApp),
              free listing of your mobile number, and more.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border-base-300 border mb-4 shadow-lg">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium text-base sm:text-lg md:text-xl">
              Who can Benefit from Signpost PHONEBOOK ?
            </div>
            <div className="collapse-content text-sm sm:text-md md:text-lg text-gray-600">
              <ul className="px-2 list-disc text-sm sm:text-md md:text-lg">
                <li>
                  Businesses (B2B, B2C, D2C): For targeted marketing and
                  promotions.
                </li>
                <li>
                  Individuals: For finding contacts and storing personal phone
                  numbers.
                </li>
                <li>
                  Professionals: To reach new clients and grow their network.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border-base-300 border mb-4 shadow-lg">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium text-base sm:text-lg md:text-xl">
              What Marketing tools does Signpost PHONEBOOK Offer ?
            </div>
            <div className="collapse-content text-sm sm:text-md md:text-lg text-gray-600">
              Signpost PHONE BOOK provides two premium marketing options:
              <ul className="px-2 text-sm sm:text-md md:text-lg list-disc">
                <li>
                  Nearby Promotion: Target prospects within a specific area
                  using their location and user preferences.
                </li>
                <li>
                  Segmental Marketing: Send promotional messages to specific
                  business categories or industry segments.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border-base-300 border mb-4 shadow-lg">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium text-base sm:text-lg md:text-xl">
              Can I access my Contacts if I lose my Phone ?
            </div>
            <div className="collapse-content text-sm sm:text-md md:text-lg px-2 text-gray-600">
              Yes! With Signpost PHONE BOOK, you can securely store your
              contacts and access them from any device, even if you lose your
              phone.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordian;
