import { useState } from "react";
import Display from "./Display";
import Input from "./Input";

const Parent = ()=>{

   const [name,setName] = useState();
   const[email , setEmail] = useState();
   const [pass,setPass] = useState();
   const [date , setDate] = useState();
    return (
        <>
           <div>
            <h2>Parent component</h2> 
            <Input name={name} email={email} pass={pass} date={date} setName={setName} setEmail={setEmail} setPass={setPass} setDate={setDate}             />
            <Display name={name} email={email} pass={pass} date={date} setName={setName} setEmail={setEmail} setPass={setPass} setDate={setDate}/>
           </div>
        </>
    )
}

export default Parent;