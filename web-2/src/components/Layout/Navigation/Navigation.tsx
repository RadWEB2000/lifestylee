import { tNavigation } from "@/nav/Navigation.models";
import { Explorer, Menu, Subdomains } from "@/nav/index";

export default function Navigation(props: tNavigation) {
  return (
    <>
      <Subdomains subdomains={props.subdomains} />
      <Menu {...props.menu} />
      <Explorer {...props.explorer} />
    </>
  );
}
