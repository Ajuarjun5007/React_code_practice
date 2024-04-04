import React, { useEffect, useState } from 'react';
import {getMoviesList} from '../../Slices';
import { useDispatch, useSelector } from 'react-redux';

function ReactRedux() {
    const count  = useSelector((state)=>state.counterList.value);

    const moviesList = useSelector((state) => state.counterList.moviesList);
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch moviesList when component mounts
        dispatch(getMoviesList());
    }, []);

    console.log("movies", moviesList);
    console.log("count",count);
    return (
        <>
            <div className="">
                <button className="" onClick={() => dispatch(increment())}>Increment</button>
                <button className="" onClick={() => dispatch(decrement())}>Decrement</button>
                {/* <div>{count}</div> */}
            </div>
        </>
    );
}

export default ReactRedux;
