"use client";
import React from "react";
import dynamic from "next/dynamic";
import AnimationContainer from "./AnimationContainer";

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ItemOption {
  label: String;
  value: Number;
  color: any;
}

const Tokenomics = () => {
  const data: ItemOption[] = [
    {
      label: "Presale",
      value: 40,
      color: "#4DDFFF",
    },
    {
      label: "Marketing",
      value: 25,
      color: "#9F97F7",
    },
    {
      label: "Treasury",
      value: 15,
      color: "#FFB44F",
    },
    {
      label: "Staking",
      value: 7,
      color: "#F99BAB",
    },
    {
      label: "Liquidity",
      value: 13,
      color: "#9BDFC4",
    },
  ];
  const chartData: any = {
    series: data.map((item: ItemOption) => item.value),
    colors: data.map((item: ItemOption) => item.color),
    labels: data.map((item: ItemOption) => item.label),
    plotOptions: {
      pie: {
        startAngle: 0,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "23px",
        fontFamily: "Outfit, sans-serif",
        fontWeight: "semibold",
        colors: ["#FFF"],
      },
      dropShadow: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-[50px] relative">
      <AnimationContainer className="font-teko font-extrabold text-6xl md:text-[77px] uppercase relative z-10">
        <span className="text-secondary title-outline drop-shadow-theme-sm">
          Token
        </span>
        <span className="text-primary title-outline drop-shadow-theme-sm">
          omics
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
      <div className="w-full flex flex-col md:flex-row gap-11">
        <AnimationContainer className="w-full flex flex-col md:flex-row items-center border-2 border-dark rounded-[18px] px-5 md:px-12 py-8 bg-white shadow-theme-lg">
          <div className="w-full hidden md:flex justify-center">
            <ApexChart
              options={chartData}
              series={chartData.series}
              type="donut"
              width={380}
              height={380}
            />
          </div>
          <div className="w-full flex md:hidden justify-center">
            <ApexChart
              options={chartData}
              series={chartData.series}
              type="donut"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full grid gap-7">
            {data.map((item: ItemOption, i: number) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-[18px]">
                  <span
                    className="w-4 h-4 flex-shrink-0 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span className="font-outfit font-medium text-2xl text-[#8C97A7]">
                    {item.label}
                  </span>
                </div>
                <span className="inline-block w-20 text-right font-outfit font-medium text-2xl text-dark">
                  {item.value.toString()}%
                </span>
              </div>
            ))}
          </div>
        </AnimationContainer>
        <AnimationContainer className="w-full max-w-[555px] flex-shrink-0 border-2 border-dark rounded-[18px] px-7 py-8 bg-white shadow-theme-lg">
          <p className="font-raleway font-bold text-[31px] text-center mb-[7px]">
            Token Information
          </p>
          <p className="font-outfit font-medium text-base text-center mb-[18px]">
            Lorem ipsum dolor sit amet consectetur. Non donec eu velit neque.
            Nulla nunc lobortis mauris egestas rutrum mi sit.{" "}
          </p>
          <ul className="grid gap-4 list px-5 mb-3.5">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 flex-shrink-0 rounded-full bg-dark rounded-full" />
              <span className="font-outfit font-medium text-base">
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 flex-shrink-0 rounded-full bg-dark rounded-full" />
              <span className="font-outfit font-medium text-base">
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 flex-shrink-0 rounded-full bg-dark rounded-full" />
              <span className="font-outfit font-medium text-base">
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 flex-shrink-0 rounded-full bg-dark rounded-full" />
              <span className="font-outfit font-medium text-base">
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 flex-shrink-0 rounded-full bg-dark rounded-full" />
              <span className="font-outfit font-medium text-base">
                Lorem ipsum dolor sit amet
              </span>
            </li>
          </ul>
          <p className="font-outfit font-medium text-base pl-5">
            Lorem ipsum dolor sit amet consectetur. Non donec eu velit neque.
            Nulla nunc lobortis mauris egestas rutrum mi sit. F
          </p>
        </AnimationContainer>
      </div>
    </div>
  );
};

export default Tokenomics;
