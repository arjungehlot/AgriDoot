import React from 'react';
import vyomBg from '../../assets/Farmerbg.jpg';
import vyomicon from '../../assets/vyom.png';
import gyan from '../../assets/gyan.png';
import forecast from '../../assets/Farmerbg.jpg';
import forecasticon from '../../assets/weather.png';
import iot from '../../assets/Farmerbg.jpg';
import ioticon from '../../assets/device.png';
import disease from '../../assets/Farmerbg.jpg';
import diseaseicon from '../../assets/b2.png';
import mandi from '../../assets/Farmerbg.jpg';
import mandiicon from '../../assets/growth-1.png';

const services = [
  {
    title: 'Vyom GIS',
    description:
      'Vyom GIS is an advanced agricultural technology platform integrating GIS, AI and IoT to provide real-time crop monitoring, predictive analytics.',
    hoverBg: vyomBg,
    icon: vyomicon, // Vyom doesn't need icon
  },
  {
    title: 'AgriDoot Gyan',
    description:
      'AgriDoot Gyan is an AI-driven chat assistant designed to provide farmers with real-time, personalized agricultural advice. It supports multiple local languages.',
    icon: gyan,
    hoverBg: vyomBg,
  },
  {
    title: 'Weather Forecast',
    description:
      'AgriDoot integrates advanced weather forecasting capabilities to assist farmers in adapting to unpredictable weather patterns, by providing localized forecasts and alerts.',
    icon: forecasticon,
    hoverBg: vyomBg,
  },
  {
    title: 'IoT Device',
    description:
      'AgriDoot’s IoT-based smart farming device helps farmers monitor real-time field conditions, AI-driven insights, and automated irrigation management.',
    icon: ioticon,
    hoverBg: vyomBg,
  },
  {
    title: 'Disease Detection',
    description:
      'AgriDoot utilizes AI and IoT technology to detect plant diseases early by analyzing real-time field data. With image processing and sensor-based monitoring.',
    icon: diseaseicon,
    hoverBg: vyomBg,
  },
  {
    title: 'Krishi Mandi Rates',
    description:
      'AgriDoot provides real-time Krishi Mandi rates, helping farmers stay updated on market prices for their crops. With accurate price insights.',
    icon: mandiicon,
    hoverBg: vyomBg,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-center text-gray-600 text-sm font-semibold">Our Services</h2>
      <h3 className="text-center text-green-700 mt-5 text-2xl md:text-3xl font-bold mb-10">
        Services That We Offer For You
      </h3>

      <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-md border group transition-all duration-300`}
          >
            {/* Background on hover */}
            {service.hoverBg && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backgroundImage: `url(${service.hoverBg})` }}
              />
            )}

            {/* Card Content */}
            <div
              className={`relative z-10 p-6 flex flex-col items-center justify-between h-full ${
                service.hoverBg ? 'text-white' : 'text-gray-800'
              }`}
            >
              {service.icon && (
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              )}
              <h4
                className={`text-lg font-semibold mb-2 ${
                  service.hoverBg
                    ? 'text-gray-800'
                    : 'text-green-700'
                }`}
              >
                {service.title}
              </h4>
              <p className="text-sm mb-4 text-gray-800 text-center">
                {service.description}
              </p>
              <button
                className={`px-4 py-1 rounded text-sm font-semibold transition ${
                  service.hoverBg
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
