import Link from "next/link";
import Image from "next/image";

import Logo from "../public/Logo.png";

import Instagram from "../public/socials/Instagram.png";
import YouTube from "../public/socials/Youtube.png";
import TikTok from "../public/socials/TikTok.png";

export default function Sidebar() {
  return (
    <nav className="md:w-1/4 md:h-screen p-12 pb-0 md:pb-12 flex flex-col justify-between">
      <Link href="/" passHref>
        <div className="cursor-pointer hover:opacity-50 transition-all">
          <Image src={Logo} alt="Logo" width="64" height="64" />
        </div>
      </Link>
      <div className="mt-4 md:mt-0">
        <p className="mb-4 text-white hover:underline hover:text-gray-300 transition-all">
          <Link href="/" passHref>
            HOME
          </Link>
        </p>
        <p className="mb-4 text-white hover:underline hover:text-gray-300 transition-all">
          <Link href="/about" passHref>
            ABOUT
          </Link>
        </p>
        <p className="mb-4 text-white hover:underline hover:text-gray-300 transition-all">
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
        {/* <div className="mr-4 cursor-pointer hover:opacity-50 transition-all">
          <Link href="https://www.tiktok.com/@oliverrebolledoj" passHref>
            <Image src={TikTok} width="32" height="32" alt="TikTok" />
          </Link>
        </div>
        <div className="cursor-pointer hover:opacity-50 transition-all">
          <Link
            href="https://www.youtube.com/channel/UCiRckV5KzMqOGDTkusiu67g"
            passHref
          >
            <Image src={YouTube} width="32" height="32" alt="YouTube" />
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
