import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Projects from './routes/projects';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
