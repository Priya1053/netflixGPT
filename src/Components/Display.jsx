const Display= ({name,email,pass,date})=>{
    return(
        <>
        <div className="border border-green-500 w-80 m-4 h-60 p-3">
            <ul>
                <li>{name}
                    {email}{pass}{date}
                </li>
            </ul>
        </div>
        </>
    )
}
export default Display;