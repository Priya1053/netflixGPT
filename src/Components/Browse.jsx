import { API_OPTION , API_KEY } from "../utils/constant";
import Header from "./Header";
import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";

const Browse = ()=>{
  const [movies , setMovies] = useState();
  const [search , setSearch] = useState();
  
  useEffect(()=>{

    async function getMoviePlay(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`, API_OPTION);
    const json = await data.json();
    setMovies(json);
  };

    getMoviePlay();
    
  },[])

    return(
        <>
          <Header/> 
          {movies? <Search search={search} setSearch={setSearch}/>: null}
          {movies ? <MoviesList data = {movies} search={search}/> : null}
        </>
    )
}

export default Browse;