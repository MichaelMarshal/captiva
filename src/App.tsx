import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import WhitePapersPage from './pages/WhitePapersPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SecurityToolsPage from './pages/SecurityToolsPage';
import AssessPage from './pages/AssessPage';
import HardenPage from './pages/HardenPage';
import MonitorPage from './pages/MonitorPage';
import RespondPage from './pages/RespondPage';
import RecoverPage from './pages/RecoverPage';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

import { useTheme } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Router basename="/captiva">
      <div className={`min-h-screen ${theme === 'light' ? 'bg-slate-50' : 'bg-gray-900'}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Resource Pages */}
          <Route path="/resources/whitepapers" element={<WhitePapersPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/tools" element={<SecurityToolsPage />} />
          
          {/* Service Pages */}
          <Route path="/services/assess" element={<AssessPage />} />
          <Route path="/services/harden" element={<HardenPage />} />
          <Route path="/services/monitor" element={<MonitorPage />} />
          <Route path="/services/respond" element={<RespondPage />} />
          <Route path="/services/recover" element={<RecoverPage />} />
          
          {/* Legacy routes for backward compatibility */}
          <Route path="/services" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
