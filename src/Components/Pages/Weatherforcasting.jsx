import { useEffect, useState } from "react";

const WeatherForecastingSection = () => {
  const phrases = ["Market Rate", "Gyan AI", "Disease Detection", "Weather Forecasting"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // start fade-in after phrase change
      }, 300); // half of duration for fade-out
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-green-700 text-white py-20 px-4 md:px-10 text-center transition-all duration-700 ease-in-out">
      <h4 className="text-lg md:text-xl font-semibold mb-3">
        AgriDoot : Smart Farming, Smarter Decisions
      </h4>

      <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
        AgriDoot App Provides{" "}
        <span
          className={`text-yellow-400 inline-block transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </span>
      </h2>

      <p className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed mb-10 text-white">
        The AgriDoot IoT device is an innovative smart farming solution that empowers
        farmers with real-time, data-driven insights to optimize agricultural operations.
        By integrating advanced sensors, AI-driven analytics, and wireless connectivity,
        AgriDoot enables precision farming, reduces input costs, and enhances crop productivity.
      </p>

      <div className="flex justify-center flex-wrap gap-4">
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold px-6 py-2 rounded-full transition-all duration-300"
          aria-label="Contact the AgriDoot team"
        >
          Contact Now
        </button>
        <button
          className="border border-white text-white hover:bg-white hover:text-green-700 font-semibold px-6 py-2 rounded-full transition-all duration-300"
          aria-label="Download the AgriDoot App"
        >
          Download App
        </button>
      </div>
    </section>
  );
};

export default WeatherForecastingSection;
