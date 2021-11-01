import initializeAuthentication from "../components/Firebase/firebase.init";
import {
    getAuth,

    updateProfile,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();



    //  ----- Register with Email Password-----
    const handleUserRegisterWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);


    };

    //   Sign in With Email Password
    const handleUserSignInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    //   Observe User State

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    //   Sign Out
    const handleUserLogOut = () => {
        signOut(auth).then((result) => {
            setUser({});
        });
    };
    return {

        handleUserSignInWithEmail,
        handleUserRegisterWithEmail,
        handleUserLogOut,
        setUser,
        setError,
        updateProfile,
        auth,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        isLoading,
        user,
        error,
    };
};

export default useFirebase;