import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import AboutUs from './components/AboutUs/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Quote from './components/Quote/Contacts'
import ScrollToTop from './components/ScrollToTop';
import ProjectGallery from './components/Projects/ProjectGallery';

function App() {
  return (
    // <Details/>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
