import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import Solutions from './components/Solutions';
import ServicesPage from './components/ServicesPage';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import OurProcess from './components/OurProcess';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ExpertiseSection from './components/Expertise';
import DetailedProcess from './components/DetailedProcess';
import ScrollToTopWrapper from './components/Wrapper';
import Portfolio from './components/portfolio';
import TawkTo from './components/Tawkto';
const App = () => {
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <Navbar />
        <div className="flex-1">
        <ScrollToTopWrapper>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/process" element={<DetailedProcess />} />
            <Route path="/about/why-choose-us" element={< ExpertiseSection />} />
            <Route path="/services/solutions" element={<Solutions />} />
            <Route path="/services/services" element={<ServicesPage />} />
            <Route path="/portfolio/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/about/expertise" element={<ExpertiseSection />} /> 
           <Route path="/detailedprocess" element={<DetailedProcess/>}/>\
           <Route path="/portfolio/our-work" element={<Portfolio />} />

          </Routes>
          </ScrollToTopWrapper>
        </div>
        <TawkTo/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
