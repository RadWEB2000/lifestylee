import { tNavigation } from "@/nav/Navigation.models";
import { tSubdomains } from "@/subdomains/Subdomains.models";
import logo_64 from "@/img/logo_64.png";
import { subdomains } from "@/data/subdomains";
import { tMenu } from "@/nav/Menu/Menu.models";

type main = tSubdomains & {
  navigation: Omit<tNavigation, 'menu'> & {
    menus: Array<{
      subdomain:'home'|typeof subdomains[number];
    } & tMenu >
  };
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
    menus: [
      {
        subdomain:'home',
        menu:[
          {
            id:'categories_home',
            link:{
              title:'Kategorie',
              url:'/',
              props: {
                hrefLang:'pl_PL'
              }
            },
            submenu: subdomains.map((item) => {
              return {
                title:item,
                url:`/${item}`,
                props: {
                  hrefLang:'pl_PL'
                }
              }
            })
          },
          {
            id:'seo_home',
            link:{
              title:'Oferta SEO',
              url:'https://rad-web.pl',
              props: {
                hrefLang:'pl_PL'
              }
            }
          },
          {
            id:'www_home',
            link:{
              title:'Oferta WWW',
              url:'https://rad-web.pl',
              props: {
                hrefLang:'pl_PL'
              }
            }
          }
        ]
      },
      {
        subdomain:'technologia',
        menu:[
          {
            id:'_technology',
            link:{
              title:'Internet',
              url:'/technologia/internet',
              props:{
                hrefLang:'pl_PL'
              }
            }
          },
          {
            id:'_technology',
            link:{
              title:'Software',
              url:'/technologia/software',
              props:{
                hrefLang:'pl_PL'
              }
            },
            submenu: [
              {
                title:'Aplikacje mobilne',
                url:'/technologia/software/aplikacje-mobilne',
                props:{
                  hrefLang:'pl_PL'
                }
              }
            ]
          },
          {
            id:'_technology',
            link:{
              title:'Hardware',
              url:'/technologia/hardware',
              props:{
                hrefLang:'pl_PL'
              }
            },
            submenu: [
              {
                title:'Laptopy',
                url:'/technologia/hardware/laptopy',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Smartfony',
                url:'/technologia/hardware/smartfony',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Telewizory',
                url:'/technologia/hardware/telewizory',
                props:{
                  hrefLang:'pl_PL'
                }
              },
            ]
          },
          {
            id:'_technology',
            link:{
              title:'Komponenty PC',
              url:'/technologia/komponenty-pc',
              props:{
                hrefLang:'pl_PL'
              }
            },
            submenu: [
              {
                title:'Procesory',
                url:'/technologia/komponenty-pc/cpu',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Karty graficzne',
                url:'/technologia/komponenty-pc/gpu',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'RAM',
                url:'/technologia/komponenty-pc/ram',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Dyski twarde',
                url:'/technologia/komponenty-pc/dyski-twarde',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Zasilacze',
                url:'/technologia/komponenty-pc/zasilacze',
                props:{
                  hrefLang:'pl_PL'
                }
              }
            ]
          },
          {
            id:'_technology',
            link:{
              title:'Perferia',
              url:'/technologia/peryferia',
              props:{
                hrefLang:'pl_PL'
              }
            },
            submenu: [
              {
                title:'Monitory',
                url:'/technologia/peryferia/monitory',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Klawiatury',
                url:'/technologia/peryferia/klawiatury',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Myszki',
                url:'/technologia/peryferia/myszki',
                props:{
                  hrefLang:'pl_PL'
                }
              },
              {
                title:'Słuchawki',
                url:'/technologia/peryferia/sluchawki',
                props:{
                  hrefLang:'pl_PL'
                }
              }
            ]
          },
          {
            id:'_technology',
            link:{
              title:'',
              url:'/technologia/',
              props:{
                hrefLang:'pl_PL'
              }
            },
            submenu: [
              {
                title:'',
                url:'/technologia/',
                props:{
                  hrefLang:'pl_PL'
                }
              }
            ]
          },
          {
            id:'_technology',
            link:{
              title:'Gaming',
              url:'/technologia/gaming',
              props:{
                hrefLang:'pl_PL'
              }
            }
          },
          {
            id:'_technology',
            link:{
              title:'Gadety',
              url:'/technologia/gadzety',
              props:{
                hrefLang:'pl_PL'
              }
            }
          },
        ]
      },
      {
        subdomain:'rolnictwo',
        menu:[
          {
            id:'',
            link:{
              title:'',
              url:'/'
            }
          }
        ]
      },
      {
        subdomain:'beauty',
        menu:[
          {
            id:'',
            link:{
              title:'',
              url:'/'
            }
          }
        ]
      },
    ]
  },
};
