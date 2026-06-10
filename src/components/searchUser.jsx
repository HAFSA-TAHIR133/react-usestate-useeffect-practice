// Search Input
// User types:
// ha
// List updates automatically.
// Learn:
//  useEffect
//  Dependency Array
// [search]

import { useEffect, useState } from "react";


function SearchUser() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {

    if (search.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const FetchSearchData = async()=>{
      try{
        const FetchUserData = await fetch("https://jsonplaceholder.typicode.com/users");
        const fetchedData = await FetchUserData.json();
        const matches = fetchedData.filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredUsers(matches);
      }
      catch(error){
        console.log("Error in fetching the data. ",{error});
      }
      
    }
  FetchSearchData();
   

  }, [search]); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Enter user name you want to search</h1>

      <input
        type="text"
        placeholder="Type a name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <h4 key={user.id}> Match Found: {user.name} at index: {user.id}</h4>
          ))
        ) : (
          search && <p>No matching users found for "{search}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchUser;



