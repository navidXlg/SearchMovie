import Header from "./componants/Header";
import SearchBar from "./componants/SearchBar";
import MovieList from "./componants/MovieList";

export default function App(){

  return(
    <div className="bg-zinc-400">
      <Header/>
      <SearchBar/>
      <MovieList/>
    </div>
  )
};

