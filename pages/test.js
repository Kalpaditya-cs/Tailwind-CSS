import { useState, useEffect } from "react";
export default function Home() {
  const [count, setCount] = useState("");

  useEffect(() => {
    console.log("page loaded")
  }, []);

  function presentStudent() {
    if (count < 0) return;

    setCount(count + 1)
  }


  function AbsentStudent() {
    if (count > 0) {

    setCount(count - 1)}
  }


  function Reset() {
    if (count > 20) return;

    setCount(count)
  }

  return (
    <div>
      <h1>Total Students: 20</h1>
      <h1>Students:{count}</h1>

      <button onClick={() => presentStudent()}
        className="">Present</button>

      <button onClick={() => AbsentStudent()}
        className="">Absent</button>

      <button onClick={() => Reset()}
        className="">Reset</button>



    </div>
  )
}