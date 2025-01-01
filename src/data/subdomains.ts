export type t_subdomain = tLink & {
  color: {
    background: string;
    foreground: string;
  };
};

export const subdomains: t_subdomain[] = [
  {
    color: {
      background: "#ffb6c1",
      foreground: "#000",
    },
    title: "Rodzina",
    url: "rodzina.lifestyle.pl", // Dom, ogród, wnętrza, rodzina, dziecko, ciąża, ślub, wesele
  },
  {
    color: {
      background: "#468284",
      foreground: "#000",
    },
    title: "Technologie",
    url: "technologie.lifestylee.pl", // IT, nowe technologie, komputery, gry komputerowe
  },
  {
    color: {
      background: "#98fb98",
      foreground: "#000",
    },
    title: "Zdrowie",
    url: "zdrowie.lifestylee.pl", // Diety, odchudzanie, zdrowie, medycyna
  },
  {
    color: {
      background: "#DAA520",
      foreground: "#000",
    },
    title: "Kultura",
    url: "kultura.lifestylee.pl", // Sztuka, Historia, Muzyka, Filmy, Rzeźby, Kultura, Wydarzenia
  },
  {
    color: {
      background: "#ff6347",
      foreground: "#000",
    },
    title: "Hobby",
    url: "hobby.lifestylee.pl", // Turystyka, podróże, fotografia, filmowanie, majsterkowanie
  },
  {
    color: {
      background: "#228b22",
      foreground: "#fff",
    },
    title: "Rolnictwo",
    url: "rolnictwo.lifestylee.pl", // Zoologia, rolnictwo, leśnictwo, rybołóstwo
  },
  {
    color: {
      background: "#8a2be2",
      foreground: "#fff",
    },
    title: "Gaming",
    url: "gaming.lifestylee.pl", // Recenzje, solucje, publicystyka
  },
  {
    color: {
      background: "#8b0000",
      foreground: "#fff",
    },
    title: "Polityka",
    url: "polityka.lifestylee.pl", // Polityka krajowa, parlament, zagranica
  },
  {
    color: {
      background: "#2e8b57",
      foreground: "#fff",
    },
    title: "Biznes",
    url: "biznes.lifestylee.pl", // Firma, wizerunek, gospodarka, przemysł, E-biznes
  },
  {
    color: {
      background: "#ff4500",
      foreground: "#fff",
    },
    title: "Lifestyle",
    url: "lifestyle.lifestylee.pl", // plotki, życie gwiazd, lifestyle
  },
  {
    color: {
      background: "#4169e1",
      foreground: "#fff",
    },
    title: "Rozwój",
    url: "rozwoj.lifestylee.pl", // psychologia, rozwój osobisty, edukacja, nauka
  },
  {
    color: {
      background: "#dc143c",
      foreground: "#fff",
    },
    title: "Sport",
    url: "sport.lifestylee.pl", // sport, fitness, kulturystyka
  },
];
