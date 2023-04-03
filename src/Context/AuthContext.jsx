import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();


const AuthProvider = ({ children })=> {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLogin(true); 
    } 

    const handleLogout = () => {
        setLogin(false);
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{ login, handleLogin, handleLogout}}>
         { children }
        </AuthContext.Provider>
      );

}

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);