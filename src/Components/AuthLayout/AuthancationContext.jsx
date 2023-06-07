import React, { createContext, useState } from 'react';
import app from '../FirebaseConfig/FirebaseConfig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth"



export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();


const AuthancationContext = ({children}) => {
    const [user, setUser] = useState('I am the boss');


    // create new user function is here
    const CreateNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password);
    };



    // Context value is here
    const ContextValue = {
        user,
        CreateNewUser
    }

    return (
        <AuthContext.Provider value={ContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthancationContext;