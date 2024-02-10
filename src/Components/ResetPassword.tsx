import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const forgotPasswordSetup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = emailRegex.test(email);
    if (isValid) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
          alert("mail is sent");
        })
        .catch(() => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log(errorCode + errorMessage);
          // ..
        });
    } else {
      alert("not valid mail");
    }
  };

  return (
    <>
      <div className="min-h-[600px] max-w-[600px] bg-item3 mx-auto flex items-center align-middle justify-center gap-3">
        <div className="flex flex-col gap-2 w-[100%]">
          {" "}
          <input
            className="w-[250px] md:w-[50%] mx-auto"
            type="email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="text-white bg-item2 w-[250px] md:w-[50%] mx-auto hover:cursor-pointer p-4"
            onClick={forgotPasswordSetup}
          >
            Get Reset Mail
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
