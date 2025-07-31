import React from "react";// replace this with your actual image path

const DownloadApp = () => {
  return (
    <div className="flex justify-center items-center py-16 px-5 md:py-16 md:px-28">
      <div className="bg-[#04703a] w-full max-w-9xl rounded-[30px] md:rounded-[200px]  flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 text-white">
        
        {/* Text Content */}
        <div className="flex-1 max-w-4xl text-center md:text-left md:mx-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Download The AgriDoot App – Absolutely Free!
          </h2>
          <p className="text-sm md:text-base mb-6 md:w-3xl">
            AgriDoot is your trusted farming assistant, always free to use. Explore how smart technology is transforming agriculture and empowering farmers like never before.
          </p>
          <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#04703a] transition">
            Download Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0  flex justify-end">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white flex justify-center items-center overflow-hidden">
            <img src="https://agridoot.com/wp-content/uploads/2025/04/Your-paragraph-text-3-1-1024x1024.png" alt="Download App QR" className="w-32 md:w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
