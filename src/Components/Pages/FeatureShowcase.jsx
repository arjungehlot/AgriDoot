import { motion } from "framer-motion";

const features = [
  { label: "Mandi Rate Updates", icon: "💰" },
  { label: "Multilingual Support", icon: "🌐" },
  { label: "GYAN AI – 24/7 Farming Buddy", icon: "🤖" },
  { label: "Real-Time Crop Monitoring", icon: "🕒" },
  { label: "24/7 Customer Service", icon: "📞" },
  { label: "AI-Powered Disease Detection", icon: "🧠" },
  { label: "Satellite-Based Vyom GIS Insights", icon: "🛰️" },
  { label: "Hyper-Local Weather Forecasts", icon: "🌤️" },
];

const FeatureShowcaseSection = () => {
  return (
    <section className="py-12 px-4 md:py-20 text-center bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Scroll-animated heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-600 font-medium mb-2 text-sm md:text-base">FEATURE FRESH</p>
          <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-12 md:mb-16">
            Precision Farming At Your <span className="text-green-600">Fingertips</span>
          </h2>
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="w-48 mx-auto mb-8">
            <img
              src="https://agridoot.com/wp-content/uploads/2025/06/Untitled-design-10.png"
              alt="AgriDoot App Screenshot"
              width={192}
              height={384}
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-3 bg-white rounded-xl shadow-md text-green-900 text-center flex flex-col items-center gap-2 border border-green-200 transition duration-300 transform hover:scale-105 hover:border-green-600 hover:shadow-lg hover:bg-green-50"
              >
                <div className="text-2xl bg-green-100 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <p className="text-xs font-semibold">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative w-full h-[700px] overflow-visible">
          {/* Central Phone */}
          <div className="absolute top-1/2 left-1/2 ml-32 mt-40 transform -translate-x-1/2 -translate-y-1/2 z-10 w-64">
            <img
              src="https://agridoot.com/wp-content/uploads/2025/06/Untitled-design-10.png"
              alt="AgriDoot App Screenshot"
              className="w-full h-auto drop-shadow-2xl animate-float"
            />
          </div>

          {/* Circular Features */}
          {features.map((feature, index) => {
            const radius = 270;
            const angle = (index / features.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute w-36 p-3 bg-white rounded-xl shadow-md text-green-900 text-center flex flex-col items-center gap-2 border border-green-100 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-green-50"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="text-2xl bg-green-100 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <p className="text-xs font-semibold">{feature.label}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-md transition-all duration-300">
            Explore All Features →
          </button>
        </motion.div>
      </div>

      {/* Floating Animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -55%) scale(1.02);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeatureShowcaseSection;
