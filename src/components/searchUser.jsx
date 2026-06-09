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

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {

        const matches = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredUsers(matches);
      });
  }, [search]); 

  return (
    <div style={{ padding: "20px" }}>

      <input
        type="text"
        placeholder="Type a name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <h2 key={user.id}> Match Found: {user.name} at index: {user.id}</h2>
          ))
        ) : (
          search && <p>No matching users found for "{search}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchUser;



