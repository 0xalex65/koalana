import AnimationContainer from "./AnimationContainer";

const RoadMap = () => {
  const items = [
    {
      title: "Presale and Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim vestibulum sit pellentesque montes egestas justo. In nulla condimentum gravida nisi. Leo tortor nunc sed id nulla phasellus. Mi lectus elit enim ultrices pulvinar mi augue.",
    },
    {
      title: "Early Staking Incentive",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui senectus sagittis aliquam ante. A lectus sed at ornare. Cursus suspendisse nunc quis nec. Tempus arcu at fringilla eget imperdiet sed accumsan nulla pulvinar.",
    },
    {
      title: "Presale Token Claiming",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut tellus a eros mauris nunc fames convallis. Ut congue maecenas mauris neque. Placerat posuere sed pellentesque pretium risus tempor tempus imperdiet id. Cursus sed.",
    },
    {
      title: "Dex Launch on Uniswap",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae posuere sed ridiculus nibh. Consectetur volutpat integer ut consectetur. Lacus fringilla ac venenatis est cras neque quis facilisis eget. Risus risus accumsan tincidunt.",
    },
    {
      title: "Allocated Liquidity Provision",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pretium neque nunc dignissim phasellus at. Enim risus placerat nunc amet ac. Porta id sed in viverra bibendum. Viverra a eu leo eu habitasse egestas at. Aliquam enim et amet.",
    },
    {
      title: "Long-term Passive Reward",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum volutpat molestie tristique phasellus. Massa risus amet purus sit gravida facilisis lacus sit. Scelerisque id at in tempor orci enim dui nec ultricies. Feugiat neque vitae lacus.",
    },
  ];

  return (
    <div className="flex flex-col gap-[52px] items-center relative">
      <AnimationContainer className="font-teko font-extrabold text-6xl md:text-[77px] uppercase relative z-10">
        <span className="text-secondary title-outline drop-shadow-theme-sm">
          Our
        </span>
        &nbsp;
        <span className="text-primary title-outline drop-shadow-theme-sm">
          Roadmap
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[70px] gap-y-20 relative">
        {items.map((item, i) => (
          <AnimationContainer
            key={i}
            className="flex flex-col items-start gap-[50px]"
          >
            <div className="inline font-raleway font-extrabold text-3xl md:text-[44px] leading-[1.3] px-6 py-2.5 bg-secondary text-white rounded-[10px] border-2 border-dark shadow-theme-md relative">
              0{i + 1}
              <div className="w-3 border-x-[5px] h-[50px] bg-dark border-x-secondary -bottom-0.5  absolute left-1/2 -translate-x-1/2 translate-y-full" />
              <div className="w-6 h-6 bg-white border-2 border-dark bg-white rounded-full absolute absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
            <div className="grid gap-4 bg-white border-2 border-dark rounded-[10px] px-5 py-8 md:p-10 shadow-theme-md">
              <p className="font-raleway font-bold text-3xl">{item.title}</p>
              <p className="font-outfit font-medium text-base tracking-[-0.1px]">
                {item.description}
              </p>
            </div>
          </AnimationContainer>
        ))}
        <img
          src="/icons/10star.svg"
          className="absolute top-[60px] right-[84px]"
        />
      </div>

      <img
        src="/icons/line.svg"
        className="absolute top-[-30px] right-[-50px]"
      />
    </div>
  );
};

export default RoadMap;
