
const Search = ({search,setSearch})=>{

    return (
        <>
     <div className="flex flex-wrap gap-5 justify-center mt-40 ml-40 ">
            <input type="number" value={search} placeholder="search by rating..."className="p-2 w-96 h-10 border border-black rounded" onChange={(e)=>setSearch(e.target.value)}/>
            <button type="submit" className="mx-5 border border-black rounded bg-red-400 w-30 h-10 cursor-pointer" onClick={()=>setSearch(search)}>Search</button>
    </div>
        </>
    )
}

export default Search;