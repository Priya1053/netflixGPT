const MovieCard = ({movie,name,date,rate})=>{
    return (
        <>
        <div className="border rounded w-50 border-rose-400 p-1 m-2">
            {movie && (
             <img src={`https://image.tmdb.org/t/p/w500${movie}`}alt={name} />
             )} 
             <h3>{name}</h3>
            <h3>{date}</h3>
            <h4>Rating: {Math.floor(rate)}</h4>
        </div>
        </>
    )
}

 export default MovieCard;

