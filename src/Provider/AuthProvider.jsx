import { createContext, useEffect, useState } from "react";
import auth from "../Config/Firebase-config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signInUser
  const signInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // singingoogle
  const singInGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // signInOutUser
  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    signInUser,
    singInGoogle,
    logout,
    isLoading,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email
      // const loggedUser = {email: userEmail }
      setUser(currentUser);
      setIsLoading(false);
      // access token
      // if (currentUser) {
      //   axios.post("https://assignment-11-server-side-smoky.vercel.app/jwt", loggedUser, {withCredentials:true})
      //   .then(res=> {
      //     console.log("token token", res.data);
      //   })
      // }
      // else {
      //   axios.post("https://assignment-11-server-side-smoky.vercel.app/jwt", loggedUser, {withCredentials: true})
      //   .then(res=> {
      //     console.log(res.data);
      //   })
      // }
    });
    return () => {
      return unSubscribe;
    };
  }, []);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
