import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import WorkDays from './components/WorkDays';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  // Scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <div className='bg-blue-50'>
      <Navbar scrollToSection={scrollToSection}/>
      <Hero />
      <AboutUs />
      <Gallery />
      <WorkDays />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
