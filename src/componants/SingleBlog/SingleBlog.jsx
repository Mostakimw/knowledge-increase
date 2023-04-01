import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const SingleBlog = ({ blog, handleBookmarkAndClick, handlerReadTimeBtn }) => {
  const {
    id,
    cover_image,
    author_image,
    name,
    blog_title,
    published,
    reading_time,
    hashTag,
  } = blog;
  return (
    <>
      <div>
        <div>
          <img
            className="md:w-[845px] md:h-[450px] max-sm:w-full rounded-md"
            src={cover_image}
            alt="cover_image"
          />
        </div>
        <div className="flex justify-between items-center my-8 px-2">
          <div className="order-1 flex items-center gap-5">
            <img
              className="w-16 rounded-[50%]"
              src={author_image}
              alt="author_image"
            />
            <div>
              <h2 className="txt-2xl font-bold">{name}</h2>
              <p>{published}</p>
            </div>
          </div>
          <div className="order-2">
            <p className="font-[500] text-[#11111199]">
              {reading_time} minutes read{" "}
              <button
                onClick={() => {
                  handleBookmarkAndClick(id, blog_title);
                }}
              >
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold w-8/12 mb-3">{blog_title}</h1>
      <p className="mb-3">{hashTag}</p>
      <a
        onClick={() => handlerReadTimeBtn(reading_time)}
        className="text-[#6047EC] underline font-semibold"
        href="#read"
      >
        Mark as read
      </a>
      <hr className="w-full color-[#111111] my-5" />
    </>
  );
};

export default SingleBlog;
