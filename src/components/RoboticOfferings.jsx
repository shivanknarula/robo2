import React from 'react';
import '../styles/robotic-offerings.css';

const RoboticOfferings = () => {
  return (
    <section className="robotic-offerings-section">
      <h2>Dive into the Product Range</h2>
      <div className="robotic-offerings-grid">
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/robotic-arm_c1" aria-label="Robotic Arm">
            <img src="/assets/robotic-arm.png" alt="Robotic Arm" />
            <h3>Robotic Arm</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/robotic-welding_c2" aria-label="Robotic Welding">
            <img src="/assets/robotic-welding.png" alt="Robotic Welding" />
            <h3>Robotic Welding</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/pick-and-place-robot_c3" aria-label="Pick And Place Robot">
            <img src="/assets/Pick-and-place.png" alt="Pick And Place Robot" />
            <h3>Pick And Place Robot</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/palletizing-robot_c4" aria-label="Palletizing Robot">
            <img src="/assets/Palletizing-robot.png" alt="Palletizing Robot" />
            <h3>Palletizing Robot</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/painting-robot_c5" aria-label="Painting Robot">
            <img src="/assets/Painting-robot.png" alt="Painting Robot" />
            <h3>Painting Robot</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/6-axis-robot_c6" aria-label="6 Axis Robot">
            <img src="/assets/6-axis-robot.jpg" alt="6 Axis Robot" />
            <h3>6 Axis Robot</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/scara-robot_c7" aria-label="SCARA Robot">
            <img src="/assets/SCARA-robot.png" alt="SCARA Robot" />
            <h3>SCARA Robot</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/welding-positioner_c8" aria-label="Welding Positioner">
            <img src="/assets/welding-positioner.png" alt="Welding Positioner" />
            <h3>Welding Positioner</h3>
          </a>
        </div>
        <div className="elementor-element">
          <a href="https://www.evsrobot.com/product-category/robot-track" aria-label="Robot Walking Rail">
            <img src="/assets/robot-walking-rail.jpg" alt="Robot Walking Rail" />
            <h3>Robot Walking Rail</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoboticOfferings;