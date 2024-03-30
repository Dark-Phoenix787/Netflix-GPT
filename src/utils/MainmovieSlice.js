import { createSlice } from "@reduxjs/toolkit";

const MainmovieSlice=createSlice({
    name:"mainmovie",
    initialState:{mainmovie:null,},
    reducers:{
        addmainmovie:(state,action)=>{
            // console.log(action.payload);
            state.mainmovie=action.payload;
        }

    }
})
export const {addmainmovie}=MainmovieSlice.actions;
export default MainmovieSlice.reducer;