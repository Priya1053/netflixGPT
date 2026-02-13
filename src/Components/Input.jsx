
const Input = ({name,email,pass,date,setName,setEmail,setPass,setDate})=>{
    return(
        <>
        <div>
            <form>
                <input type="text" value={name} placeholder="name" className="border rounded border-black mt-2 ml-3 p-1" onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="email" value={email}placeholder="email " className="border rounded border-black mt-2 ml-3 p-1" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="password" value={pass}placeholder="pass" className="border rounded border-black mt-2 ml-3 p-1" onChange={(e)=>setPass(e.target.value)}/><br/>
                <input type="date"value={date} className="border rounded border-black mt-2 ml-3 p-1 w-48"onChange={(e)=>setDate(e.target.value)}/><br/>
                {/* <button type="submit" className="border rounded border-black mt-2 ml-3 p-1 bg-green-500"onClick={()=>handleFormData()} >Submit</button> */}
            </form>
        </div>
        </>
    )
}

export default Input;