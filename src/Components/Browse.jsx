import { API_OPTION , API_KEY } from "../utils/constant";
import Header from "./Header";
import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";

const Browse = ()=>{
  const [movies , setMovies] = useState();
  
  useEffect(()=>{

    async function getMoviePlay(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`, API_OPTION);
    const json = await data.json();
    setMovies(json);
    console.log(json);
    console.log("movies >>",movies);
  };

    getMoviePlay();
    
  },[])


    return(
        <>
          <Header/> 
          {movies? <Search searchMovie ={movies}/>: null}
          {movies ? <MoviesList data = {movies}/> : null}
        </>
    )
}

export default Browse;