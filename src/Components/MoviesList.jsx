import MovieCard from "./MovieCard";

const MoviesList = ({data})=>{
    const actualData = data.results.map(c=>c);
    const filterdData = actualData.filter((a)=>a.vote_average > 8);
    console.log("filterd",filterdData)
    console.log(data)
return(
    <>
    
    <div className="flex flex-wrap gap-5 justify-center py-10 mt-20">
                {
                  actualData.map(m=> <MovieCard movie ={m.poster_path}
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