import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Anmeldung from './pages/Anmeldung.jsx';
import Strecken from './pages/Strecken.jsx';
import Sponsoren from './pages/Sponsoren.jsx';
import Ausschreibung from './pages/Ausschreibung.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':      return <Home setActiveTab={setActiveTab} />;
      case 'anmeldung': return <Anmeldung />;
      case 'strecken':  return <Strecken />;
      case 'sponsoren':     return <Sponsoren />;
      case 'ausschreibung': return <Ausschreibung />;
      default:              return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderPage()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </>
  );
}
