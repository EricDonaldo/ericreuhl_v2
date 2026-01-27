import { Routes, Route } from 'react-router';
import Navbar from './components/navbar';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Projects from './routes/projects';

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}
