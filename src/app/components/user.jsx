import React from "react";
import Qualities from "./qualitie";
import Bookmark from "./bookmark";


const User = (props) => {
    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>
                <Qualities user={props}/>
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate} /5</td>
            <td><Bookmark userId={props._id} bookmark={props.bookmark} onFavorite={props.onFavorite}/></td>
            <td>
                <button
                    onClick={() => props.updateData(props._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

export default User;