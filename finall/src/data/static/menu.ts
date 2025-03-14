export const menu: Array<{
  label: string;
  uri: string;
  submenu?: Array<{ label: string; uri: string }>;
}> = [
  {
    label: "Start",
    uri: "/"
  },
  {
    label: "Blog",
    uri: "/blog",
    submenu: [
      {
        label: "Zdrowie",
        uri: "/zdrowie"
      },
      {
        label: "Moda",
        uri: "/moda"
      },
      {
        label: "Uroda",
        uri: "/uroda"
      },
      {
        label: "Podróże",
        uri: "/podroze"
      },
      {
        label: "Rozwój osobisty",
        uri: "/rozwoj-osobisty"
      },
      {
        label: "Dom",
        uri: "/dom"
      }
    ]
  },
  {
    label: "Partnerstwo",
    uri: "/partnerstwo"
  },
  {
    label: "Kontakt",
    uri: "/kontakt"
  }
];
