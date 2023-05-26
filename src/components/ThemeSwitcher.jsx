import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") == null
      ? "dark"
      : JSON.parse(localStorage.getItem("theme"))
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={handleThemeSwitch}
      className="dark:text-white text-blue-950 border-2 dark:border-slate-200 border-blue-950 md:p-2 p-1 rounded-lg"
    >
      {theme == "dark" ? (
        <BsSunFill className="text-yellow-400" size={20} />
      ) : (
        <FaMoon size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
