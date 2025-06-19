import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
function App() {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 80) {
          current = section.getAttribute('id');
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, [currentSection]);

  return (
    <>
    <div className="container">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    <BackToTop />
    </>
  );
}

export default App;
