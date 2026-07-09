import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Strecken from './pages/Strecken.jsx';
import StreckenDetail from './pages/StreckenDetail.jsx';
import Sponsoren from './pages/Sponsoren.jsx';
import Ausschreibung from './pages/Ausschreibung.jsx';
import Fotos from './pages/Fotos.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':         return <Home setActiveTab={setActiveTab} />;
      case 'strecken':     return <Strecken setActiveTab={setActiveTab} />;
      case 'strecke-10k':  return <StreckenDetail route="10k" setActiveTab={setActiveTab} />;
      case 'strecke-1k':   return <StreckenDetail route="1k" setActiveTab={setActiveTab} />;
      case 'sponsoren':     return <Sponsoren />;
      case 'ausschreibung': return <Ausschreibung />;
      case 'fotos':         return <Fotos />;
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
