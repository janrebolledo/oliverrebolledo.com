import Link from "next/link";

export default function Header() {
  function toggleMenu() {
    const menu = document.querySelector("#menu");
    const menuBtn = document.getElementById("mobile-menu");
    const doc = document.body;

    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
      menuBtn.innerHTML = "menu";
      doc.classList.remove("state-menu-open");
    } else {
      menu.classList.add("menu-open");
      menuBtn.innerHTML = "close";
      doc.classList.add("state-menu-open");
    }
  }

  function closeMenu() {
    if (window.outerWidth && window.outerWidth < 980) {
      const menu = document.querySelector("#menu");
      const menuBtn = document.getElementById("mobile-menu");
      const doc = document.body;
      menu.classList.remove("menu-open");
      menuBtn.innerHTML = "menu";
      doc.classList.remove("state-menu-open");
    }
  }
  return (
    <header>
      <h4 className="underline" onClick={closeMenu}>
        <Link href="/" passHref>
          OLIVER REBOLLEDO
        </Link>
      </h4>
      <ul id="menu">
        <li className="underline" onClick={closeMenu}>
          <Link href="/" passHref>
            HOME
          </Link>
        </li>
        <li className="underline" onClick={closeMenu}>
          <Link href="/work" passHref>
            WORK
          </Link>
        </li>
        <li className="underline" onClick={closeMenu}>
          <Link href="/about" passHref>
            ABOUT
          </Link>
        </li>
        <li className="underline" onClick={closeMenu}>
          <Link href="/contact" passHref>
            CONTACT
          </Link>
        </li>
      </ul>
      <span
        onClick={toggleMenu}
        id="mobile-menu"
        className="material-icons mobile-menu"
      >
        menu
      </span>
    </header>
  );
}
