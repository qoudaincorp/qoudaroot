import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PreloadImage from "../custom-classes/PreloadImage";

function Header() {
    const navigate = useNavigate();
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
            <nav className="border-gray-200 px-4 lg:px-6 py-8 max-md:py-5 bg-transparent absolute top-0 left-0 right-0">
                <div className="flex items-center mx-auto max-w-screen-xl">
                    <a onClick={() => {
                        navigate("/theme-two");
                    }} className="flex items-center mr-auto md:hidden cursor-pointer">
                        <PreloadImage
                            width={200}
                            height={60}
                            className={"mr-3 w-auto h-10 max-md:h-7"}
                            src="assets/images/png/main-logo.png"
                            alt="QOUDA LOGO"
                        />
                    </a>
                    <div
                        className="max-md:flex max-md:flex-col justify-center items-center lg:w-auto max-md:fixed max-md:top-0 max-md:left-[-100%] max-md:z-20 ml-auto mr-auto max-md:bg-primary-150 max-md:w-4/5 max-md:h-full max-md:overflow-y-auto max-md:transition-[all] max-md:duration-300 max-md:shadow-2xl max-md:bg-white"
                        style={{ left: menuVisible }}>
                        <div className="flex items-center w-full py-5 px-6 md:hidden max-md:pb-0">
                            <a onClick={() => {
                                navigate("/theme-two");
                            }} className="flex items-center mr-auto cursor-pointer">
                                <PreloadImage
                                    width={155}
                                    height={24}
                                    className={"mr-3 w-auto h-6 max-md:h-6"}
                                    src="assets/images/png/main-logo-dark.png"
                                    alt="QOUDA LOGO"
                                />
                            </a>
                            <button className="navbar-close ml-auto p-2 rounded max-md:hover:bg-primary-100"
                                onClick={hideMenu}>
                                <svg className="h-8 w-8 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex items-center max-md:items-start flex-col font-medium md:flex-row lg:space-x-8 max-md:p-6 max-md:w-full">
                            <li className="max-md:py-4 max-md:w-full px-8 max-lg:px-4 max-md:pl-2 rounded max-md:hover:bg-primary-100">
                                <a href="#our-services" onClick={hideMenu}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white max-md:text-secondary font-sans font-semibold tracking-wider uppercase lg:p-0 lg:hover:text-primary transition-all"
                                    aria-current="page">Services</a>
                            </li>
                            <li className="max-md:py-4 max-md:w-full px-8 max-lg:px-4 max-md:pl-2 rounded max-md:hover:bg-primary-100">
                                <a href="#our-projects" onClick={hideMenu}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white max-md:text-secondary font-sans font-semibold tracking-wider uppercase lg:p-0 lg:hover:text-primary transition-all"
                                    aria-current="page">Projects</a>
                            </li>
                            <li className="max-md:py-4 max-md:px-4 rounded max-md:hover:bg-primary-100 max-md:hidden px-5">
                                <a onClick={() => {
                                    navigate("/theme-two");
                                }} className="flex items-center mr-auto cursor-pointer">
                                    <PreloadImage
                                        width={200}
                                        height={60}
                                        className={"mr-3 w-auto h-8 max-md:h-6"}
                                        src="assets/images/png/main-logo.png"
                                        alt="QOUDA LOGO"
                                    />
                                </a>
                            </li>
                            <li className="max-md:py-4 max-md:w-full px-8 max-lg:px-4 max-md:pl-2 rounded max-md:hover:bg-primary-100">
                                <a href="#about-us" onClick={hideMenu}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white max-md:text-secondary font-sans font-semibold tracking-wider uppercase lg:p-0 lg:hover:text-primary transition-all"
                                    aria-current="page">About</a>
                            </li>
                            <li className="max-md:py-4 max-md:w-full px-8 max-lg:px-4 max-md:pl-2 rounded max-md:hover:bg-primary-100">
                                <a href="#contact" onClick={hideMenu}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white max-md:text-secondary font-sans font-semibold tracking-wider uppercase lg:p-0 lg:hover:text-primary transition-all"
                                    aria-current="page">Contact</a>
                            </li>
                        </ul>
                        <div className="mt-auto text-center p-6 md:hidden">
                            <p className="text-secondary font-medium">Copyright 2023. Qouda.ca. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="md:hidden" onClick={viewMenu}>
                        <button className="navbar-burger flex items-center p-3">
                            <svg className="block h-6 w-6 fill-white" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
