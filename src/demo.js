import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    moviesList:[],
    error:"",
}

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
    console.log("myHeaders",myHeaders);
    requestOptions={
        Method:"GET",
        headers:myHeaders,
    }
    let url = "https://academics.newtonschool.co/api/v1/ott/show";
    try{
        console.log("requestOptions",requestOptions);
        const response  = await fetch(url,requestOptions);
        if(response.ok){
            const result = await response.json();
            return result;
        }else{
            return rejectWithValue({error:"failed"})
        }
    }catch (error){
        return rejectWithValue({error:"fetch failed"});
    }
})


export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        extraReducers:(builder)=>{
            builder
            .addCase(getMoviesList.pending,(state,action)=>{
                state.getMoviesList="pending";
            })
            .addCase(getMoviesList.fulfilled,(state,action)=>{
                state.moviesList=action.payLoad;
                state.error=""
            })
            .addCase(getMoviesList.rejected,(state,action)=>{
                state.getMoviesList="rejected";
                state.error=action.payLoad.error;
            })
        }
    }
})

export const { increment,decrement,} = counterSlice.actions;
export default counterSlice.reducer;