import React, { useEffect, useState } from "react";
import Blog from "../Blogs/Blog";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogTitle]);

  const handlerBookmark = (id, title) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const product = { id, title, bookmark: true };

    if (previousBookmark) {
      const isThisProductMarked = previousBookmark.find((pd) => pd.id == id);
      if (isThisProductMarked) {
        alert("hello");
      } else {
        bookmark.push(...previousBookmark, product);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
        // console.log(bookmark);
      }
    } else {
      bookmark.push(product);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
    setBlogTitle(bookmark);
  };

  useEffect(() => {
    let previousLocalStorageBookmarks = JSON.parse(
      localStorage.getItem("bookmark")
    );
    if (previousLocalStorageBookmarks) {
      setBookmarks(previousLocalStorageBookmarks);
    } else {
      previousLocalStorageBookmarks = [];
    }
    console.log(previousLocalStorageBookmarks);
    // setBookmarks(localStorageBookmarks);
  }, []);
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
      <div className="grid grid-cols-12 gap-6 mt-10 md:w-[1280px] mx-auto relative">
        <Blog
          blogs={blogs}
          handleBookmarkAndClick={handleBookmarkAndClick}
        ></Blog>
        <SideBar bookmarks={bookmarks} blogTitle={blogTitle}></SideBar>
      </div>
    </>
  );
};

export default Main;
