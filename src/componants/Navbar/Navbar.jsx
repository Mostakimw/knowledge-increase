import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar w-[1280px] mx-auto pt-4">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Sohoj Sorol Knowledge</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src="https://picsum.photos/200/300" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <hr className="w-[1280px] mx-auto border color-[#111111] mt-5" />
    </div>
  );
};

export default Navbar;
