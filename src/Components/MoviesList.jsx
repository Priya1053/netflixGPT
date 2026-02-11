import MovieCard from "./MovieCard";

const MoviesList = ({data,search})=>{
    if (!data?.results) return null;
    const actualData = data.results.map(c=>c);
    const filterdData = actualData.filter((a)=>Math.floor(a.vote_average) === Number(search));
    console.log("filterd",filterdData)
    console.log(data)
return(
    <>
    
    <div className="flex flex-wrap gap-5 justify-center py-10 mt-20">
                {
                 filterdData.length > 0 ?  filterdData.map(m=> <MovieCard key ={m.id}
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