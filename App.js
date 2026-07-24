import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterBy, setFilterBy] = useState("all");
  const [editingId, setEditingId] = useState(null);

  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const data = localStorage.getItem("students");
    if (data) setStudents(JSON.parse(data));

    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    document.title = `Students (${students.length})`;
  }, [students]);

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  function resetForm() {
    setName("");
    setAge("");
    setCourse("");
    setMarks("");
    setEditingId(null);
  }

  function saveStudent() {
    if (!name || !age || !course || !marks) {
      alert("Fill all fields");
      return;
    }

    if (editingId === null) {
      setStudents([
        ...students,
        {
          id: Date.now(),
          name,
          age: Number(age),
          course,
          marks: Number(marks),
          createdAt: Date.now(),
        },
      ]);
    } else {
      setStudents(
        students.map((s) =>
          s.id === editingId
            ? { ...s, name, age: Number(age), course, marks: Number(marks) }
            : s
        )
      );
    }

    resetForm();
  }

  function editStudent(id) {
    const student = students.find((s) => s.id === id);
    if (!student) return;

    setName(student.name);
    setAge(student.age);
    setCourse(student.course);
    setMarks(student.marks);
    setEditingId(id);
  }

  function deleteStudent(id) {
    if (!window.confirm("Delete student?")) return;
    setStudents(students.filter((s) => s.id !== id));
  }

  const displayStudents = useMemo(() => {
    let data = [...students];

    data = data.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filterBy === "pass")
      data = data.filter((s) => s.marks >= 40);

    if (filterBy === "fail")
      data = data.filter((s) => s.marks < 40);

    switch (sortBy) {
      case "az":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "high":
        data.sort((a, b) => b.marks - a.marks);
        break;

      case "low":
        data.sort((a, b) => a.marks - b.marks);
        break;

      case "old":
        data.sort((a, b) => a.createdAt - b.createdAt);
        break;

      default:
        data.sort((a, b) => b.createdAt - a.createdAt);
    }

    return data;
  }, [students, search, filterBy, sortBy]);

  const total = students.length;
  const passed = students.filter((s) => s.marks >= 40).length;
  const failed = total - passed;
  const highest = total ? Math.max(...students.map((s) => s.marks)) : 0;
  const average = total
    ? (
        students.reduce((sum, s) => sum + s.marks, 0) / total
      ).toFixed(1)
    : 0;

  if (loading) return <h2>Loading...</h2>;

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <h1>Student Dashboard</h1>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h3>{time.toLocaleTimeString()}</h3>

      <hr />

      <p>Total : {total}</p>
      <p>Passed : {passed}</p>
      <p>Failed : {failed}</p>
      <p>Highest : {highest}</p>
      <p>Average : {average}</p>

      <hr />

      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />
      <input placeholder="Course" value={course} onChange={(e)=>setCourse(e.target.value)} />
      <input placeholder="Marks" value={marks} onChange={(e)=>setMarks(e.target.value)} />

      <button onClick={saveStudent}>
        {editingId === null ? "Add Student" : "Update Student"}
      </button>

      <button onClick={resetForm}>Clear</button>

      <hr />

      <input
        placeholder="Search..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="old">Oldest</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="high">Highest Marks</option>
        <option value="low">Lowest Marks</option>
      </select>

      <select value={filterBy} onChange={(e)=>setFilterBy(e.target.value)}>
        <option value="all">All</option>
        <option value="pass">Passed</option>
        <option value="fail">Failed</option>
      </select>

      <hr />

      {displayStudents.length === 0 ? (
        <h3>No Students Found</h3>
      ) : (
        displayStudents.map((student) => (
          <div
            key={student.id}
            style={{
              border:"1px solid gray",
              padding:10,
              marginBottom:10
            }}
          >
            <h3>{student.name}</h3>
            <p>Age : {student.age}</p>
            <p>Course : {student.course}</p>
            <p>Marks : {student.marks}</p>
            <p>Status : {student.marks >= 40 ? "Pass" : "Fail"}</p>

            <button onClick={()=>editStudent(student.id)}>Edit</button>

            <button onClick={()=>deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
