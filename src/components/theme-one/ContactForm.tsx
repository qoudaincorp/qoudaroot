// Libraries
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// Components
import TextAnimation from "../animation/TextAnimation";
import BoxAnimation from "../animation/BoxAnimation";
// Custom files
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_KEY, EMAIL_TEMPLATE_ID, toastifyConfigs } from "../../config/constants";

function ContactForm() {
    const form = useRef<any>();
    const [buttonDisable, setButtonDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    /**
     * Send the email to the admins
     * @param event
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
        <div className="max-w-screen-xl mx-auto w-100 mt-[300px] max-md:mt-[150px] px-4">
            <div className="mx-auto text-center" id="contact-us">
                <TextAnimation customProps={{ position: "top-to-bottom" }}>
                    <h1 className="text-[50px] max-md:text-[40px] font-bold text-primary_one-50">Contact Us</h1>
                    <h3 className="text-[35px] max-md:text-[22px] text-primary_one-50 mb-4">Help Us Help You</h3>
                    <p className="text-primary_one-50 text-[25px] max-md:text-[17px] mb-10">You are 30 seconds away from the
                        savile row of websites.</p>
                </TextAnimation>
                <BoxAnimation>
                    <div
                        className="p-10 max-md:p-6 max-md:py-8 bg-primary_one-150 shadow-xl rounded-md w-[580px] max-md:w-full mx-auto">
                        <form ref={form} onSubmit={sendEmail}>
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
                                                <input name="first_name" type="text" placeholder="First Name" onChange={onChange} value={value}
                                                    className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
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
                                                <input name="last_name" type="text" placeholder="Last Name" onChange={onChange} value={value}
                                                    className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
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
                                            <input name="email" type="text" placeholder="Email" onChange={onChange} value={value}
                                                className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
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
                                            <input name="zip_code" type="text" placeholder="Zip Code" onChange={onChange} value={value}
                                                className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
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
                                            <input name="address" type="text" placeholder="Address" onChange={onChange} value={value}
                                                className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
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
                                            <input name="city" type="text" placeholder="City" onChange={onChange} value={value}
                                                className="w-full py-3 px-4 text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
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
                                            <textarea onChange={onChange} value={value} name="message" placeholder="Message" className="textarea-theme-one w-full py-3 px-4 !min-h-[120px] max-h-[100%] !h-[120px] overflow-y-auto text-[18px] max-md:text-[16px] text-white bg-transparent border-primary_one-200 border-b-[2px] border-opacity-50 outline-none focus:border-primary_one-200 placeholder-gray-300 placeholder-opacity-0 transition duration-200" required></textarea>
                                        )}
                                    />
                                    <span
                                        className="text-[17px] max-md:text-[15px] text-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">Message</span>
                                </label>
                            </div>
                            <div className="w-full flex items-center justify-center py-3">
                                <button type="submit" disabled={buttonDisable} className="rounded bg-primary_one-200 text-primary_one-50 font-bold text-lg py-3 px-6 cursor-pointer relative flex max-md:text-lg items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary_one-50 hover:text-primary_one-200 before:duration-500 before:ease-out hover:before:h-40 hover:before:w-40">
                                    <span className="relative z-10">{isLoading ? "Processing..." : "Reach Out"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </BoxAnimation>
            </div>
        </div>
    );
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

export default ContactForm;
