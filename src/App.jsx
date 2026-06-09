import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Clock from './components/clock.jsx'
import ResizeWindow from './components/ResizeWindow.jsx'
import RandomUserGenerator from './components/userGenerator.jsx'
import ProductList from './components/ProductList.jsx'
import SearchUser from './components/searchUser.jsx'
import SetTheme from './components/setTheme.jsx'
import AddStudent from './components/AddStudent.jsx'
import StudentDisplay from './components/StudentDisplay.jsx'
import SearchStudent from './components/searchStudent.jsx'

function App() {

  // const [count, setCount] = useState(0)
//   useEffect(()=>{
//     console.log("Effet created.")

//     return ()=>{
//       console.log("disconnected");
//     }
//   },[count]);

//   useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data));
// }, []);

    const [time,setTime]=useState(new Date());
    useEffect(()=>{
      const timeIntervalId=setInterval(()=>{
        setTime(new Date())
      },1000);

      return ()=>{
        clearInterval(timeIntervalId)
      };
    });

  const [student, setStudent] = useState(() => {
  const savedStudents = localStorage.getItem("student_list");
  if (savedStudents) {
    return JSON.parse(savedStudents);
  }
  return [
    { id: 1, name: 'Hafsa', course: 'Statistics & Probabaility' }
  ];
});

    

  return (
    <>
      <Clock Time={time} />
      <br />
      <hr />
      <ResizeWindow />
      <br />
      <hr />
      <RandomUserGenerator />
      <br />
      <hr />
      <ProductList />
      <br />
      <hr />
      <SearchUser />
      <br />
      <hr />
      <SetTheme />
      <br />
      <hr />
      <AddStudent student={student} setStudent={setStudent}/>
      <StudentDisplay studentList={student} />
      <SearchStudent studentSearch={student}/>
    </>
  );
}

export default App;
