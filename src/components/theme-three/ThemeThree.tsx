import React, {useEffect, useState} from 'react';
// Components
import Sidebar from "./Sidebar";
import LandingSection from "./LandingSection";
import OurService from "./OurService";
import OurProject from "./OurProject";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
// CSS
import "../../styles/tailwind-theme-three.css";
import "../../styles/custom-theme-three.css";
import Preloader from "./custom-components/Preloader";
import ThemeThreePreloader from "./custom-components/ThemeThreePreLoader";

const ThemeThree = () => {
    const [backgroundColor, setBackgroundColor] = useState("#9CD6F6");
    const [themeThreeTransition, setThemeThreeTransition] = useState<boolean>(false);
    const hashValue = window.location.hash;
    let data = {
        home: true,
        services: false,
        projects: false,
        about_us: false,
        contact_us: false,
    };
    if (hashValue && hashValue.startsWith('#')) {
        // Extract the hashtag from the hash (excluding '#')
        const extractedTag = hashValue.slice(1);
        data = {
            home: extractedTag == "home" || extractedTag == "" ? true : false,
            services: extractedTag == "our-services" ? true : false,
            projects: extractedTag == "our-projects" ? true : false,
            about_us: extractedTag == "about-us" ? true : false,
            contact_us: extractedTag == "contact-us" ? true : false,
        };
    } 
    const [visibleLayer, setVisibleLayer] = useState<VisibleLayerProps>(data);

    useEffect(() => {
        const colors = [
            {id: "home", color: "#9CD6F6"},
            {id: "our-services", color: "#F69C9C"},
            {id: "our-projects", color: "#598DAA"},
            {id: "about-us", color: "#79C4C8"},
            {id: "contact-us", color: "#799DC8"},
        ];
        // Function to handle hash change
        const handleHashChange = () => {
            const hashValue = window.location.hash;

            // Check if the hash is not empty and starts with '#'
            if (hashValue && hashValue.startsWith('#')) {
                // Extract the hashtag from the hash (excluding '#')
                const extractedTag = hashValue.slice(1);
                // Get the background color
                const selectedColor: any = colors.find((item: any) => item.id === extractedTag);
                setVisibleLayer({
                    home: extractedTag == "home" || extractedTag == "" ? true : false,
                    services: extractedTag == "our-services" ? true : false,
                    projects: extractedTag == "our-projects" ? true : false,
                    about_us: extractedTag == "about-us" ? true : false,
                    contact_us: extractedTag == "contact-us" ? true : false,
                });
                setBackgroundColor(selectedColor.color);
            } else {
                setVisibleLayer({
                    home: true,
                    services: false,
                    projects: false,
                    about_us: false,
                    contact_us: false,
                });
                setBackgroundColor("#9CD6F6");
            }
        };
        // Event listener for hashchange
        window.addEventListener("hashchange", handleHashChange);
        // Initial check on component mount
        handleHashChange();
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <div className="w-full h-screen">
            <Preloader layer={visibleLayer}/>
            <ThemeThreePreloader animation={themeThreeTransition} />
            <style dangerouslySetInnerHTML={{__html: `body { background: ${backgroundColor}; overflow-x: hidden; }`}}/>
            {/* Sidebar */}
            <Sidebar layer={visibleLayer} setLayer={setVisibleLayer}/>
            {/* Landing Section */}
            <LandingSection layer={visibleLayer} setLayer={setVisibleLayer} setThemeOne={setThemeThreeTransition}/>
            {/* Our Services */}
            <OurService layer={visibleLayer}/>
            {/* Our Projects */}
            <OurProject layer={visibleLayer}/>
            {/* About Us */}
            <AboutUs layer={visibleLayer}/>
            {/* Contact Us */}
            <ContactUs layer={visibleLayer}/>
        </div>
    );
};

interface VisibleLayerProps {
    home: boolean;
    services: boolean;
    projects: boolean;
    about_us: boolean;
    contact_us: boolean;
}

export default ThemeThree;
