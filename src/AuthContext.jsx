import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(() => {
        const storedUser = localStorage.getItem["user"];
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if(user){
            localStorage.setItem("user",JSON.stringify(user));
        }
    }, [user]);
    
    const register = (email,password) => {
        const newUser = {email,password}
        setUser(newUser);
    }

    const login = (email,password) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if(storedUser && storedUser.email === email && storedUser.password === password){
            setUser(storedUser);
            return true;
        }else{
            return false;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }
    
    return(
        <AuthContext.Provider value={{user, register, login, logout}}>
            {children}
        </AuthContext.Provider>

    )
}
export default AuthContext