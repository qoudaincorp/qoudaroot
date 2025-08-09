import {useCallback, useMemo, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperClass, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination, A11y} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// Projects object
import {projects} from "../../config/projects";
import BoxAnimation from "../animation/BoxAnimation";

function OurProject() {
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();

    /**
     * Handle slide previous function
     * */
    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    /**
     * Handle slide next function
     * */
    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    return (
        <div className="max-w-screen-xl mx-auto w-100 mt-[300px] max-md:mt-[150px]">
            <div id="our-projects">
                <BoxAnimation customProps={{position: "top-to-bottom", from: -75}}>
                    <div className="flex max-md:block text-center items-center py-5 px-4">
                        <button className="mr-auto p-1 cursor-pointer rounded hover:bg-primary_one-50/10 max-md:hidden"
                                onClick={handlePrevious}>
                            <img width={50} height={50} className="w-[50px] h-[50px]"
                                 src="assets/icons/left-arrow-icon.svg" alt="LEFT ICON"/>
                        </button>
                        <div className="mx-auto">
                            <h1 className="text-[50px] max-md:text-[40px] font-bold text-primary_one-50">Our Projects</h1>
                        </div>
                        <button className="ml-auto p-1 cursor-pointer rounded hover:bg-primary_one-50/10 max-md:hidden"
                                onClick={handleNext}>
                            <img width={50} height={50} className="w-[50px] h-[50px] rotate-180"
                                 src="assets/icons/left-arrow-icon.svg" alt="RIGHT ICON"/>
                        </button>
                        <div className="md:hidden flex items-center justify-center max-md:mt-5">
                            <div className="p-1 cursor-pointer rounded hover:bg-primary_one-50/10 mr-5"
                                 onClick={handlePrevious}>
                                <img width={35} height={35} className="w-[35px] h-[35px]"
                                     src="assets/icons/left-arrow-icon.svg" alt="LEFT ICON"/>
                            </div>
                            <div className="p-1 cursor-pointer rounded hover:bg-primary_one-50/10" onClick={handleNext}>
                                <img width={35} height={35} className="w-[35px] h-[35px] rotate-180"
                                     src="assets/icons/left-arrow-icon.svg" alt="RIGHT ICON"/>
                            </div>
                        </div>
                    </div>
                </BoxAnimation>
                <div className="w-full py-5 px-4 max-md:pt-0">
                    <BoxAnimation>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation={true}
                            onSwiper={setSwiperRef}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            style={{padding: "20px 0px"}}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <div
                                            className="group w-full overflow-hidden bg-cover bg-no-repeat bg-top border-2 border-[#353535] rounded-md hover:translate-y-[-10px] transition-all duration-500"
                                            style={{
                                                backgroundImage: `url(${project.thumbnail})`,
                                            }}
                                        >
                                            <div className="group-hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6))]">
                                                <div className="relative p-5 px-7 transition-all duration-500 -top-[130px] group-hover:top-[0px] flex items-center">
                                                    <h4 className="text-primary_one-50 font-bold text-[30px] max-md:text-[26px] mr-auto">{project.id}</h4>
                                                </div>
                                                <div className="relative p-5 px-7 mt-[300px] transition-all duration-500 -bottom-[155px] group-hover:bottom-[0px]">
                                                    <h2 className="text-primary_one-50 text-[30px] max-md:text-[25px] font-semibold mb-2">{project.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </BoxAnimation>
                </div>
            </div>
        </div>
    );
};

export default OurProject;
