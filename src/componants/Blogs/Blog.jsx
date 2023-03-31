import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = ({ blogs, handleBookmarkAndClick, handlerReadTimeBtn }) => {
  return (
    <div className="col-span-8">
      {blogs.map((blog) => (
        <SingleBlog
          key={blog.id}
          blog={blog}
          handleBookmarkAndClick={handleBookmarkAndClick}
          handlerReadTimeBtn={handlerReadTimeBtn}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
