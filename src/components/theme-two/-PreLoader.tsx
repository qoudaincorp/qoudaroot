import React, {useEffect, useState} from 'react';
import PreloadImage from "../custom-classes/PreloadImage";
import {rippleEffectDuration} from "../../config/constants";

function Preloader({animationClass}: any) {
    const [animationEnd, setAnimationEnd] = useState<string>("")

    /**
     * Preloader display state watch
     * */
    useEffect(() => {
        if (animationClass) {
            setTimeout(() => {
                setAnimationEnd("hidden");
            }, rippleEffectDuration);
        }
    }, [animationClass]);

    return (
        <div className={"w-full h-screen fixed top-0 right-0 left-0 right-0 bg-transparent z-[111111] overflow-hidden " + animationEnd}>
            <div className={"ripple-animation-close absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[0px] h-[0px] rounded-[100%] bg-[navy_blue]"}></div>
            <button className="ripple-transition-hide"></button>
            <button className="ripple-transition-hide"></button>
        </div>
    );
};

export default Preloader;
