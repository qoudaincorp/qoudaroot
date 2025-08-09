import {motion, useAnimation, useInView} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";

function WebDesignService() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    const [showFullText, setShowFullText] = useState(false);
    const [dropDownRotate, setDropDownRotate] = useState(false);
    const textClass = showFullText ? 'block' : 'line-clamp-4 overflow-hidden';
    const dropClass = dropDownRotate ? 'rotate-180' : 'rotate-0';

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        };
    }, [isInView, mainControls]);

    /**
     * Service box paragraph toggle
     */
    const toggleText = () => {
        setShowFullText(!showFullText);
        rotateDropdown();
    };

    /**
     * Rotate down arrow icon according to mouse click
     */
    const rotateDropdown = () => {
        setDropDownRotate(!dropDownRotate);
    };

    const reAnimate = () => {
        mainControls.set("hidden");
        mainControls.start("visible");
    }

    return (
        <div className="px-5 max-md:px-2" onMouseEnter={reAnimate}>
            <div className="w-full rounded-lg bg-gradient-to-b from-primary_one-200 to-transparent p-0.5">
                <div
                    className="bg-[linear-gradient(to_top,rgba(20,20,26,1),rgba(20,20,26,0.9)),url('../../public/assets/images/jpg/background-image-1.webp')] w-full bg-cover bg-no-repeat p-5 px-12 max-md:px-8 pb-10 rounded-lg">
                    <div className="py-3">
                        <svg ref={ref} width="150" height="150" version="1.1" id="web-design-service-svg-icon"
                             viewBox="0 0 209 173.6">
                            <motion.path
                                fill="none"
                                stroke="#EE302E"
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
                                className="st0" d="M157.4,51c1.4,3.8,4.9,6.5,9.2,6.5c6.1,0,10.9-5.6,9.6-11.9c-0.8-3.7-3.8-6.7-7.6-7.5c-5.1-1-9.6,2-11.2,6.3
	h-39.8v-3.4c0-1.7-1.4-3.1-3.1-3.1H94.6c-1.7,0-3.1,1.4-3.1,3.1v3.4H51.6c-1.6-4.4-6.1-7.3-11.2-6.3c-3.7,0.7-6.8,3.7-7.6,7.5
	c-1.3,6.3,3.5,11.9,9.6,11.9c4.3,0,7.9-2.7,9.2-6.5h19.9h19.9v1.5c-28.7,5.9-50.6,30.4-52.2,60.4c-0.1,1.9,1.4,3.5,3.3,3.5
	c1.7,0,3.2-1.3,3.2-3c1.4-26.5,20.5-48.4,45.6-54.1v1.8c0,1.7,1.4,3.1,3.1,3.1h19.8c1.7,0,3.1-1.4,3.1-3.1v-1.8
	c25.2,5.7,44.3,27.6,45.6,54.1c0.1,1.7,1.5,3.1,3.2,3.1c1.9,0,3.4-1.6,3.3-3.5c-1.6-30-23.5-54.5-52.2-60.4V51H157.4z"/>
                            <motion.path
                                fill="none"
                                stroke="#EE302E"
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
                                className="st1" d="M165.5,5.5h20.1c10.5,0,18.9,8.5,18.9,18.9v99.7c0,10.5-8.5,18.9-18.9,18.9h-56.1v18.8h9.2
	c1.7,0,3.1,1.4,3.1,3.1v0c0,1.7-1.4,3.1-3.1,3.1H70.1c-1.7,0-3.1-1.4-3.1-3.1v0c0-1.7,1.4-3.1,3.1-3.1h9.4v-18.8H23.4
	c-10.5,0-18.9-8.5-18.9-18.9V24.5C4.4,14,12.9,5.5,23.4,5.5h143.7"/>
                            <motion.line
                                fill="none"
                                stroke="#EE3332"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                x1="74.6"
                                y1="143.1"
                                x2="134.4"
                                y2="143.1"
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
                            />
                            <motion.line
                                fill="none"
                                stroke="#EE3332"
                                strokeWidth={4}
                                strokeMiterlimit={10}
                                x1="74.6"
                                y1="161.9"
                                x2="134.4"
                                y2="161.9"
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
                                    delay: 1.5
                                }}
                            />
                        </svg>
                    </div>
                    <div className="py-3">
                        <h3 className="text-primary_one-50 font-semibold text-[30px] max-md:text-[26px]">Web
                            Design</h3>
                    </div>
                    <div className="py-3">
                        <p className={"text-[#dddddd] text-xl max-md:text-[1.05rem] leading-9 transition-all " + textClass}>We
                            push the limits of the current industry standards to create an online
                            presence by curating websites that convey your brands message. We make your
                            website look like it belongs on the wall of a gallery by crafting each
                            detail in alignment with your brands ethos to create an aesthetic online
                            persona.</p>
                    </div>
                    <button
                        className="p-2 rounded-md border-2 border-primary_one-200 hover:border-primary_one-50 mt-7 cursor-pointer relative flex max-md:text-lg items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary_one-50 hover:text-primary_one-200 before:duration-500 before:ease-out hover:shadow-primary_one-200 hover:before:h-40 hover:before:w-40"
                        onClick={toggleText}>
                        <img className={dropClass + " relative z-10"} style={{transition: "0.5s"}}
                             width={50} height={50} src="assets/icons/down-arrow-icon.svg"
                             alt="DOWN ARROW ICON"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WebDesignService;
