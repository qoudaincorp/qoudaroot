import PreloadImage from "../custom-classes/PreloadImage";

function Preloader({animationClass}: any) {
    return (
        <div className={"fixed top-0 right-0 bottom-0 left-0  z-40 bg-primary_one-150 flex justify-center items-center w-full h-[100vh] transition-all duration-500 " + animationClass}>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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

export default Preloader;
