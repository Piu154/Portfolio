import React, { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ closeMenu }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className="nav-li_a"
            onClick={() => {
              closeMenu();
              document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Priya
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems closeMenu={closeMenu} />
          </nav>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-300`}
      >
        <nav className="p-5 flex flex-col items-center justify-center h-full">
          <NavItems closeMenu={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
