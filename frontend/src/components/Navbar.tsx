import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-sm:flex-col flex justify-between font-bold p-10 text-xl gap-5">
      <button>Saksham Powdel</button>
      <div className="max-sm:hidden flex gap-5">
        <button>About Me</button>
        <button>Projects</button>
        <button>Contact Me</button>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
        Menu
      </button>
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-5">
          <button>About Me</button>
          <button>Projects</button>
          <button>Contact Me</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
