import React, {useEffect, useState} from 'react';
// Components
import Preloader from "./PreLoader";
import Header from "./Header";
import Background from "./Background";
import LandingSection from "./LandingSection";
import OurService from "./OurService";
import OurProject from "./OurProject";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import MoveToTopButton from "./MoveToTopButton";
// CSS
import '../../styles/tailwind-theme-one.css';
import '../../styles/custom-theme-one.css';
import ThemeTwoTransition from '../theme-two/custom-components/ThemeTwoTransition';

const ThemeOne = ({setVisibleRipple}: Props) => {
    const [animationCss, setAnimationCss] = useState("");
    const [themeTwoTransition, setThemeTwoTransition] = useState(false);

    /**
     * Preloader hiding watch
     * */
    useEffect(() => {
        setTimeout(() => {
            setAnimationCss("top-[-100vh]");
        }, 1000);
    }, []);

    return (
        <div className="qouda-home">
            <div>
                <Preloader animationClass={animationCss}/>
                <ThemeTwoTransition transition={themeTwoTransition }/>
                <Header/>
                <Background/>
                {/* Landing page section */}
                <LandingSection setThemeTwo={setThemeTwoTransition}/>
                {/* Our services */}
                <OurService/>
                {/* Our projects */}
                <OurProject/>
                {/* About us */}
                <AboutUs/>
                {/* Contact form */}
                <ContactForm/>
                {/* Footer */}
                <Footer/>
                {/* Move to top button */}
                <MoveToTopButton/>
            </div>
        </div>
    );
};

interface Props {
    setVisibleRipple: any;
}

export default ThemeOne;
