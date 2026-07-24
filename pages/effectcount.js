import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log("Rendered");
  }, []);

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000)
  }, []);


  return (
    <div className="flex flex-1 p-12 justify-center items-center gap-6 m-6">
      <div>
        <h1 className="text-center">{count}</h1>
        </div>

        <div className="space-x-8">
          <button onClick={() => setCount(count + 1)}
            className="border bg-green-500 px-4 py 3">
            Present
          </button>

          <button onClick={() => setCount(count - 1)}
            className="border bg-green-500 px-4 py 3">
            Decrease
          </button>


          <button onClick={() => setCount(0)}
            className="border bg-green-500 px-4 py 3">
            Reset
          </button>
        </div>
      

      <div className="mr-6">
        <p>Time: {date}</p>
      </div>
    </div>
  );
}