import React from 'react';
import {Parallax} from "react-parallax";

const AboutUs = () => {
    return (
        <Parallax strength={350}
                  bgImageStyle={{
                      width: "100%",
                      objectFit: "cover",
                  }}>
            <div
                className="max-w-screen mx-auto w-full py-[250px] max-md:py-[200px] flex items-center" id="about-us">
                <div className="max-w-screen-xl mx-auto w-100 px-4">
                    <div className="mx-auto text-center">
                        <h1 className="text-[45px] max-md:text-[40px] uppercase font-[800] text-white tracking-widest" style={{
                            textShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)"
                        }}>
                            About <span className="font-normal">Us</span>
                        </h1>
                        <div className="w-[80px] h-[5px] bg-white mx-auto mt-4"></div>
                        <h1 className="text-[70px] max-md:text-[50px] font-bold text-white mb-5 mt-7 leading-tight max-md:leading-12" style={{
                                textShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)"
                            }}>
                            Premier Web Services <span className="font-normal">For Every</span> Step <span
                            className="font-normal">Of Your</span> Journey
                        </h1>
                        <p className="text-white text-[30px] max-md:text-[20px] mb-10" style={{
                            textShadow: "0px 0px 10px rgba(0, 0, 0, 1)"
                        }}>
                            Formed to provide accessible web solutions in a rapidly<br/> evolving digital world.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default AboutUs;
