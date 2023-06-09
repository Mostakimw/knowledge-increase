import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Blog from "../Blogs/Blog";
import Qna from "../Qna/Qna";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  const MySwal = withReactContent(Swal);
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  // ! fetching data
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // ! mark as read btn handler
  const handlerReadTimeBtn = (readTime) => {
    console.log("ache");
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + readTime;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
      console.log("ache");
    } else {
      localStorage.setItem("readTime", readTime);
      setReadTime(readTime);
    }
  };

  // ! store id and title on local storage by click bookmark btn
  const handlerBookmark = (id, title) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let storeData = [];
    const bookmark = { id, title };

    if (previousBookmark) {
      const isThisbookmarked = previousBookmark.find((item) => item.id == id);
      if (isThisbookmarked) {
        MySwal.fire({
          title: <strong>Already Bookmarked</strong>,
          icon: "success",
        });
      } else {
        storeData.push(...previousBookmark, bookmark);
        localStorage.setItem("bookmark", JSON.stringify(storeData));
      }
    } else {
      storeData.push(bookmark);
      localStorage.setItem("bookmark", JSON.stringify(storeData));
    }
    setBookmarks(storeData);
  };

  // ! for showing title on sidebar
  useEffect(() => {
    const storedData = localStorage.getItem("bookmark")
      ? JSON.parse(localStorage.getItem("bookmark"))
      : [];
    setBookmarks(storedData);
  }, []);
  // ! another bookmark btn handler for get title from storage and show on sidebar
  const handleBookmarkClick = () => {
    let storedData = localStorage.getItem("bookmark")
      ? JSON.parse(localStorage.getItem("bookmark"))
      : [];
    setBookmarks(storedData);
  };

  // ! bookmark btn handler
  const handleBookmarkAndClick = (id, title) => {
    handlerBookmark(id, title);
    handleBookmarkClick();
  };

  return (
    <>
      <div className="md:grid grid-cols-12 gap-6 mt-10 md:w-[1280px] mx-auto">
        <div className="col-span-8 ">
          <Blog
            blogs={blogs}
            handleBookmarkAndClick={handleBookmarkAndClick}
            handlerReadTimeBtn={handlerReadTimeBtn}
          ></Blog>
        </div>
        <div className="col-span-4 sticky top-0">
          <SideBar bookmarks={bookmarks} readTime={readTime}></SideBar>
        </div>
      </div>
      <Qna></Qna>
    </>
  );
};

export default Main;
