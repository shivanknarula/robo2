import React from 'react';
import '../styles/AboutUs.css'; // Import your CSS file for styles

const Header = () => (
  <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-12 md:py-16">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Who We Are</h1>
  </header>
);

const Section = ({ title, children }) => (
  <div className="mb-12 animate-fade-in">
    <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">{title}</h2>
    {children}
  </div>
);

const IndustriesList = ({ industries }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
    {industries.map((industry, index) => (
      <div
        key={index}
        className="bg-gray-100 p-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        {industry}
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer className="bg-blue-900 text-white text-center py-6 w-full">
    <p>© 2025 Robros-Next. All rights reserved.</p>
  </footer>
);

const AboutUs = () => {
  const industries = ['Manufacturing', 'Automotive', 'Electronics', 'Logistics', 'And More'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <Section title="About Robros-Next">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Robros-Next is a trusted distribution partner for advanced robotics and automation solutions, proudly delivering cutting-edge innovations from world-class manufacturers like EVS Robots to businesses worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a vision to accelerate industrial transformation, we specialize in providing state-of-the-art robotic arms, automation components, and intelligent systems designed to enhance efficiency, safety, and productivity across various sectors.
          </p>
        </Section>
        <Section title="Our Mission">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Robros-Next, our mission is simple: to make advanced robotics accessible and effective for every business ready to embrace the future. We are committed to empowering industries with innovative solutions that drive progress and deliver measurable results.
          </p>
        </Section>
        <Section title="Industries We Serve">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We cater to a diverse range of industries, helping businesses optimize their operations with tailored automation solutions.
          </p>
          <IndustriesList industries={industries} />
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;