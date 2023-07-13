import { createContext, useState } from "react";
import fetchData from "../ApI";

 const movieContaxt = createContext();

 export default function Provider({children}){

    const [movies, setMovie] = useState([]);

    const handelMovieSerch =async(movie) =>{

        const fetchMovie = await fetchData(movie);
        const movieAll = [...fetchMovie ,...movies]
        setMovie(movieAll);
    };





    const shareData = {
        movies,
        handelMovieSerch
    };


    return <movieContaxt.Provider value={shareData}>
                {children}
           </movieContaxt.Provider>
 };

 export {movieContaxt};