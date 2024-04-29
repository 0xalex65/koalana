import React, { useState } from "react";
import AnimationContainer from "./AnimationContainer";

const Mainboard = () => {
  const [amount, setAmount] = useState("");

  const items = [
    {
      icon: "/icons/flag.svg",
      description:
        "Join Slothana's journey from leafy lounges to crypto riches! 🦥💰 Presale happening now!",
    },
    {
      icon: "/icons/crown.svg",
      description:
        "Embrace the sloth life; let your SOL soar with Slothana! 🦥🚀 Presale spots limited.",
    },
    {
      icon: "/icons/users.svg",
      description:
        "From 420 to $420M with Slothana! 🌬️💼 Dive into the $SLOTH Presale.",
    },
  ];

  return (
    <div className="grid gap-[72px]">
      <div className="flex flex-col-reverse md:flex-row gap-[37px]">
        <AnimationContainer className="w-full border-2 border-dark relative pt-10 pb-[54px] px-6 rounded-[9px] overflow-hidden">
          <img
            src="/board.png"
            width={618}
            height={747}
            alt=""
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="w-full relative">
              <p className="font-raleway font-extrabold text-4xl md:text-[40px]">
                Over 10m raised.{" "}
                <span className="text-secondary">
                  Last chance to buy before launch!
                </span>
              </p>
              <div className="w-full max-w-[413px] h-0.5 bg-secondary absolute bottom-0 -translate-y-[-5px]" />
            </div>
            <div className="w-full h-32 bg-[#FFEFE5] rounded-[7px] border-[3px] border-white shadow-theme-inner relative">
              <img
                src="/look.png"
                className="absolute right-8 top-1 -translate-y-full"
              />
              <div className="flex items-center justify-center gap-3 md:gap-10">
                <div className="flex flex-col items-center font-teko">
                  <span className="text-[72px] md:text-[83px]">15</span>
                  <span className="text-[21px] -mt-9">Days</span>
                </div>
                <div className="grid gap-2">
                  <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
                </div>
                <div className="flex flex-col items-center font-teko">
                  <span className="text-[72px] md:text-[83px]">3</span>
                  <span className="text-[21px] -mt-9">hours</span>
                </div>
                <div className="grid gap-2">
                  <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
                </div>
                <div className="flex flex-col items-center font-teko">
                  <span className="text-[72px] md:text-[83px]">18</span>
                  <span className="text-[21px] -mt-9">Minutes</span>
                </div>
                <div className="grid gap-2">
                  <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
                </div>
                <div className="flex flex-col items-center font-teko">
                  <span className="text-[72px] md:text-[83px]">45</span>
                  <span className="text-[21px] -mt-9">Seconds</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[68px] rounded-[5px] border-2 border-dark bg-[#E5FAFF] shadow-theme-md relative py-[3px]">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-teko font-medium text-xl md:text-[28px] uppercase">
                Until presale Ends
              </span>
              <div className="w-4/5 h-full bg-primary"></div>
            </div>
            <div className="w-full font-raleway font-extrabold text-2xl md:text-[40px] relative">
              <p>1 SOL = 10,000 $SLOTH</p>
              <p className="text-secondary">Current Raise$10,000,000+</p>
              <div className="w-full max-w-[505px] h-0.5 bg-secondary absolute bottom-0 -translate-y-[-6px]" />
            </div>
            <div className="w-full h-[66px] flex items-center border-2 border-dark rounded-[5px] border-2 border-dark bg-[#FFEFE5] shadow-theme-md px-3">
              <input
                type="text"
                className="w-full h-full bg-transparent font-teko font-medium text-[28px] outline-none"
              />
              <div className="px-1.5 border-l-2 border-l-dark">
                <span className="font-teko font-medium text-[28px]">Koa</span>
              </div>
            </div>
            <button className="w-full md:w-max h-[66px] px-[90px] rounded-[5px] bg-secondary font-teko font-medium text-[28px] border-2 border-dark shadow-theme-md transtion hover:opacity-70">
              Buy Now
            </button>
          </div>
        </AnimationContainer>
        <AnimationContainer className="w-full max-w-[685px] flex-shrink-0 relative z-10 border-[5px] border-[#FFBE99] relative">
          <div className="w-full h-full border-2 border-white">
            <div className="w-full h-full border-[5px] border-[#FFBE99]">
              <img
                src="/koala.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-5 h-5 rounded-full border-2 border-white bg-primary absolute -top-[9px] -left-[9px]" />
          <div className="w-5 h-5 rounded-full border-2 border-white bg-primary absolute -bottom-[9px] -left-[9px]" />
          <div className="w-5 h-5 rounded-full border-2 border-white bg-primary absolute -top-[9px] -right-[9px]" />
          <div className="w-5 h-5 rounded-full border-2 border-white bg-primary absolute -bottom-[9px] -right-[9px]" />
        </AnimationContainer>
      </div>
      <AnimationContainer className="w-full h-[46px] flex items-center justify-between bg-primary shadow-theme-xl rounded-[5px] pl-[75px] pr-5 md:mb-[50px]">
        <span className="font-teko text-[33px] leading-none uppercase">
          koalana
        </span>
        <img src="/icons/star.svg" alt="" />
        <span className="hidden md:block font-teko text-[33px] leading-none uppercase">
          koalana
        </span>
        <img src="/icons/star.svg" className="hidden md:block" alt="" />
        <span className="hidden md:block font-teko text-[33px] leading-none uppercase">
          koalana
        </span>
        <img src="/icons/star.svg" className="hidden md:block" alt="" />
        <span className="hidden md:block font-teko text-[33px] leading-none uppercase">
          koalana
        </span>
        <img src="/icons/star.svg" className="hidden md:block" alt="" />
      </AnimationContainer>
      <AnimationContainer className="grid grid-cols-1 md:grid-cols-3 gap-[45px]">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <div className="w-14 md:w-[74px] h-14 md:h-[74px] flex items-center justify-center rounded-xl border-2 border-dark bg-primary absolute top-0 -translate-y-1/2 left-[30px]">
              <img src={item.icon} className="scale-75 md:scale-100" alt="" />
            </div>
            <div className="bg-white rounded-lg border-2 border-dark font-outfit font-medium text-xl p-5 md:p-[50px] pt-10 md:pt-20 shadow-theme-md">
              {item.description}
            </div>
          </div>
        ))}
      </AnimationContainer>
    </div>
  );
};

export default Mainboard;
