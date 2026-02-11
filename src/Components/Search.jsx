import MovieCard from "./MovieCard";
import MoviesList from "./MoviesList";

const Search = ({search,setSearch})=>{

   
    function handleSearchMovie(){
        setSearch(search);
        console.log(search)       
    }

    // const m = searchMovie.results.map(c=>c);
    // const filteredCards = m.filter((a)=>Math.floor(a.vote_average) == search)
    // console.log("search : ",filteredCards)
   
    return (
        <>
     <div className="flex flex-wrap gap-5 justify-center py-10 mt-14 ">
        {/* {
          filteredCards? filteredCards.map(m=> <MovieCard movie ={m.poster_path}
                                             name={m.original_title} 
                                             date ={m.release_date}
                                             rate={m.vote_average}
                                             desc={m.overview}/>) : <h2>Not Available</h2>
        } */}
        </div>  

        <div>
            <input type="number" value={search} placeholder="search"className="p-2 ml-100 mt-32 ml-5 w-96 h-10 border border-black rounded" onChange={(e)=>setSearch(e.target.value)}/>
            <button type="submit" className="mx-5 border border-black rounded bg-red-400 w-30 h-10 cursor-pointer" onClick={handleSearchMovie}>Search</button>
        </div>
        </>
    )
}

export default Search;