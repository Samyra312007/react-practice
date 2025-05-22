import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-10
                flex items-center justify-between
                bg-violet-700 text-white px-4 py-3"
      >
        <span className="font-bold text-xl">Todoist</span>

        <ul className="flex gap-8">
          <li className="cursor-pointer hover:font-bold transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all">
            Your Tasks
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
