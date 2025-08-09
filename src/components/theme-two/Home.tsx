import Nav from "./Nav";
import useMouseMove from "../../config/useMouseMove";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextAnimation from "../animation/TextAnimation";



const Home = ({ layer, setThemeThree }: Props) => {
	const [visibleCss, setVisibleCss] = useState("block");
	const navigate = useNavigate();
	useMouseMove(); 

	useEffect(() => {
    if (layer?.home) {
        setVisibleCss(" block");
    } else {
        setTimeout(() => {
            setVisibleCss("block");
        }, 0);
    }
}, [layer]);


  return (
    <div className={visibleCss } id="home">
      <div className="layers " >
        <div className="layers__container h-[100vh]">
          <div className="flex absolute inset-[0vw] bg-cover items-center justify-center bg-center layer-1" 
          style={{backgroundImage: "url('assets/bgimg/home2.jpg')"}}></div>
          
          <div className="hidden md:block">
            <Nav />
          </div>
          
          <div className="flex absolute inset-[0vw] h-fit mt-36 xl:mt-44 bg-cover items-center justify-center bg-center layer-3 ">
            <div className="hero-content">
              <TextAnimation customProps={{ delay: 1 }}>
                <h1 className="text-[42px] sm:text-[48px] md:text-[50px] lg:text-[64px] xl:text-[70px] font-black lg:font-extrabold leading-[52px] sm:leading-[64px] lg:tracking-[1px] text-white">USER CENTRIC WEBSITES THAT</h1>
              </TextAnimation>
              <TextAnimation customProps={{ delay: 1.2 }}>
                <div className=" text-[32px] sm:text-[38px] md:text-[42px] xl:text-[40px] font-normal lg:font-normal text-white mt-3 ">REFLECT YOUR BRAND</div>
              </TextAnimation>
              <TextAnimation customProps={{ delay: 1.4 }}>
                <div className="font-['Raleway'] mt-16 mb-10 text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px] capitalize font-bold tracking-normal text-white ">Your Imagination Expressed On Pixels</div>
              </TextAnimation>
              <button onClick={() => {
                setThemeThree(true);
                          setTimeout(() => {
                            navigate("/theme-three");
                          }, 1000);
                      }} className="button py-[16px] px-[32px] text-[14px] sm:py-[18px] sm:px-[36px] sm:text-[16px]">
                <TextAnimation customProps={{ delay: 1.6 }}>
                  GET CONVINCED
                </TextAnimation>
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
interface Props {
  layer: any;
  setLayer: any;
  setThemeThree: any;
}
export default Home;
