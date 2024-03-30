export const url1 =
  "https://movies-tv-shows-database.p.rapidapi.com/?year=2024&page=1";
export const urlmovie =
  "https://movies-tv-shows-database.p.rapidapi.com/?movieid=";


export const options1 = {
  method: "GET",
  headers: {
    Type: "get-popular-movies",
    "X-RapidAPI-Key": "e6ca023c3bmsh4a1596782c7d14bp168de1jsnd92e365a2e8d",
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};

export const optionsmovie = {
  method: "GET",
  headers: {
    Type: "get-movie-details",
    "X-RapidAPI-Key": "e6ca023c3bmsh4a1596782c7d14bp168de1jsnd92e365a2e8d",
    "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  },
};
