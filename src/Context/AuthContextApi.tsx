import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  User as FirebaseAuthUser,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

// Define the context type
interface AuthContextType {
  user: FirebaseAuthUser | null;
}

// Create context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthContextApi: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthUser | null>(null);

  useEffect(() => {
    console.log(user);
    let unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user, "here is the signed in user");
        setUser(user);
        // ...
      } else {
        // User is signed out
        setUser(null);
        // ...
      }
    });
    return () => unsub();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextApi;
