/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  fallbackLng: {
    default: ["en"],
  },
  nonExplicitSupportedLngs: true,
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./my-custom/path")
      : "/public/my-custom/path",
};
