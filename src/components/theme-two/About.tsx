
import Nav from "./Nav";
import useMouseMove from "../../config/useMouseMove";
import { useEffect, useState } from "react";
import TextAnimation from "../animation/TextAnimation";


function About({layer}: Props) {
  useMouseMove(); 
  const [visibleCss, setVisibleCss] = useState("block");
  useEffect(() => {
		if (layer?.about) {
				setVisibleCss("block");
		} else {
				setTimeout(() => {
						setVisibleCss("block");
				}, 0);
		}
  }, [layer]);

  return (  
    <div className={visibleCss } >
      <div className={"layers"} id="about-us">
        <div className="layers__container h-[100vh]">
          <div className="flex absolute inset-[0vw] bg-cover items-center justify-center bg-center layer-1" 
          style={{backgroundImage: "url('assets/bgimg/about2.jpg')"}}>
          </div>
          
          <div className="hidden md:block">
            <Nav />
          </div>
          
          <div className="flex absolute inset-[0vw] h-fit mt-24 xl:mt-36 bg-cover items-center justify-center bg-center layer-3">
            <div className="hero-content">
                <TextAnimation customProps={{ delay: 1, position: "top-to-bottom" }}>
                  <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 items-center">
                    <div className=""><img src="assets/images/svg/Line 2.svg" alt="" className="w-[150px] sm:w-[250px] md:w-[320px] lg:w-full h-full"/></div>
                      <h1 className=" text-[24px] sm:text-[33px] md:text-[36px] lg:text-[42px] font-extrabold text-white tracking-normal ">About</h1>
                    <div className=""><img src="assets/images/svg/Line 3.svg" alt="" className="w-[150px] sm:w-[250px] md:w-[320px] lg:w-full h-full"/></div>
                  </div>
                </TextAnimation>    
              <div className="flex flex-col ring-2 ring-opacity-50 ring-white px-4 py-2 bg-black bg-opacity-60 rounded-[35px] backdrop-filter mt-[48px]">
                <h1 className=" text-white capitalize text-[26px] sm:text-[32px] md:text-[38px] xl:text-[40px] mt-10 tracking-tight font-medium">
                  <TextAnimation customProps={{ delay: 1 }}>
                    Premier Web Services For Every Step Of 
                  </TextAnimation>
                  <TextAnimation customProps={{ delay: 1.2 }}>
                    <span className="text-[32px] sm:text-[38px] md:text-[42px] xl:text-[50px] font-extrabold">Your Journey</span> 
                  </TextAnimation>
                </h1>
                <div className="font-['Raleway'] text-[18px] sm:text-[24px] xl:text-[24px] my-10 xl:pt-4 capitalize font-normal tracking-normal text-white ">
                  <TextAnimation customProps={{ delay: 1.4 }}>
                    Formed to provide accessible web solutions in a rapidly evolving digital world.
                  </TextAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
interface Props {
  layer: any;
}

export default (About);
