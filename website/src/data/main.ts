import { tNavigation } from "@/nav/Navigation.models";
import { tSubdomains } from "@/subdomains/Subdomains.models";
import logo_64 from "@/img/logo_64.png";

type main = tSubdomains & {
  navigation: tNavigation;
};

export const main: main = {
  subdomains: [
    {
      title: "Rodzina",
      url: "localhost:3000",
      color: "#e9bc30",
      props: {
        "aria-label": "Blog o rodzinie",
        "aria-labelledby": "Blog o rodzinie",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Technologia",
      url: "technologia.localhost:3000",
      color: "#02a4ef",
      props: {
        "aria-label": "Blog o branży technologicznej",
        "aria-labelledby": "Blog o branży technologicznej",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Biznes",
      url: "biznes.localhost:3000",
      color: "#e73e34",
      props: {
        "aria-label": "Blog dla przedsiębiorców",
        "aria-labelledby": "Blog dla przedsiębiorców",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Rolnictwo",
      url: "rolnictwo.localhost:3000",
      color: "#8cd253",
      props: {
        "aria-label": "Branżowy portal dla rolników",
        "aria-labelledby": "Branżowy portal dla rolników",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Polityka",
      url: "polityka.localhost:3000",
      color: "#c7bea2",
      props: {
        "aria-label": "Najważniejsze wieści ze świata polityki",
        "aria-labelledby": "Najważniejsze wieści ze świata polityki",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Transport",
      url: "transport.localhost:3000",
      color: "#7d79a9",
      props: {
        "aria-label": "Nowości z branży transportowej",
        "aria-labelledby": "Nowości z branży transportowej",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Beauty",
      url: "beauty.localhost:3000",
      color: "#edacb5",
      props: {
        "aria-label": "Portal branżowy o świecie mody",
        "aria-labelledby": "Portal branżowy o świecie mody",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Hobby",
      url: "hobby.localhost:3000",
      color: "#eeb37f",
      props: {
        "aria-label": "Ciekawostki o Twoim hobby",
        "aria-labelledby": "Ciekawostki o Twoim hobby",
        hrefLang: "pl_PL",
      },
    },
    {
      title: "Podróże",
      url: "https://podroze.localhost:3000",
      color: "#70779c",
      props: {
        "aria-label": "Blog o podróżach małych i dużych",
        "aria-labelledby": "Blog o podróżach małych i dużych",
        hrefLang: "pl_PL",
      },
    },
  ],
  navigation: {
    brand: {
      main: {
        title: "LifeStylee",
        logo: {
          altText: "LifeStylee Blog",
          sourceSrc: logo_64.src,
          title: "LifeStylee Blog",
        },
        url: "https://localhost:3000",
        props: {
          hrefLang: "pl_PL",
        },
      },
    },
    search: {
      field: {
        placeholder: "Szukaj",
      },
      button: {
        title: "Szukaj",
      },
    },
  },
};
