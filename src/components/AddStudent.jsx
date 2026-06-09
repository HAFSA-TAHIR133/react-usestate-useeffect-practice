import '../App.css'

import { useEffect, useState } from "react";

function AddStudent({ student, setStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

 
  useEffect(() => {
    localStorage.setItem("student_list", JSON.stringify(student));
  }, [student]);

  const handleClick = () => {
    if (name.trim() === "" || course.trim() === "") return;
    const nextId = student.length > 0 ? Math.max(...student.map((s) => s.id)) + 1 : 1;

    const newStudent = { id: nextId, name: name, course: course };

    setStudent([...student, newStudent]);

    setName("");
    setCourse("");
  };

  return (
    <div style={{ padding: "20px" }} className="add-student">
        <h1 style={{textAlign:'center'}}> Add New User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={handleClick}>Add user</button>
    </div>
  );
}

export default AddStudent;
