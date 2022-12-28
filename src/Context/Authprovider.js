import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth();
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
    const authInfo = {};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;