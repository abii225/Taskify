import React, { useContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AuthContext } from "../Context/AuthContextApi";
import ProfileEdit from "../Components/ProfileEdit";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { user }: any = useContext(AuthContext);

  const navigate = useNavigate();

  if (!user) {
    navigate("/signup");
  }

  const SignOutUser = async () => {
    // console.log("user before signout", user);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("signout success", user);
      })
      .catch(() => {
        // An error happened.
        // console.log("error occur at signout", error);
      });
  };

  useEffect(() => {
    // console.log(user);
  }, [user.displayName, user.photoURL]);
  return (
    <div className="max-w-[600px] mx-auto min-h-[600px] bg-white flex flex-col align-middle items-center">
      <div className="w-[250px] h-[300px] bg-white flex items-center justify-center align-middle">
        <img
          src={user ? user.photoURL : "hey"}
          className="w-[80%] h-[80%] object-contain rounded-md"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 items-center align-middle ">
        <h1 className="text-[15px] font-primary font-semibold">
          User :{user ? user.displayName : "user"}
        </h1>
        <h1 className="text-[15px] font-primary font-semibold">
          E-mail : {user ? user.email : "taskify@gmail.com"}
        </h1>
        <ProfileEdit />

        <br />
        <button
          className="w-[200px] h-[50px] p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          onClick={() => SignOutUser()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
