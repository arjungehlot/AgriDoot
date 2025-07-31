import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StatsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const autoSlideInterval = useRef();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSlidesToShow(mobile ? 1 : 4);
      setCurrentSlide(0); // Reset on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoSlideInterval.current);
    };
  }, []);

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlideInterval.current);
  }, [currentSlide, slidesToShow]);

  const stats = [
    { percentage: "80%", title: "Expert Quality Produce" },
    { percentage: "20%", title: "Increase in Production" },
    { percentage: "25%", title: "Reduction In Input Cost" },
    { percentage: "33%", title: "Reduction In Water Usage" }
  ];

  const crops = [
    { name: "Muskmelon", image: "https://d1aqy00qjeidmk.cloudfront.net/upload/product/additional/product2-1687351191.jpg" },
    { name: "Mustard", image: "https://samsgardenstore.com/cdn/shop/files/output-onlinepngtools-3.png?v=1725270090" },
    { name: "Apple", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmIGbmw8jBZCMmjTRuFm2SKW3QVZEeFvcKPwVYYoQHJLKdqeqhg1rHZQ-ytRHb_VkzqxmN0pA8gVkYZGmThNz85API2hjz6Y0BORIRaRZYYbEfvur5ySbU9g" },
    { name: "Avocado", image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296-1024x657.jpg" },
    { name: "Wheat", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3QahU_uxvwY_qrg0VNnjgOAjX9-3K9TXUhed1NuWHtHYY4GjLM6fVAhRcuDT8F6VnNYtnC6sFRgEpmlxcSeXECg" },
    { name: "Rice", image: "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307" },
    { name: "Muskmelon", image: "https://d1aqy00qjeidmk.cloudfront.net/upload/product/additional/product2-1687351191.jpg" },
    { name: "Mustard", image: "https://samsgardenstore.com/cdn/shop/files/output-onlinepngtools-3.png?v=1725270090" },
    { name: "Apple", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmIGbmw8jBZCMmjTRuFm2SKW3QVZEeFvcKPwVYYoQHJLKdqeqhg1rHZQ-ytRHb_VkzqxmN0pA8gVkYZGmThNz85API2hjz6Y0BORIRaRZYYbEfvur5ySbU9g" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = crops.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = crops.length - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const handleManualNavigation = (direction) => {
    clearInterval(autoSlideInterval.current);
    direction === 'prev' ? prevSlide() : nextSlide();
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  return (
    <div className="bg-gray-100 pb-20">
      {/* Stats Section */}
      <div className="max-w-full pt-10">
        <div className="grid grid-cols-2 bg-green-800 md:grid-cols-2 md:px-20 py-10 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-green-800 p-6 rounded-xl text-center">
              <p className="text-5xl font-bold text-white mb-2">{stat.percentage}</p>
              <p className="text-xl text-white">{stat.title}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">We Help You To Grow More</h2>

        {/* Carousel */}
        <div className="relative px-4 max-w-7xl py-10 mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)` }}
          >
            {crops.map((crop, index) => (
              <div
                key={`${crop.name}-${index}`}
                className={`${isMobile ? 'w-full' : 'w-1/4'} px-2 flex-shrink-0 transition-all duration-500`}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-48 p-5 object-cove rounded-4xl transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-3 text-center">
                    <h4 className="text-xl font-medium pb-2 text-gray-500">{crop.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {crops.length > slidesToShow && (
            <>
              <button
                onClick={() => handleManualNavigation('prev')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft className="text-green-600" />
              </button>
              <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight className="text-green-600" />
              </button>
            </>
          )}

        </div>

        {/* Mobile Indicators */}
        {isMobile && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: crops.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  clearInterval(autoSlideInterval.current);
                  setCurrentSlide(index);
                  autoSlideInterval.current = setInterval(() => {
                    nextSlide();
                  }, 3000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-green-600 scale-125' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsSection;
