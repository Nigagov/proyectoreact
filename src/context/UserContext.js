import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState (null)

    const login = () => {
        //lógica de login
    }

    const logout = () => {
        //lógica de logout
    }

    const signUp = () => {
        //lógica de signup
    }

    return (
        <UserContext.Provider value={{ user, login,logout, signUp}}>
            {children}
        </UserContext.Provider>
    )

}