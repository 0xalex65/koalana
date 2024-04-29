import React, { useState } from "react";
import { useRouter } from "next/router";
import OutsideClickHandler from "react-outside-click-handler";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
import AnimationContainer from "./AnimationContainer";

const locales = [
  { lang: "en", label: "English", flag: "/flags/en.svg" },
  { lang: "es", label: "Spanish", flag: "/flags/es.svg" },
  { lang: "bg", label: "Bulgarian", flag: "/flags/bg.svg" },
  { lang: "cn", label: "Chinese", flag: "/flags/cn.svg" },
  { lang: "de", label: "German", flag: "/flags/de.svg" },
  { lang: "fr", label: "French", flag: "/flags/fr.svg" },
  { lang: "jp", label: "Japanese", flag: "/flags/jp.svg" },
  { lang: "kr", label: "Korean", flag: "/flags/kr.svg" },
];

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [opened, setOpened] = useState(false);
  const [openedLangSwitcher, setOpenedLangSwitcher] = useState(false);
  const navs = [
    { id: 1, label: "Home", path: "home" },
    { id: 2, label: "How To Buy", path: "how2buy" },
    { id: 3, label: "FAQ", path: "faq" },
  ];

  const handleToggleOpen = () => setOpened(!opened);

  const handleClick = (path: string) => {
    scroller.scrollTo(path, { smooth: true });
    setOpened(false);
  };

  const handleSwitchLang = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
    setOpenedLangSwitcher(false);
  };

  return (
    <AnimationContainer className="fixed w-full top-9 z-50">
      <div className="w-full max-w-container mx-auto px-5 md:px-[50px]">
        <div className="mx-auto h-[86px] bg-[#FFDECC] border-2 border-dark rounded-md px-5 md:px-[38px] relative">
          <div className="w-full h-full flex items-center justify-between relative z-10">
            <h2 className="font-sansation text-3xl">koalana</h2>
            <div
              className={`w-80 md:w-max h-screen z-50 md:h-auto fixed md:static top-0 md:top-auto left-0 md:left-auto bg-white md:bg-transparent p-5 md:p-0 pt-20 md:pt-0 transition ${
                opened ? `` : `-translate-x-full md:transform-none`
              }`}
            >
              <button className="w-10 h-10 flex md:hidden items-center justify-center border-2 border-dark rounded bg-primary shadow-theme-sm absolute top-5 right-5">
                <img
                  src="/icons/close.png"
                  className="w-6"
                  onClick={handleToggleOpen}
                  alt=""
                />
              </button>
              <ul className="flex flex-col md:flex-row gap-4 md:gap-[45px] font-overpass-mono font-semibold text-xl md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-5 md:mb-0">
                {navs.map((nav) => (
                  <li
                    className="cursor-pointer"
                    onClick={() => handleClick(nav.path)}
                    key={nav.id}
                  >
                    {nav.label}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row items-center gap-[33px] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
                <OutsideClickHandler
                  onOutsideClick={() => setOpenedLangSwitcher(false)}
                >
                  <div className="relative">
                    <div
                      className="flex items-center gap-[9.5px] cursor-pointer"
                      onClick={() => setOpenedLangSwitcher(true)}
                    >
                      <div className="w-[43px] h-[41px] flex items-center justify-center border-2 border-dark rounded-xl">
                        <img src="/flags/en.svg" className="w-6" alt="" />
                      </div>
                      <div className="flex items-start gap-[2.5px]">
                        <span className="font-semibold font-overpass-mono text-base">
                          Eng
                        </span>
                        <img
                          src="/icons/caret.svg"
                          width={14}
                          height={14}
                          className="mt-0.5"
                          alt=""
                        />
                      </div>
                    </div>
                    {openedLangSwitcher && (
                      <ul className="w-max absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2 font-semibold font-overpass-mono text-base bg-white p-3 border-2 border-dark rounded-xl shadow-theme-sm grid gap-2">
                        {locales.map((locale) => (
                          <li
                            key={locale.lang}
                            className="flex items-center gap-2.5 cursor-pointer"
                            onClick={() => handleSwitchLang(locale.lang)}
                          >
                            <img src={locale.flag} className="w-6" alt="" />
                            <span>{locale.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </OutsideClickHandler>
                <div className="flex gap-[11px]">
                  <button className="w-16 h-[35px] flex items-center justify-center border-2 border-dark rounded bg-primary shadow-theme-sm">
                    <img src="/icons/telegram.svg" alt="" />
                  </button>
                  <button className="w-16 h-[35px] flex items-center justify-center border-2 border-dark rounded bg-primary shadow-theme-sm">
                    <img src="/icons/twitter.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <button className="w-10 h-10 flex md:hidden items-center justify-center border-2 border-dark rounded bg-primary shadow-theme-sm">
              <img
                src="/icons/menu.png"
                className="h-6"
                onClick={handleToggleOpen}
                alt=""
              />
            </button>
          </div>
          <img
            src="/symbols/1.png"
            className="h-full absolute top-0 left-0"
            alt=""
          />
          <img
            src="/symbols/2.png"
            className="h-full absolute top-0 right-0"
            alt=""
          />
          <img
            src="/symbols/3.png"
            className="absolute top-0 left-32 md:left-[290px]"
            alt=""
          />
          <img
            src="/symbols/4.png"
            className="absolute bottom-0 right-20 md:right-[328px]"
            alt=""
          />
        </div>
      </div>
    </AnimationContainer>
  );
};

export default Header;
