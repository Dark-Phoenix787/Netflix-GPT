import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesdataSlice"
import mainmovieReducer from "./MainmovieSlice"

const Appstore= configureStore(
    {
        reducer:{
            user:userReducer,
            movie:movieReducer,
            mainmovie:mainmovieReducer,
        }
    }
)

export default Appstore;