import { useEffect, useRef, useState } from "react";
import useMouseMove from "../../config/useMouseMove";
import {motion} from 'framer-motion';

import Nav from "./Nav";
import { projects } from "../../config/projects";

import { FaArrowRight , FaArrowLeft  } from "react-icons/fa6";
import TextAnimation from "../animation/TextAnimation";
import BoxAnimation from "../animation/BoxAnimation";
import BoxAnimationPro from "../animation/BoxAnimation-pro";

function Projects({layer}:Props) {
  const [positionIndex, setPositionIndex] = useState(Array.from({ length: projects.length }, (_, index) => index));
  const [visibleCss, setVisibleCss] = useState("block");
  useMouseMove();

  useEffect(() => {
		if (layer?.projects) {
				setVisibleCss("block");
		} else {
				setTimeout(() => {
						setVisibleCss("block");
				}, 0);
		}
  }, [layer]);

  const handleNext = () =>{
    setPositionIndex((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % projects.length)
      return updateIndexes;
    })
  };

  const handlePrevious = () => {
  setPositionIndex((prevIndexes) => {
    const updateIndexes = prevIndexes.map((prevIndex) => {
      let newIndex = prevIndex - 1;
      newIndex = newIndex < 0 ? projects.length - 1 : newIndex;
      return newIndex;
    });
    return updateIndexes;
  });
};

  const positions = [
    'center',
    'left1',
    'left',
    'right',
    // 'right2',
    'right1',
  ]

  const imageVariants = {
    right1 : {x : '60%', scale: 0.9, zIndex:2},
    right : {x : '110%', scale: 0.8, zIndex:1},
    center : {x : '0%', scale: 1, zIndex:10 },
    left : {x : '-110%', scale: 0.8, zIndex:1},
    left1 : {x : '-60%', scale: 0.9, zIndex:2 },
    // right2 : {x : '110%', scale: 0.8, zIndex:1},
  }
  const carousel = useRef<HTMLDivElement | null>(null);

  return (
      <div className={visibleCss }>
        <div className="layers" id="our-projects">
          <div className="layers__container h-[115vh]">
            <div className="flex absolute inset-[0vw] bg-cover items-center justify-center bg-center layer-1 " 
            style={{backgroundImage: "url('assets/bgimg/projects.jpg')"}}></div>
            
            <div className="hidden md:block">
            <Nav />
          </div>

            <div className="flex flex-col absolute inset-[0vw] h-fit mt-16 bg-cover items-center justify-center bg-center layer-3">
              <div className="hero-content">
                <TextAnimation customProps={{ delay: 1, position: "top-to-bottom" }}>
                  <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 items-center">
                    <div className=""><img src="assets/images/svg/Line 2.svg" alt="" className="w-[150px] sm:w-[250px] md:w-[320px] lg:w-full h-full"/></div>
                      <h1 className="text-[28px] sm:text-[33px] md:text-[36px] lg:text-[42px] font-extrabold text-white tracking-normal ">Projects</h1>
                    <div className=""><img src="assets/images/svg/Line 3.svg" alt="" className="w-[150px] sm:w-[250px] md:w-[320px] lg:w-full h-full"/></div>
                  </div>   
                </TextAnimation>          
              </div>
              <BoxAnimationPro customProps={{ delay: 1.2}}>
                <motion.div className="flex items-center flex-col justify-center h-screen -mt-12 " ref={carousel}>
                  {projects.map((image, index) => (
                    <motion.div 
                      key={index}
                      style={{backgroundImage: `url(${image.thumbnail})`}}
                      className = "absolute projectbg rounded-[15px] bg-cover px-4 md:px-0 w-[400px] h-[590px] md:h-[550px] text-transparent hover:text-white "
                      initial = "center"
                      animate = {positions[positionIndex[index]]}
                      variants={imageVariants}
                      transition={{duration:0.5}}>
                      
                      <div className="p-6 text-[24px] font-extrabold w-full h-full">
                        <div className="flex flex-row justify-between">
                          <div className="">{image.id}</div>
                          <div>{image.views}</div>
                        </div>
                        <div className="flex flex-row justify-between h-full items-end pb-10">
                          <div className="capitalize font-extrabold mb-1">  
                            {image.title}
                          </div>
                          <div>
                            <a href={image.link} target="_blank" rel="noreferrer">
                              <button className="px-8 py-3 rounded-[10px] text-white transition-all button">
                                <FaArrowRight />
                              </button> 
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="z-50 w-screen flex flex-row justify-between items-center lg:absolute lg:w-full lg:bottom-0 lg:justify-center text-white">
                    <div className="" onClick={handlePrevious}>
                      <FaArrowLeft className=" h-12 w-12 cursor-pointer rounded-full bg-white  text-black p-2.5 hover:text-white hover:bg-black transition-all lg:mr-4 shadow"/>
                    </div>
                    <div className="" onClick={handleNext}>
                      <FaArrowRight className=" h-12 w-12 cursor-pointer rounded-full bg-white  text-black p-2.5 hover:text-white hover:bg-black transition-all shadow"/>
                    </div>
                  </div>
                </motion.div>
              </BoxAnimationPro>
            </div>
          </div>
        </div>
      </div>
  )
}
interface Props {
  layer: any;
}

export default (Projects)
