import React from "react";
import { MdPriorityHigh } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { FaRegStickyNote } from "react-icons/fa";
interface TodolistProps {
  // other props...
  value: string;
}
const Todolist: React.FC<TodolistProps> = ({ value }) => {
  return (
    <div className="w-[100%]  min-h-[400px]  bg-table grid grid-cols-1 md:grid-cols-3 gap-3">
      <h1 className="text-[30px] text-white font-primary text-center ">
        Empty {value} tasklist
      </h1>

      {/* <div className="w-[100%] h-[200px] bg-blue-900 p-3 text-white rounded-md shadow-black shadow-md">
        <h1>{value}</h1>
        <div className="w-[100%] h-[100px] overflow-y-scroll p-2 shadow-md scrollbar-thin scrollbar-track-table scrollbar-rounded-md scrollbar-thumb-slate-700 text-[12px] ">
          {" "}
          NOTE:
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            ipsa a explicabo numquam veritatis fugiat ad distinctio alias vel
            obcaecati culpa possimus omnis doloribus quod sint non unde.
            Officia, in! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolorem laborum deserunt eius modi quis porro dignissimos
            labore perferendis sunt natus, consectetur qui nostrum laboriosam,
            corporis ad odio. Voluptatum, laudantium. Quas.
          </p>
        </div>
        <div className="w-[100%] h-[50px]  mx-auto flex justify-between items-center align-middle">
          <div className="w-[100px] h-[30px] bg-slate-400 text-[15px] flex justify-center items-center align-middle gap-1 rounded-md p-2 shadow-slate-600">
            <h2 className="text-[15px] text-white font-primary">Medium</h2>
            <MdPriorityHigh />
          </div>
          <div className="w-[100px] h-[30px] bg-slate-400 text-[15px] flex justify-center items-center align-middle gap-1 rounded-md p-2 shadow-slate-600">
            <FaFlag className="text-blue-700" />
            <h1 className="text-[15px] text-white font-primary">12/2/45</h1>
          </div>
        </div>
      </div> */}
      {/* ================================ */}
    </div>
  );
};

export default Todolist;
