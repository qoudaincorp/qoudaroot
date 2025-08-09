// Libraries
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// Custom files
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_KEY, EMAIL_TEMPLATE_ID, toastifyConfigs } from "../../config/constants";

const ContactUs = () => {
    const form = useRef<any>();
    const [buttonDisable, setButtonDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

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
        <div className="h-fit bg-contain bg-no-repeat bg-center" id="contact">
            <div className="max-w-screen-xl mx-auto w-100 mt-[200px] max-md:mt-[150px] py-10">
                <div className="mx-auto text-center">
                    <div>
                        <div className="w-[4px] h-[80px] bg-white mx-auto mb-5"></div>
                        <h1 className="text-[45px] max-md:text-[40px] uppercase font-[800] text-white tracking-widest mb-0">
                            Contact <span className="font-normal">Us</span>
                        </h1>
                        <p className="text-white text-[40px] max-md:text-[25px] mb-3">You are 30 seconds away from the
                            savile row of websites.</p>
                        <h3 className="text-[45px] font-bold max-md:text-[35px] text-white mb-4">Help Us Help You</h3>
                    </div>
                    <div className="max-w-screen-lg p-10 max-md:p-4 max-md:py-8 rounded-md w-full max-md:w-full mx-auto">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-6">
                                <div>
                                    <Controller
                                        defaultValue={""}
                                        control={control}
                                        name="first_name"
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <input type="text" name="first_name" onChange={onChange} value={value} className="border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" placeholder="First Name" required />
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        defaultValue={""}
                                        control={control}
                                        name="last_name"
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <input type="text" name="last_name" onChange={onChange} value={value} className="border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" placeholder="Last Name" required />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-6">
                                <div>
                                    <Controller
                                        defaultValue={""}
                                        control={control}
                                        name="zip_code"
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <input type="text" name="zip_code" onChange={onChange} value={value} className="border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" placeholder="Zip Code" required />
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        defaultValue={""}
                                        control={control}
                                        name="city"
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <input type="text" name="city" onChange={onChange} value={value} className="border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" placeholder="City" required />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <Controller
                                    defaultValue={""}
                                    control={control}
                                    name="address"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input type="text" name="address" onChange={onChange} value={value} className="border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" placeholder="Address" required />
                                    )}
                                />
                            </div>
                            <div className="mb-8">
                                <Controller
                                    defaultValue={""}
                                    control={control}
                                    name="email"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <input type="email" name="email" onChange={onChange} value={value} className="border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" placeholder="Email" required />
                                    )}
                                />
                            </div>
                            <div className="mb-8">
                                <Controller
                                    defaultValue={""}
                                    control={control}
                                    name="message"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <textarea name="message" onChange={onChange} value={value} placeholder="Message" className="textarea-theme-two !min-h-[120px] max-h-[100%] !h-[120px] border-[1.5px] border-[#75BBDE] focus:border-white outline-0 text-white text-[18px] rounded-md block w-full font-medium p-4 bg-[#268DBB] placeholder-[#afe4ff] shadow-2xl inset-5" required></textarea>
                                    )}
                                />
                            </div>
                            <button disabled={buttonDisable} className="w-auto max-md:w-[200px] p-3 px-8 max-md:px-5 max-md:p-4 cursor-pointer uppercase rounded border-[2px] border-primary transition-all duration-500 text-white font-bold text-lg max-md:text-lg items-center justify-center tracking-wide bg-primary hover:bg-white hover:text-primary hover:border-white">
                                {isLoading ? "Processing..." : "Reach Out"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
