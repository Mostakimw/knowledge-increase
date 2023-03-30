import React from "react";
import Blog from "../Blogs/Blog";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-10 md:w-[1280px] mx-auto">
      <Blog></Blog>
      <SideBar></SideBar>
    </div>
  );
};

export default Main;
