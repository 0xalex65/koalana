import React from "react";
import AnimationContainer from "./AnimationContainer";

const FAQ = () => {
  const items = [
    {
      icon: "/icons/flag.svg",
      description:
        "Tokens will be airdropped to your wallet after the presale completes. Date TBC.",
    },
    {
      icon: "/icons/crown.svg",
      description:
        "Keep an eye on your wallet for the arrival of $SLOTH. Follow our Twitter for further announcements.",
    },
  ];

  return (
    <AnimationContainer className="flex flex-col gap-[30px] items-center pt-[37px] pb-[54px] bg-[#E5FAFF]/65 rounded-xl border-2 border-dark shadow-theme-lg px-5" id="faq">
      <div className="font-teko font-extrabold text-6xl md:text-[77px] uppercase relative z-10">
        <span className="text-primary title-outline drop-shadow-theme-sm">
          FAQ
        </span>
        <img
          src="/icons/shine-primary.svg"
          className="absolute -left-2 -translate-x-full top-5 -translate-y-1/2 scale-x-[-1]"
          alt=""
        />
        <img
          src="/icons/shine-primary.svg"
          className="absolute -right-2 translate-x-full top-5 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className="w-full max-w-[882px] flex flex-col md:flex-row gap-[50px] mx-auto">
        {items.map((item, i) => (
          <div className="w-full relative" key={i}>
            <div className="w-14 md:w-[74px] h-14 md:h-[74px] flex items-center justify-center rounded-xl border-2 border-dark bg-primary absolute top-0 -translate-y-1/2 left-[30px]">
              <img src={item.icon} className="scale-75 md:scale-100" alt="" />
            </div>
            <div className="bg-white p-5 md:p-[50px] pt-10 md:pt-20 border-2 border-dark shadow-theme-md font-outfit font-medium text-2xl md:text-[38px] text-[#4C4C4D] tracking-[-0.2px] rounded-xl">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default FAQ;
