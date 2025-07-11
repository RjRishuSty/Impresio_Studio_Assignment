import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const filterDataSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        handleFilter:(state,action)=>{

        }
    }
});

export const {handleFilter} = filterDataSlice.actions;
export default filterDataSlice.reducer;