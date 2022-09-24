import { useState } from "react";

const SideBar = () => {
  const navItems = ["About", "Experience", "Work", "Contact"];

  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-4/5 flex flex-col items-center justify-center shadow-2xl bg-neutral z-10 md:hidden">
        <ul className="menu menu-vertical p-0">
          {navItems.map((item, index) => (
            <li key={index} className="my-4">
              <a className="font-mono">
                <span className="text-primary">0{index + 1}.</span>
                {item}
              </a>
            </li>
          ))}

          <a className="btn glass rounded-sm">Resume</a>
        </ul>
      </div>
      {/* <div className="h-screen w-screen absolute top-0 left-0 backdrop-blur-sm md:backdrop-blur-0"></div> */}
    </>
  );
};
export default SideBar;
