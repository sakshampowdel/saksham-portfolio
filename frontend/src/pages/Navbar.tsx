import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-sm:flex-col flex justify-between font-bold p-10 text-xl gap-5 text-center">
      <a href="/">Saksham Powdel</a>

      <ul className="max-sm:hidden flex gap-5">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <button
        className="sm:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <ul className="sm:hidden flex flex-col gap-5">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
