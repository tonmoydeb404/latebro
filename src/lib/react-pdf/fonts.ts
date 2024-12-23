import { Font } from "@react-pdf/renderer";

export const registerOpenSans = () => {
  Font.register({
    family: "Open Sans",
    fonts: [
      { src: "/fonts/open-sans/400.ttf", fontWeight: 400 },
      { src: "/fonts/open-sans/500.ttf", fontWeight: 500 },
      { src: "/fonts/open-sans/600.ttf", fontWeight: 600 },
      { src: "/fonts/open-sans/700.ttf", fontWeight: 700 },
      { src: "/fonts/open-sans/800.ttf", fontWeight: 800 },
    ],
  });
};

export const registerInter = () => {
  Font.register({
    family: "Inter",
    fonts: [
      { src: "/fonts/inter/400.ttf", fontWeight: 400 },
      { src: "/fonts/inter/500.ttf", fontWeight: 500 },
      { src: "/fonts/inter/600.ttf", fontWeight: 600 },
      { src: "/fonts/inter/700.ttf", fontWeight: 700 },
      { src: "/fonts/inter/800.ttf", fontWeight: 800 },
    ],
  });
};

export const registerRoboto = () => {
  Font.register({
    family: "Roboto",
    fonts: [
      { src: "/fonts/roboto/400.ttf", fontWeight: 400 },
      { src: "/fonts/roboto/500.ttf", fontWeight: 500 },
      { src: "/fonts/roboto/700.ttf", fontWeight: 700 },
    ],
  });
};
