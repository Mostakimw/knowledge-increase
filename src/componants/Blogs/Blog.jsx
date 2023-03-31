import React from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = ({ blogs, handleBookmarkAndClick, handlerReadTimeBtn }) => {
  return (
    <div>
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
