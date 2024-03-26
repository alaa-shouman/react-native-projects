import { createAction, createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    reducers:{
        addFav:(state,action) =>{
            state.ids.push(action.payload.id)
        },
        rmFav:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        },
    }
});
export const addFav = favoriteSlice.actions.addFav;
export const rmFav = favoriteSlice.actions.rmFav;
export default favoriteSlice.reducer;