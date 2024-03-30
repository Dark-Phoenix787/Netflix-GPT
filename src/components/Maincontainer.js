import React from "react";
import Titlecontmain from "./Titlecontmain";
import Videocontmain from "./Videocontmain";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const mainmovie = useSelector((store) => store.mainmovie);
  if (!mainmovie.mainmovie) return;

  return (
    <div className="">
      <Titlecontmain title={mainmovie.mainmovie} />
      <Videocontmain movieid={mainmovie.mainmovie.youtube_trailer_key} />
    </div>
  );
};

export default Maincontainer;
