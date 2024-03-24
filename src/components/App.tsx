import React, { createContext, useEffect, useRef, useState } from 'react';
import { Header } from './Header';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import MindMap from '../Sections/MindMap';
import Faq from '../Sections/FAQ';
import Arts from '../Sections/Arts';
import Mint from '../Sections/Mint';
import Footer from './Footer';

export const MobileWidth = createContext(false);
function App() {
  const [isMobileWidth, setIsMobileWidth] = useState<boolean>(
    window.innerWidth < 768
  );
  const [isAboveHero, setIsAboveHero] = useState<boolean | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = heroRef.current;
      if (!heroElement) return;

      const { bottom } = heroElement.getBoundingClientRect();
      const isAbove = bottom <= 60;

      if (isAbove !== isAboveHero) {
        setIsAboveHero(isAbove);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MobileWidth.Provider value={isMobileWidth}>
      <Header themeDark={isAboveHero} />
      <main>
        <Hero ref={heroRef} />
        <About />
        <MindMap />
        <Faq />
        <Arts />
        <Mint />
      </main>
      <Footer />
    </MobileWidth.Provider>
  );
}

export default App;
