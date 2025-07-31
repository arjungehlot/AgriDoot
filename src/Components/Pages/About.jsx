// About.jsx
const About = () => {
    return (
        <section id="about" className="px-5 md:px-28 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

                {/* Left column – text + buttons */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#30b271] mt-10 mb-4">
                        About AgriDoot
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        VYOM GIS is an <span className="font-medium text-[#1b8c53]">
                            advanced satellite imagery–based GIS platform</span> designed to empower farmers with real-time,
                        data-driven insights for better crop and land management. By utilizing
                        high-resolution satellite scanning and AI-powered analysis, VYOM provides
                        multi-layered maps to assess crop health, soil health, and soil moisture,
                        enabling farmers to make informed decisions and optimize resource use.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#f6d366] text-[#04703a] px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
                            Know More
                        </button>
                        <button className="border-2 border-[#04703a] text-[#04703a] px-6 py-2 rounded-full font-semibold hover:bg-[#04703a] hover:text-white transition">
                            Book Now
                        </button>
                    </div>
                </div>

                 <div className="w-full md:w-1/2 flex justify-center items-center">
                    <video
                        src="https://agridoot.com/wp-content/uploads/2025/06/harshittt-1.mp4"
                        className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
