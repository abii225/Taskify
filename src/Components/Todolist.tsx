import React, { useContext, useEffect, useState } from "react";
import { MdPriorityHigh } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { FaRegStickyNote } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContextApi";

import { db } from "../Firebase/firebase";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import Edit from "./Edit";
// ===================================================
interface TodolistProps {
  // other props...
  value: string;
}
export interface todo {
  id: string;
  name: string;
  priority: string;
  date: string;
  completed: boolean;
  note: string;
  userId: string;
}
const Todolist: React.FC<TodolistProps> = ({ value }) => {
  const { user }: any = useContext(AuthContext);
  const [allTodo, setAllTodo] = useState<todo[]>([]);

  useEffect(() => {
    let status = value == "progress" ? false : true;
    const q = query(
      collection(db, "todos"),
      where("completed", "==", status),
      where("userId", "==", user.uid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos: any = [];
      querySnapshot.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      setAllTodo(todos);
      console.log(todos, value, status);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // ======================= Delete a Todo =======================

  const deleteTodo = async (ele: todo) => {
    console.log(ele);
    let id: string = ele.id;
    await deleteDoc(doc(db, "todos", id));
  };

  // ============================  change status ===================

  // const handleStatus = (e: React.ChangeEvent<HTMLInputElement>, ele: todo) => {
  //   e.target.checked = ele.completed;
  // };
  // const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.target.checked = true;
  // };
  return (
    <div className="w-[100%]  min-h-[400px]  bg-body grid grid-cols-1 md:grid-cols-3 gap-3">
      {!allTodo.length && (
        <h1 className="text-[30px] text-black font-primary text-center ">
          Empty {value} tasklist
        </h1>
      )}

      {allTodo.length &&
        allTodo.map((doc) => {
          return (
            <div className="w-[100%] h-[200px] bg-item2 p-3 text-black rounded-md shadow-slate-300 shadow-md">
              <div className="w-[100%] h-[25px]  flex justify-between mb-2">
                <h1 className="font-primary text-white">({value})</h1>
                <div className="  text-[20px] flex items-center align-middle gap-4">
                  <Edit ele={doc} />

                  {/* =================== */}
                  <button
                    className="text-red-600 hover:cursor-pointer"
                    onClick={(e) => deleteTodo(doc)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div className="w-[100%] h-[100px] overflow-y-scroll p-2 shadow-md scrollbar-thin scrollbar-track-table scrollbar-rounded-md scrollbar-thumb-slate-700 text-[14px] md:text-[16px] mt-[15px]">
                {" "}
                <span className="text-white font-primary underline">
                  {" "}
                  {doc.name}
                </span>
                <br />
                <span className="text-white font-primary underline">
                  {" "}
                  Note:
                </span>
                <p className="text-white font-primary">{doc.note}</p>
              </div>
              <div className="w-[100%] h-[50px]  mx-auto flex gap-2 justify-between items-center align-middle">
                <div
                  className={`w-[100px] h-[30px]  text-[15px] flex justify-center items-center align-middle gap-1 rounded-md p-2 ${(() => {
                    switch (doc.priority) {
                      case "Low":
                        return "bg-green-400";
                      case "Medium":
                        return "bg-yellow-400";
                      case "High":
                        return "bg-red-600";
                      default:
                        return "";
                    }
                  })()}`}
                >
                  <h2 className="text-[15px] text-white  font-primary">
                    {doc.priority}
                  </h2>
                  <MdPriorityHigh className="text-white" />
                </div>
                <div className="w-[150px] h-[30px] bg-item3 text-[15px] flex justify-center items-center align-middle gap-1 rounded-md p-2 shadow-slate-600">
                  <FaFlag className="text-blue-700" />
                  <h1 className="text-[12px] text-blue-700 font-primary">
                    {doc.date}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      {/* ================================ */}
    </div>
  );
};

export default Todolist;
