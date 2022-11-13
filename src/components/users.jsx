import React, { useState } from "react";
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleUserDelete = (id) => {
        setUsers(prevState => prevState.filter((user) => user._id !== id));
    };


    const setUserRow = () => {
        return users.map((user) => {
            return (<tr key={user._id}>
                <td className="m-2">{user.name}</td>
                <td>
                    {user.qualities.map((quality) => (
                        <span
                            key={quality._id}
                            className={'badge m-2 bg-' + quality.color}
                        >
                            {quality.name}
                        </span>
                    ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                    <button
                        className="btn btn-danger m-2"
                        onClick={() => handleUserDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>)
        }
        );
    }
    console.log(users.length);

    return (
        users.length === 1 || users.length > 4
            ? <>
                <h1><span className="badge bg-primary">{users.length} человек тусанет с тобой</span></h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {setUserRow()}
                    </tbody>
                </table>
            </>
            : users.length === 0
                ? <h1><span className="badge bg-danger">Никто с тобой не тусанет</span></h1>
                : <>
                    <h1><span className="badge bg-primary">{users.length} человек тусанут с тобой</span></h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {setUserRow()}
                        </tbody>
                    </table>
                </>
    );
};

export default Users;