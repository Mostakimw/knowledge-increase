import React from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Readtime from "../Readtime/Readtime";

const SideBar = ({ blogTitle, bookmarks, readTime }) => {
  return (
    <>
      <div>
        <Readtime readTime={readTime}></Readtime>
        <Bookmarks blogTitle={blogTitle} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
};

export default SideBar;
