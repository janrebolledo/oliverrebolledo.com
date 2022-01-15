import Link from "next/link";

export default function Header() {
  function toggleMenu() {
    const menu = document.querySelector("#menu");
    const menuBtn = document.getElementById("mobile-menu");

    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
      menuBtn.innerHTML = "menu";
    } else {
      menu.classList.add("menu-open");
      menuBtn.innerHTML = "close";
    }
  }
  return (
    <header>
      <h4 className="underline">
        <Link href="/">OLIVER REBOLLEDO</Link>
      </h4>
      <ul id="menu">
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
