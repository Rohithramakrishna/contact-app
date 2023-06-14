import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../apis/Firebase";

export const AuthContext = createContext(null);

const ContextApi = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logOut = async () => {
    await signOut(auth);
    window.sessionStorage.removeItem("token");
    window.location.assign("/");
  };

  useEffect(() => {
    const authEffect = onAuthStateChanged(auth, userInfo => {
      console.log(userInfo);
      if (userInfo && userInfo.emailVerified && !userInfo.isAnonymous) {
        setIsLoading(true);
        setAuthUser(userInfo.emailVerified && userInfo);
        const token = userInfo.accessToken;
        window.sessionStorage.setItem("token", token);
      } else {
        setAuthUser(null);
        window.sessionStorage.removeItem("token");
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, isLoading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextApi;
