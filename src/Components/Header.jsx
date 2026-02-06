import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    function handleSignOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
           navigate("/");
        }).catch((error) => {
            console.log(error)
    });
    }


  return (
    <div className="absolute top-0 left-0 w-full h-30 px-8 py-4 z-10 bg-gradient-to-b from-black flex items-center justify-between">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <button className="text-white font-medium hover:cursor-pointer bg-red-400 w-20 h-12 m-2 border border-amber-50 rounded-xl bg-red-600" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Header;
