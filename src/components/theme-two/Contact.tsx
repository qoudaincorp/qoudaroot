import Footer from "./Footer";
import Nav from "./Nav"
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import useMouseMove from "../../config/useMouseMove";
import TextAnimation from "../animation/TextAnimation";
import BoxAnimation from "../animation/BoxAnimation";

import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_KEY, EMAIL_TEMPLATE_ID, toastifyConfigs } from "../../config/constants";
function Contact({layer}: Props) {
  const [visibleCss, setVisibleCss] = useState("block");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<any>();
  const {
      control,
      reset,
      formState: { errors },
  } = useForm<Inputs>();

  useMouseMove();
  useEffect(() => {
    if (layer?.contactus) {
        setVisibleCss("block");
    } else {
        setTimeout(() => {
            setVisibleCss("block");
        }, 0);
    }
  }, [layer]);

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
    <div className={visibleCss }>
      <div className="layers " id="contact">
        <div className="layers__container h-[1000px] sm:h-[120vh] md:h-[110vh] lg:h-[110vh] xl:h-[125vh]">
          <div className="flex absolute inset-[0vw] bg-cover items-center justify-center bg-center layer-1" 
            style={{backgroundImage: "url('assets/bgimg/contact.jpg')"}}>
          </div>
          
          <div className="hidden md:block">
            <Nav />
          </div>
          
          <div className="flex absolute inset-[0vw] h-fit mt-12 md:mt-14 bg-cover items-center justify-center bg-center layer-3 ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="hero-content">
                <TextAnimation customProps={{ delay: 1, position: "top-to-bottom" }}>
                  <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 items-center">
                    <div className=""><img src="assets/images/svg/Line 2.svg" alt="" className="w-[110px] sm:w-[250px] md:w-[320px] lg:w-[350px] xl:w-full h-full"/></div>
                      <h1 className="text-[22px] md:text-[32px] lg:text-[36px] font-extrabold text-white tracking-normal ">Contact us</h1>
                    <div className=""><img src="assets/images/svg/Line 3.svg" alt="" className="w-[110px] sm:w-[250px] md:w-[320px] lg:w-[350px] xl:w-full h-full"/></div>
                  </div>
                </TextAnimation>
              <BoxAnimation customProps={{ delay: 1}}>
                <div className="flex justify-center">
                  <div className=" flex flex-col w-[420px] sm:w-auto  justify-start font-['Raleway'] ring-2 ring-opacity-50 ring-white px-5 md:px-20 lg:px-40 pt-4 bg-black bg-opacity-50 rounded-[15px] md:rounded-[35px] backdrop-filter mt-[48px] blur-effect">
                      <h1 className=" capitalize text-white text-[16px] xl:text-[18px] font-normal tracking-normal" >
                        <TextAnimation customProps={{ delay: 1.2 }}>
                          You are 30 seconds away from the Savile row of websites.
                        </TextAnimation>
                      </h1>
                      <div className=" flex flex-col md:flex-row items-start gap-4 mt-6">
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div>
                            <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold">First Name</h1>
                          </div>
                          <div className="flex py-[12px] w-full px-3 relative bg-white rounded-[10px] shadow-lg ">
                            <Controller
                              defaultValue={""}
                              control={control}
                              name="first_name"
                              rules={{
                                  required: true,
                              }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <input type="text" name="first_name" onChange={onChange} value={value} required={true} className=" bg-transparent text-[18px] w-fullinput-two textarea-two"/>
                              )}
                              />
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div>
                            <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold">Last Name</h1>
                          </div>
                          <div className="flex py-[12px] px-3 relative bg-white rounded-[10px] shadow-lg w-full">
                            <Controller
                              defaultValue={""}
                              control={control}
                              name="last_name"
                              rules={{
                                  required: true,
                              }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <input type="text" name="last_name" onChange={onChange} value={value} required={true} className=" bg-transparent text-[16px] md:text-[18px] w-full input-two textarea-two"/>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt-3 w-full">
                        <div className="flex">
                          <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold ">Email</h1>
                        </div>
                        <div className="flex py-[12px] px-3 relative bg-white rounded-[10px] shadow-lg ">
                          <Controller
                            defaultValue={""}
                            control={control}
                            name="email"
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                              <input type="email" name="email" onChange={onChange} value={value} required={true} className=" bg-transparent text-[16px] md:text-[18px] w-full input-two textarea-two"/>
                            )}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-3 w-full" >
                          <div className="flex">
                            <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold ">Address</h1>
                          </div>
                          <div className="flex py-[12px] px-3 relative bg-white rounded-[10px] shadow-lg ">
                            <Controller
                              defaultValue={""}
                              control={control}
                              name="address"
                              rules={{
                                  required: true,
                              }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <input type="text" name="address" onChange={onChange} value={value} required={true} className=" bg-transparent text-[16px] md:text-[18px] w-full input-two textarea-two"/>
                              )}
                              />
                          </div>
                        </div>
                        <div className=" flex flex-col md:flex-row items-start gap-4 mt-3 w-full">
                          <div className="flex flex-col items-start gap-1 w-full">
                            <div>
                              <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold">City</h1>
                            </div>
                            <div className="flex py-[12px] px-3 relative bg-white rounded-[10px] shadow-lg w-full">
                              <Controller
                                defaultValue={""}
                                control={control}
                                name="city"
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <input type="text" name="city" onChange={onChange} value={value} required={true} className=" bg-transparent text-[16px] md:text-[18px] w-full input-two textarea-two"/>
                                )}
                                />
                            </div>
                          </div>
                          <div className="flex flex-col items-start gap-1 w-full">
                            <div>
                              <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold">Zip code</h1>
                            </div>
                            <div className="flex py-[12px] px-3 relative bg-white rounded-[10px] shadow-lg w-full">
                              <Controller
                                defaultValue={""}
                                control={control}
                                name="zip_code"
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <input type="text"  name="zip_code" onChange={onChange} value={value} required={true} className=" bg-transparent text-[16px] md:text-[18px] w-full input-two textarea-two"/>
                                )}
                                />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full mt-3">
                          <div>
                            <h1 className="text-white capitalize text-[16px] md:text-[18px] font-bold">Message</h1>
                          </div>
                          <div className="flex py-[12px] px-3 relative bg-white rounded-[10px] shadow-lg w-full">
                            <Controller
                              defaultValue={""}
                              control={control}
                              name="message"
                              rules={{
                                  required: true,
                              }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <textarea  name="message" onChange={onChange} value={value} rows={3} cols={50} className=" bg-transparent text-[16px] md:text-[18px] w-full input-two textarea-two"/>
                              )}
                            />
                          </div>
                        </div>
                      <div className="my-6 mb-10">
                        <button
                          disabled={buttonDisable}
                          className="button py-[16px] px-[32px] text-[14px] sm:py-[18px] sm:px-[36px] sm:text-[16px]"
                            > {isLoading ? "Processing..." : "REACH OUT"}
                        </button>
                      </div>
                  </div>
                  
                </div>
                </BoxAnimation>
              </div>
            </form>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}
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

export default (Contact);
