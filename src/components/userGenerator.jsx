// API:
// https://randomuser.me/api/
// Show:
// Image
// Name
// Email
// Button:
// Generate New User
// Learn:

import { useEffect,useState } from "react";
function RandomUserGenerator(){
    const [user,setUser] = useState("");
   const fetchData = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setUser(data.results[0])); 
    };
    useEffect(()=>{
        fetchData();
        console.log("user generate");
        return ()=>{
            setUser("");
            console.log("user cleared");
        }

    },[])
    if(!user){
        return <h2>Data is loading...</h2>
    }
    return(<>
        <div>
            <h2>Random User Generator</h2>
            {user && (
                <div>
                    <img src={user.picture.large} alt="User profile" style={{ borderRadius: "50%" }} />
                    <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                    <p>{user.email}</p>
                    <button onClick={fetchData}>Generate New User</button>
                </div>
            )}
                
            
        </div>
    </>);

}
export default RandomUserGenerator;