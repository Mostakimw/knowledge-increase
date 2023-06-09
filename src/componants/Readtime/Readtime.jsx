import React from "react";
import { useEffect, useState } from "react";

const Readtime = ({ readTime }) => {
  const [totalReadTime, setTotalReadTime] = useState(readTime);
  useEffect(() => {
    const getTimeFromLocal = localStorage.getItem("readTime") || 0;
    setTotalReadTime(getTimeFromLocal);
  }, [readTime]);
  return (
    <div className="bg-[#6047EC1A] rounded-md max-sm:mx-3 border-2 border-[#6047EC]">
      <h2 className="text-[#6047EC] text-xl font-bold text-center py-4 ">
        Spent time on read : {totalReadTime} min
      </h2>
    </div>
  );
};

export default Readtime;
