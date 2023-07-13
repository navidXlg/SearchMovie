import UseMovieContext from "../Hooks/useMovieContext";
import MovieShow from "./MovieShow";


export default function MovieList(){
    const {movies} = UseMovieContext();
   

    const renderMovies = movies.map(item => {
        return <MovieShow value = {item} key = {item.imdbID}/>
    });

    return <div className="flex flex-wrap gap-x-4 gap-y-7 justify-center mt-6 p-4 ">{renderMovies}</div>

};    