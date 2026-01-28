import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './routes/home';
import About from './routes/about';
import Skills from './routes/skills';
import Projects from './routes/projects';
import Impressum from './routes/impressum';
import Footer from './components/footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
