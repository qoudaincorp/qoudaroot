import Nav from "./Nav";
import useMouseMove from "../../config/useMouseMove";
import serviceData from "../../config/serviceData";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import TextAnimation from "../animation/TextAnimation";

function Services({layer}:any) {
  const [visibleCss, setVisibleCss] = useState("block");
  useMouseMove(); 
  useEffect(() => {
		if (layer?.services) {
				setVisibleCss("block");
		} else {
				setTimeout(() => {
						setVisibleCss("block");
				}, 0);
		}
}, [layer]);

  return (
    
    <div className={visibleCss }>
      <div className="layers" id="our-services">
        <div className="layers__container h-[1050px]  md:h-[100vh] xl:h-[100vh]">
          <div className="flex absolute inset-[0vw] bg-cover items-center justify-center bg-center layer-1" 
          style={{backgroundImage: "url('assets/bgimg/services.jpg')"}}></div>
          
          <div className="hidden md:block">
            <Nav />
          </div>

          <div className="flex absolute inset-[0vw] h-fit mt-6 md:mt-20 bg-cover items-center justify-center bg-center layer-3">
            <div className="hero-content">
              <TextAnimation customProps={{ delay: 1, position: "top-to-bottom" }}>
                <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 items-center">
                  <div className=""><img src="assets/images/svg/Line 2.svg" alt="" className="w-[150px] sm:w-[250px] md:w-[320px] lg:w-full h-full"/></div>
                    <h1 className="text-[24px] sm:text-[33px] md:text-[36px] lg:text-[42px] font-extrabold text-white tracking-normal ">Services</h1>
                  <div className=""><img src="assets/images/svg/Line 3.svg" alt="" className="w-[150px] sm:w-[250px] md:w-[320px] lg:w-full h-full"/></div>
                </div>
              </TextAnimation>

              <div className="flex flex-col md:flex-row md:gap-6 items-center justify-center">
                {serviceData.map(item =>(
                <div key={item.id} className="h-auto pb-10 md:h-[480px] lg:h-[500px] w-[400px] md:w-[400px] lg:w-[500px] flex flex-col items-center justify-start p-[68px] ring-2 ring-opacity-50 ring-white px-4 py-2 bg-black bg-opacity-50 rounded-[35px] backdrop-filter mt-[36px] blur-effect">
                  <div className="w-[108px] h-[108px] flex  items-center justify-center mt-10">
                    <TextAnimation customProps={{ delay: 1 }}>
                      <img src={item.svg} alt="" />
                    </TextAnimation>
                  </div>
                  <TextAnimation customProps={{ delay: 1 }}>
                    <h1 className="text-[24px] sm:text-[26px] md:text-[28px] xl:text-[36px] text-white font-bold tracking-tight mt-5 lg:mt-10 capitalize font-['Raleway']">{item.serviceType}</h1>
                  </TextAnimation>
                  <TextAnimation customProps={{ delay: 1.4 }}>
                    <p className="font-normal text-[14px] lg:text-[16px] text-white normal-case tracking-wider font-['Raleway'] mt-5 lg:mt-10 px-5 leading-7">{item.serviceDescription}</p>
                  </TextAnimation>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Services.propTypes = {
  layer: PropTypes.shape({
    home: PropTypes.bool,
    services: PropTypes.bool,
    projects: PropTypes.bool,
    about: PropTypes.bool,
    contactus: PropTypes.bool,
  }).isRequired,
};

export default (Services)
