import { useNavigate } from "react-router";
import BoxAnimation from "../animation/BoxAnimation"
import { useEffect, useState } from "react";
import PreloadImage from "../custom-classes/PreloadImage";

function Navigation() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState("-100%");
  const [menuDeskVisible, setMenuDeskVisible] = useState("hidden");

  useEffect(() => {
      setMenuDeskVisible("block");
  }, []);

  /**
   * View menu handler
   * */
  const viewMenu = () => {
      setMenuVisible("0%");
  }

  /**
   * Hide menu handler
   * */
  const hideMenu = () => {
      setMenuVisible("-100%");
  }
  return (
    <>
      <div className='hidden md:flex justify-center pt-10 '>
        <ul className="flex justify-center items-center gap-10 lg:gap-20 tracking-wide text-[14px] lg:text-[16px] font-extrabold text-white uppercase">
        
          <li className="cursor-pointer hover:text-primary transition-all">
            <a href="/#about-us">
              <BoxAnimation customProps={{from: -75, delay: 1.2}}>
                About us
              </BoxAnimation>
            </a>
          </li>
          {/* <div className="text-white h-1 w-1 rounded-full bg-white animate-spin"></div> */}
          <li className="cursor-pointer hover:text-primary transition-all">
            <a href="/#our-services">
              <BoxAnimation customProps={{from: -75, delay: 1.4}}>
                Services
              </BoxAnimation>
            </a>
          </li>
          <li className="">
            <a href="/#home">
              <BoxAnimation customProps={{from: -75, delay: 0.8}}>
                <img src="assets/images/png/main-logo.png" alt="" className='h-5 lg:h-7' /> 
              </BoxAnimation>
            </a>
          </li>
          <li className="cursor-pointer hover:text-primary transition-all ">
            <a href="/#our-projects">
              <BoxAnimation customProps={{from: -75, delay: 1.6}}>
                Projects
              </BoxAnimation>
            </a>
          </li>
          
          <li className="cursor-pointer hover:text-primary transition-all">
            <a href="/#contact">
              <BoxAnimation customProps={{from: -75, delay: 1.8}}>
                Contact us
              </BoxAnimation>
            </a>
          </li>
          
        </ul>
      </div>
      <div  className={"absolute top-0 left-0 bottom-0 w-auto max-lg:w-full max-lg:absolute max-lg:h-0 " + menuDeskVisible}>
     
      <nav  className="border-gray-200 px-4 lg:px-6 py-8 max-lg:py-4 bg-transparent">
                <div className="hidden max-md:flex items-center mx-auto max-w-screen-xl">
                    <a href="/#home" className="flex items-center mr-auto cursor-pointer">
                      <BoxAnimation customProps={{from: -75, delay: .1}}>
                        <PreloadImage
                            width={130}
                            height={30}
                            className={"mr-3 w-auto h-6 sm:h-7"}
                            src="assets/images/png/main-logo.png"
                            alt="QOUDA LOGO"
                        />
                      </BoxAnimation>
                    </a>
                    <div className="max-lg:flex  max-lg:flex-col justify-between items-center lg:w-auto max-lg:fixed max-lg:top-0 max-lg:left-[-100%]  ml-auto max-lg:bg-[#28282B] max-lg:w-full max-lg:h-full max-lg:overflow-y-auto max-lg:transition-[all] max-lg:duration-300 max-lg:shadow-2xl"
                        style={{ left: menuVisible }}>
                        <div className="flex items-center w-full py-5 px-6 md:hidden">
                            <a href="/#home" className="flex items-center mr-auto cursor-pointer">
                              <BoxAnimation customProps={{from: -75, delay: .1}}>
                                <PreloadImage
                                    width={155}
                                    height={24}
                                    className={"mr-3 w-auto h-6 max-lg:h-6"}
                                    src="assets/images/png/main-logo.png"
                                    alt="QOUDA LOGO"
                                />
                              </BoxAnimation>
                            </a>
                            <button className="navbar-close ml-auto p-2 rounded-[15px] bg-white" onClick={hideMenu}>
                                <svg className="h-6 w-6 text-white cursor-pointer stroke-[#28282B] hover:stroke-primary_one-200 transition-all"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 max-lg:p-6 max-lg:w-full text-center">
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#home" onClick={() => {hideMenu();}}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">
                                      <BoxAnimation customProps={{from: -75, delay: .1}}>
                                        Home
                                      </BoxAnimation>
                                </a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#about-us" onClick={() => {hideMenu();}}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">
                                      <BoxAnimation customProps={{from: -75, delay: .2}}>
                                        About us
                                      </BoxAnimation>
                                </a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded ">
                                <a href="#our-services" onClick={() => {hideMenu();}}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">
                                      <BoxAnimation customProps={{from: -75, delay: .3}}>
                                        Services
                                      </BoxAnimation>
                                    </a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#our-projects" onClick={() => {hideMenu();}}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">
                                      <BoxAnimation customProps={{from: -75, delay: .4}}>
                                        Projects
                                      </BoxAnimation>
                                    </a>
                            </li>
                            
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#contact" onClick={() => {hideMenu();}}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">
                                      <BoxAnimation customProps={{from: -75, delay: .5}}>
                                        Contact us
                                      </BoxAnimation>
                                    </a>
                            </li>
                        </ul>
                        <div className="mt-auto text-center  lg:hidden w-full" style={{ background: "#31a0d2" }}>
                            
                        </div>
                    </div>
                    <div className="md:hidden" onClick={viewMenu}>
                      
                        <button className="navbar-burger flex items-center p-3  bg-white rounded-[15px]">
                            <svg className="block h-5 w-5 fill-[#28282B] hover:fill-primary_one-200 transition-all" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
      </div >
      
    </>
  )
}

export default Navigation
