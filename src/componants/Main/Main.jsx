import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Blog from "../Blogs/Blog";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  const MySwal = withReactContent(Swal);
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  // ! fetching data
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogTitle]);

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
    let bookmark = [];
    const product = { id, title, bookmark: true };

    if (previousBookmark) {
      const isThisProductMarked = previousBookmark.find((pd) => pd.id == id);
      if (isThisProductMarked) {
        MySwal.fire({
          title: <strong>Already Bookmarked</strong>,
          icon: "success",
        });
      } else {
        bookmark.push(...previousBookmark, product);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
      }
    } else {
      bookmark.push(product);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
    setBlogTitle(bookmark);
  };

  // ! for showing title on sidebar
  useEffect(() => {
    let previousLocalStorageBookmarks = JSON.parse(
      localStorage.getItem("bookmark")
    );
    if (previousLocalStorageBookmarks) {
      setBookmarks(previousLocalStorageBookmarks);
    } else {
      previousLocalStorageBookmarks = [];
    }
  }, []);
  // ! another bookmark btn handler for get title from storage and show on sidebar
  const handleBookmarkClick = () => {
    let previousLocalStorageBookmarks = JSON.parse(
      localStorage.getItem("bookmark")
    );
    if (previousLocalStorageBookmarks) {
      setBookmarks(previousLocalStorageBookmarks);
    } else {
      previousLocalStorageBookmarks = [];
    }
    setBookmarks(previousLocalStorageBookmarks);
  };

  // ! bookmark btn handler
  const handleBookmarkAndClick = (id, title) => {
    handlerBookmark(id, title);
    handleBookmarkClick();
  };

  // const handlerBookmark = (id, blogTitle) => {
  //   const bookmarkedBlogs = JSON.parse(localStorage.getItem("bookmarkedBlogs"));
  //   let bookmark = [];
  //   const product = { id, blogTitle, bookmark: true };

  //   // Check if the blog is already bookmarked

  //   if (bookmarkedBlogs) {
  //     const isBookmarked = bookmarkedBlogs.find((bm) => bm.id == id);
  //     if (isBookmarked) {
  //       alert("already bookmarked");
  //     }
  //     // Remove the ID from the bookmarkedBlogs array
  //     //   bookmarkedBlogs.splice(index, 1);
  //     else {
  //       bookmark.push(...bookmarkedBlogs, product);
  //       localStorage.setItem(
  //         "bookmarkedBlogs",
  //         JSON.stringify(bookmarkedBlogs)
  //       );
  //     }
  //   } else {
  //     // Add the ID to the bookmarkedBlogs array
  //     bookmark.push(product);
  //     localStorage.setItem("bookmarkedBlogs", JSON.stringify(bookmark));
  //   }
  // };

  // ! for showing bookmark in side bar
  // const [bookmarks, setBookmark] = useState([]);
  // // console.log(bookmarks ? "ache" : 0);
  // useEffect(() => {
  //   const bookmarkedItem = JSON.parse(localStorage.getItem("bookmarkedBlogs"));
  //   for (const id of bookmarkedItem) {
  //     const bookmarkedBlog = blogs.find((blog) => blog.id === id);
  //     // const blogTitle = bookmarkedBlog.blog_title;
  //     // setTitle(blogTitle);
  //   }
  //   setBookmark(bookmarkedItem);
  // }, []);
  // set blog title

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-10 md:w-[1280px] mx-auto ">
        <div className="col-span-8 relative">
          <Blog
            blogs={blogs}
            handleBookmarkAndClick={handleBookmarkAndClick}
            handlerReadTimeBtn={handlerReadTimeBtn}
          ></Blog>
        </div>
        <div className="col-span-4 sticky top-0">
          <SideBar
            bookmarks={bookmarks}
            blogTitle={blogTitle}
            readTime={readTime}
          ></SideBar>
        </div>
      </div>
    </>
  );
};

export default Main;
