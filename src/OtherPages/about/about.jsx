import React from 'react';

const teamMembers = [
  {
    name: 'Khubaib',
    role: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Zia ur Rehman',
    role: 'CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Ali',
    role: 'Lead Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Usman',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="text-black py-4 w-full text-center">
        <h1 className="text-3xl">About Us</h1>
      </header>
      <section className="p-6 w-full max-w-4xl">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600">We are a team of passionate developers, designers, and gaming enthusiasts dedicated to delivering top-notch services and solutions to our clients. Our mission is to bring your ideas to life with innovation and excellence.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">Our mission is to provide cutting-edge technology solutions that empower businesses and individuals to achieve their goals. We strive for excellence in every project, ensuring high quality and customer satisfaction.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="m-4 p-4 max-w-xs">
                <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.image} alt={member.name} />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
