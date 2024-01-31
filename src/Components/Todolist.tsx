import React, { useContext, useEffect, useState } from "react";
import { MdPriorityHigh } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { FaRegStickyNote } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContextApi";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
// ===================================================
interface TodolistProps {
  // other props...
  value: string;
}
export interface todo {
  // id?: string;
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
    const fetchAllTodos = async () => {
      let status = value == "completed" ? true : false;
      try {
        const q = query(
          collection(db, "todos"),
          where("userId", "==", user.uid),
          where("completed", "==", status)
        );
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot, "check");
        let arrayTodo: any = querySnapshot.docs.map((doc) => {
          console.log(doc.id, " => ", doc.data());
          return { id: doc.id, ...doc.data() };
        });

        setAllTodo((prev) => {
          return [...arrayTodo];
        });
      } catch (error: any) {
        console.error("Error fetching todos:", error.message);
      }
    };

    fetchAllTodos();
  }, [user]);

  // ====================================== edit Todo
  // =========================================delete todo
  const deleteTodo = async (ele: any) => {
    let id: string = ele.id;
    console.log(ele, id);

    await deleteDoc(doc(db, "todos", id));
    let deleted = allTodo.filter((e: any) => {
      return e.id !== id;
    });
    setAllTodo(deleted);
  };

  useEffect(() => {}, [allTodo]);

  return (
    <div className="w-[100%]  min-h-[400px]  bg-table grid grid-cols-1 md:grid-cols-3 gap-3">
      {!allTodo.length && (
        <h1 className="text-[30px] text-white font-primary text-center ">
          Empty {value} tasklist
        </h1>
      )}

      {allTodo.length &&
        allTodo.map((doc) => {
          return (
            <div className="w-[100%] h-[200px] bg-blue-900 p-3 text-white rounded-md shadow-black shadow-md">
              <div className="w-[100%] h-[25px]  flex justify-between mb-2">
                <h1 className="font-primary">{value}</h1>
                <div className="  text-white text-[20px] flex items-center align-middle gap-4">
                  <input
                    type="checkbox"
                    name=""
                    className="w-[20px] h-[20px]"
                    id=""
                  />

                  {/* =================== */}

                  <button className="hover:cursor-pointer">
                    <FaRegEdit />
                  </button>
                  <button
                    className="text-red-600 hover:cursor-pointer"
                    onClick={(e) => deleteTodo(doc)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div className="w-[100%] h-[100px] overflow-y-scroll p-2 shadow-md scrollbar-thin scrollbar-track-table scrollbar-rounded-md scrollbar-thumb-slate-700 text-[12px] ">
                {" "}
                Name: <span>{doc.name}</span>
                <br />
                Note:
                <p>{doc.note}</p>
              </div>
              <div className="w-[100%] h-[50px]  mx-auto flex justify-between items-center align-middle">
                <div className="w-[100px] h-[30px] bg-slate-400 text-[15px] flex justify-center items-center align-middle gap-1 rounded-md p-2 shadow-slate-600">
                  <h2 className="text-[15px] text-white font-primary">
                    {doc.priority}
                  </h2>
                  <MdPriorityHigh />
                </div>
                <div className="w-[100px] h-[30px] bg-slate-400 text-[15px] flex justify-center items-center align-middle gap-1 rounded-md p-2 shadow-slate-600">
                  <FaFlag className="text-blue-700" />
                  <h1 className="text-[12px] text-white font-primary">
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
