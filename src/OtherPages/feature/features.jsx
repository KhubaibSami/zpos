import React from 'react';
import { NavLink } from 'react-router-dom';

const features = [
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Design',
    description: 'Our designs are mobile-first and adapt seamlessly to any screen size, ensuring a great user experience on all devices.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'High Performance',
    description: 'We build high-performance applications that are optimized for speed and efficiency, providing a smooth and fast experience.',
  },
  {
    icon: 'fas fa-lock',
    title: 'Secure Solutions',
    description: 'Security is our top priority. We implement best practices to protect your data and ensure your applications are secure.',
  },
  {
    icon: 'fas fa-cogs',
    title: 'Customizable',
    description: 'Our solutions are highly customizable, allowing you to tailor features to meet your specific needs and requirements.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Integration',
    description: 'We offer seamless cloud integration to enhance scalability, flexibility, and accessibility of your applications.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Support',
    description: 'Our support team is available 24/7 to assist you with any issues or questions, ensuring continuous and reliable service.',
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
     
      <section className="p-6 w-full max-w-6xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold">Our Features</h1>
          <p className="text-gray-600 mt-2">Discover the key features that make our services stand out.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md m-4 p-6 max-w-xs text-center">
              <i className={`${feature.icon} text-5xl text-green-500 mb-4`}></i>
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
     
    </div>
  );
};

export default Features;
