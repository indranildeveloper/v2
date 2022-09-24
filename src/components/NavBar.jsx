import Resume from "../assets/about/resume.pdf";

const NavBar = ({ children }) => {
  const navItems = ["About", "Experience", "Work", "Contact"];

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="container mx-auto">
            <a
              href="/"
              className="flex-1 px-2 mx-2 font-mono link link-hover link-primary"
            >
              Indranil Halder
            </a>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navItems.map((item, index) => (
                  <li key={index} className="rounded-sm">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-mono mr-4"
                    >
                      <span className="text-primary">0{index + 1}.</span>
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={Resume}
                    target="_blank"
                    className="btn glass rounded-sm w-32"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-none lg:hidden mr-4">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <div className="flex flex-col items-start m-auto">
            {navItems.map((item, index) => (
              <li key={index} className="mr-4 mb-4">
                <a className="font-mono">
                  <span className="text-primary">0{index + 1}.</span>
                  {item}
                </a>
              </li>
            ))}
            <a className="btn glass rounded-sm mx-auto w-full">Resume</a>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
