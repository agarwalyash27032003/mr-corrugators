import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCompany from '../sections/about/AboutCompany';
import AboutFounder from '../sections/about/AboutFounder';
import MissionVision from "../sections/about/MissionVision"
import AboutPoints from '../sections/about/AboutPoints';

const AboutUs = () => {
  return (
    <>
      <main>
        <AboutCompany />
        <AboutFounder />
        <AboutPoints />
        <MissionVision />
        
      </main>
    </>
  );
};

export default AboutUs;