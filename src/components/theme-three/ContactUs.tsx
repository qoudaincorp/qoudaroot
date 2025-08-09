// Libraries
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// Components
import QoudaIcon from './custom-components/QoudaIcon';
import BoxAnimationExpand from "../animation/BoxAnimationExpand";
// Custom files
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_KEY, EMAIL_TEMPLATE_ID, toastifyConfigs } from "../../config/constants";

const ContactUs = ({ layer }: Props) => {
    const form = useRef<any>();
    const [visibleCss, setVisibleCss] = useState("hidden");
    const [buttonDisable, setButtonDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    /**
    * Visible and hide the landing section according to layer property
    */
    useEffect(() => {
        if (layer?.contact_us) {
            setVisibleCss("z-10 slide-scroll-animation flex");
        } else {
            setTimeout(() => {
                setVisibleCss("hidden");
            }, 1450);
        }
    }, [layer]);

    /**
     * Send the email to the admins
     * @param data
    */
    const sendEmail = (event: any) => {
        event.preventDefault();
        // Disable the submit button
        setButtonDisable(true);
        // Add the processing text to the button
        setIsLoading(true);
        // Send the API request
        emailjs.sendForm(EMAIL_SERVICE_KEY, EMAIL_TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
            .then((result: any) => {
                toast.dismiss();
                // @ts-ignore
                toast.success("Your request sucessfully received. We'll contact you as soon as possible.", toastifyConfigs);
                // Enable the button
                setButtonDisable(false);
                // Remove the processing text from button
                setIsLoading(false);
                reset();
            }, (error: any) => {
                toast.dismiss();
                setButtonDisable(false);
                console.error('Error:', error.text);
                // @ts-ignore
                toast.error("Internal server error", toastifyConfigs);
            });
    };

    return (
        <div className={"fixed top-0 left-0 bottom-0 right-0 max-lg:relative max-lg:h-full " + visibleCss}>
            <div
                className="container min-w-full mx-auto w-100 flex items-center justify-center h-screen max-lg:h-full max-lg:pt-[120px] max-lg:pb-[50px] overflow-y-auto bg-blue_gray">
                <div className="w-full h-screen max-lg:h-full">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 h-screen max-lg:h-full">
                        <div
                            className="w-full h-full flex items-center justify-end max-lg:justify-center max-lg:items-start pl-32 max-lg:pl-0 max-lg:pb-10">
                            <div className="w-fit text-left max-lg:text-center pr-10 max-lg:pl-10">
                                <BoxAnimationExpand customProps={{ delay: 0.5, extraDelay: true }}>
                                    <h1 className="text-white text-[60px] max-lg:text-[40px] max-sm:text-[40px] font-[600] leading-[70px] max-lg:leading-[60px] max-sm:leading-[55px] mb-5"
                                        style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.2)" }}>
                                        Contact Us
                                    </h1>
                                </BoxAnimationExpand>
                                <BoxAnimationExpand customProps={{ delay: 0.9, extraDelay: true }}>
                                    <h2 className="text-white text-[40px] max-lg:text-[30px] max-sm:text-[30px] font-[600] leading-[50px] max-lg:leading-[40px] max-sm:leading-[40px] mb-5"
                                        style={{ textShadow: "2px 3px 1px rgba(0, 0, 0, 0.2)" }}>
                                        Help Us Help You
                                    </h2>
                                </BoxAnimationExpand>
                                <BoxAnimationExpand customProps={{ delay: 1.2, extraDelay: true }}>
                                    <p className="text-white text-[22px] font-poppins font-[400] italic"
                                        style={{ textShadow: "3px 4px 1px rgba(0, 0, 0, 0.1)" }}>
                                        You are 30 seconds away from the savile row of websites.
                                    </p>
                                </BoxAnimationExpand>
                            </div>
                            <QoudaIcon position="left" color="fill-[#FFFFFF]" opacity="0.05" />
                        </div>
                        <BoxAnimationExpand customProps={{ delay: 0.9, extraDelay: true }}>
                            <div
                                className="w-full h-full flex items-center justify-start max-lg:justify-center max-lg:items-end pl-10 max-lg:pl-5 max-lg:pr-5">
                                <form ref={form} onSubmit={sendEmail} className="w-[550px] max-lg:w-full rounded-md bg-light_blue_gray px-14 py-12 max-lg:px-8">
                                    <div className="w-full flex max-md:block items-center mb-10 max-md:mb-0">
                                        <div className="w-full flex items-center mr-5 max-md:mr-0 max-md:mb-10">
                                            <label className="w-full relative cursor-pointer">
                                                <Controller
                                                    defaultValue={""}
                                                    control={control}
                                                    name="first_name"
                                                    rules={{
                                                        required: true,
                                                    }}
                                                    render={({ field: { onChange, onBlur, value } }) => (
                                                        <input type="text" placeholder="First Name" name="first_name" onChange={onChange} value={value}
                                                            className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                            required={true} />
                                                    )}
                                                />
                                                <span
                                                    className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">First Name</span>
                                            </label>
                                        </div>
                                        <div className="w-full flex items-center ml-5 max-md:ml-0 max-md:mb-10">
                                            <label className="w-full relative cursor-pointer">
                                                <Controller
                                                    defaultValue={""}
                                                    control={control}
                                                    name="last_name"
                                                    rules={{
                                                        required: true,
                                                    }}
                                                    render={({ field: { onChange, onBlur, value } }) => (
                                                        <input type="text" placeholder="Last Name" name="last_name" onChange={onChange} value={value}
                                                            className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                            required={true} />
                                                    )}
                                                />
                                                <span
                                                    className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">Last Name</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center mb-10">
                                        <label className="w-full relative cursor-pointer">
                                            <Controller
                                                defaultValue={""}
                                                control={control}
                                                name="email"
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <input type="email" placeholder="Email" name="email" onChange={onChange} value={value}
                                                        className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                        required={true} />
                                                )}
                                            />
                                            <span
                                                className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">Email</span>
                                        </label>
                                    </div>
                                    <div className="w-full flex items-center mb-10">
                                        <label className="w-full relative cursor-pointer">
                                            <Controller
                                                defaultValue={""}
                                                control={control}
                                                name="zip_code"
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <input type="text" placeholder="Zip Code" name="zip_code" onChange={onChange} value={value}
                                                        className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                        required={true} />
                                                )}
                                            />
                                            <span
                                                className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">Zip Code</span>
                                        </label>
                                    </div>
                                    <div className="w-full flex items-center mb-10">
                                        <label className="w-full relative cursor-pointer">
                                            <Controller
                                                defaultValue={""}
                                                control={control}
                                                name="address"
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <input type="text" placeholder="Address" name="address" onChange={onChange} value={value}
                                                        className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                        required={true} />
                                                )}
                                            />
                                            <span
                                                className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">Address</span>
                                        </label>
                                    </div>
                                    <div className="w-full flex items-center mb-10">
                                        <label className="w-full relative cursor-pointer">
                                            <Controller
                                                defaultValue={""}
                                                control={control}
                                                name="city"
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <input type="text" placeholder="City" name="city" onChange={onChange} value={value}
                                                        className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                        required={true} />
                                                )}
                                            />
                                            <span
                                                className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">City</span>
                                        </label>
                                    </div>
                                    <div className="w-full flex items-center mb-10">
                                        <label className="w-full relative cursor-pointer">
                                            <Controller
                                                defaultValue={""}
                                                control={control}
                                                name="message"
                                                rules={{
                                                    required: true,
                                                }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <textarea name="message" placeholder="Message" onChange={onChange} value={value} className="textarea-theme-three w-full py-3 px-4 text-[18px] !min-h-[120px] max-h-[100%] !h-[120px] max-md:text-[16px] text-white bg-transparent border-white border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200" required></textarea>
                                                )}
                                            />
                                            <span
                                                className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">Message</span>
                                        </label>
                                    </div>
                                    <div className="w-full flex items-center justify-center py-3">
                                        <button
                                            disabled={buttonDisable}
                                            className="w-auto z-0 p-4 px-7 max-lg:px-5 max-lg:p-4 cursor-pointer relative flex rounded-lg bg-primary text-white font-bold text-xl max-lg:text-lg items-center justify-center overflow-hidden transition-all duration-700 before:absolute before:h-full before:w-full before:top-[-100px] hover:before:top-[0px] before:bg-primary_one-50 hover:text-primary_one-200 before:transition-all before:duration-700">
                                            <span className="relative z-0">{isLoading ? "Processing..." : "Reach Out"}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </BoxAnimationExpand>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface Props {
    layer: any;
}

type Inputs = {
    first_name: string;
    last_name: string;
    email: string;
    zip_code: string;
    address: string;
    city: string;
    message: string;
}

export default ContactUs;