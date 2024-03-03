import React, { createContext, useContext, useState } from 'react'

// 1. Create a context 
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


//2. share the created context with other components
export default function AuthProvider({ children }) {

    const [number, setNumber] = useState(10)

    //3. put some state in the this.state.
    const [isAuthenticated, setAuthenticated] = useState(false)

    //setInterval(() => setNumber(number + 1), 10000)

    // const valueBeShared = {number, isAuhtenticated, setAuthenticated}

    const login = (userName, password) => {
        if (userName === 'Rohitkarma' && password === 'rohit2003') {
            setAuthenticated(true);
            return true;
        }
        else {
            setAuthenticated(false);
            return false;

        }

    }

    const logout = () => {
        setAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{ number, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



