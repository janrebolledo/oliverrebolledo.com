import Link from "next/link";

import Instagram from "../public/Instagram.png";
import Twitter from "../public/Twitter.png";
import Youtube from "../public/Youtube.png";

export default function Footer() {
  return (
    <footer>
      <h4>OLIVER REBOLLEDO</h4>
      <ul>
        <li className="underline">
          <Link href="/">HOME</Link>
        </li>
        <li className="underline">
          <Link href="/work">WORK</Link>
        </li>
        <li className="underline">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="footer-socials">
        <Link href="https://instagram.com">
          <a>
            <img src={Instagram.src} />
          </a>
        </Link>
        <Link href="https://twitter.com">
          <a>
            <img src={Twitter.src} />
          </a>
        </Link>
        <Link href="https://youtube.com">
          <a>
            <img src={Youtube.src} />
          </a>
        </Link>
      </div>
    </footer>
  );
}
