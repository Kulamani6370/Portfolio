import { useState } from "react";
import { links } from "../data";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-emerald-100 p-2 fixed w-full z-50 top-0 shadow-lg">
      <div className="mx-auto max-w-7xl px-8 py-3 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          Kulamani<span className="text-emerald-600">Portfolio</span>
        </h2>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Links */}
        <div
          className={`flex flex-col gap-y-3 items-center mt-4 sm:mt-0 sm:flex-row sm:gap-x-6 sm:ml-16 
  absolute sm:static left-0 w-full bg-emerald-100 sm:bg-transparent py-4 sm:py-0 
  transition-all duration-300 shadow-sm sm:shadow-none
  ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 sm:opacity-100"}`}
        >
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
