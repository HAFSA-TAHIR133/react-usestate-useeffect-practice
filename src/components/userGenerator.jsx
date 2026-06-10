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
    const [user,setUser] = useState("")
    const fetchRandomUserData = async() => {
        const fetchData = await fetch('https://randomuser.me/api/');
        const fetchedData = await fetchData.json();
        setUser(fetchedData.results[0]);
    }
    

    useEffect(()=>{
        fetchRandomUserData();
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
                    <button onClick={fetchRandomUserData}>Generate New User</button>
                </div>
            )}
                
            
        </div>
    </>);

}
export default RandomUserGenerator;