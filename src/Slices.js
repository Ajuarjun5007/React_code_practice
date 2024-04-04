import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    moviesList:[],
    error:"",
};

export const getMoviesList = createAsyncThunk("moviesList/getMoviesList",

async(_,
    { rejectWithValue }
    ) => {
    let requestOptions;
    let myHeaders = new Headers();
    myHeaders.append("projectID", "p7nvgrsg3fdf");
    // myHeaders.append("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTg0NjRmOTlmZGI5ZjlkMTU2NjMzMiIsImlhdCI6MTcwNjI2NDgyMCwiZXhwIjoxNzM3ODAwODIwfQ.xF4fKvyMqkN1wb5DAQMqEegGxjnFO3_qUlk0AWVO8MI")
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");
    requestOptions={
        Method:"GET",
        headers:myHeaders,
    }
    let url = "https://academics.newtonschool.co/api/v1/ott/show";
    try{
        const response  = await fetch(url,requestOptions);
        if(response.ok){
            const result = await response.json();
            // console.log("result",result);
            return result;
        }else{
            return rejectWithValue({error:"failed"})
        }
    }catch (error){
        return rejectWithValue({error:"fetch failed"});
    }
})


export const counterSlice = createSlice({
    name:'counterList',
    initialState,
    // reducers:{
    //     increment:(state)=>{
    //         state.value+=1;
    //     },
    //     decrement:(state)=>{
    //         state.value-=1;
    //     },
        extraReducers:(builder)=>{
            builder
            .addCase(getMoviesList.pending,(state,action) => {
                // state.getMoviesList="pending";
                state.error=""
            })
           
            .addCase(getMoviesList.fulfilled, (state, action) => {
                console.log("action", action);
                state.moviesList = action.payload.data; // Assuming moviesList data is nested under 'data' key
                state.error = ""; // Reset error state
            })
            
            .addCase(getMoviesList.rejected,(state,action)=>{
                state.error=action.payload.error;
            })
        }
    // }
})

export const {} = counterSlice.actions;
export default counterSlice.reducer;