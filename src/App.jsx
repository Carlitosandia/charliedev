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
import BirthdayGift from './pages/Sofi/BirthdayGift';
import Tickets from './pages/Sofi/TwentyGift/Tickets';
import CountdownBar from './pages/Sofi/TwentyGift/CountDownBar';

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
        <Route path="/firstletter" element={<HeartLetter />} />
        <Route path="/letter" element={<BirthdayGift />} />
        <Route path="/19-04-2025" element={<Tickets />} />
        <Route path="/miregalo" element={<CountdownBar />} />
      </Routes>
    </Router>
  );
}

export default App;
