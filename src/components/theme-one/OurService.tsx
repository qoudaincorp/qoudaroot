import React from "react";
import TextAnimation from "../animation/TextAnimation";
import BoxAnimation from "../animation/BoxAnimation";
import WebDesignService from "../animation/WebDesignService";
import WebDevelopmentService from "../animation/WebDevelopmentService";

function OurService() {
    return (
        <div className="max-w-screen-xl mx-auto w-100 mt-[100px]">
            <div id="our-services">
                <div className="py-5 text-center">
                    <TextAnimation>
                        <h1 className="text-[50px] max-md:text-[40px] font-bold text-primary_one-50">Our Services</h1>
                    </TextAnimation>
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 my-5 p-6">
                    <BoxAnimation customProps={{position: "top-to-bottom"}}>
                        <WebDesignService/>
                    </BoxAnimation>
                    <BoxAnimation>
                        <WebDevelopmentService/>
                    </BoxAnimation>
                </div>
            </div>
        </div>
    );
}

export default OurService;
