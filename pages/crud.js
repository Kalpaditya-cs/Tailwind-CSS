import { useState, useEffect } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(function() {
    console.log("Page Loaded");
  }, []);

  // CREATE
  function addData() {
    if (name === "") return;

    setList([...list, name]);
    setName("");
  }

  // DELETE
  function deleteData(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  // EDIT
  function editData(index) {
    setName(list[index]);
    setEditIndex(index);
  }

  // UPDATE
  function updateData() {
    const newList = [...list];
    newList[editIndex] = name;
    setList(newList);

    setName("");
    setEditIndex(null);
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Simple CRUD
      </h1>

      <input
        className="border p-2 mr-2"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {editIndex === null ? (
        <button
          onClick={addData}
          className="bg-green-500 text-white px-4 py-2"
        >
          Add
        </button>
      ) : (
        <button
          onClick={updateData}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Update
        </button>
      )}

      <div className="mt-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border p-2 mb-2"
          >
            <p>{item}</p>

            <div>
              <button
                onClick={() => editData(index)}
                className="bg-yellow-500 text-white px-3 py-1 mr-2"
              >
                Edit
              </button>

              <button
                onClick={() => deleteData(index)}
                className="bg-red-500 text-white px-3 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}