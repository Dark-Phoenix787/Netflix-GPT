import { useEffect } from "react";
import { optionsmovie, urlmovie } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addmainmovie } from "../utils/MainmovieSlice";

const useOnemovie = (movieid) => {
//   const movieid = useSelector((store) => store.addmainmovie);
//   console.log("hiii");
//   console.log(movieid.id);
//   const dispatch = useDispatch();

//   const movielist = async () => {
//     const response = await fetch(urlmovie + movieid, optionsmovie);
//     const result = await response.json();
//     console.log(result);
//     dispatch(addmainmovie(result));
//   };

//   useEffect(() => {
//     movielist();
//   }, []);
};

export default useOnemovie;
