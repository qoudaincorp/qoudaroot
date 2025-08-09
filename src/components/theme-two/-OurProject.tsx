import React, {useCallback, useMemo, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperClass, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination, A11y} from 'swiper/modules';
import {Parallax} from "react-parallax";
// Import Swiper styles
import 'swiper/css';
// Projects object
import {projects} from "../../config/projects";

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
        <Parallax strength={350} bgImageStyle={{
            objectFit: "cover",
        }}>
            <div
                className="max-w-screen-xl mx-auto w-full py-[150px] max-md:py-[100px]" id="our-projects">
                <div>
                    <div className="flex max-md:block text-center items-center py-5 pt-0 px-4">
                        <div className="mx-auto">
                            <h1 className="text-[45px] max-md:text-[40px] uppercase font-[800] text-white tracking-widest">
                                <span className="font-normal">Our</span> Projects
                            </h1>
                            <div className="w-[80px] h-[5px] bg-white mx-auto mt-4"></div>
                        </div>
                    </div>
                    <div className="w-full py-5 px-4 max-md:pt-0">
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
                                            className="group overflow-hidden bg-cover bg-no-repeat bg-top rounded-md transition-all duration-500"
                                            style={{
                                                backgroundImage: `url(${project.thumbnail})`,
                                            }}
                                        >
                                            <div className="m-3">
                                                <div
                                                    style={{
                                                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"
                                                    }}
                                                    className="flex items-center group-hover:bg-[#ffffff] relative p-3 px-7 mt-[350px] transition-all duration-500 -bottom-[155px] group-hover:bottom-[0px] rounded-md">
                                                    <h2 className="text-secondary text-[22px] max-md:text-[18px] font-bold">{project.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex items-center justify-center max-md:mt-5">
                        <div className="p-1 cursor-pointer rounded hover:bg-white/10 mr-5"
                             onClick={handlePrevious}>
                            <img width={35} height={35} className="w-[35px] h-[35px]"
                                 src="assets/icons/left-arrow-icon.svg" alt="LEFT ICON"/>
                        </div>
                        <div className="p-1 cursor-pointer rounded hover:bg-white/10" onClick={handleNext}>
                            <img width={35} height={35} className="w-[35px] h-[35px] rotate-180"
                                 src="assets/icons/left-arrow-icon.svg" alt="RIGHT ICON"/>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default OurProject;
