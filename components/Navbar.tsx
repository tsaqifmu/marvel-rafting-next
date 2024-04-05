"use client";

import { navLinks, styles } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonNav } from "./ButtonReservation";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed z-50  flex w-full items-center justify-center bg-white shadow-xl">
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} flex w-full items-center justify-between py-3`}
      >
        <Link href={"/"}>
          <Image
            src={"/navbarLogo.png"}
            alt="Logo Image"
            width={212}
            height={150}
            className="w-[150px] xl:w-[212px]"
          />
        </Link>

        {/* FOR MOBILE */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="Toggle"
            width={28}
            height={28}
            className="h-[28px] w-[28px] object-contain "
            onClick={() => setToggle((prev) => !prev)}
          />
          <nav
            className={`${
              toggle ? `flex` : `hidden`
            } min-w[140px] sidebar absolute right-0 top-20 z-50 mx-4 my-2 flex-col rounded-xl bg-white p-6 shadow-2xl`}
          >
            <ul className="flex flex-1 list-none flex-col items-center justify-end">
              {navLinks.map((navLink, index) => (
                <li
                  key={navLink.id}
                  className={`cursor-pointer text-[16px] font-normal text-slate-800 ${
                    index === navLinks.length - 1 ? `mr-0` : `mb-4`
                  }`}
                >
                  {/* apakah A dibawah bisa diganti? */}
                  <a href={`/#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 hover:translate-y-2">
              <ButtonNav />
            </div>
          </nav>
        </div>

        {/* FOR DESKTOP */}
        <nav className="hidden items-center justify-between lg:flex">
          <ul className="flex flex-1 list-none items-center justify-end">
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`hover:text-greenWA cursor-pointer text-base font-normal text-slate-800 transition-all xl:text-lg ${
                  index === navLinks.length - 1 ? `mr-0` : `mr-[30px]`
                }`}
              >
                <a href={`/#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden transition-all hover:-translate-y-1 lg:flex">
          <ButtonNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
