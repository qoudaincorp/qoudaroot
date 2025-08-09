import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';
import QoudaIcon from "./custom-components/QoudaIcon";
import ScrollDown from "./custom-components/ScrollDown";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import BoxAnimationExpand from "../animation/BoxAnimationExpand";

const OurService = ({ layer }: Props) => {
    const swiperRef = useRef<any>();
    const [visibleSection, setVisibleSection] = useState<string>("hidden");

    /**
     * Layer change listener
    */
    useEffect(() => {
        if (layer.services) {
            swiperRef.current.swiper.activeIndex = 0;
            setVisibleSection("z-10 slide-scroll-animation flex");
        } else {
            setTimeout(() => {
                setVisibleSection("hidden");
            }, 1450);
        }
    }, [layer]);

    return (
        <div className={"fixed top-0 left-0 bottom-0 right-0 max-lg:relative max-lg:h-full " + visibleSection}>
            <Swiper
                ref={swiperRef}
                direction="vertical"
                modules={[Navigation, A11y, Mousewheel]}
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={true}
                speed={1500}
                initialSlide={0}
                preventInteractionOnTransition={true}
                breakpoints={{
                    0: {
                        noSwiping: false,
                        enabled: false
                    },
                    768: {
                        noSwiping: false,
                        enabled: false
                    },
                    1024: {
                        noSwiping: false,
                        enabled: true
                    },
                }}
                className="max-lg:block max-lg:overflow-y-auto"
                style={{ padding: "0px 0px", width: "100%", height: "100vh" }}
            >
                <SwiperSlide>
                    {/* Service Intro */}
                    <div className={"container min-w-full mx-auto w-100 flex items-center justify-center h-screen max-lg:h-full max-lg:pt-[120px] max-lg:pb-[50px] max-lg:overflow-y-auto bg-light_red relative z-10"} id="our-services">
                        <div className="w-full h-screen max-lg:h-full">
                            <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen max-lg:h-full">
                                <BoxAnimationExpand customProps={{ delay: 0.5, extraDelay: true }}>
                                    <div
                                        className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-end pr-10 max-lg:pr-0">
                                        <img width={180} height={200} className="w-[400px] max-lg:w-[70%] h-auto mb-5"
                                            src="assets/images/gif/theme-three-our-services-img-page.gif" alt="OUR SERVICES" />
                                    </div>
                                </BoxAnimationExpand>
                                <div
                                    className="w-full h-full flex items-center justify-start max-lg:justify-center max-lg:items-start pl-10 max-lg:pl-0">
                                    <div className="w-fit text-center">
                                        <BoxAnimationExpand customProps={{ delay: 1, extraDelay: true }}>
                                            <h1 className="text-primary_one-50 font-poppins text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px]"
                                                style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                                Our Services
                                            </h1>
                                        </BoxAnimationExpand>
                                        <BoxAnimationExpand customProps={{ delay: 1.5, extraDelay: true }}>
                                            <ScrollDown className="mt-5" />
                                        </BoxAnimationExpand>
                                    </div>
                                    <QoudaIcon position="right" color="fill-[#FFFFFF]" opacity="0.1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Web Design */}
                <SwiperSlide className="max-lg:!h-auto">
                    <div
                        className={"container min-w-full mx-auto w-100 flex items-center justify-center h-screen max-lg:h-auto max-lg:overflow-y-auto bg-light_brawn"} id="our-service-web-design">
                        <div className="max-w-screen-2xl w-full h-screen max-lg:h-full">
                            <div
                                className="grid grid-cols-3 max-lg:grid-cols-1 h-screen max-lg:h-full pl-[50px] pr-[50px] max-lg:pl-[25px] max-lg:pr-[25px] max-lg:pt-[120px] max-lg:pb-[50px]">
                                <div
                                    className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-start pl-10 pr-5 max-lg:pl-0 max-lg:pr-0 max-lg:mb-[30px]">
                                    <div className="w-fit text-left max-lg:text-center">
                                        <BoxAnimationExpand customProps={{ delay: 0.5 }}>
                                            <h1 className="text-primary_one-50 font-poppins text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px]"
                                                style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                                Web Design
                                            </h1>
                                        </BoxAnimationExpand>
                                    </div>
                                    <QoudaIcon position="left" color="fill-[#FFFFFF]" opacity="0.05" />
                                </div>
                                <BoxAnimationExpand customProps={{ delay: 1 }}>
                                    <div
                                        className="w-full h-full flex items-center justify-center max-lg:justify-center max-lg:items-end max-lg:mb-[20px]">
                                        <img width={180} height={200} className="w-[400px] h-auto mb-5"
                                            src="assets/images/gif/theme-three-our-services-web-design.gif" alt="WEB DESIGN" />
                                    </div>
                                </BoxAnimationExpand>
                                <div
                                    className="w-full h-full flex items-center justify-start pl-10 max-lg:pl-0 max-lg:justify-center max-lg:items-start">
                                    <div className="w-fit text-left">
                                        <BoxAnimationExpand customProps={{ delay: 1.5 }}>
                                            <p className="text-white text-[18px] font-poppins font-[400] leading-10"
                                                style={{ textShadow: "3px 4px 15px rgba(0, 0, 0, 0.1)" }}>
                                                We push the limits of the current industry standards to create an online presence by
                                                curating websites that convey your brands message. We make your website look like it
                                                belongs on the wall of a gallery by crafting each detail in alignment with your
                                                brands ethos to create an aesthetic online persona.
                                            </p>
                                        </BoxAnimationExpand>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Web Development */}
                <SwiperSlide>
                    <div
                        className={"container min-w-full mx-auto w-100 flex items-center justify-center h-screen max-lg:h-auto max-lg:overflow-y-auto bg-dark_brawn"} id="our-service-web-development">
                        <div className="max-w-screen-2xl w-full h-screen max-lg:h-full">
                            <div
                                className="grid grid-cols-3 max-lg:grid-cols-1 h-screen max-lg:h-full pl-[50px] pr-[50px] max-lg:pl-[25px] max-lg:pr-[25px] max-lg:pt-[120px] max-lg:pb-[50px]">
                                <div className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-start pl-10 max-lg:pl-0 max-lg:mb-[30px]">
                                    <div className="w-fit text-left max-lg:text-center">
                                        <BoxAnimationExpand customProps={{ delay: 0.5 }}>
                                            <h1 className="text-primary_one-50 font-poppins text-[50px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px]"
                                                style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                                Web Development
                                            </h1>
                                        </BoxAnimationExpand>
                                    </div>
                                </div>
                                <BoxAnimationExpand customProps={{ delay: 1 }}>
                                    <div
                                        className="w-full h-full flex items-center justify-center max-lg:justify-center max-lg:items-end max-lg:mb-[20px]">
                                        <img width={180} height={200} className="w-[400px] h-auto mb-5"
                                            src="assets/images/gif/theme-three-our-services-web-development.gif" alt="WEB DEVELOPMENT" />
                                    </div>
                                </BoxAnimationExpand>
                                <div
                                    className="w-full h-full flex items-center justify-start pl-10 max-lg:pl-0 max-lg:justify-center max-lg:items-start">
                                    <div className="w-fit text-left">
                                        <BoxAnimationExpand customProps={{ delay: 1.5 }}>
                                            <p className="text-white text-[18px] font-poppins font-[400] leading-10"
                                                style={{ textShadow: "3px 4px 15px rgba(0, 0, 0, 0.1)" }}>
                                                We push the limits of the current industry standards to create an online presence by
                                                curating websites that convey your brands message. We make your website look like it
                                                belongs on the wall of a gallery by crafting each detail in alignment with your
                                                brands ethos to create an aesthetic online persona.
                                            </p>
                                        </BoxAnimationExpand>
                                    </div>
                                    <QoudaIcon position="right" color="fill-[#FFFFFF]" opacity="0.05" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

interface Props {
    layer: any;
}

interface Slides {
    slideOne: boolean;
    slideTwo: boolean;
    slideThree: boolean;
}

export default OurService;
