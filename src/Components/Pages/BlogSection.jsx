import React from 'react';

const blogs = [
  {
    title: 'How to Start Using AI in Your Farm with Just Smartphone',
    desc: 'Farming is changing fast. Now you can use smart technology right from your phone',
    date: 'July 24, 2025',
    image: 'https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2023/07/BP-AI-in-Agriculture-The-Future-of-Farming_body-im-3.jpg',
  },
  {
    title: 'Why Agribusinesses Are Investing in AI-Powered Farming Solutions with AgriDoot',
    desc: 'Are you struggling to maximize crop yields or reduce farming costs in an unpredictable',
    date: 'July 23, 2025',
    image: 'https://farmonaut.com/wp-content/uploads/2025/06/Smart-Farming-Artificial-Intelligence-7-AI-Secrets-to-Huge-Yields_2.jpg',
  },
  {
    title: 'हर किसान को आज एक AI खेती सहायक की ज़रूरत क्यों है?',
    desc: 'एक किसान की बात – अब खेती में तकनीक की ज़रूरत है “पहले सब',
    date: 'July 11, 2025',
    image: 'https://img.freepik.com/premium-photo/smart-farming-digital-technology-agriculture-app_776674-1142726.jpg',
  },
  {
    title: 'Monsoon Update: Heavy Rainfall Likely in Several Indian States Including MP, Odisha, and Delhi This Week',
    desc: 'Resources : The India Meteorological Department (IMD) has forecast an intense monsoon phase across',
    date: 'July 8, 2025',
    image: 'https://img.freepik.com/premium-photo/smart-agriculture-using-drones-iot-future-vision_762785-5301.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h3 className="text-xl font-medium text-gray-500">Agri Updates</h3>
        <h2 className="text-4xl mt-3 font-bold text-green-700">Blogs</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
            <img src={blog.image} alt="blog" className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
              <h3 className="text-green-700 font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.desc}</p>
            </div>
            <div className="px-4 py-2 border-t text-sm text-gray-400">{blog.date}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md shadow hover:bg-yellow-500 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
