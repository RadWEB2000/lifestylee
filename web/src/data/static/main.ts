import logo from "@/img/icon_512.png";
import { tNavigation } from "@/nav/Navigation.models";

type main = {
  nav: tNavigation;
};

const main: main = {
  nav: {
    subdomains: [
      {
        name: "Biznes",
        slug: "/biznes",
        uri: "/biznes",
      },
      {
        name: "Budownictwo",
        slug: "/budownictwo",
        uri: "/budownictwo",
      },
      {
        name: "Gaming",
        slug: "/gaming",
        uri: "/gaming",
      },
      {
        name: "Gastronomia",
        slug: "/gastronomia",
        uri: "/gastronomia",
      },
      {
        name: "Historia",
        slug: "/historia",
        uri: "/historia",
      },
      {
        name: "Kultura",
        slug: "/kultura",
        uri: "/kultura",
      },
      {
        name: "Motoryzacja",
        slug: "/motoryzacja",
        uri: "/motoryzacja",
      },
      {
        name: "Podróże",
        slug: "/podroze",
        uri: "/podroze",
      },
      {
        name: "Religia",
        slug: "/religia",
        uri: "/religia",
      },
      {
        name: "Polityka",
        slug: "/polityka",
        uri: "/polityka",
      },
      {
        name: "Prawo",
        slug: "/prawo",
        uri: "/prawo",
      },
      {
        name: "Rolnictwo",
        slug: "/rolnictwo",
        uri: "/rolnictwo",
      },
      {
        name: "Sport",
        slug: "/sport",
        uri: "/sport",
      },
      {
        name: "Technologia",
        slug: "/technologia",
        uri: "/technologia",
      },
      {
        name: "Wizaż",
        slug: "/wizaz",
        uri: "/wizaz",
      },
      {
        name: "Zdrowie",
        slug: "/zdrowie",
        uri: "/zdrowie",
      },
    ],
    brand: {
      name: "LifeeStylee",
      slug: "/",
      uri: "/",
      logo: {
        altText: "LifeStylee - Logo",
        sourceUrl: logo.src,
        srcSet: "",
        title: "LifeStylee - Logo",
      },
    },
    menuButton: {
      label: "Menu",
    },
  },
};

export default main;
