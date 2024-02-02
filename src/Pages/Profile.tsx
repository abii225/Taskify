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
    <div className="min-h-[600px]">
      <div className="min-w-[250px] max-w-[350px] h-[400px] bg-red-700 flex items-center justify-center align-middle">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="w-[80%] h-[80%] object-contain rounded-md"
          alt=""
        />
      </div>
      username: <br />
      update password:
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
