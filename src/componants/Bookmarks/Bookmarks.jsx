import React from "react";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bg-[#1111110D] mt-5 rounded-md">
      <div className="p-4">
        <h3 className="text-xl font-bold pb-4">
          Bookmarked Blogs : {bookmarks ? bookmarks.length : 0}
        </h3>
        {bookmarks.map((bookmark) => (
          <p key={bookmark.id} className="bg-base-100 rounded-md p-3 mb-4">
            {bookmark.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
