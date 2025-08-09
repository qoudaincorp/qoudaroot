import TextAnimation from "../animation/TextAnimation";
import BoxAnimation from "../animation/BoxAnimation";

function AboutUs() {
    return (
        <div className="max-w-screen-xl mx-auto w-100 mt-[300px] max-md:mt-[150px] px-4" id="about-us">
            <div className="mx-auto text-center">
                <TextAnimation customProps={{position: "top-to-bottom"}}>
                    <h1 className="text-[50px] max-md:text-[40px] font-bold text-primary_one-50">About Us</h1>
                    <h3 className="text-[35px] max-md:text-[22px] text-primary_one-50 mb-4">Premier Web Services For Every Step Of Your Journey</h3>
                    <p className="text-primary_one-50 text-[20px] max-md:text-[17px] mb-10">Formed to provide accessible web solutions in a rapidly evolving digital world.</p>
                </TextAnimation>
                <BoxAnimation>
                    <img width={800} height={800} className="w-[800px] max-md:w-[100%] mx-auto max-md:px-5" src="assets/images/gif/about-us-background-image-5.gif" alt="ABOUT US BACKGROUND IMAGE" />
                </BoxAnimation>
            </div>
        </div>
    );
}

export default AboutUs;
