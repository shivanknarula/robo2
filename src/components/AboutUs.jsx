import React from 'react';
import '../styles/AboutUs.css';

const Header = () => (
  <header className="bg-blue-900 text-white text-center py-8">
    <h1 className="text-4xl font-bold">Who We Are</h1>
  </header>
);

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-blue-900 mb-4">{title}</h2>
    {children}
  </div>
);

const IndustriesList = ({ industries }) => (
  <div className="flex flex-wrap gap-4 justify-center">
    {industries.map((industry, index) => (
      <div key={index} className="industry-box bg-gray-100 p-4 rounded-lg text-center w-36">
        {industry}
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer className="bg-blue-900 text-white text-center py-4 w-full">
    <p>© 2025 Robros-Next. All rights reserved.</p>
  </footer>
);

const AboutUs = () => {
  const industries = ['Manufacturing', 'Automotive', 'Electronics', 'Logistics', 'And More'];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Section title="About Robros-Next">
          <p className="text-lg mb-4">
            Robros-Next is a trusted distribution partner for advanced robotics and automation solutions, proudly delivering cutting-edge innovations from world-class manufacturers like EVS Robots to businesses worldwide.
          </p>
          <p className="text-lg">
            Founded with a vision to accelerate industrial transformation, we specialize in providing state-of-the-art robotic arms, automation components, and intelligent systems designed to enhance efficiency, safety, and productivity across various sectors.
          </p>
        </Section>
        <Section title="Our Mission">
          <p className="text-lg">
            At Robros-Next, our mission is simple: to make advanced robotics accessible and effective for every business ready to embrace the future. We are committed to empowering industries with innovative solutions that drive progress and deliver measurable results.
          </p>
        </Section>
        <Section title="Industries We Serve">
          <p className="text-lg mb-4">
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