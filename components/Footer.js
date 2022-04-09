import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-12 md:px-24">
      <p className="mb-12 md:mb-0">LOS ANGELES</p>
      <p className="text-white hover:underline hover:text-gray-300 transition-all mb-12 md:mb-0">
        <Link href="/">DESVO FILMZ</Link>
      </p>
      <p>&copy; 2022</p>
    </footer>
  );
}

export default Footer;
