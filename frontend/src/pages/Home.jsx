import Hero from '../sections/home/Hero';
import LogoSlider from '../sections/home/LogoSlider';
import Testimonials from '../sections/home/Testimonials';
import FAQ from '../sections/home/FAQ';
import FeaturedProducts from '../sections/home/FeaturedProducts';
import About from '../sections/home/About';

const Home = () => (
  <>
    <Hero />
    {/* <LogoSlider /> */}
    <FeaturedProducts />
    <About />
    <Testimonials />
    <FAQ />
  </>
);

export default Home;