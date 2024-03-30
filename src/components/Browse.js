import Header from "./Header";
import useTrendingmovies from "../Hooks/useTrendingmovies";

import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  useTrendingmovies();

  return (
    <>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </>
  );
};

export default Browse;
