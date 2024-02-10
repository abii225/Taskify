import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
// ====================================
interface EditProps {
  ele: {
    id: string;
    name: string;
    priority: string;
    date: string;
    completed: boolean;
    note: string;
    userId: string;
    // Add more properties if necessary
  };
}
interface todoModel {
  id: string;
  name: string;
  priority: string;
  date: string;
  completed: boolean;
  note: string;
  userId: string;
  // Add more properties if necessary
}
// assigning the recieving props
const Edit: React.FC<EditProps> = ({ ele }) => {
  // console.log(ele, "open modal");
  const [openModal, setOpenModal] = useState(false);

  const [edit, setEditTodo] = useState<todoModel>({
    id: ele.id,
    name: ele.name,
    priority: ele.priority,
    date: ele.date,
    completed: ele.completed,
    note: ele.note,
    userId: ele.userId,
  });

  // =================================  update a todo ===============
  const updateTodo = async (e: any) => {
    // console.log(e, "updated before call");

    const todoRef = doc(db, "todos", e.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(todoRef, {
      name: e.name,
      priority: e.priority,
      date: e.date,
      completed: e.completed,
      note: e.note,
    });
  };

  return (
    <>
      <div className="">
        <Button className="bg-item2 p-0" onClick={() => setOpenModal(true)}>
          <FaRegEdit className="w-[20px] h-[20px]" />
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Edit Todo</Modal.Header>
          <Modal.Body>
            <div className="text-[15px] md:text-[18px] flex flex-col gap-4">
              <label htmlFor="" className="flex flex-col gap-2">
                <h1> Edit name</h1>
                <input
                  className="text-[15px] rounded-md"
                  type="text"
                  name=""
                  value={edit.name}
                  placeholder="todo name"
                  id=""
                  onChange={(e) =>
                    setEditTodo((prev) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                />
              </label>

              <label
                htmlFor=""
                className="flex flex-row items-center align-middle gap-2 rounded-md"
              >
                <h1>Priority</h1>
                <select
                  className="rounded-md"
                  name=""
                  id=""
                  value={edit.priority}
                  onChange={(e) =>
                    setEditTodo((prev) => {
                      return { ...prev, priority: e.target.value };
                    })
                  }
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>

              <label
                htmlFor=""
                className="flex flex-row items-center align-middle gap-2"
              >
                <h1>Edit Date</h1>
                <input
                  className="rounded-md"
                  type="date"
                  name=""
                  id=""
                  value={edit.date}
                  onChange={(e) =>
                    setEditTodo((prev) => {
                      return { ...prev, date: e.target.value };
                    })
                  }
                />
              </label>
              <label htmlFor="">
                <h1>Edit note</h1>
                <textarea
                  name=""
                  id=""
                  className="w-[100%] resize-none rounded-md "
                  rows={10}
                  value={edit.note}
                  onChange={(e) =>
                    setEditTodo((prev) => {
                      return { ...prev, note: e.target.value };
                    })
                  }
                ></textarea>
              </label>
              <label htmlFor="" className="flex gap-2 items-center">
                <h1>Completed</h1>
                <input
                  type="checkbox"
                  name=""
                  checked={edit.completed}
                  onChange={() =>
                    setEditTodo((prev) => {
                      return { ...prev, completed: !edit.completed };
                    })
                  }
                  id=""
                />
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-blue-800"
              onClick={() => {
                updateTodo(edit);
                setOpenModal(false);
              }}
            >
              Save Changes
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Edit;
