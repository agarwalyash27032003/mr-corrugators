import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCompany from '../sections/about/AboutCompany';
import AboutFounder from '../sections/about/AboutFounder';
import MissionVision from '../sections/home/MissionVision';

const AboutUs = () => {
  return (
    <>
      <main className="pt-20"> {/* Offset for sticky navbar */}
        <AboutCompany />
        <AboutFounder />
        <MissionVision />
        
      </main>
    </>
  );
};

export default AboutUs;