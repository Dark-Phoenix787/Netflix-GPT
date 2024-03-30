import React from "react";
import { YT_URL } from "../utils/constants";

const Videocontmain = (movieid) => {
  return (
    <div className="w-[100%] ">
      <iframe
        className=" w-[100%] aspect-video  "
        src={
          "https://www.youtube.com/embed/" + movieid.movieid
          // "DwuJeGYlYyw" +
          // "?si=ITaXmEy_9H94XSld&amp;disablekb=1&autoplay=1&loop=1&mute=1&amp;controls=0&amp;rel=0"
          // "?&autoplay=1&mute=1&amp;controls=0?&amp;rel=0"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};
{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/QrQhiRtJhF0?si=tr2kH9srwrvv8hp_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}

export default Videocontmain;
