import { FC, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.ts";
import { ToastContainer, Zoom, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Google from "../Components/Google.tsx";
import { AuthContext } from "../Context/AuthContextApi.tsx";

interface SignupForm {
  email: string;
  password: string;
  confirmPass: string;
  isChecked: boolean;
}
const Signup: FC = () => {
  const { user }: any = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const [form, setForm] = useState<SignupForm>({
    email: "",
    password: "",
    confirmPass: "",
    isChecked: false,
  });

  const formSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (form.password !== form.confirmPass) {
        return toast.warn("passwords don't match!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
      } else if (form.confirmPass.length < 8) {
        return toast.warn("passwords should be atleast 8 characters!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
      } else if (!form.isChecked) {
        return toast.warn("please accept our terms and conditions!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
      } else {
        createUserWithEmailAndPassword(auth, form.email, form.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // signin success
            toast.success("🦄 Wow so easy!", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Zoom,
            });
            // ...
          })
          .catch((error: any) => {
            // const errorCode = error.code;
            // const errorMessage = error;
            // console.log(errorMessage);
            if (error) {
              return toast.error("Register Failed", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
              });
            }

            // console.log(errorCode);
            // ..
          });

        //lets try to create a new user in authentication
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="  flex h-full items-center py-3">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
      {/* <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      /> */}
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/login"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <Google />
              {/* ==========  Google ======= */}
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

              {/* <!-- Form --> */}
              <form>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        value={form.email}
                        aria-describedby="email-error"
                        onChange={(e) =>
                          setForm((prev) => {
                            return { ...prev, email: e.target.value };
                          })
                        }
                      />
                      <div className="hidden absolute inset-y-0 end-0  items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="password-error"
                        value={form.password}
                        onChange={(e) =>
                          setForm((prev) => {
                            return { ...prev, password: e.target.value };
                          })
                        }
                      />
                      <div className="hidden absolute inset-y-0 end-0  items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="confirm-password-error"
                        value={form.confirmPass}
                        onChange={(e) =>
                          setForm((prev) => {
                            return { ...prev, confirmPass: e.target.value };
                          })
                        }
                      />
                      <div className="hidden absolute inset-y-0 end-0  items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="confirm-password-error"
                    >
                      Password does not match the password
                    </p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Checkbox --> */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className=""
                        value={form.isChecked ? "true" : "false"}
                        onChange={() =>
                          setForm((prev) => {
                            return { ...prev, isChecked: !form.isChecked };
                          })
                        }
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        I accept the{" "}
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {/* <!-- End Checkbox --> */}

                  <button
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={(e) => formSubmit(e)}
                  >
                    Sign up
                  </button>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
