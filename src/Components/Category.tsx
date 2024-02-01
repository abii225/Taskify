import React, { useContext, useEffect, useState } from "react";
import Todolist from "./Todolist";
import { AuthContext } from "../Context/AuthContextApi";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { onSnapshot } from "firebase/firestore";

export interface todo {
  name: string;
  priority: string;
  date: string;
  completed: boolean;
  note: string;
  userId: string;
}
const Category: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  useEffect(() => {}, [user]);
  const [activeTab, setActiveTab] = useState("progress");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // =================================== Add Todo =================
  const [todo, setTodo] = useState<todo>({
    name: "",
    priority: "low",
    date: "",
    note: "",
    completed: false,
    userId: user.uid,
  });

  const addtoFirebase = async () => {
    try {
      const newCityRef = doc(collection(db, "todos"));

      // later...
      await setDoc(newCityRef, todo);

      return setTodo({
        name: "",
        priority: "",
        date: "",
        note: "",
        completed: false,
        userId: user.uid,
      });
    } catch (err) {
      alert("Error on adding new todos");
    }
  };
  return (
    <div className="max-w-[1600px] mx-auto">
      <nav className=" w-[90%] max-w-[1600px] mx-auto relative z-0 flex border rounded-md overflow-hidden text-white my-[30px]">
        <button
          type="button"
          className={`flex-1 py-2 px-4 text-center cursor-pointer border-b-2 ${
            activeTab === "progress"
              ? "border-blue-600 bg-blue-900 text-white"
              : "border-transparent bg-table text-gray-500 hover:text-gray-700"
          } focus:outline-none`}
          onClick={() => handleTabClick("progress")}
        >
          Progress
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 text-center cursor-pointer border-b-2 ${
            activeTab === "completed"
              ? "border-blue-600 bg-blue-900 text-white"
              : "border-transparent bg-table text-gray-500 hover:text-gray-700"
          } focus:outline-none`}
          onClick={() => handleTabClick("completed")}
        >
          Completed
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 text-center cursor-pointer border-b-2 ${
            activeTab === "add"
              ? "border-blue-600 bg-blue-900 text-white"
              : "border-transparent bg-table text-gray-500 hover:text-gray-700"
          } focus:outline-none`}
          onClick={() => handleTabClick("add")}
        >
          Add Task
        </button>
      </nav>

      <div className="mt-3 w-[90%] mx-auto">
        <div
          key="progress-container"
          className={`${
            activeTab === "progress" ? "" : "hidden"
          } bg-black text-white`}
        >
          <Todolist value={"progress"} />
        </div>

        <div
          key="completed-container"
          className={`${
            activeTab === "completed" ? "" : "hidden"
          } bg-black text-white`}
        >
          <Todolist value={"completed"} />
        </div>

        <div
          key="add-container"
          className={`${
            activeTab === "add" ? "" : "hidden"
          } w-full h-full mb-8 bg-table rounded-md overflow-hidden p-4 text-white`}
        >
          {/* Your Add Task content goes here */}
          <div className="w-[100%] lg:w-[60%]  min-h-[500px] bg-table mx-auto rounded-md overflow-hidden p-4 text-white">
            <h3 className="text-center font-primary text-[20px]">Task Name</h3>
            <input
              className="block mx-auto w-[90%] outline-none focus:outline-none border-b-2 border-blue-600 p-3 h-[50px] font-primary text-black text-[18px]"
              type="text"
              value={todo.name}
              name=""
              id=""
              onChange={(e) =>
                setTodo((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
            />
            <br />

            <div className=" max-w-[500px] mx-auto  flex flex-col md:flex-row justify-center">
              <div className="">
                <div className="max-w-[200px] h-[50px] mx-auto flex justify-between gap-3 p-2 rounded-md">
                  <h2 className="text-[20px] font-primary text-white">
                    Priority
                  </h2>
                  <select
                    className="w-[80px] px-2 py-1 bg-white text-black rounded-md outline-none focus:outline-none"
                    value={todo.priority}
                    onChange={(e) =>
                      setTodo((prev) => {
                        return { ...prev, priority: e.target.value };
                      })
                    }
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="max-w-[200px] h-[50px]  mx-auto flex  gap-3 p-2 rounded-md">
                <h2 className="text-[20px] font-primary text-white">Target</h2>
                <input
                  className="bg-white text-black h-[30px] p-2 rounded-md outline-none focus:outline-none"
                  type="date"
                  name=""
                  id=""
                  onChange={(e) =>
                    setTodo((prev) => {
                      return { ...prev, date: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <br />
            <h3 className="text-center font-primary text-[20px]">Add a note</h3>
            <textarea
              className="py-3 px-4 block w-[90%] mx-auto text-black border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              rows={3}
              value={todo.note}
              onChange={(e) =>
                setTodo((prev) => {
                  return { ...prev, note: e.target.value };
                })
              }
            ></textarea>
            <br />
            <button
              className="w-[90%] h-[50px] bg-blue-600 block mx-auto hover:bg-blue-500 cursor-pointer rounded-md"
              onClick={(e) => addtoFirebase()}
            >
              Add{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

// import React from "react";
// import Todolist from "./Todolist";

// const Category: React.FC = () => {
//   return (
//     <>
//       <nav
//         className="w-[90%] max-w-[1600px] mx-auto relative z-0 flex border rounded-md overflow-hidden  my-[30px]"
//         aria-label="Tabs"
//         role="tablist"
//       >
//         <button
//           type="button"
//           className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white  dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-table dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-gray-400 active"
//           id="bar-with-underline-item-1"
//           data-hs-tab="#bar-with-underline-1"
//           aria-controls="bar-with-underline-1"
//           role="tab"
//         >
//           In progress
//         </button>
//         <button
//           type="button"
//           className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600   relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-table dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-gray-400 active"
//           id="bar-with-underline-item-2"
//           data-hs-tab="#bar-with-underline-2"
//           aria-controls="bar-with-underline-2"
//           role="tab"
//         >
//           Completed
//         </button>
//         <button
//           type="button"
//           className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600  relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-table dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-gray-400 active"
//           id="bar-with-underline-item-3"
//           data-hs-tab="#bar-with-underline-3"
//           aria-controls="bar-with-underline-3"
//           role="tab"
//         >
//           Add Task
//         </button>
//       </nav>

//       <div className="mt-3  w-[90%] max-w-[1600px]   mx-auto">
//         {/* ======================================  IN PROGRESS TODOS ============================= */}
//         <div
//           key="progress container"
//           id="bar-with-underline-1"
//           role="tabpanel"
//           aria-labelledby="bar-with-underline-item-1"
//           className="bg-black"
//         >
//           <Todolist value={"progress"} />
//         </div>
//         {/* ============================================= COMPLETED TODOS ========================== */}
//         <div
//           key="completed container"
//           id="bar-with-underline-2"
//           className="hidden "
//           role="tabpanel"
//           aria-labelledby="bar-with-underline-item-2"
//         >
//           <Todolist value={"completed"} />
//         </div>
//         {/* ========================================   ADD NEW TODO =============================== */}
// <div
//   key="add container"
//   id="bar-with-underline-3"
//   className="hidden w-[100%] h-[100%] mb-[30px]"
//   role="tabpanel"
//   aria-labelledby="bar-with-underline-item-3"
// >
//   <div className="w-[100%] lg:w-[60%]  min-h-[500px] bg-table mx-auto rounded-md overflow-hidden p-4 text-white">
//     <h3 className="text-center font-primary text-[20px]">Task Name</h3>
//     <input
//       className="block mx-auto w-[90%] outline-none focus:outline-none border-b-2 border-blue-600 p-3 h-[50px] font-primary text-black text-[18px]"
//       type="text"
//       name=""
//       id=""
//     />
//     <br />
//     <h3 className="text-center font-primary text-[20px]">
//       Task Priority
//     </h3>
//     <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mx-auto">
//       <div className="w-[100%] h-[50px]  bg-green-600 mx-auto flex justify-between p-2 rounded-md">
//         <h2 className="text-[20px] font-primary text-white"> Low</h2>
//         <input
//           className="w-[25px]"
//           type="checkbox"
//           name=""
//           value="low"
//           id=""
//         />
//       </div>
//       <div className="w-[100%] h-[50px]  bg-yellow-600 mx-auto flex justify-between p-2 rounded-md">
//         <h2 className="text-[20px] font-primary text-white"> Medium</h2>
//         <input
//           className="w-[25px]"
//           type="checkbox"
//           value="Medium"
//           name=""
//           id=""
//         />
//       </div>
//       <div className="w-[100%] h-[50px]  bg-red-500 mx-auto flex justify-between p-2 rounded-md">
//         <h2 className="text-[20px] font-primary text-white"> High</h2>
//         <input
//           className="w-[25px]"
//           type="checkbox"
//           value="High"
//           name=""
//           id=""
//         />
//       </div>
//     </div>
//     <br />
//     <div className="w-[90%] h-[50px]  mx-auto flex  gap-3 p-2 rounded-md">
//       <h2 className="text-[20px] font-primary text-white">Concludes</h2>
//       <input
//         className="bg-white text-black h-[30px] p-2 rounded-md outline-none focus:outline-none"
//         type="date"
//         name=""
//         id=""
//       />
//     </div>
//     <br />
//     <h3 className="text-center font-primary text-[20px]">Add a note</h3>
//     <textarea
//       className="py-3 px-4 block w-[90%] mx-auto border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
//       rows={3}
//     ></textarea>
//     <br />
//     <button className="w-[90%] h-[50px] bg-blue-600 block mx-auto hover:bg-blue-500 cursor-pointer rounded-md">
//       Add{" "}
//     </button>
//   </div>
// </div>
//       </div>
//     </>
//   );
// };

// export default Category;
