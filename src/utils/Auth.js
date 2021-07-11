import React, { useEffect, useState } from "react";
import { getLoginUserDetails } from "./common.utils";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = getLoginUserDetails();
        console.log("user from Auth", user);
        setCurrentUser(user);

    }, []);


    return (
        <AuthContext.Provider
            value={{
                currentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

