import React, { useEffect, useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Readtime from "../Readtime/Readtime";

const SideBar = ({ blogTitle, bookmarks }) => {
  //   console.log(bookmarks ? "ache" : 0);

  return (
    <>
      <div className="col-span-4 sticky top-5">
        <Readtime></Readtime>
        <Bookmarks blogTitle={blogTitle} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
};

export default SideBar;
