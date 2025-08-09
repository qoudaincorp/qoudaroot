import React, { useEffect, useState } from "react";
import {
  PiUsersFourLight,
  PiBriefcaseLight,
  PiChatTeardropDotsLight,
  PiCodeBlockLight,
} from "react-icons/pi";

interface SecondaryNavigationProps {
  layer: {
    home: boolean;
    services: boolean;
    projects: boolean;
    about: boolean;
    contactus: boolean;
  };
  setLayer: React.Dispatch<
    React.SetStateAction<{
      home: boolean;
      services: boolean;
      projects: boolean;
      about: boolean;
      contactus: boolean;
    }>
  >;
}

const SecondaryNavigation: React.FC<SecondaryNavigationProps> = ({ layer, setLayer }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = (): void => {
      setIsVisible(true);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`md:hidden fixed bottom-10 z-50 w-full transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-36'}`}>
        <div className="flex justify-center">
          <div className="flex gap-10 bg-white px-6 py-3 rounded-lg cursor-pointer shadow-md">
            <a href="#about-us" className="hover:text-primary transition-all">
              <PiUsersFourLight className="h-9 w-9 " />
            </a>
            <a href="#our-services" className="hover:text-primary transition-all">
              <PiBriefcaseLight className="h-9 w-9 " />
            </a>
            <a href="#our-projects" className="hover:text-primary transition-all">
              <PiCodeBlockLight className="h-9 w-9 " />
            </a>
            <a href="#contact" className="hover:text-primary transition-all">
              <PiChatTeardropDotsLight className="h-9 w-9 " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondaryNavigation;