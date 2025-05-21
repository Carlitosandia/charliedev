import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CareerPath from "./pages/CareerPath/CareerPath";
import Projects from './pages/Projects/Projects';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';
import Skill from './pages/Skill/Skill';
import Contact from './pages/Contact/Contact';
import './App.css';
import Flower from './pages/Sofi/Flower';
import HeartLetter from './pages/Sofi/HeartLetter';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/careerpath" element={<CareerPath />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/:type/:id" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flores" element={<Flower />} />
        <Route path="/letter" element={<HeartLetter />} />
      </Routes>
    </Router>
  );
}

export default App;
