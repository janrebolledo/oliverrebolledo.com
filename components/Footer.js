import Link from "next/link";

function Footer() {
  return (
    <footer className="border-solid border-t-2 border-white py-12 px-10%">
      <div className="flex justify-between flex-col md:flex-row">
        <Link href="/">HOME</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">CONTACT</Link>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <p>DESVO FILMZ &copy; 2022</p>
        <p>
          DIGITAL EXPERIENCE BY{" "}
          <a href="https://janrebolledo" rel="noopener noopener">
            JAN REBOLLEDO
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
