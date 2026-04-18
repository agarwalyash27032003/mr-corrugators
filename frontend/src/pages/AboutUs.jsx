import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCompany from '../sections/about/AboutCompany';
import AboutFounder from '../sections/about/AboutFounder';
import MissionVision from "../sections/about/MissionVision"

const AboutUs = () => {
  return (
    <>
      <main> {/* Offset for sticky navbar */}
        <AboutCompany />
        <AboutFounder />
        <MissionVision />
        
      </main>
    </>
  );
};

export default AboutUs;