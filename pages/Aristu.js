import { useState, useEffect } from "react";
import React from "react";
const data = [
  { id: 1, name: "Rahul Sharma", age: 20, course: "React" },
  { id: 2, name: "Aman Singh", age: 21, course: "Node" },
  { id: 3, name: "Rajat Kumar", age: 22, course: "Java" },
  { id: 4, name: "Priya Sharma", age: 19, course: "Python" },
  { id: 5, name: "Rohit Verma", age: 23, course: "React" },
  { id: 6, name: "Sneha Patel", age: 20, course: "Angular" },
  { id: 7, name: "Karan Mehta", age: 21, course: "Node" },
  { id: 8, name: "Neha Gupta", age: 22, course: "Java" },
  { id: 9, name: "Ankit Jain", age: 24, course: "Python" },
  { id: 10, name: "Pooja Yadav", age: 19, course: "React" },
  { id: 11, name: "Suresh Kumar", age: 22, course: "Node" },
  { id: 12, name: "Ramesh Sharma", age: 20, course: "Java" },
  { id: 13, name: "Deepak Verma", age: 23, course: "React" },
  { id: 14, name: "Nikita Singh", age: 21, course: "Python" },
  { id: 15, name: "Arjun Patel", age: 22, course: "Angular" },
  { id: 16, name: "Komal Gupta", age: 19, course: "Node" },
  { id: 17, name: "Mohit Sharma", age: 20, course: "React" },
  { id: 18, name: "Riya Jain", age: 24, course: "Java" },
  { id: 19, name: "Harsh Yadav", age: 23, course: "Node" },
  { id: 20, name: "Vikas Meena", age: 22, course: "Python" },
  { id: 21, name: "Kal Sharma", age: 23, course: "CSE" },
]

export default function Home() {
  const [students, setStudents] = useState(data)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
  const [edit, setEdit] = useState(null)
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

   useEffect(() => {
      console.log("Student List Changed");
    }, [students]);
  
   useEffect(() => {
     const savedStudents = localStorage.getItem("students");
     if (savedStudents) {
       setStudents(JSON.parse(savedStudents));
     }
   }, []);
 
   useEffect(() => {
     if (students.length > 0) {
       localStorage.setItem("students", JSON.stringify(students));
     } else {
       localStorage.removeItem("students");
     }
   }, [students]);

  //CREATE
  function adddata() {
    if (!name.trim() || !age.trim() || !course.trim()) {
      alert("Please complete all reamining fields")
      return;
    }

    const student = {
      id: students.length + 1,
      name: name,
      age: age,
      course: course
    }
    setStudents([...students, student])
    setName("")
    setAge("")
    setCourse("")
  }

  //DELETE
  function deletedata(id) {
    setStudents(students.filter((student) => student.id !== id))
  }

  //EDIT
  function editdata(items) {
    setName(items.name)
    setAge(items.age)
    setCourse(items.course)
    setEdit(items.id)
  }

  //UPDATE
  function updatedata() {
    setStudents(
      students.map((student) => student.id === edit ?
        {
          ...students,
          name,
          age,
          course
        } : student)
    )

    setName("")
    setAge("")
    setCourse("")
    setEdit(null)
  }

  //SEARCH
  // function searchStudent(items) {
  //   const keyword = search.toLowerCase();

  //   return (
  //     items.name.toLowerCase().includes(keyword) ||
  //     items.course.toLowerCase().includes(keyword) ||
  //     items.age.toString().includes(keyword)
  //   );
  // }

  const filteredStudents = students.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase()) ||
    items.course.toLowerCase().includes(search.toLowerCase()) ||
    items.id.toString().includes(search)
  );

  const sortedStudents = [...filteredStudents]

  function sortstudents() {
    if (sortBy === "az") {
      sortedStudents.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (sortBy === "za") {
      sortedStudents.sort((b, a) => a.name.localeCompare(a.name))
    }
    else if (sortBy === "ageLow") {
      sortedStudents.sort((a, b) => a.age - b.age)
    }
    else if (sortBy === "ageHigh") {
      sortedStudents.sort((b, a) => b.age - a.age)
    }
    else if (sortBy === "Newest") {
      sortedStudents.sort((a, b) => a.id - b.id)
    }
    else if (sortBy === "Oldest") {
      sortedStudents.sort((b, a) => b.id - a.id)
    }
    return sortedStudents;
  }


  return (
    <div>
      <h1>Student Dashboard</h1>


      <input
        className="border p-3 rounded w-full"
        type="text"
        placeholder="Search name or course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input className="border m-6 p-1"
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />


      <input className="border m-6 p-1"
        type="text"
        placeholder="Student's age"
        value={age}
        onChange={(e) => setAge(e.target.value)} />

      <input className="border m-6 p-1"
        type="text"
        placeholder="Course Name"
        value={course}
        onChange={(e) => setCourse(e.target.value)} />

      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Select Sorting</option>

          <option value="az">A → Z</option>

          <option value="za">Z → A</option>

          <option value="ageLow">Age Low → High</option>

          <option value="ageHigh">Age High → Low</option>

          <option value="newest">Newest</option>

          <option value="oldest">Oldest</option>
        </select>
      </div>

      {edit === null ? (<button onClick={() => adddata()}
        className="border">Add</button>) :

        (<button onClick={() => updatedata()}
          className="border">Update</button>)}

      <div className="grid grid-cols-5 p-12 gap-6">

        <div>Id</div>
        <div>Name</div>
        <div>Age</div>
        <div>Course</div>
        <div>Action</div>

        {sortstudents().map((items) =>
          <React.Fragment key={items.id}>
            <div>{items.id}</div>
            <div>{items.name}</div>
            <div>{items.age}</div>
            <div>{items.course}</div>
            <div>

              <button className="border"
                onClick={() => deletedata(items.id)}>Delete</button>

              <button className="border"
                onClick={() => editdata(items)}>Edit</button>

            </div>
          </React.Fragment>)}
      </div>
    </div>
  )
}