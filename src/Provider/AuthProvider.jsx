import { createContext, useEffect, useState } from "react";
import auth from "../Config/Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  
  // createUser
  const createUser = (email, password) => {
    isLoading(true)
    return createUserWithEmailAndPassword(email, password, auth)
  }
  // signInUser
  const signInUser = (email, password)=> {
    isLoading(true)
    return signInWithEmailAndPassword(email, password, auth)
  }
  // signInOutUser
  const logged = () => {
    signOut(auth)
  }
  const authInfo = {
    user,
    createUser,
    signInUser,
    logged,
    isLoading
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
      setUser(currentUser)
      setIsLoading(false)
    })
    return ()=> {
      return unSubscribe
    }
  },[])


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;