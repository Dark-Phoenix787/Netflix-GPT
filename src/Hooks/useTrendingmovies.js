import { useEffect } from "react";
import { options1, optionsmovie, url1, urlmovie } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/moviesdataSlice";
import { addmainmovie } from "../utils/MainmovieSlice";

const useTrendingmovies = () => {
  const dispatch = useDispatch();

  const getTrendingmovies = async () => {
    const response = await fetch(url1, options1);
    const result = await response.json();
    const movieid = result?.movie_results[0].imdb_id;

    dispatch(addmovies(result));

    const response1 = await fetch(urlmovie + movieid, optionsmovie);
    const result1 = await response1.json();

    dispatch(addmainmovie(result1));

    // result.movie_results.map((e) => console.log(e.imdb_id));
  };

  useEffect(() => {
    getTrendingmovies();
  }, []);
};
export default useTrendingmovies;
