import React, { createContext, useEffect, useState } from "react";
import app from "../FirebaseConfig/FirebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const AuthancationContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // create new user Email and password function is here
  const CreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //create newuser by google login
  const createuserbygoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth,GoogleProvider);
  };

  // Login user function is here
  const handleLoginUser = (email, pass)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //Logout function is here
  const Logoutuser = ()=>{
    return signOut(auth);
  }

  // Context value is here
  const ContextValue = {
    user,
    CreateNewUser,
    createuserbygoogle,
    loading,
    handleLoginUser,
    Logoutuser
    
  };


  //Active user Function is here
  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });

    return ()=>{
      return unsuscribe;
    }
  },[])

  return (
    <AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthancationContext;
