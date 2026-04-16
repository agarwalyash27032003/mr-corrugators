import Hero from '../sections/home/Hero';
import About from '../sections/home/About';
import MissionVision from '../sections/home/MissionVision';
import LogoSlider from '../sections/home/LogoSlider';
import "../index.css"
import FeaturedProducts from '../sections/home/FeaturedProducts';
import Testimonials from '../sections/home/Testimonials';
import ContactCTA from '../sections/home/ContactCTA';

const Home = () => (
  <>
    <Hero />
    <LogoSlider />
    <About />
    <FeaturedProducts />
    <ContactCTA />
    <MissionVision />
    <Testimonials />
  </>
);
export default Home;