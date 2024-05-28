import React from 'react';

const services = [
  {
    icon: 'fas fa-code',
    title: 'Full Stack Development',
    description: 'We provide end-to-end full stack development services to build scalable and robust web applications.',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Gaming',
    description: 'Our gaming services include game development, game design, and gaming consultancy to bring your ideas to life.',
  },
  {
    icon: 'fas fa-pencil-alt',
    title: 'Designing',
    description: 'Our design team creates stunning visuals and user interfaces that enhance user experience and engagement.',
  },
  {
    icon: 'fas fa-code',
    title: 'Full Stack Development',
    description: 'We provide end-to-end full stack development services to build scalable and robust web applications.',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Gaming',
    description: 'Our gaming services include game development, game design, and gaming consultancy to bring your ideas to life.',
  },
  {
    icon: 'fas fa-pencil-alt',
    title: 'Designing',
    description: 'Our design team creates stunning visuals and user interfaces that enhance user experience and engagement.',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="text-black py-4 w-full text-center">
        <h2 className="text-3xl">Sarri Services</h2>
      </header>
      <section className="flex flex-wrap justify-center p-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md m-4 p-6 max-w-xs text-center flex flex-col items-center">
            <i className={`${service.icon} text-5xl text-green-500 mb-4`}></i>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
      
    </div>
  );
};

export default Services;
