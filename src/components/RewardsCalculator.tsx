import React, { useState } from "react";
import AnimationContainer from "./AnimationContainer";

const RewardsCalculator = () => {
  const [amount, setAmount] = useState("2000000");

  return (
    <div className="grid gap-9 relative">
      <div className="flex flex-col items-center gap-[9px]">
        <AnimationContainer className="flex flex-col items-center md:flex-row font-teko font-extrabold text-6xl md:text-[77px] uppercase relative z-10">
          <span className="text-secondary title-outline drop-shadow-theme-sm">
            REWARDS
          </span>
          <span className="hidden md:inline">&nbsp;</span>
          <span className="text-primary title-outline drop-shadow-theme-sm">
            cALCULATOR
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
        <AnimationContainer className="w-full max-w-[880px] font-outfit font-medium text-base">
          Lorem ipsum dolor sit amet consectetur. Non donec eu velit neque.
          Nulla nunc lobortis mauris egestas rutrum mi sit. Tempus ut justo
          nulla ipsum tincidunt vitae id hac turpis. Tellus eget vitae vitae vel
          sem erat sit. Purus etiam massa non elementum.
        </AnimationContainer>
      </div>

      <AnimationContainer className="w-full flex flex-col lg:flex-row gap-[62px] bg-white rounded-xl border-2 border-dark px-5 lg:px-[62px] pt-7 pb-8 shadow-secondary-theme-lg relative">
        <img
          src="/grid-lg.png"
          className="w-16 md:w-auto absolute top-0 left-0"
        />
        <div className="w-full flex justify-center relative z-10">
          <div className="w-full max-w-[377px] grid gap-[13px]">
            <div className="w-full max-w-[270px] font-raleway font-extrabold text-5xl md:text-[61px]">
              Ready To <span className="text-secondary">Buy ?</span>
            </div>
            <div className="w-full max-w-[338px] h-0.5 bg-dark" />
            <p className="font-outfit font-medium text-base">
              Lorem ipsum dolor sit amet consectetur. Non donec eu velit neque.
              Nulla nunc lobortis mauris egestas rutrum mi sit. Tempus ut justo
              nulla ipsum tincidunt vitae id hac turpis.
            </p>
            <button className="w-full md:w-max h-[66px] px-[90px] rounded-[5px] bg-primary font-teko font-medium text-[28px] text-white border-2 border-dark shadow-theme-md transtion hover:opacity-70">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full max-w-[555px] flex-shrink-0 bg-white border-2 border-dark shadow-theme-lg rounded-[18px] pt-8 px-[18px] pb-16">
          <div className="grid gap-6">
            <div className="grid gap-[7px]">
              <p className="font-raleway font-bold text-[31px] text-center">
                Returns Calculator
              </p>
              <p className="font-outfit font-medium text-base text-center">
                Lorem ipsum dolor sit amet consectetur. Non donec eu velit
                neque. Nulla nunc lobortis mauris egestas rutrum mi sit.{" "}
              </p>
            </div>
            <div className="grid gap-1.5">
              <div className="flex items-center justify-between font-outfit font-medium text-[15px]">
                <span>IF I BUY</span>
                <span>($400)</span>
              </div>
              <div className="shadow-theme-md rounded-[5px]">
                <div className="w-full h-[66px] flex items-center border-2 rounded-[5px] border-white border-2 border-dark bg-primary shadow-theme-inner px-3 ">
                  <input
                    type="text"
                    className="w-full h-full bg-transparent font-teko font-medium text-[28px] outline-none text-white"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="px-1.5 border-l-2 border-l-white">
                    <span className="font-teko font-medium text-[28px] text-white">
                      Koa
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2 font-medium text-base font-outfit text-secondary">
              <p>And the token price reaches: $2.047</p>
              <input type="range" className="slider" />
              <div className="flex items-start justify-between font-bold">
                <div>
                  Your $KOLA
                  <br />
                  Would be worth
                </div>
                <span>$6100</span>
              </div>
            </div>
          </div>
        </div>
      </AnimationContainer>

      <img
        src="/icons/line-primary.svg"
        className="absolute -top-[49px] -left-[50px]"
      />
      <img
        src="/icons/10star-primary.svg"
        className="absolute top-[90px] left-0 -translate-x-full"
      />
    </div>
  );
};

export default RewardsCalculator;
