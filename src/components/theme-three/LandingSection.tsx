import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxAnimationExpand from "../animation/BoxAnimationExpand";

const LandingSection = ({ layer, setLayer, setThemeOne }: Props) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const mobileView = windowSize.current[0] > 1024 ? false : true;
    const [visibleCss, setVisibleCss] = useState<string>("hidden");
    const navigate = useNavigate();

    /**
     * Visible and hide the landing section according to layer property
    */
    useEffect(() => {
        if (layer?.home) {
            setVisibleCss("z-10 slide-scroll-animation flex");
        } else {
            setTimeout(() => {
                setVisibleCss("hidden");
            }, 1450);
        }
    }, [layer]);

    return (
        <div className={"container min-w-full mx-auto w-100 flex items-center justify-center h-screen fixed max-lg:relative left-0 bottom-0 right-0 bg-light_blue " + visibleCss}>
            <div className="w-full h-screen">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen">
                    <div className="mx-auto my-auto pl-24 pr-6 max-lg:pl-6 h-full max-lg:pt-28 max-lg:pb-20 max-lg:text-center flex items-center justify-center" style={{
                        backgroundImage: "url('assets/images/svg/qouda-background-letter.svg')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "90%"
                    }}>
                        <div className="w-full h-auto">
                            <BoxAnimationExpand customProps={{ delay: 0.5, extraDelay: true }}>
                                <h1 className="text-primary_one-50 font-poppins text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] uppercase leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px]" style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                    User Centric Websites That Reflect Your Brand
                                </h1>
                            </BoxAnimationExpand>
                            <BoxAnimationExpand customProps={{ delay: 1, extraDelay: true }}>
                                <p className="my-4 text-primary_one-50 text-[35px] max-lg:text-[25px]" style={{ textShadow: "2px 3px 1px rgba(0, 0, 0, 0.2)" }}>Your Imagination Expressed On
                                    Pixels</p>
                            </BoxAnimationExpand>
                            <BoxAnimationExpand customProps={{ delay: 1.5, extraDelay: true }}>
                                <div className="py-6 max-lg:flex max-lg:justify-center">
                                    <button onClick={() => {
                                        setThemeOne(true);
                                        setTimeout(() => {
                                            navigate("/");
                                        }, 2500);
                                    }}
                                        className="w-[250px] max-lg:w-[200px] z-0 p-5 px-7 max-lg:px-5 max-lg:p-4 cursor-pointer relative flex uppercase rounded-lg bg-primary_one-200 text-primary_one-50 font-bold text-xl max-lg:text-lg items-center justify-center overflow-hidden transition-all duration-700 before:absolute before:h-full before:w-full before:top-[-100px] hover:before:top-[0px] before:bg-primary_one-50 hover:text-primary_one-200 before:transition-all before:duration-700">
                                        <span className="relative z-0">Get Convinced</span>
                                    </button>
                                </div>
                            </BoxAnimationExpand>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen">
                            <BoxAnimationExpand customProps={{ delay: 0.9, extraDelay: true }}>
                                <div className="w-full h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
                                    <div style={{ textAlign: "center" }}>
                                        <img width={180} height={200} className="w-[150px] h-auto mb-5 mx-auto" src="assets/images/gif/theme-three-our-services-img.gif" alt="OUR SERVICES" />
                                        <h1 className="font-semibold text-[30px] text-white">Our Services</h1>
                                        <button
                                            onClick={() => {
                                                setLayer({
                                                    home: false,
                                                    services: true,
                                                    projects: false,
                                                    about_us: false,
                                                    contact_us: false,
                                                });
                                                window.location.hash = "our-services";
                                            }}
                                            className="p-2 group mx-auto rounded-md border-2 border-white hover:bg-white mt-4 cursor-pointer relative flex max-lg:text-lg items-center justify-center overflow-hidden shadow-2xl transition-all">
                                            <svg style={{ rotate: "-90deg" }} width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-white group-hover:fill-primary transition-all" d="M26.5833 39.0895L26.5833 12.0833C26.5833 11.3986 26.8149 10.8246 27.2781 10.3614C27.7413 9.89822 28.3153 9.66663 29 9.66663C29.6847 9.66663 30.2587 9.89822 30.7219 10.3614C31.1851 10.8246 31.4167 11.3986 31.4167 12.0833L31.4167 39.0895L43.2583 27.2479C43.7417 26.7645 44.3056 26.5329 44.95 26.5531C45.5944 26.5732 46.1583 26.825 46.6417 27.3083C47.0847 27.7916 47.3163 28.3555 47.3365 29C47.3566 29.6444 47.125 30.2083 46.6417 30.6916L30.6917 46.6416C30.45 46.8833 30.1882 47.0545 29.9063 47.1552C29.6243 47.2559 29.3222 47.3062 29 47.3062C28.6778 47.3062 28.3757 47.2559 28.0938 47.1552C27.8118 47.0545 27.55 46.8833 27.3083 46.6416L11.3583 30.6916C10.9153 30.2486 10.6937 29.6948 10.6937 29.0302C10.6937 28.3656 10.9153 27.7916 11.3583 27.3083C11.8417 26.825 12.4156 26.5833 13.0802 26.5833C13.7448 26.5833 14.3187 26.825 14.8021 27.3083L26.5833 39.0895Z" fill="#EE302E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </BoxAnimationExpand>
                            <BoxAnimationExpand customProps={{ delay: 1.4, extraDelay: true }}>
                                <div className="w-full h-[50vh] flex items-center justify-center overflow-hidden bg-light_blue">
                                    <div style={{ textAlign: "center" }}>
                                        <img width={180} height={200} className="w-[150px] h-auto mb-5 mx-auto" src="assets/images/gif/theme-three-our-projects-img.gif" alt="OUR SERVICES" />
                                        <h1 className="font-semibold text-[30px] text-white">Our Projects</h1>
                                        <button
                                            onClick={() => {
                                                setLayer({
                                                    home: false,
                                                    services: false,
                                                    projects: true,
                                                    about_us: false,
                                                    contact_us: false,
                                                });
                                                window.location.hash = "our-projects";
                                            }}
                                            className="p-2 group mx-auto rounded-md border-2 border-white hover:bg-white mt-4 cursor-pointer relative flex max-lg:text-lg items-center justify-center overflow-hidden shadow-2xl transition-all">
                                            <svg style={{ rotate: "-90deg" }} width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-white group-hover:fill-primary transition-all" d="M26.5833 39.0895L26.5833 12.0833C26.5833 11.3986 26.8149 10.8246 27.2781 10.3614C27.7413 9.89822 28.3153 9.66663 29 9.66663C29.6847 9.66663 30.2587 9.89822 30.7219 10.3614C31.1851 10.8246 31.4167 11.3986 31.4167 12.0833L31.4167 39.0895L43.2583 27.2479C43.7417 26.7645 44.3056 26.5329 44.95 26.5531C45.5944 26.5732 46.1583 26.825 46.6417 27.3083C47.0847 27.7916 47.3163 28.3555 47.3365 29C47.3566 29.6444 47.125 30.2083 46.6417 30.6916L30.6917 46.6416C30.45 46.8833 30.1882 47.0545 29.9063 47.1552C29.6243 47.2559 29.3222 47.3062 29 47.3062C28.6778 47.3062 28.3757 47.2559 28.0938 47.1552C27.8118 47.0545 27.55 46.8833 27.3083 46.6416L11.3583 30.6916C10.9153 30.2486 10.6937 29.6948 10.6937 29.0302C10.6937 28.3656 10.9153 27.7916 11.3583 27.3083C11.8417 26.825 12.4156 26.5833 13.0802 26.5833C13.7448 26.5833 14.3187 26.825 14.8021 27.3083L26.5833 39.0895Z" fill="#EE302E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </BoxAnimationExpand>
                            <BoxAnimationExpand customProps={{ delay: 1.9, extraDelay: true }}>
                                <div style={{ boxShadow: "inset 0 0px 30px 0px rgba(0, 0, 0, 0.1)" }} className="w-full h-[50vh] flex items-center justify-center overflow-hidden bg-light_blue max-lg:bg-secondary max-lg:shadow-none">
                                    <div style={{ textAlign: "center" }}>
                                        <img width={220} height={240} className="w-[170px] h-auto mb-5 mx-auto" src={mobileView ? "assets/images/gif/theme-three-about-us-img-mobile.gif" : "assets/images/gif/theme-three-about-us-img.gif"} alt="OUR SERVICES" />
                                        <h1 className="font-semibold text-[30px] text-white">About Us</h1>
                                        <button
                                            onClick={() => {
                                                setLayer({
                                                    home: false,
                                                    services: false,
                                                    projects: false,
                                                    about_us: true,
                                                    contact_us: false,
                                                });
                                                window.location.hash = "about-us";
                                            }}
                                            className="p-2 group mx-auto rounded-md border-2 border-white hover:bg-white mt-4 cursor-pointer relative flex max-lg:text-lg items-center justify-center overflow-hidden shadow-2xl transition-all">
                                            <svg style={{ rotate: "-90deg" }} width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-white group-hover:fill-primary transition-all" d="M26.5833 39.0895L26.5833 12.0833C26.5833 11.3986 26.8149 10.8246 27.2781 10.3614C27.7413 9.89822 28.3153 9.66663 29 9.66663C29.6847 9.66663 30.2587 9.89822 30.7219 10.3614C31.1851 10.8246 31.4167 11.3986 31.4167 12.0833L31.4167 39.0895L43.2583 27.2479C43.7417 26.7645 44.3056 26.5329 44.95 26.5531C45.5944 26.5732 46.1583 26.825 46.6417 27.3083C47.0847 27.7916 47.3163 28.3555 47.3365 29C47.3566 29.6444 47.125 30.2083 46.6417 30.6916L30.6917 46.6416C30.45 46.8833 30.1882 47.0545 29.9063 47.1552C29.6243 47.2559 29.3222 47.3062 29 47.3062C28.6778 47.3062 28.3757 47.2559 28.0938 47.1552C27.8118 47.0545 27.55 46.8833 27.3083 46.6416L11.3583 30.6916C10.9153 30.2486 10.6937 29.6948 10.6937 29.0302C10.6937 28.3656 10.9153 27.7916 11.3583 27.3083C11.8417 26.825 12.4156 26.5833 13.0802 26.5833C13.7448 26.5833 14.3187 26.825 14.8021 27.3083L26.5833 39.0895Z" fill="#EE302E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </BoxAnimationExpand>
                            <BoxAnimationExpand customProps={{ delay: 2.4, extraDelay: true }}>
                                <div className="w-full h-[50vh] flex items-center justify-center bg-secondary max-lg:bg-light_blue overflow-hidden">
                                    <div style={{ textAlign: "center" }}>
                                        <img width={180} height={200} className="w-[150px] h-auto mb-5 mx-auto" src={mobileView ? "assets/images/gif/theme-three-contact-is-img-mobile.gif" : "assets/images/gif/theme-three-contact-is-img.gif"} alt="OUR SERVICES" />
                                        <h1 className="font-semibold text-[30px] text-white">Contact Us</h1>
                                        <button
                                            onClick={() => {
                                                setLayer({
                                                    home: false,
                                                    services: false,
                                                    projects: false,
                                                    about_us: false,
                                                    contact_us: true,
                                                });
                                                window.location.hash = "contact-us";
                                            }}
                                            className="p-2 group mx-auto rounded-md border-2 border-white hover:bg-white mt-4 cursor-pointer relative flex max-lg:text-lg items-center justify-center overflow-hidden shadow-2xl transition-all">
                                            <svg style={{ rotate: "-90deg" }} width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-white group-hover:fill-primary transition-all" d="M26.5833 39.0895L26.5833 12.0833C26.5833 11.3986 26.8149 10.8246 27.2781 10.3614C27.7413 9.89822 28.3153 9.66663 29 9.66663C29.6847 9.66663 30.2587 9.89822 30.7219 10.3614C31.1851 10.8246 31.4167 11.3986 31.4167 12.0833L31.4167 39.0895L43.2583 27.2479C43.7417 26.7645 44.3056 26.5329 44.95 26.5531C45.5944 26.5732 46.1583 26.825 46.6417 27.3083C47.0847 27.7916 47.3163 28.3555 47.3365 29C47.3566 29.6444 47.125 30.2083 46.6417 30.6916L30.6917 46.6416C30.45 46.8833 30.1882 47.0545 29.9063 47.1552C29.6243 47.2559 29.3222 47.3062 29 47.3062C28.6778 47.3062 28.3757 47.2559 28.0938 47.1552C27.8118 47.0545 27.55 46.8833 27.3083 46.6416L11.3583 30.6916C10.9153 30.2486 10.6937 29.6948 10.6937 29.0302C10.6937 28.3656 10.9153 27.7916 11.3583 27.3083C11.8417 26.825 12.4156 26.5833 13.0802 26.5833C13.7448 26.5833 14.3187 26.825 14.8021 27.3083L26.5833 39.0895Z" fill="#EE302E" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </BoxAnimationExpand>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface Props {
    layer: any;
    setLayer: any;
    setThemeOne: any;
}

export default LandingSection;
