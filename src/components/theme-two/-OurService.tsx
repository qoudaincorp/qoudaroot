import React from 'react';
import {Parallax} from "react-parallax";

const OurService = () => {
    return (
        <Parallax strength={350} bgImageStyle={{
            objectFit: "cover",
            opacity: 0.2
        }}>
            <div className="max-w-screen-xl mx-auto w-full py-[150px] max-md:py-[100px]" id="our-services">
                <div>
                    <div className="py-5 text-center">
                        <h1 className="text-[45px] max-md:text-[40px] uppercase font-[800] text-white tracking-widest">
                            <span className="font-normal">Our</span> Services
                        </h1>
                        <div className="w-[80px] h-[5px] bg-white mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 my-5 p-6 max-md:px-3">
                        <div className="px-5 max-md:px-2 hover:scale-[1.02] transition-all duration-1000">
                            <div className="w-full rounded-lg bg-gradient-to-b from-[#21485B] to-[#3C7B98] border-2 border-[#75BBDE] p-0.5">
                                <div
                                    className="w-full p-5 px-12 max-md:px-8 pt-10 pb-10 rounded-lg h-[400px] max-lg:h-auto overflow-hidden">
                                    <div className="py-3">
                                        <h3 className="text-white font-bold text-[35px] max-md:text-[26px]">Web Design</h3>
                                    </div>
                                    <div className="py-3">
                                        <p className={"text-white text-[19px] max-md:text-[15px] leading-9 transition-all"}>We
                                            push the limits of the current industry standards to create an online
                                            presence by curating websites that convey your brands message. We make your
                                            website look like it belongs on the wall of a gallery by crafting each
                                            detail in alignment with your brands ethos to create an aesthetic online
                                            persona.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 max-md:px-2 hover:scale-[1.02] transition-all duration-1000">
                            <div className="w-full rounded-lg bg-gradient-to-b from-[#21485B] to-[#3C7B98] border-2 border-[#75BBDE] p-0.5">
                                <div
                                    className="w-full p-5 px-12 max-md:px-8 pt-10 pb-10 rounded-lg h-[400px] max-lg:h-auto overflow-hidden">
                                    <div className="py-3">
                                        <h3 className="text-white font-bold text-[35px] max-md:text-[26px]">Web Development</h3>
                                    </div>
                                    <div className="py-3">
                                        <p className={"text-white text-[19px] max-md:text-[15px] leading-9 transition-all"}>Our
                                            emphasis is on clear milestones, effective client communication and timely
                                            delivery. We make working with us as easy as ordering takeout. We utilize
                                            the best modern technologies to develop a robust foundation on which your
                                            online presence rests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default OurService;
