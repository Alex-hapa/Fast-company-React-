import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    console.log(users);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    return (
        <div>
            1
        </div>
    );    
}

export default App;