import React from "react";
import NavLinks from "./Navlinks";

function Navbar() {
  return (
    <div className="flex justify-between items-center ">
      <img src="trooper.svg" alt="trooper" className="m-[16px]" />
      <div className="flex items-center w-[521px] justify-between">
        <div className="rounded-full  border-[1px] border-[#22232C] flex w-[#232px] ">
          <img
            src="search.svg"
            alt="search"
            className="m-3 w-[24px] h-[24px] "
          />
          <input
            type="text"
            className="rounded rounded-l-0 rounded-r-full placeholder-subtitle bg-transparent text-md px-1"
            placeholder="Search..."
          />
        </div>
        <NavLinks />
      </div>
      <div className="flex items-center gap-4">
        <span>
          <img src="bell.svg" alt="notifications" />
        </span>

        <span className="rounded-full  border-[1px] border-[#22232C]">
          <img
            src="avatar.png"
            alt="profile "
            className=" object-contain rounded-full "
            width={54}
            height={54}
          />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
