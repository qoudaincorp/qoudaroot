import React, {useState} from 'react';
import BoxAnimation from "../animation/BoxAnimation";
import PreloadImage from "../custom-classes/PreloadImage";

function Header() {
    const [menuVisible, setMenuVisible] = useState("-100%");

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
        <header>
            <BoxAnimation customProps={{from: -75, delay: 1}}>
                <nav className="border-gray-200 px-4 lg:px-6 py-8 max-md:py-5 bg-transparent">
                    <div className="flex items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center mr-auto">
                            <PreloadImage
                                width={130}
                                height={30}
                                className={"mr-3 w-auto h-6 sm:h-7"}
                                src="assets/images/png/main-logo.png"
                                alt="QOUDA LOGO"
                            />
                        </a>
                        <div className="max-md:flex max-md:flex-col justify-between items-center lg:w-auto max-md:fixed max-md:top-0 max-md:left-[-100%] max-md:z-20 ml-auto max-md:bg-primary_one-150 max-md:w-4/5 max-md:h-full max-md:overflow-y-auto max-md:transition-[all] max-md:duration-300 max-md:shadow-2xl"
                        style={{left: menuVisible}}>
                            <div className="flex items-center w-full py-5 px-6 md:hidden">
                                <a href="/" className="flex items-center mr-auto">
                                    <PreloadImage
                                        width={155}
                                        height={24}
                                        className={"mr-3 w-auto h-6 max-md:h-6"}
                                        src="assets/images/png/main-logo.png"
                                        alt="QOUDA LOGO"
                                    />
                                </a>
                                <button className="navbar-close ml-auto p-2 rounded max-md:hover:bg-primary_one-100" onClick={hideMenu}>
                                    <svg className="h-8 w-8 text-gray-400 cursor-pointer hover:text-gray-500"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className="flex flex-col font-medium md:flex-row lg:space-x-8 max-md:p-6 max-md:w-full">
                                <li className="max-md:py-4 max-md:px-4 rounded max-md:hover:bg-primary_one-100">
                                    <a href="#home" onClick={hideMenu}
                                       className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-sans font-medium uppercase lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Home</a>
                                </li>
                                <li className="max-md:py-4 max-md:px-4 rounded max-md:hover:bg-primary_one-100">
                                    <a href="#our-services" onClick={hideMenu}
                                       className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-sans font-medium uppercase lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Services</a>
                                </li>
                                <li className="max-md:py-4 max-md:px-4 rounded max-md:hover:bg-primary_one-100">
                                    <a href="#our-projects" onClick={hideMenu}
                                       className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-sans font-medium uppercase lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Projects</a>
                                </li>
                                <li className="max-md:py-4 max-md:px-4 rounded max-md:hover:bg-primary_one-100">
                                    <a href="#about-us" onClick={hideMenu}
                                       className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-sans font-medium uppercase lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">About</a>
                                </li>
                                <li className="max-md:py-4 max-md:px-4 rounded max-md:hover:bg-primary_one-100">
                                    <a href="#contact-us" onClick={hideMenu}
                                       className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-sans font-medium uppercase lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Contact</a>
                                </li>
                            </ul>
                            <div className="mt-auto text-center p-6 md:hidden">
                                <p className="text-primary_one-250">Copyright 2023. Qouda.ca. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="md:hidden" onClick={viewMenu}>
                            <button className="navbar-burger flex items-center p-3">
                                <svg className="block h-6 w-6 fill-primary_one-50" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </BoxAnimation>
        </header>
    );
}

export default Header;
