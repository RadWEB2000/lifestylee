import { tNavigation } from "@/nav/Navigation.models";

type t_main = {
  navigation: tNavigation;
};

export const main: t_main = {
  navigation: {
    brand: {
      brand: {
        title: "LifeStylee",
        url: "/",
      },
      subbrand: {
        color: "#00f",
        title: "Technologia",
        url: "/",
      },
    },
    search: {
      button: {
        title: "Szukaj",
      },
      field: {
        placeholder: "Wpisz szukaną frazę",
      },
      form: {},
      id: "searchField",
    },
  },
};
