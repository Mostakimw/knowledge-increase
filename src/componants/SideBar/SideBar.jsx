import React from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Readtime from "../Readtime/Readtime";

const SideBar = () => {
  return (
    <div className="col-span-4 ">
      <Readtime></Readtime>
      <Bookmarks></Bookmarks>
    </div>
  );
};

export default SideBar;
