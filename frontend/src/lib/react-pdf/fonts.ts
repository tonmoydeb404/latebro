import { Font } from "@react-pdf/renderer";

// ----------------------------------------------------------------------

export const fonts = {
  roboto: "Roboto",
  inter: "Inter",
  open_sans: "Open Sans",
  montserrat: "Montserrat",
  poppins: "Poppins",
  railway: "Railway",
  ubuntu: "Ubuntu",
  fira_sans: "Fira Sans",
  hind_siliguri: "Hind Siliguri",
};

// ----------------------------------------------------------------------

export const registerOpenSans = () => {
  Font.register({
    family: fonts.open_sans,
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
    family: fonts.inter,
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
    family: fonts.roboto,
    fonts: [
      { src: "/fonts/roboto/400.ttf", fontWeight: 400 },
      { src: "/fonts/roboto/500.ttf", fontWeight: 500 },
      { src: "/fonts/roboto/700.ttf", fontWeight: 700 },
    ],
  });
};

export const registerFiraSans = () => {
  Font.register({
    family: fonts.fira_sans,
    fonts: [
      { src: "/fonts/fira-sans/400.ttf", fontWeight: 400 },
      { src: "/fonts/fira-sans/500.ttf", fontWeight: 500 },
      { src: "/fonts/fira-sans/600.ttf", fontWeight: 600 },
      { src: "/fonts/fira-sans/700.ttf", fontWeight: 700 },
      { src: "/fonts/fira-sans/800.ttf", fontWeight: 800 },
    ],
  });
};

export const registerHindSiliguri = () => {
  Font.register({
    family: fonts.hind_siliguri,
    fonts: [
      { src: "/fonts/hind-siliguri/400.ttf", fontWeight: 400 },
      { src: "/fonts/hind-siliguri/500.ttf", fontWeight: 500 },
      { src: "/fonts/hind-siliguri/600.ttf", fontWeight: 600 },
      { src: "/fonts/hind-siliguri/700.ttf", fontWeight: 700 },
    ],
  });
};

export const registerMontserrat = () => {
  Font.register({
    family: fonts.montserrat,
    fonts: [
      { src: "/fonts/montserrat/400.ttf", fontWeight: 400 },
      { src: "/fonts/montserrat/500.ttf", fontWeight: 500 },
      { src: "/fonts/montserrat/600.ttf", fontWeight: 600 },
      { src: "/fonts/montserrat/700.ttf", fontWeight: 700 },
      { src: "/fonts/montserrat/800.ttf", fontWeight: 800 },
    ],
  });
};

export const registerPoppins = () => {
  Font.register({
    family: fonts.poppins,
    fonts: [
      { src: "/fonts/poppins/400.ttf", fontWeight: 400 },
      { src: "/fonts/poppins/500.ttf", fontWeight: 500 },
      { src: "/fonts/poppins/600.ttf", fontWeight: 600 },
      { src: "/fonts/poppins/700.ttf", fontWeight: 700 },
      { src: "/fonts/poppins/800.ttf", fontWeight: 800 },
    ],
  });
};

export const registerRailway = () => {
  Font.register({
    family: fonts.railway,
    fonts: [
      { src: "/fonts/railway/400.ttf", fontWeight: 400 },
      { src: "/fonts/railway/500.ttf", fontWeight: 500 },
      { src: "/fonts/railway/600.ttf", fontWeight: 600 },
      { src: "/fonts/railway/700.ttf", fontWeight: 700 },
      { src: "/fonts/railway/800.ttf", fontWeight: 800 },
    ],
  });
};

export const registerUbuntu = () => {
  Font.register({
    family: fonts.ubuntu,
    fonts: [
      { src: "/fonts/ubuntu/400.ttf", fontWeight: 400 },
      { src: "/fonts/ubuntu/500.ttf", fontWeight: 500 },
      { src: "/fonts/ubuntu/700.ttf", fontWeight: 700 },
    ],
  });
};

export const registerFonts = () => {
  registerOpenSans();
  registerInter();
  registerRoboto();
  registerFiraSans();
  registerHindSiliguri();
  registerMontserrat();
  registerPoppins();
  registerRailway();
  registerUbuntu();
};
