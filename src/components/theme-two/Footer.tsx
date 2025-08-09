import TextAnimation from "../animation/TextAnimation";

export default function Footer() {
  return (
    <>
      <div className="absolute w-full text-white text-[12px] md:text-[16px] lg:text-[18px] font-normal font-['Raleway'] bottom-4">
      <TextAnimation customProps={{ delay: 0.5 }}>
        <h1 className='flex justify-center'>Copyright 2023. Qouda.ca. All rights reserved.</h1>
      </TextAnimation>
      </div>
    </>
  );
}
