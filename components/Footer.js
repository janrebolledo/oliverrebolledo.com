import Link from "next/link";

import Instagram from "../public/Instagram.png";
import Twitter from "../public/Twitter.png";
import Youtube from "../public/Youtube.png";

export default function Footer() {
  return (
    <footer>
      <Link href="/" passHref>
        <h4 className="underline">OLIVER REBOLLEDO</h4>
      </Link>
      <ul>
        <li className="underline">
          <Link href="/" passHref>
            HOME
          </Link>
        </li>
        <li className="underline">
          <Link href="/work" passHref>
            WORK
          </Link>
        </li>
        <li className="underline">
          <Link href="/about" passHref>
            ABOUT
          </Link>
        </li>
        <li className="underline">
          <Link href="/contact" passHref>
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="footer-socials">
        <Link href="https://instagram.com/oliverrebolledoj" passHref>
          <a>
            <img alt="Instagram" src={Instagram.src} />
          </a>
        </Link>
        <Link href="https://twitter.com/oliverrebolledo" passHref>
          <a>
            <img alt="Twitter" src={Twitter.src} />
          </a>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCiRckV5KzMqOGDTkusiu67g"
          passHref
        >
          <a>
            <img alt="Youtube" src={Youtube.src} />
          </a>
        </Link>
      </div>
    </footer>
  );
}
