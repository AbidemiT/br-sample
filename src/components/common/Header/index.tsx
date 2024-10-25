"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

import Logo from "@/assets/icons/Logo";
import Hamburger from "@/assets/icons/Hamburger";
import Cancel from "@/assets/icons/Cancel";
import useMediaQueryWatcher from "@/config/hooks/useMediaQueryWatcher";
import MenuLink from "../MenuLink";
import { menuLinks } from "@/config/constants/globals";
import ArrowRight from "@/assets/icons/ArrowRignt";

const Header = (): ReactNode => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isTablet = useMediaQueryWatcher("(min-width: 1024px)");

  const showMenuFunc = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles["wrapper"]}>
        <Link href="/" className={styles["logo-container"]}>
          <Logo />
        </Link>
        
        {isTablet && (
          <>
            <nav className="lg:block">
              <ul className={styles["header-menu"]}>
                {menuLinks.map(({ title, slur }) => (
                  <MenuLink
                    fontWeight="font-bold"
                    linkColor="text-black"
                    title={title}
                    slur={slur}
                    key={title}
                  />
                ))}
              </ul>
            </nav>
            <nav className="lg:block">
              <ul className={styles["auth-menu"]}>
                <MenuLink
                  fontWeight="font-bold"
                  linkColor="text-black"
                  title="Log in"
                  slur="#!"
                />
                <li className="text-center my-4">
                  <Link
                    href="/sign-up"
                    className="flex items-center gap-12 px-16 py-8 rounded-lg text-black bg-white text-sm border-none cursor-pointer min-w-96"
                  >
                    <p className="text-sm">Sign up</p>
                    <div className="w-14.5 h-10.5 rotate-45">
                      <ArrowRight color="stroke-[#191A1A]" />
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        {showMenu && (
          <nav className={styles["show-menu"]}>
            <ul className={styles["header-menu"]}>
              {menuLinks.map(({ slur, title }) => (
                <MenuLink
                  fontWeight="font-bold"
                  linkColor="text-black"
                  title={title}
                  slur={slur}
                  key={title}
                />
              ))}
              <MenuLink
                fontWeight="font-bold"
                linkColor="text-black"
                title="Login"
                slur="#!"
              />
              <li className={styles["list"]}>
                <Link href="/sign-up" className={styles["a"]}>
                  <p className="text-sm font-light">Sign Up</p>
                  <div className="d-block w-14.5 h-10.5">
                    <ArrowRight color="stroke-[#FFFFFF33]" />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <button
          aria-label={!showMenu ? "menu" : "close"}
          className={styles["toggle-menu-btn"]}
          onClick={showMenuFunc}
        >
          {!showMenu ? (
            <Hamburger color="fill-white" />
          ) : (
            <Cancel color="stroke-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
