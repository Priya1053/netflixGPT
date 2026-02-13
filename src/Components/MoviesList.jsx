import MovieCard from "./MovieCard";

const MoviesList = ({data,search})=>{

 if (!data?.results || data.results.length === 0) {
    return <h2>Not available</h2>;
  }
    const actualData = data.results.map(c=>c); 
    const filterdData = search && search > 0 ? actualData.filter((a)=>Math.floor(a.vote_average) === Number(search)) : <h2>Data not available</h2>;
    console.log("filterd",filterdData)
    if (search && filterdData.length === 0 || search <= 0) {
    return <h2 className="text-center p-2 mt-10 border rounded text-xl ml-160 w-65">Movie not available</h2>;
  }
return(
    <>
    <div className="flex flex-wrap gap-5 justify-center py-10 mt-1">
                {
                 filterdData.length > 0 && filterdData.length !=null ?  filterdData.map(m=> <MovieCard key ={m.id}
                                            id={m.id}
                                             movie ={m.poster_path}
                                             name={m.original_title} 
                                             date ={m.release_date}
                                             rate={m.vote_average}
                                             desc={m.overview}/>) :

                                             actualData.map(m=> <MovieCard key ={m.id}
                                             movie ={m.poster_path}
                                             name={m.original_title} 
                                             date ={m.release_date}
                                             rate={m.vote_average}
                                             desc={m.overview}/>) 
                }               
              </div>
    </>
)
}
export default MoviesList;