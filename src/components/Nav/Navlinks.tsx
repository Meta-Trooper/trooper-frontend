import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type NavLinkType = {
  route: string;
  text: string;
};

const NAVLINKS: NavLinkType[] = [
  { route: "/gamers", text: "Gamers" },
  { route: "/hire", text: "Hire" },
  { route: "/jobs", text: "Jobs" },
];

const NavLinks = () => {
  return (
    <>
      {NAVLINKS.map((link) => (
        <Navlink {...link} key={link.route} />
      ))}
    </>
  );
};

const Navlink: React.FC<NavLinkType> = (props) => {
  const router = useRouter();
  return (
    <Link href={props.route}>
      <h2
        className={`${
          router.pathname === props.route ? "text-highlight " : "text-subtitle "
        } cursor-pointer`}
      >
        {props.text}
      </h2>
    </Link>
  );
};

export default NavLinks;
