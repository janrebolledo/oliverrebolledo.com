import Link from "next/link";
import React from "react";
import Clock from "react-live-clock";

function Header() {
  function toggleMenu() {
    const menuBtn = document.querySelector("#menuBtn");

    menuBtn.classList.toggle("menuOpen");
  }
  return (
    <header className="w-full grid grid-cols-12 py-8 px-10% fixed">
      <h1 className="font-bold text-2xl col-span-6">DESVO FILMZ</h1>
      <p className="col-span-6 md:col-span-3 text-right md:text-left">
        BASED IN LOS ANGELES
        <br />
        <Clock timezone="US/Pacific" format="hh:mm:ss" ticking={true} />
      </p>
      <div
        className="col-span-3 max-h-5 overflow-y-hidden hidden md:block"
        onClick={toggleMenu}
      >
        <p
          className="text-right h-5 transition-all cursor-pointer"
          id="menuBtn"
        >
          MENU
        </p>
        <div className="w-full flex flex-row justify-between h-5">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#about">GET IN TOUCH</Link>
        </div>
      </div>
      <div className="block md:hidden col-span-12 mt-2">
        <div className="w-full flex flex-row justify-between h-5">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#about">GET IN TOUCH</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
