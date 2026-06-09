import { useEffect,useState } from "react";

function SearchStudent({studentSearch}){
    const [searchUser,setSearchUser] =useState("");
    const [filterUsers,setFilterUsers]=useState([]);
    useEffect(()=>{
        let matchStudent=studentSearch.filter(student =>{
            return student.name.toLowerCase().includes(searchUser.toLowerCase());
        })
        setFilterUsers(matchStudent);

    },[searchUser])

    return (<>
        <div>
            <p>Enter Student Name you want to search: </p>
            <input type="text" placeholder="Enter Name" value={searchUser}
            onChange={(e) => {setSearchUser(e.target.value)}}/> 
            {searchUser &&(
                <div className="user-found">
                    {filterUsers.map((s)=>{
                    return(
                        <div key={s.id}>
                            <h3>Student Found at index: {s.id}:</h3>
                            <h4>Name: {s.name}</h4>
                            <h4>Course: {s.course}</h4>
                            </div>
                    )
                    })}
            </div>
            
            )}
            </div>
            
    </>);
}
export default SearchStudent;