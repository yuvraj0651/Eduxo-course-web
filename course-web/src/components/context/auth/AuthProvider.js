import { createContext, useState, useContext, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(() => {
        return localStorage.getItem('userRole') || "";
    });

    const logout = async () => {
        await signOut(auth);
        setUserRole("");
        localStorage.removeItem("userRole");
    };

    useEffect(() => {
        if (userRole) {
            localStorage.setItem("userRole", userRole)
        } else {
            localStorage.removeItem("userRole");
        }
    }, [userRole])

    return (
        <AuthContext.Provider value={{ userRole, setUserRole, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
