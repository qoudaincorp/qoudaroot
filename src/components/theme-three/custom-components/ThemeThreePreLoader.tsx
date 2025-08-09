import { useEffect, useState } from "react";
import PreloadImage from "../../custom-classes/PreloadImage";

function ThemeThreePreloader({animation}: any) {
    const [containerVisible, setContainerVisible] = useState<string>("hidden");
    const [logoVisible, setLogoVisible] = useState<string>("hidden");

    useEffect(() => {
        if (animation) {
            setContainerVisible("flex");
            setTimeout(() => {
                setLogoVisible("flex");
            }, 1000);
        }
    }, [animation]);

    useEffect(() => {
        setContainerVisible("hidden");
        setLogoVisible("hidden");
    }, []);

    return (
        <div className={"fixed top-0 right-0 bottom-0 left-0 z-50 justify-center items-center w-full h-[100vh] transition-all duration-500 " + containerVisible}>
            <div className={"theme-three-pre-loader-transition relative top-[-100%] w-[20%] h-screen bg-primary_one-150 "}></div>
            <div className={"theme-three-pre-loader-transition relative top-[-100%] w-[20%] h-screen bg-primary_one-150 "}></div>
            <div className={"theme-three-pre-loader-transition relative top-[-100%] w-[20%] h-screen bg-primary_one-150 "}></div>
            <div className={"theme-three-pre-loader-transition relative top-[-100%] w-[20%] h-screen bg-primary_one-150 "}></div>
            <div className={"theme-three-pre-loader-transition relative top-[-100%] w-[20%] h-screen bg-primary_one-150 "}></div>
            <div className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 " + logoVisible}>
                <PreloadImage
                    width={200}
                    height={50}
                    className={"animate-bounce custom-bounce-animation"}
                    src="assets/images/png/main-logo.png"
                    alt="QOUDA"
                />
            </div>
        </div>
    );
};

export default ThemeThreePreloader;
