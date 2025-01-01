/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase.init";
import AxiosOpen from "../Hooks/AxiosSecure/AxiosOpen";

export const AuthConext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const  axiosPublic = AxiosOpen()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const LogOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  
  const updateUser = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      
      if (currentUser) {
        const userInfo = {email: currentUser.email};
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      }
      if (currentUser == null) {
        localStorage.removeItem("access-token");
      }
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    SignIn,
    LogOut,
    GoogleSignIn,
    updateUser

  };
  return <AuthConext.Provider value={userInfo}>{children}</AuthConext.Provider>;
};

export default AuthProvider;
