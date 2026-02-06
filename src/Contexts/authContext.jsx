/*
import React,{useContext, useEffect, useState } from "react";
import {auth} from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";

const authContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){
    return useContext(authContext);
}

export function AuthProvider({childern})
{
    const [User , setUser] = useState(null);
    const [userLoggedIn , setuserLoggedIn] = useState(false);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        const unAuthUser = onAuthStateChanged(auth , initializeUser);
        return unAuthUser;
    },[])

    async function initializeUser(){
        if(User)
        {
            setUser({...User});
            setuserLoggedIn(true);
        }
        else {
            setUser(null);
            setuserLoggedIn(false);
        }
    }
    const value = {
        User,
        userLoggedIn,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && childern}
        </AuthContext.Provider>
    )
}
    */