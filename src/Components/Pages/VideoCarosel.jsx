import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const videos = [
  { 
    url: 'https://www.youtube.com/embed/FEmnP6u6uKI',
    thumbnail: 'https://img.youtube.com/vi/FEmnP6u6uKI/maxresdefault.jpg'
  },
  { 
    url: 'https://www.youtube.com/embed/9A_fkhoIVL8?si=LqB9lltqZ57qJNzo',
    thumbnail: 'https://img.youtube.com/vi/9A_fkhoIVL8/maxresdefault.jpg'
  },
  { 
    url: 'https://www.youtube.com/embed/JeU_EYFH1Jk?si=jglEkugliTEtxXXj',
    thumbnail: 'https://img.youtube.com/vi/JeU_EYFH1Jk/maxresdefault.jpg'
  },
  { 
    url: 'https://www.youtube.com/embed/FEmnP6u6uKI',
    thumbnail: 'https://img.youtube.com/vi/FEmnP6u6uKI/maxresdefault.jpg'
  },
  { 
    url: 'https://www.youtube.com/embed/9A_fkhoIVL8?si=LqB9lltqZ57qJNzo',
    thumbnail: 'https://img.youtube.com/vi/9A_fkhoIVL8/maxresdefault.jpg'
  },
  { 
    url: 'https://www.youtube.com/embed/JeU_EYFH1Jk?si=jglEkugliTEtxXXj',
    thumbnail: 'https://img.youtube.com/vi/JeU_EYFH1Jk/maxresdefault.jpg'
  },
];

const VideoCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideos, setActiveVideos] = useState({});

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 640);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    // Only set up auto-rotation for large screens
    if (!isMobile) {
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % videos.length);
      }, 8000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleVideoClick = (index) => {
    setActiveVideos(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const visibleVideos = Array.from({ length: isMobile ? 1 : 5 }, (_, i) => {
    const index = (startIndex + i) % videos.length;
    return { 
      ...videos[index], 
      key: `${index}-${Date.now()}`,
      index: index
    };
  });

  return (
    <div className="w-full bg-[#f3f9f7] py-10 relative overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">Real Farmers, Real Results</h2>
        <p className="text-gray-600 my-5">See how AgriDoot's technology changed lives and boosted productivity.</p>
      </div>

      <div className="relative flex items-center justify-center px-4 max-w-7xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaChevronLeft />
        </button>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-5'} gap-4 w-full`}>
          {visibleVideos.map((video, idx) => (
            <div key={video.key} className="aspect-[9/16] rounded-xl overflow-hidden shadow relative">
              {activeVideos[video.index] || isMobile ? (
                <iframe
                  src={video.url + `&autoplay=1&mute=1`}
                  className="w-full h-full"
                  title={`video-${idx}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div 
                  className="w-full h-full cursor-pointer bg-gray-200 flex items-center justify-center"
                  onClick={() => handleVideoClick(video.index)}
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={video.thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x500?text=Thumbnail+Not+Available';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;