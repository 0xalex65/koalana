import React from "react";
import AnimationContainer from "./AnimationContainer";

const How2Buy = () => {
  const items = [
    "Press ‘Buy Now’ above and connect wallet",
    "Enter amount of SOL to swap for $SLOTH",
    "Hit ‘Buy Now’ again and confirm transaction",
  ];

  return (
    <div className="flex flex-col gap-[52px] items-center" id="how2buy">
      <AnimationContainer className="flex flex-col items-center md:flex-row font-teko font-extrabold text-6xl md:text-[77px] uppercase relative z-10">
        <span className="text-secondary title-outline drop-shadow-theme-sm">
          HOW TO BUY
        </span>
        <span className="hidden md:inline">&nbsp;</span>
        <span className="text-primary title-outline drop-shadow-theme-sm">
          WITH Koa
        </span>
        <img
          src="/icons/shine-secondary.svg"
          className="absolute -left-2 -translate-x-full top-5 -translate-y-1/2"
          alt=""
        />
        <img
          src="/icons/shine-primary.svg"
          className="absolute -right-2 translate-x-full top-5 -translate-y-1/2"
          alt=""
        />
      </AnimationContainer>
      <AnimationContainer className="w-full max-w-[897px] grid gap-6 md:gap-[100px] relative">
        {items.map((item, i) => (
          <div key={i} className="md:pl-[84px] relative group">
            <div className="hidden md:block">
              <div className="w-20 h-3 bg-white border-y-[5px] border-y-secondary absolute top-1/2 -translate-y-1/2 left-1" />
              <div
                className={`w-3 h-64 bg-white border-x-[5px] border-x-secondary absolute top-20 left-1 ${
                  i == 2 ? `hidden` : ``
                }`}
              />
              <div className="w-5 h-5 rounded-full border-2 border-dark bg-white absolute top-1/2 left-[74px] -translate-y-1/2" />
              <div className="w-5 h-5 rounded-full border-2 border-dark bg-white absolute top-1/2 left-0 -translate-y-1/2" />
            </div>
            <div className="flex items-center gap-5 bg-white p-5 md:px-[50px] py-[30px] rounded-xl shadow-theme-md border-2 border-dark relative">
              <img src="/grid.png" className="w-10 md:w-max" alt="" />
              <ul className="list-disc list-inside pl-5">
                <li className="font-raleway font-bold text-2xl md:text-[28px] tracking-[-1px]">
                  {item}
                </li>
              </ul>
            </div>
          </div>
        ))}

        <img
          src="/icons/line.svg"
          className="absolute bottom-[84px] -right-[84px] translate-x-full"
        />
        <img
          src="/icons/10star.svg"
          className="absolute bottom-0 translate-y-full -right-[100px] translate-x-full"
        />
      </AnimationContainer>
    </div>
  );
};

export default How2Buy;
