import Link from "next/link";
import Image from "next/image";

import Logo from "../public/Logo.png";

import Instagram from "../public/socials/Instagram.png";
// import YouTube from "../public/socials/Youtube.png";
// import TikTok from "../public/socials/TikTok.png";

export default function Header() {
  return (
    <header className="p-8 pb-0 flex flex-col items-center">
      <nav className="w-screen bg-black left-0 px-2 py-2 md:px-0 md:flex md:items-center">
        <div className="flex flex-row w-full justify-between align-center mt-4 md:mt-0">
          <p className="w-1/3 md:w-max-content flex items-center justify-center text-white hover:underline hover:text-gray-300 transition-all">
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </p>
          <Link href="/" passHref>
            <div className="cursor-pointer flex justify-center w-1/3 hover:opacity-50 transition-all">
              <Image src={Logo} alt="Logo" width="128" height="46" />
            </div>
          </Link>
          <p className="w-1/3 md:w-max-content flex items-center justify-center text-white hover:underline hover:text-gray-300 transition-all">
            <Link href="/contact" passHref>
              CONTACT
            </Link>
          </p>
        </div>
      </nav>
    </header>
  );
}
