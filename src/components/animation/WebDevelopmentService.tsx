import {motion, useAnimation, useInView} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import PreloadImage from "../custom-classes/PreloadImage";


function WebDevelopmentService() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    const [showFullTextTwo, setShowFullTextTwo] = useState(false);
    const [dropDownRotateTwo, setDropDownRotateTwo] = useState(false);
    const textClassTwo = showFullTextTwo ? 'block' : 'line-clamp-4 overflow-hidden';
    const dropClassTwo = dropDownRotateTwo ? 'rotate-180' : 'rotate-0';

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
        ;
    }, [isInView, mainControls]);

    /**
     * Service box paragraph toggle
     */
    const toggleTextTwo = () => {
        setShowFullTextTwo(!showFullTextTwo);
        rotateDropdownTwo();
    };

    /**
     * Rotate down arrow icon according to mouse click
     */
    const rotateDropdownTwo = () => {
        setDropDownRotateTwo(!dropDownRotateTwo);
    };

    const reAnimate = () => {
        mainControls.set("hidden");
        mainControls.start("visible");
    }

    return (
        <div className="px-5 max-md:px-2" onMouseEnter={reAnimate}>
            <div className="w-full rounded-lg bg-gradient-to-b from-transparent to-primary_one-200 p-0.5">
                <div
                    className="bg-[linear-gradient(to_bottom,rgba(20,20,26,1),rgba(20,20,26,0.9)),url('../../public/assets/images/jpg/background-image-2.webp')] w-full bg-cover bg-no-repeat p-5 px-12 max-md:px-8 pb-10 rounded-lg">
                    <div className="py-3">
                        <svg version="1.1" ref={ref} width="150" height="150" id="web-development-service-svg-icon"
                             viewBox="0 0 209 173.6">
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.25
                                }}
                                d="M58,43.4H45.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1H58c1.7,0,3.1,1.4,3.1,3.1
	C61.1,42,59.7,43.4,58,43.4z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M48.7,52.7c0,1.7,1.4,3.1,3.1,3.1h12.4c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1H51.8
	C50.1,49.6,48.7,51,48.7,52.7z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M51.8,93h12.4c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1H51.8c-1.7,0-3.1,1.4-3.1,3.1
	C48.7,91.6,50.1,93,51.8,93z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M45.6,105.4H58c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1H45.6c-1.7,0-3.1,1.4-3.1,3.1
	C42.5,104,43.9,105.4,45.6,105.4z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M141.7,65.1c0,1.7-1.4,3.1-3.1,3.1H58c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h80.5
	C140.3,62,141.7,63.4,141.7,65.1z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M58,80.6h80.5c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1H58c-1.7,0-3.1,1.4-3.1,3.1
	C54.9,79.2,56.3,80.6,58,80.6z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M107.6,55.8h-31c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1h31c1.7,0,3.1,1.4,3.1,3.1
	C110.7,54.4,109.3,55.8,107.6,55.8z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M132.4,37.2h-62c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1h62c1.7,0,3.1-1.4,3.1-3.1
	C135.5,38.6,134.1,37.2,132.4,37.2z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 0.5
                                }}
                                d="M23.9,6.3h161.2c10.2,0,18.5,8.3,18.5,18.5V124c0,10.2-8.3,18.5-18.5,18.5h-55.8v18.6h9.3
	c1.7,0,3.1,1.4,3.1,3.1l0,0c0,1.7-1.4,3.1-3.1,3.1H70.4c-1.7,0-3.1-1.4-3.1-3.1l0,0c0-1.7,1.4-3.1,3.1-3.1h9.3v-18.6H23.9
	c-10.2,0-18.5-8.3-18.5-18.5V24.8C5.4,14.5,13.7,6.3,23.9,6.3z"/>
                            <motion.line
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 1
                                }}
                                x1="75.7" y1="142.5" x2="133.3" y2="142.5"
                            />
                            <motion.line
                                fill="none"
                                stroke="#EE3230"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        pathLength: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        pathLength: 1
                                    }
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{
                                    duration: 2,
                                    delay: 1
                                }}
                                x1="74.6" y1="161.1" x2="132.2" y2="161.1"
                            />
                        </svg>
                    </div>
                    <div className="py-3">
                        <h3 className="text-primary_one-50 font-semibold text-[30px] max-md:text-[26px]">Web
                            Development</h3>
                    </div>
                    <div className="py-3">
                        <p className={"text-[#dddddd] text-xl max-md:text-[1.05rem] leading-9 transition-all " + textClassTwo}>Our
                            emphasis is on clear milestones, effective client communication and timely
                            delivery. We make working with us as easy as ordering takeout. We utilize
                            the best modern technologies to develop a robust foundation on which your
                            online presence rests.</p>
                    </div>
                    <button
                        className="p-2 rounded-md border-2 border-primary_one-200 hover:border-primary_one-50 mt-7 cursor-pointer relative flex max-md:text-lg items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary_one-50 hover:text-primary_one-200 before:duration-500 before:ease-out hover:shadow-primary_one-200 hover:before:h-40 hover:before:w-40"
                        onClick={toggleTextTwo}>
                        <img className={dropClassTwo + " relative z-10"} style={{transition: "0.5s"}}
                             width={50} height={50} src="assets/icons/down-arrow-icon.svg"
                             alt="DOWN ARROW ICON"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WebDevelopmentService;
