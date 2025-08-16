import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-background sticky top-0 z-50 text-xl font-semibold">
      {/* Top Accent Bar */}
      <div className="bg-accent flex min-h-1.5"></div>

      {/* Desktop */}
      <div className="flex p-6 justify-between max-md:hidden">
        <h1>SP</h1>
        <ul className="flex space-x-4 ">
          <li className="hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="p-6 md:hidden">
        <div className="flex justify-between">
          <h1>SP</h1>
          {!isOpen ? (
            <Menu
              className="justify-self-end min-h-7 h-5 w-5"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <X
              className="justify-self-end min-h-7 h-5 w-5"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 overflow-hidden"
              : "max-h-0 opacity-0"
          }`}
        >
          {
            <ul className="flex flex-col items-center justify-center h-full min-h-screen gap-6 text-2xl">
              <li className="hover:underline">
                <a href="#about" onClick={() => setIsOpen(!isOpen)}>
                  About
                </a>
              </li>
              <li className="hover:underline">
                <a href="#experience" onClick={() => setIsOpen(!isOpen)}>
                  Experience
                </a>
              </li>
              <li className="hover:underline">
                <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
                  Projects
                </a>
              </li>
              <li className="hover:underline">
                <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
                  Contact
                </a>
              </li>
              <li>
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
