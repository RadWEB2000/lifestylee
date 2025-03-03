import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    label: "Start",
    uri: "/",
  },
  {
    label: "Dom",
    uri: "/dom",
  },
  {
    label: "Zdrowie",
    uri: "/zdrowie",
  },
  {
    label: "Wellbeing",
    uri: "/wellbeing",
  },
  {
    label: "Moda",
    uri: "/moda",
  },
  {
    label: "Uroda",
    uri: "/uroda",
  },
  {
    label: "Podróże",
    uri: "/podroze",
  },
  {
    label: "Styl życia",
    uri: "/styl-zycia",
  },
  {
    label: "Dom",
    uri: "/dom",
  },
  {
    label: "Partnerstwa",
    uri: "/partnerstwa",
  },
  {
    label: "Kontakt",
    uri: "/kontakt",
  },
];

export default function SideBar() {
  return (
    <nav className="w-64 h-screen fixed top-0 left-0 bg-zinc-900 text-white p-5">
      <Link
        href="/"
        hrefLang="pl_PL"
        className="flex center flex-col mx-auto  items-center p-1 hover:brightness-125 duration-300 ease-linear"
      >
        <figure className="w-32 h-32 block relative">
          <Image
            alt="LifeStylee - Nowoczesne podejście do życia"
            className="object-contain object-center"
            fill
            loading="eager"
            priority
            src="/logo-256.png"
            title="LifeStylee - Nowoczesne podejście do życia"
          />
        </figure>
        <strong className="text-white font-lora font-black text-4xl">
          LifeeStylee
        </strong>
      </Link>
      <menu className="flex flex-col space-y-2 my-2">
        {menu.map(({ label, uri }) => {
          return (
            <Link
              className="px-4 py-2 rounded-lg hover:bg-zinc-700 uppercase font-semibold"
              href={uri}
              hrefLang="pl_PL"
              key={label}
            >
              {label}
            </Link>
          );
        })}
      </menu>
    </nav>
  );
}
