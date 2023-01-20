import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
export const ButtonScrollTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const slideTop = () => {
    window.scrollTo(0, 0);
  };
  const handleUpdateScrollY = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.onscroll = handleUpdateScrollY;
  }, []);
  return (
    <button
      className="btn-scroll-top"
      hidden={scrollY < 100}
      onClick={slideTop}
    >
      <BsFillArrowUpCircleFill className="icon-size-sm" color="white" />
    </button>
  );
};
