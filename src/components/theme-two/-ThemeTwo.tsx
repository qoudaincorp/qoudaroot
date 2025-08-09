import React, {useEffect, useState} from 'react';
// Components
import Header from "./-Header";
import LandingSection from "./-LandingSection";
import OurService from "./-OurService";
import OurProject from "./-OurProject";
import AboutUs from "./-AboutUs";
import Footer from "./Footer";
import ContactUs from "./-ContactUs";
import MoveToTopButton from "./-MoveToTopButton";
import Preloader from "./-PreLoader";
// CSS
import '../../styles/tailwind-theme-two.css';
import '../../styles/custom-theme-two.css';
import PreloaderThemeThree from "./custom-components/ThemeThreePreloader";

const ThemeTwo = ({setVisibleRipple}: Props) => {
    const [animationCss, setAnimationCss] = useState<boolean>(false);
    const [themeThreeTransition, setThemeThreeTransition] = useState<boolean>(false);

    /**
     * Preloader hiding watch
     * */
    useEffect(() => {
        setVisibleRipple(false);
        setAnimationCss(true);
        window.scroll({top: 0});
    }, []);

    return (
        <div className="qouda">
            <div>
                <Preloader animationClass={animationCss}/>
                <PreloaderThemeThree transition={themeThreeTransition}/>
                <Header/>
                {/* Landing page section */}
                <LandingSection setThemeThree={setThemeThreeTransition}/>
                <div className="bg-[linear-gradient(0deg,rgba(52,55,76,0),rgba(52,55,76,0)),url('../../public/assets/images/jpg/qouda-body-layout-image.jpg')] bg-cover bg-no-repeat h-full">
                    {/* Our services */}
                    <OurService/>
                    {/* Our projects */}
                    <OurProject/>
                    {/* About us */}
                    <AboutUs/>
                    {/* Contact us */}
                    <ContactUs/>
                    {/* Footer */}
                    <Footer/>
                </div>
                {/* Move to top button */}
                <MoveToTopButton/>
            </div>
        </div>
    );
};

interface Props {
    setVisibleRipple: any;
}

export default ThemeTwo;
