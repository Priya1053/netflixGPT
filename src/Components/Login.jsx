import Header from "./Header";
import SignUp from "./SignUp";
import { useRef, useState } from "react";
import { validData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Provider } from "react-redux";
import Browse from "./Browse";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ()=>{
    const [isSignInform , setSignInform] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const navigate = useNavigate();
    const name=useRef(null);
    const email = useRef(null);
    const password = useRef(null);



    function toggleSingUp(){
        setSignInform(!isSignInform);
    }

    async function btnValidate(){
      let msg = validData(name.current.value , email.current.value , password.current.value)
      setErrorMsg(msg); 
  }

  async function googlePopUp(){
    try{
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      navigate("/browse");
      console.log(result);
      return result;
    }
     catch (error) {
        const errorcode = error.code;
        console.log(errorcode);
        console.log(error);
        setErrorMsg(errorcode)
    }
  }

return(
        <>
        <div>
            <Header/>
            <div className="absolute bg-black">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg" alt="bg-img" />
                <div className="fixed bg-black/90 w-full h-full"></div>
            </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-black text-white absolute w-4/12 mx-115 rounded-xl opacity-74 my-20">
        <div className="m-7 p-5">

        <h1 className="text-white font-bold text-3xl my-2">{isSignInform?"Sign In" : "Sign Up"}</h1>

        {!isSignInform && (
            <input ref={name} type="text" placeholder="Name" 
                   className="bg-gray-700 text-white w-96 h-16 m-2 p-3 border border-amber-50 rounded-md"/>)}<br />
         
            <input ref={email} type="text" placeholder="Email" 
                   className="bg-gray-700 text-white w-96 h-16 m-2 p-3 border border-amber-50 rounded-md"/><br />

            <input ref={password} type="password" placeholder="Password" 
                   className="text-white bg-gray-700 w-96 h-16 m-2 p-3 border border-amber-50 rounded-md"/><br />

                   <p className="text-red-500 text-lg mx-5 my-3">{errorMsg}</p>
                               
            <button className="text-white w-96 h-12 m-2 border border-amber-50 rounded-xl bg-red-600" onClick={btnValidate}>
                {isSignInform?"Sign In" : "Sign Up"}</button>
                <button className="m-2 p-3" onClick={googlePopUp}>Sign in with google</button>
            <p className="m-2 p-1 cursor-pointer" onClick={toggleSingUp}><span>{isSignInform? "New to Netflix? Sign Up now.":"Already registerd ? Sing In"}</span></p>
            </div>
        </form>
        </div>
        <SignUp/>

        </> 
    )
}
export default Login;
