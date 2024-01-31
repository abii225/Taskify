import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AuthContext } from "../Context/AuthContextApi";

const Profile: React.FC = () => {
  const { user }: any = useContext(AuthContext);

  const SignOutUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("user before signout", user);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signout success", user);
      })
      .catch((error) => {
        // An error happened.
        console.log("error occur at signout", error);
      });
  };
  return (
    <div>
      <button
        className="w-[200px] h-[50px] bg-red-600"
        onClick={(e) => SignOutUser(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
