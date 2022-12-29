import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth();
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    }, []);

    //create user account
    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //googleSignIn
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //userLogIn
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //userUpdate
    const userUpdate = (info) => {
        return updateProfile(auth.currentUser, info);
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        createAccount,
        user,
        loading,
        googleSignIn,
        login,
        userUpdate,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;