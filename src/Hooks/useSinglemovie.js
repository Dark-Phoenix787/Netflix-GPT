import { useEffect } from "react";
import { optionsmovie, urlmovie } from "../utils/constants";

const useSinglemovie = (movieid) => {
    const movielist = async () => {
        const response = await fetch(urlmovie + movieid, optionsmovie);
        const result = await response.json();
        console.log(result);
      };
    
      useEffect(() => {
        movielist();
      }, []);
 
}

export default useSinglemovie