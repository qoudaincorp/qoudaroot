import { useEffect, useState } from "react";
import QoudaIcon from "./custom-components/QoudaIcon";
import BoxAnimationExpand from "../animation/BoxAnimationExpand";

const AboutUs = ({ layer }: Props) => {
    const [visibleCss, setVisibleCss] = useState("hidden");

    /**
     * Visible and hide the landing section according to layer property
    */
    useEffect(() => {
        if (layer?.about_us) {
            setVisibleCss("z-10 slide-scroll-animation flex");
        } else {
            setTimeout(() => {
                setVisibleCss("hidden");
            }, 1450);
        }
    }, [layer]);

    return (
        <div className={"fixed top-0 left-0 bottom-0 right-0 max-lg:relative max-lg:h-full " + visibleCss}>
            {/* Our Project Section */}
            <div
                className="container min-w-full mx-auto w-full flex items-center justify-center h-screen max-lg:pt-[120px] max-lg:pb-10 overflow-y-auto bg-light_green">
                <div className="w-full h-screen max-lg:h-full">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen max-lg:h-full">
                        <BoxAnimationExpand customProps={{ delay: 0.5, extraDelay: true }}>
                            <div
                                className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-end pr-10 max-lg:pr-0">
                                <img width={180} height={200} className="w-[400px] max-lg:w-[70%] h-auto mb-5"
                                    src="assets/images/gif/theme-three-about-us-img-main.gif" alt="ABOUT US" />
                            </div>
                        </BoxAnimationExpand>
                        <div
                            className="w-full h-full flex items-center justify-start max-lg:justify-center max-lg:items-start pl-10 max-lg:pl-0">
                            <div className="w-fit text-left max-lg:text-center pr-10 max-lg:pl-10">
                                <BoxAnimationExpand customProps={{ delay: 0.5, extraDelay: true }}>
                                    <h1 className="text-white text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px] mb-5"
                                        style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                        About Us
                                    </h1>
                                </BoxAnimationExpand>
                                <BoxAnimationExpand customProps={{ delay: 0.9, extraDelay: true }}>
                                    <h2 className="text-white text-[40px] max-lg:text-[30px] max-sm:text-[30px] font-[600] leading-[50px] max-lg:leading-[40px] max-sm:leading-[40px] mb-5"
                                        style={{ textShadow: "2px 3px 1px rgba(0, 0, 0, 0.2)" }}>
                                        Premier Web Services For Every Step Of Your Journey
                                    </h2>
                                </BoxAnimationExpand>
                                <BoxAnimationExpand customProps={{ delay: 1.2, extraDelay: true }}>
                                    <p className="text-white text-[22px] font-poppins font-[400] italic"
                                        style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.1)" }}>
                                        Formed to provide accessible web solutions in a rapidly evolving digital world.
                                    </p>
                                </BoxAnimationExpand>
                            </div>
                            <QoudaIcon position="right" color="fill-[#FFFFFF]" opacity="0.1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface Props {
    layer: any;
}

export default AboutUs;