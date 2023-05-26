import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const [navItems, setNavItems] = useState(false);
  const navList = [
    { id: 1, navLabel: "Home", navRoute: "/" },
    { id: 2, navLabel: "About", navRoute: "/about" },
    { id: 3, navLabel: "Projects", navRoute: "/projects" },
    { id: 4, navLabel: "Contact", navRoute: "/contact" },
  ];
  return (
    <>
      <nav className="flex py-8 px-8 md:px-40 items-center justify-between text-blue-950 dark:text-slate-200 h-20 w-full md:p-12 shadow-md">
        <figure>
          <figcaption className="font-bold text-2xl">Randika</figcaption>
        </figure>
        <ul className="hidden md:flex md:gap-x-5 md:text-xl md:items-center font-bold">
          {navList.map((el) => (
            <li key={el.id}>
              <NavLink
                className="hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600"
                to={el.navRoute}
              >
                {el.navLabel}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-5">
          <ThemeSwitcher />
          <div
            onClick={() => setNavItems(!navItems)}
            className="cursor-pointer text-blue-950 dark:text-white md:hidden "
          >
            {navItems ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {navItems && (
          <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-34 text-blue-950 dark:text-white bg-slate-50 dark:bg-blue-900 font-medium md:hidden">
            {navList.map((el) => (
              <li className="p-2" key={el.id}>
                <NavLink
                  onClick={() => setNavItems(!navItems)}
                  to={el.navRoute}
                >
                  {el.navLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
