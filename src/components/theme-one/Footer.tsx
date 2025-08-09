import BoxAnimation from "../animation/BoxAnimation";

function Footer() {
    return (
        <BoxAnimation customProps={{from: 75}}>
            <div className="w-full bg-primary_one-150 px-4 py-14 mt-[300px] max-md:mt-[150px]">
                <div className="max-w-screen-xl mx-auto w-100 px-4">
                    <div className="mx-auto text-center">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="assets/images/png/main-logo.png" />
                            <img
                                width={200}
                                height={50}
                                className="w-[200px] mx-auto max-md:px-5 mb-5"
                                src="assets/images/png/main-logo.png"
                                alt="ABOUT US BACKGROUND IMAGE"
                            />
                        </picture>
                        <p className="text-primary_one-50 text-[20px] max-md:text-[15px]">Copyright 2023. Qouda.ca. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </BoxAnimation>
    );
}

export default Footer;
