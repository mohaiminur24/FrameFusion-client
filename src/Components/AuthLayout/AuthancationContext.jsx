import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);


const AuthancationContext = ({children}) => {
    const [user, setUser] = useState('I am the boss');



    // Context value is here
    const ContextValue = {
        user
    }

    return (
        <AuthContext.Provider value={ContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthancationContext;