import React from 'react';

const CTASection = () => {
  return (
    <div className="pt-32 relative">
      {/* Top Green Box */}
      <div className="bg-transparent">
        <div className="bg-green-700 text-white rounded-2xl max-w-4xl mx-5 md:mx-auto px-6 py-10 text-center shadow-lg -mb-30 z-10 relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Request a Free Demo</h2>
          <p className="mb-5 text-sm sm:text-base">
            Get in touch with our sales team, who can share more about the product and answer any questions you have
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition">
            Become a Investor
          </button>
        </div>
      </div>
     

      {/* Who Are You Section */}
      <div className="bg-gray-100 pt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mt-24 mx-5  text-green-700 mb-2">Join The AgriDoot Revolution</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          We are looking for partners to bring the future of agriculture to farmers across the globe. Please confirm who you are?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-green-100 p-6 rounded-2xl py-16 shadow">
            <h3 className="text-lg font-semibold mb-2">If You Are an Agribusiness</h3>
            <p className="text-sm text-gray-700 mb-4">
              Get smarter farming solutions that boost your productivity and sustainability.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-medium transition">
              Become a Partner
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-green-100 p-6 rounded-2xl py-16 shadow">
            <h3 className="text-lg font-semibold mb-2">If You Are a Farmer</h3>
            <p className="text-sm text-gray-700 mb-4">
              Join us in revolutionizing agriculture and be a part of the AI farming movement.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-medium transition">
              Book a Demo
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-green-100 p-6 rounded-2xl py-16 shadow">
            <h3 className="text-lg font-semibold mb-2">If You Are an Agri-Enthusiatic</h3>
            <p className="text-sm text-gray-700 mb-4">
              Partner with us to scale your business with advanced IoT and API technology.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-medium transition">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
