import TextAnimation from "../animation/TextAnimation";
import { useNavigate } from "react-router-dom";

function LandingSection({setThemeTwo}:any) {
    const navigate = useNavigate();

    return (
        <div className="max-w-screen-xxl mx-auto w-100 flex items-center justify-center h-[800px] max-md:h-[600px]" id="home">
            <div className="text-center px-10 max-md:px-5">
                <TextAnimation customProps={{ delay: 1 }}>
                    <h1 className="text-primary_one-50 font-poppins text-[80px] max-md:text-[50px] max-sm:text-[40px] font-[600] uppercase leading-[90px] max-md:leading-[60px] max-sm:leading-[55px]">
                        User Centric Websites That <br />
                        <span className="text-primary_one-200">Reflect Your Brand</span>
                    </h1>
                </TextAnimation>
                <TextAnimation customProps={{ delay: 1 }}>
                    <p className="my-4 text-primary_one-50 text-[35px] max-md:text-[25px]">Your Imagination Expressed On
                        Pixels</p>
                </TextAnimation>
                <TextAnimation customProps={{ delay: 1 }}>
                    <div className="py-6 flex justify-center">
                        <button
                            onClick={(e: any) => {
                                setThemeTwo(true);
                                setTimeout(() => {
                                    navigate("/theme-two", { replace: true });
                                }, 2000);
                            }}
                           className="w-[250px] max-md:w-[200px] z-0 p-5 px-7 max-md:px-5 max-md:p-4 cursor-pointer relative flex uppercase rounded bg-primary_one-200 text-primary_one-50 font-bold text-xl max-md:text-lg items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary_one-50 hover:text-primary_one-200 before:duration-500 before:ease-out hover:before:h-64 hover:before:w-64">
                            <span className="relative z-0">Get Convinced</span>
                        </button>
                    </div>
                </TextAnimation>
            </div>
        </div>
    );
}

export default LandingSection;
