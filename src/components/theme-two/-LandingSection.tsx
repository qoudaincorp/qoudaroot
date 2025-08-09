import { useNavigate } from "react-router-dom";

const LandingSection = ({ setThemeThree }: any) => {
    const navigate = useNavigate();

    /**
     * Video play handler
     * @param e
     * */
    function playVideo(e: any) {
        e.target.play();
        e.target.classList.remove("fading-lnd");
        setTimeout(() => {
            e.target.classList.add("fading-lnd");
        }, (e.target.duration / e.target.playbackRate - 1) * 1000)
    }

    return (
        <div className="video-container transition-all duration-1000 max-w-screen-xxl mx-auto flex items-center justify-center h-screen bg-no-repeat bg-cover"
            id="home"
            style={{
                background: "rgba(0, 0, 0, 0.5)",
            }}>
            <video
                playsInline={true}
                onLoadedMetadata={(e: any) => {
                    e.target.muted = true;
                }}
                onCanPlay={playVideo}
                onEnded={playVideo}
                className="video-parallax w-full h-screen object-cover absolute top-0 left-0 z-[-1]" autoPlay loop muted poster="assets/images/png/landing-section-video-thumbnail.png">
                <source src="assets/videos/background-video-1.mp4" type="video/mp4" />
            </video>
            <div className="text-center px-10 max-md:px-5 mt-8 max-md:mt-0">
                <h1 className="text-white text-[80px] max-md:text-[50px] max-sm:text-[40px] font-[700] uppercase leading-[90px] max-md:leading-[60px] max-sm:leading-[55px]">
                    User Centric <span className="font-[400]">Websites</span> That<br /> <span className="font-[400]">Reflect</span> Your Brand
                </h1>
                <p className="my-4 text-white text-[35px] max-md:text-[25px]">Your Imagination Expressed On
                    Pixels</p>
                <div className="py-6 flex justify-center">
                    <a onClick={() => {
                        setThemeThree(true);
                        setTimeout(() => {
                            navigate("/theme-three");
                        }, 1000);
                    }} 
                    className="w-[250px] max-md:w-auto p-5 px-7 max-md:px-5 max-md:p-4 cursor-pointer uppercase rounded border-[2px] border-primary hover:bg-primary transition-all duration-500 text-white font-bold text-xl max-md:text-lg items-center justify-center tracking-wide">
                        <span className="relative z-10">Get Convinced</span>
                    </a>
                </div>
                <div className="flex justify-center absolute left-[50%] translate-x-[-50%] mt-[80px] max-md:mt-[50px]">
                    <a href="#our-services" className="no-underline cursor-pointer animate-bounce">
                        <img width={40} height={50} className="w-8 h-9" src="assets/icons/down-down-icon.svg" alt="DROP DOWN" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
