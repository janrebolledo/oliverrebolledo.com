import Link from "next/link";
import Image from "next/image";

import Logo from "../public/Logo.png";

export default function Header() {
  return (
    <>
      <header className="p-8 items-center hidden md:flex flex-row w-full justify-between align-center mt-4 md:mt-0 ab-chanel">
        <p className="w-1/3 md:w-max-content flex items-center justify-center text-white hover:underline hover:text-gray-300 transition-all">
          <Link href="../about" passHref>
            ABOUT
          </Link>
        </p>
        <Link href="/" passHref>
          <div className="cursor-pointer flex justify-center w-1/3 hover:opacity-50 transition-all">
            <Image src={Logo} alt="Logo" width="128" height="128" />
          </div>
        </Link>
        <p className="w-1/3 md:w-max-content flex items-center justify-center text-white hover:underline hover:text-gray-300 transition-all">
          <Link href="../contact" passHref>
            CONTACT
          </Link>
        </p>
      </header>
      <header className="flex flex-col p-12 md:hidden ab-chanel">
        <Link href="/" passHref>
          <div className="cursor-pointer hover:opacity-50 transition-all">
            <Image src={Logo} alt="Logo" width="128" height="128" />
          </div>
        </Link>
        <div className="w-full h-[2px] mt-4 bg-zinc-800" />
        <div className="mt-4 flex flex-row justify-between">
          <p className="text-white hover:underline hover:text-gray-300 transition-all">
            <Link href="../about">ABOUT</Link>
          </p>
          <p className="text-white hover:underline hover:text-gray-300 transition-all">
            <Link href="../contact">CONTACT</Link>
          </p>
        </div>
      </header>
    </>
  );
}
