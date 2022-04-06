import Link from "next/link";
import Image from "next/image";

import Logo from "../public/Logo.png";

import Instagram from "../public/socials/Instagram.png";
// import YouTube from "../public/socials/Youtube.png";
// import TikTok from "../public/socials/TikTok.png";

export default function Sidebar() {
  function menuToggle() {
    const toggle = document.getElementById("toggle-span");
    const nav = document.querySelector("nav");

    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      toggle.innerHTML = "close";
    } else {
      nav.classList.add("hidden");
      toggle.innerHTML = "menu";
    }
  }

  return (
    <header className="md:w-1/4 md:h-screen p-12 pb-0 md:pb-12 flex flex-row md:flex-col items-center md:items-start justify-between">
      <Link href="/" passHref>
        <div className="cursor-pointer hover:opacity-50 transition-all">
          <Image src={Logo} alt="Logo" width="64" height="64" />
        </div>
      </Link>
      <nav className="hidden absolute md:static w-screen md:w-max bg-black left-0 px-12 py-6 md:px-0 top-28 md:h-full md:basis-4/6 md:flex md:flex-col md:justify-between">
        <div className="mt-4 md:mt-0">
          <p
            className="mb-4 text-white hover:underline hover:text-gray-300 transition-all"
            onClick={menuToggle}
          >
            <Link href="/" passHref>
              HOME
            </Link>
          </p>
          <p
            className="mb-4 text-white hover:underline hover:text-gray-300 transition-all"
            onClick={menuToggle}
          >
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </p>
          <p
            className="mb-4 text-white hover:underline hover:text-gray-300 transition-all"
            onClick={menuToggle}
          >
            <Link href="/contact" passHref>
              CONTACT
            </Link>
          </p>
        </div>
        <div className="flex-row flex">
          <div className="mr-4 cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://instagram.com/desvofilmz" passHref>
              <Image src={Instagram} width="32" height="32" alt="Instagram" />
            </Link>
          </div>
        </div>
      </nav>
      <p
        className="text-4xl cursor-pointer h-max flex items-center md:hidden"
        id="mobile-nav-toggle"
        onClick={menuToggle}
      >
        <span className="material-icons" id="toggle-span">
          menu
        </span>
      </p>
    </header>
  );
}
