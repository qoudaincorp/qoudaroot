import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper/modules';
// Components
import QoudaIcon from "./custom-components/QoudaIcon";
import ScrollDown from "./custom-components/ScrollDown";
import TextAnimationScroll from "../animation/TextAnimationScroll";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Projects object
import { projects } from "../../config/projects";
import BoxAnimationExpand from "../animation/BoxAnimationExpand";

const OurProject = ({ layer }: Props) => {
    const swiperRef = useRef<any>();
    const projectRef = useRef<any>();
    const [visibleSection, setVisibleSection] = useState<string>("hidden");
    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectDescription, setProjectDescription] = useState<string>("");

    /**
     * Initial page load listener
    */
    useEffect(() => {
        // Set the first project
        const firstProject: any = projects.find((item: any) => item.id === "01");
        setProjectTitle(firstProject.title);
        setProjectDescription(firstProject.description);
    }, []);

    /**
     * Layer change listener
    */
    useEffect(() => {
        if (layer.projects) {
            swiperRef.current.swiper.activeIndex = 0;
            setVisibleSection("z-10 slide-scroll-animation flex");
        } else {
            setTimeout(() => {
                setVisibleSection("hidden");
            }, 1450);
        }
    }, [layer]);

    /**
     * Handle slide previous function
     * @param swiper
     * */
    const handleSwiperInit = (swiper: any) => {
        swiper.on("slideChange", function (swiperSlide: any) {
            const activeElement: HTMLElement = swiperSlide.slides[swiperSlide.activeIndex];
            const titleElements: any = activeElement.querySelectorAll("[name='title']");
            const desElements: any = activeElement.querySelectorAll("[name='description']");

            setProjectTitle(titleElements[0].value);
            setProjectDescription(desElements[0].value);
        });
    };

    window.addEventListener("scroll", () => {
        console.log("OK");
    });

    return (
        <div className={"fixed top-0 left-0 bottom-0 right-0 max-lg:relative max-lg:h-full " + visibleSection}>
            <Swiper
                ref={swiperRef}
                direction="vertical"
                modules={[A11y, Mousewheel]}
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={true}
                speed={1500}
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
                        noSwiping: true,
                        enabled: true
                    },
                }}
                className="max-lg:block max-lg:overflow-y-auto"
                style={{ padding: "0px 0px", width: "100%", height: "100vh" }}
            >
                {/* Our Project Section */}
                <SwiperSlide>
                    <div
                        className={"container min-w-full mx-auto w-100 flex items-center justify-center h-screen max-lg:h-full max-lg:pt-[120px] max-lg:pb-[50px] max-lg:overflow-y-auto bg-sky_dark_blue "} id="our-projects">
                        <div className="w-full h-screen max-lg:h-full">
                            <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen max-lg:h-full">
                                <div className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-center pr-10 max-lg:pr-0 max-lg:pb-5">
                                    <div className="w-fit text-center">
                                        <BoxAnimationExpand customProps={{ delay: 0.5, extraDelay: true }}>
                                            <h1 className="text-primary_one-50 font-poppins text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px]"
                                                style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                                Our Projects
                                            </h1>
                                        </BoxAnimationExpand>
                                        <BoxAnimationExpand customProps={{ delay: 1, extraDelay: true }}>
                                            <ScrollDown className="mt-5" />
                                        </BoxAnimationExpand>
                                    </div>
                                </div>
                                <BoxAnimationExpand customProps={{ delay: 1.2, extraDelay: true }}>
                                    <div
                                        className="w-full h-full flex items-center justify-start max-lg:justify-center max-lg:items-start pl-10 max-lg:pl-0">
                                        <img width={180} height={200} className="w-[400px] max-lg:w-[70%] h-auto mb-5"
                                            src="assets/images/gif/theme-three-our-projects-img-main.gif" alt="OUR PROJECTS" />
                                        <QoudaIcon position="right" color="fill-[#FFFFFF]" opacity="0.05" />
                                    </div>
                                </BoxAnimationExpand>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Project Catalogue */}
                {projects.map((project, index) => (
                    <SwiperSlide>
                        <div
                            className={"container min-w-full mx-auto w-100 flex items-center justify-center h-screen max-lg:h-full max-lg:overflow-y-auto bg-sky_light_blue " + (index === 0 ? "max-lg:pt-[120px]" : "")}>
                            <div className="w-full h-screen max-lg:h-full">
                                <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen max-lg:h-auto">
                                    <div className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-end max-lg:pb-10">
                                        <div className="w-full pl-36 max-lg:pl-8 max-lg:pr-8 max-lg:text-center">
                                            <BoxAnimationExpand customProps={{ delay: 0.5 }}>
                                                <TextAnimationScroll customProps={{ position: "top-to-bottom", delay: 0, duration: 0.6 }} onChangeCatch={project.title}>
                                                    <h1 className="text-primary_one-50 font-poppins text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px] mb-5">
                                                        {project.title}
                                                    </h1>
                                                </TextAnimationScroll>
                                            </BoxAnimationExpand>
                                        </div>
                                        <QoudaIcon position="left" color="fill-[#FFFFFF]" opacity="0.05" />
                                    </div>
                                    <BoxAnimationExpand customProps={{ delay: 1 }}>
                                        <div className="w-full h-full py-5 px-4 max-md:pt-0 flex items-center max-lg:items-start justify-center">
                                            <Swiper
                                                ref={projectRef}
                                                modules={[Navigation, Pagination, A11y, Mousewheel]}
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                navigation={true}
                                                pagination={true}
                                                loop={true}
                                                noSwiping={false}
                                                mousewheel={true}
                                                breakpoints={{
                                                    0: {
                                                        slidesPerView: 1,
                                                        noSwiping: false,
                                                        spaceBetween: 20,
                                                    },
                                                    768: {
                                                        slidesPerView: 1,
                                                        noSwiping: false,
                                                        spaceBetween: 30,
                                                    },
                                                    1024: {
                                                        slidesPerView: 1,
                                                        noSwiping: false,
                                                        spaceBetween: 30,
                                                    },
                                                }}
                                                onSwiper={handleSwiperInit}
                                                style={{ padding: "20px 0px", width: "400px" }}
                                            >
                                                <SwiperSlide key={index} virtualIndex={index}>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <input type="hidden" name="title" value={project.title} />
                                                        <input type="hidden" name="description" value={project.description} />
                                                        <div
                                                            className="group overflow-hidden bg-cover bg-no-repeat bg-top rounded-md transition-all duration-500 h-[490px] max-xl:h-[400px] max-md:h-[520px]"
                                                            style={{
                                                                backgroundImage: `url(${project.thumbnail})`
                                                            }}
                                                        >
                                                        </div>
                                                    </a>
                                                </SwiperSlide>

                                            </Swiper>
                                        </div>
                                    </BoxAnimationExpand>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

interface Props {
    layer: any;
}

export default OurProject;
