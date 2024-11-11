import Button from "@/components/Button";
import React, { EventHandler, useCallback } from "react";
import "@/styles/navbar.css";
import { routes } from "@/constants/routes";
import { NavtabType } from "@/types/navtab.types";
import { useRouter } from "next/router";

const navBarTab: NavtabType[] = [
  {
    label: "Home",
    route: routes.HOME,
    hidden: false,
  },

  {
    label: "New",
    route: routes.NEW_STORIES,
    hidden: false,
  },
  {
    label: "Top",
    route: routes.TOP_STORIES,
    hidden: false,
  },
  {
    label: "Best",
    route: routes.BEST_STORIES,
    hidden: false,
  },
];
const Navbar = () => {
  const router = useRouter();
  const onClick = useCallback((tab: NavtabType) => {
    router.push(tab.route);
  }, []);
  return (
    <div className={"navbar-container"}>
      <Button className="logo" onClick={onClick} label={"Y hacker News"} />
      <div className="navbar-tabs">
        {navBarTab?.map((tab, idx) => (
          <>
            <Button className={'navbarButtons'} key={idx} onClick={() => onClick(tab)} label={tab.label} />
            {idx < navBarTab.length - 1 ? "|" : ""}
          </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
