import { useState, useEffect } from "react";
import SideBar from "./SideBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Experience", "Work", "Contact"];
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300`;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="container mx-auto">
          <div className="flex-1">
            <a
              className="font-mono link link-hover link-primary text-xl"
              href="/"
            >
              Indranil Halder
            </a>
            {/* Button */}
            <button
              className="btn btn-square flex flex-col md:hidden absolute top-2 right-6 z-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
            {/* End Button */}
          </div>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal p-0">
              {navItems.map((item, index) => (
                <li key={index} className="mr-4">
                  <a className="font-mono">
                    <span className="text-primary">0{index + 1}.</span>
                    {item}
                  </a>
                </li>
              ))}

              <a className="btn glass rounded-sm">Resume</a>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && <SideBar />}
    </>
  );
};
export default NavBar;
