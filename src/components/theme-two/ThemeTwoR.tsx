import { useEffect, useState } from 'react'
// import './App.css'
import { AnimatePresence } from 'framer-motion'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Services from './Services'
import PreloaderThemeThree from "./custom-components/ThemeThreePreloader";

import '../../styles/tailwind-theme-two.css';
import '../../styles/custom-theme-two.css';

import { motion } from 'framer-motion'
import PageTransition from './custom-components/PageTransition'
import Navigation from './Nav'

const ThemeTwoR = ({setVisibleRipple}: Props) => {
  const [animationCss, setAnimationCss] = useState(false);
  const [themeThreeTransition, setThemeThreeTransition] = useState(false);

  const [visibleLayer, setVisibleLayer] = useState<VisibleLayerProps>({
    home: true,
    services: false,
    projects: false,
    about: false,
    contactus: false,
  });

  useEffect(() => {
    const handleHashChange = () => {
        const hashValue = window.location.hash;

        if (hashValue && hashValue.startsWith('#')) {
            const extractedTag = hashValue.slice(1);

            setVisibleLayer({
                home: extractedTag === "home" || extractedTag === "" ? true : false,
                services: extractedTag === "our-services" ? true : false,
                projects: extractedTag === "our-projects" ? true : false,
                about: extractedTag === "about-us" ? true : false,
                contactus: extractedTag === "contact-us" ? true : false,
            });
        } else {
            setVisibleLayer({
                home: true,
                services: false,
                projects: false,
                about: false,
                contactus: false,
            });
        }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
        window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    setVisibleRipple(false);
    setAnimationCss(true);
    window.scroll({top: 0});
  }, []);

  return (
    <div className="w-full h-screen font-['Poppins']">
      <PreloaderThemeThree transition={themeThreeTransition}/>
      <div className="scroll-container">
        <AnimatePresence mode='wait'>  
          <motion.div>
            <PageTransition />
            <Home layer={visibleLayer} setLayer={setVisibleLayer} setThemeThree={setThemeThreeTransition} />
            <About layer={visibleLayer}/>
            <Services layer={visibleLayer}/> 
            <Projects layer={visibleLayer}/>
            <Contact layer={visibleLayer} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='block md:hidden '>
        <Navigation />
      </div>
    </div>
  )
}
interface VisibleLayerProps {
  home: boolean;
  services: boolean;
  projects: boolean;
  about: boolean;
  contactus: boolean;
}
interface Props {
  setVisibleRipple: any;
}

export default ThemeTwoR
