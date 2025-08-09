import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
// Components
import PreloadImage from "../custom-classes/PreloadImage";
import BoxAnimationExpand from "../animation/BoxAnimationExpand";

const Sidebar = ({ layer, setLayer }: Props) => {
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
        <header className={"fixed z-30 top-0 left-0 bottom-0 w-auto max-lg:w-full max-lg:absolute max-lg:h-0 " + menuDeskVisible}>
            {/* Desktop header */}
            <BoxAnimationExpand customProps={{ delay: 1, extraDelay: true, direction: "left", directionType: "minus" }}>
                <div className="w-[60px] h-screen max-lg:hidden">
                    <div className="w-full h-full p-3">
                        <div className="relative z-10">
                            <a className="cursor-pointer" onClick={() => {
                                navigate("/theme-three");
                                setLayer({
                                    home: true,
                                    services: false,
                                    projects: false,
                                    about_us: false,
                                    contact_us: false,
                                });
                            }}>
                                <img className="w-[50px] h-auto object-cover cursor-pointer" src="assets/images/svg/qouda-single-logo.svg" alt="QOUDA" />
                            </a>
                        </div>
                        <div className="flex justify-center align-middle w-full h-full relative top-[-30px] bottom-0">
                            <div className="m-auto">
                                <div className="cursor-pointer pb-12 group" onClick={() => {
                                    setLayer({
                                        home: true,
                                        services: false,
                                        projects: false,
                                        about_us: false,
                                        contact_us: false,
                                    });
                                    window.location.hash = "home";
                                }}>
                                    <svg className="w-[26px] h-auto object-cover group-hover:scale-110 transition-all duration-700" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M5.91235 19.9614C5.91235 18.6646 5.91235 18.0163 6.31521 17.6134C6.71807 17.2105 7.36645 17.2105 8.66323 17.2105H10.0387C11.3354 17.2105 11.9838 17.2105 12.3867 17.6134C12.7895 18.0163 12.7895 18.6646 12.7895 19.9614V21.3368C12.7895 22.6336 12.7895 23.282 12.3867 23.6849C11.9838 24.0877 11.3354 24.0877 10.0387 24.0877C8.09351 24.0877 7.12092 24.0877 6.51664 23.4835C5.91235 22.8791 5.91235 21.9065 5.91235 19.9614Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M5.91235 10.0386C5.91235 8.09343 5.91235 7.12085 6.51664 6.51656C7.12092 5.91228 8.09351 5.91228 10.0387 5.91228C11.3354 5.91228 11.9838 5.91228 12.3867 6.31513C12.7895 6.718 12.7895 7.36638 12.7895 8.66315V10.0386C12.7895 11.3354 12.7895 11.9838 12.3867 12.3866C11.9838 12.7895 11.3354 12.7895 10.0387 12.7895H8.66323C7.36645 12.7895 6.71807 12.7895 6.31521 12.3866C5.91235 11.9838 5.91235 11.3354 5.91235 10.0386Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M17.2104 19.9614C17.2104 18.6646 17.2104 18.0163 17.6133 17.6134C18.0162 17.2105 18.6646 17.2105 19.9613 17.2105H21.3368C22.6335 17.2105 23.2819 17.2105 23.6848 17.6134C24.0876 18.0163 24.0876 18.6646 24.0876 19.9614C24.0876 21.9065 24.0876 22.8791 23.4834 23.4835C22.879 24.0877 21.9065 24.0877 19.9613 24.0877C18.6646 24.0877 18.0162 24.0877 17.6133 23.6849C17.2104 23.282 17.2104 22.6336 17.2104 21.3368V19.9614Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M17.2104 8.66315C17.2104 7.36638 17.2104 6.718 17.6133 6.31513C18.0162 5.91228 18.6646 5.91228 19.9613 5.91228C21.9065 5.91228 22.879 5.91228 23.4834 6.51656C24.0876 7.12085 24.0876 8.09343 24.0876 10.0386C24.0876 11.3354 24.0876 11.9838 23.6848 12.3866C23.2819 12.7895 22.6335 12.7895 21.3368 12.7895H19.9613C18.6646 12.7895 18.0162 12.7895 17.6133 12.3866C17.2104 11.9838 17.2104 11.3354 17.2104 10.0386V8.66315Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M28.9999 17.7018C28.9999 23.0277 28.9999 25.6909 27.3453 27.3454C25.6908 29 23.0277 29 17.7017 29" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M12.2982 29C6.9722 29 4.30919 29 2.65459 27.3454C1 25.6909 1 23.0277 1 17.7018" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M12.2982 1C6.9722 1 4.30919 1 2.65459 2.65459C1 4.30919 1 6.9722 1 12.2982" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M17.7017 1C23.0277 1 25.6908 1 27.3453 2.65459C28.9999 4.30919 28.9999 6.9722 28.9999 12.2982" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="cursor-pointer pb-12 group" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: true,
                                        projects: false,
                                        about_us: false,
                                        contact_us: false,
                                    });
                                    window.location.hash = "our-services";
                                }}>
                                    <svg className="w-[26px] h-auto object-cover group-hover:scale-110 transition-all duration-700" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M5 9.4C5 5.4402 5 3.4603 6.19249 2.23015C7.38499 1 9.30427 1 13.1429 1H15.8571C19.6957 1 21.615 1 22.8075 2.23015C24 3.4603 24 5.4402 24 9.4V20.6C24 24.5598 24 26.5396 22.8075 27.7698C21.615 29 19.6957 29 15.8571 29H13.1429C9.30427 29 7.38499 29 6.19249 27.7698C5 26.5396 5 24.5598 5 20.6V9.4Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M11 17H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M11 11H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M11 22H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M1 24V5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M29 24V5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="cursor-pointer pb-12 group" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: false,
                                        projects: true,
                                        about_us: false,
                                        contact_us: false,
                                    });
                                    window.location.hash = "our-projects";
                                }}>
                                    <svg className="w-[26px] h-auto object-cover group-hover:scale-110 transition-all duration-700" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M5.3193 9.52762C2.43976 8.33609 1 7.74033 1 7C1 6.25967 2.43976 5.6639 5.3193 4.47238L9.39159 2.7873C12.2711 1.59577 13.7108 1 15.5 1C17.2892 1 18.7289 1.59577 21.6084 2.7873L25.6807 4.47238C28.5603 5.6639 30 6.25967 30 7C30 7.74033 28.5603 8.33609 25.6807 9.52762L21.6084 11.2128C18.7289 12.4042 17.2892 13 15.5 13C13.7108 13 12.2711 12.4042 9.39159 11.2128L5.3193 9.52762Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M6.46089 10L5.3193 10.4409C2.43976 11.553 1 12.1091 1 12.8C1 13.4909 2.43976 14.047 5.3193 15.1591L9.39159 16.7319C12.2711 17.8439 13.7108 18.4 15.5 18.4C17.2892 18.4 18.7289 17.8439 21.6084 16.7319L25.6807 15.1591C28.5603 14.047 30 13.4909 30 12.8C30 12.1091 28.5603 11.553 25.6807 10.4409L24.5392 10M6.46089 15.6L5.3193 16.0409C2.43976 17.153 1 17.7091 1 18.4C1 19.0909 2.43976 19.647 5.3193 20.7591L9.39159 22.3319C12.2711 23.4439 13.7108 24 15.5 24C17.2892 24 18.7289 23.4439 21.6084 22.3319L25.6807 20.7591C28.5603 19.647 30 19.0909 30 18.4C30 17.7091 28.5603 17.153 25.6807 16.0409L24.5392 15.6" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="cursor-pointer pb-12 group" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: false,
                                        projects: false,
                                        about_us: true,
                                        contact_us: false,
                                    });
                                    window.location.hash = "about-us";
                                }}>
                                    <svg className="w-[26px] h-auto object-cover group-hover:scale-110 transition-all duration-700" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-primary transition-all duration-700" d="M16.8364 27.6778L17.5676 26.4425L15.8264 25.4119L15.0951 26.6473L16.8364 27.6778ZM11.4325 26.4425L12.1637 27.6778L13.9048 26.6473L13.1736 25.4119L11.4325 26.4425ZM15.0951 26.6473C14.8352 27.0865 14.1648 27.0865 13.9048 26.6473L12.1637 27.6778C13.2072 29.4407 15.7929 29.4407 16.8364 27.6778L15.0951 26.6473ZM12.4768 2.02326H16.5233V2.77934e-07H12.4768V2.02326ZM26.9768 12.4768V13.8256H29.0001V12.4768H26.9768ZM2.02326 13.8256V12.4768H2.77934e-07V13.8256H2.02326ZM2.77934e-07 13.8256C2.77934e-07 15.383 -0.000552791 16.6017 0.0665116 17.5846C0.13421 18.5766 0.274125 19.4023 0.590374 20.1657L2.45962 19.3915C2.2625 18.9156 2.14575 18.3359 2.08509 17.4468C2.02381 16.5488 2.02326 15.4106 2.02326 13.8256H2.77934e-07ZM8.83828 22.919C7.14489 22.8897 6.25758 22.7821 5.56207 22.4939L4.7878 24.3632C5.87358 24.8129 7.11025 24.9127 8.80342 24.9418L8.83828 22.919ZM0.590374 20.1657C1.37754 22.0661 2.88741 23.576 4.7878 24.3632L5.56207 22.4939C4.15742 21.912 3.04145 20.7962 2.45962 19.3915L0.590374 20.1657ZM26.9768 13.8256C26.9768 15.4106 26.9763 16.5488 26.915 17.4468C26.8543 18.3359 26.7375 18.9156 26.5405 19.3915L28.4097 20.1657C28.726 19.4023 28.8659 18.5766 28.9336 17.5846C29.0006 16.6017 29.0001 15.383 29.0001 13.8256H26.9768ZM20.1966 24.9418C21.8898 24.9127 23.1265 24.8129 24.2122 24.3632L23.438 22.4939C22.7425 22.7821 21.8551 22.8897 20.1618 22.919L20.1966 24.9418ZM26.5405 19.3915C25.9586 20.7962 24.8427 21.912 23.438 22.4939L24.2122 24.3632C26.1126 23.576 27.6225 22.0661 28.4097 20.1657L26.5405 19.3915ZM16.5233 2.02326C18.7505 2.02326 20.35 2.02433 21.5975 2.14294C22.8301 2.26013 23.6143 2.48487 24.2395 2.86801L25.2967 1.1429C24.3 0.532212 23.1696 0.260043 21.789 0.128774C20.4235 -0.00106536 18.7114 2.77934e-07 16.5233 2.77934e-07V2.02326ZM29.0001 12.4768C29.0001 10.2887 29.0011 8.5766 28.8713 7.21105C28.74 5.83044 28.4678 4.69997 27.8572 3.70342L26.132 4.76057C26.5152 5.3858 26.74 6.17006 26.8572 7.40256C26.9757 8.65011 26.9768 10.2495 26.9768 12.4768H29.0001ZM24.2395 2.86801C25.0109 3.3407 25.6594 3.98922 26.132 4.76057L27.8572 3.70342C27.2177 2.65983 26.3403 1.78241 25.2967 1.1429L24.2395 2.86801ZM12.4768 2.77934e-07C10.2887 2.77934e-07 8.5766 -0.00106536 7.21105 0.128774C5.83044 0.260043 4.69997 0.532212 3.70342 1.1429L4.76057 2.86801C5.3858 2.48487 6.17006 2.26013 7.40256 2.14294C8.65011 2.02433 10.2495 2.02326 12.4768 2.02326V2.77934e-07ZM2.02326 12.4768C2.02326 10.2495 2.02433 8.65011 2.14294 7.40256C2.26013 6.17006 2.48487 5.3858 2.86801 4.76057L1.1429 3.70342C0.532212 4.69997 0.260043 5.83044 0.128774 7.21105C-0.00106536 8.5766 2.77934e-07 10.2887 2.77934e-07 12.4768H2.02326ZM3.70342 1.1429C2.65983 1.78241 1.78241 2.65983 1.1429 3.70342L2.86801 4.76057C3.3407 3.98922 3.98922 3.3407 4.76057 2.86801L3.70342 1.1429ZM13.1736 25.4119C12.8998 24.9492 12.6594 24.5409 12.4257 24.2202C12.1794 23.8824 11.897 23.5783 11.5054 23.3505L10.4882 25.0995C10.5522 25.1366 10.6393 25.2044 10.7905 25.4119C10.9542 25.6366 11.1392 25.947 11.4325 26.4425L13.1736 25.4119ZM8.80342 24.9418C9.39569 24.9521 9.77083 24.9596 10.0568 24.9912C10.324 25.0209 10.4276 25.0642 10.4882 25.0995L11.5054 23.3505C11.1105 23.1207 10.6996 23.0267 10.2795 22.9802C9.87808 22.9358 9.39299 22.9285 8.83828 22.919L8.80342 24.9418ZM17.5676 26.4425C17.8608 25.947 18.0457 25.6366 18.2095 25.4119C18.3607 25.2044 18.4478 25.1366 18.5118 25.0995L17.4946 23.3505C17.103 23.5783 16.8206 23.8824 16.5744 24.2202C16.3407 24.5409 16.1003 24.9492 15.8264 25.4119L17.5676 26.4425ZM20.1618 22.919C19.607 22.9285 19.122 22.9358 18.7206 22.9802C18.3004 23.0267 17.8895 23.1207 17.4946 23.3505L18.5118 25.0995C18.5725 25.0642 18.676 25.0209 18.9433 24.9912C19.2292 24.9596 19.6043 24.9521 20.1966 24.9418L20.1618 22.919Z" fill="white" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M9.10449 10.44H19.8952" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M9.10449 15.1609H16.5231" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="cursor-pointer group" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: false,
                                        projects: false,
                                        about_us: false,
                                        contact_us: true,
                                    });
                                    window.location.hash = "contact-us";
                                }}>
                                    <svg className="w-[24px] h-auto object-cover group-hover:scale-110 transition-all duration-700" width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M1 11.4C1 6.49739 1 4.04609 2.56209 2.52304C4.1242 1 6.63835 1 11.6667 1H14.3333C19.3616 1 21.8759 1 23.4379 2.52304C25 4.04609 25 6.49739 25 11.4V16.6C25 21.5026 25 23.954 23.4379 25.4769C21.8759 27 19.3616 27 14.3333 27H11.6667C6.63835 27 4.1242 27 2.56209 25.4769C1 23.954 1 21.5026 1 16.6V11.4Z" stroke="white" strokeWidth="2" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M8 14H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M8 9H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path className="group-hover:stroke-primary transition-all duration-700" d="M8 18H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BoxAnimationExpand>
            {/* Mobile header */}
            <nav className="border-gray-200 px-4 lg:px-6 py-8 max-lg:py-4 bg-transparent">
                <div className="hidden max-lg:flex items-center mx-auto max-w-screen-xl">
                    <a onClick={() => {
                        navigate("/theme-three");
                    }} className="flex items-center mr-auto cursor-pointer">
                        <PreloadImage
                            width={130}
                            height={30}
                            className={"mr-3 w-auto h-6 sm:h-7"}
                            src="assets/images/png/main-logo.png"
                            alt="QOUDA LOGO"
                        />
                    </a>
                    <div className="max-lg:flex max-lg:flex-col justify-between items-center lg:w-auto max-lg:fixed max-lg:top-0 max-lg:left-[-100%] max-lg:z-20 ml-auto max-lg:bg-navy_blue max-lg:w-full max-lg:h-full max-lg:overflow-y-auto max-lg:transition-[all] max-lg:duration-300 max-lg:shadow-2xl"
                        style={{ left: menuVisible }}>
                        <div className="flex items-center w-full py-5 px-6 lg:hidden">
                            <a onClick={() => {
                                navigate("/theme-three");
                            }} className="flex items-center mr-auto cursor-pointer">
                                <PreloadImage
                                    width={155}
                                    height={24}
                                    className={"mr-3 w-auto h-6 max-lg:h-6"}
                                    src="assets/images/png/main-logo.png"
                                    alt="QOUDA LOGO"
                                />
                            </a>
                            <button className="navbar-close ml-auto p-2 rounded-full bg-white" onClick={hideMenu}>
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer stroke-navy_blue"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 max-lg:p-6 max-lg:w-full text-center">
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#home" onClick={() => {
                                    setLayer({
                                        home: true,
                                        services: false,
                                        projects: false,
                                        about_us: false,
                                        contact_us: false,
                                    });
                                    hideMenu();
                                }}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Home</a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#our-services" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: true,
                                        projects: false,
                                        about_us: false,
                                        contact_us: false,
                                    });
                                    hideMenu();
                                }}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Services</a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#our-projects" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: false,
                                        projects: true,
                                        about_us: false,
                                        contact_us: false,
                                    });
                                    hideMenu();
                                }}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Projects</a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#about-us" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: false,
                                        projects: false,
                                        about_us: true,
                                        contact_us: false,
                                    });
                                    hideMenu();
                                }}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">About</a>
                            </li>
                            <li className="max-lg:py-4 max-lg:px-4 rounded">
                                <a href="#contact-us" onClick={() => {
                                    setLayer({
                                        home: false,
                                        services: false,
                                        projects: false,
                                        about_us: false,
                                        contact_us: true,
                                    });
                                    hideMenu();
                                }}
                                    className="block py-2 pr-4 pl-3 lg:bg-transparent text-white font-medium uppercase text-lg lg:p-0 lg:hover:text-primary_one-200 transition-all" aria-current="page">Contact</a>
                            </li>
                        </ul>
                        <div className="mt-auto text-center p-6 lg:hidden w-full" style={{ background: "#31a0d2" }}>
                            <p className="text-white">Copyright 2023. Qouda.ca. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="lg:hidden" onClick={viewMenu}>
                        <button className="navbar-burger flex items-center p-3 bg-white rounded-full">
                            <svg className="block h-5 w-5 fill-navy_blue" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

interface Props {
    layer: any;
    setLayer: any;
}

export default Sidebar;
