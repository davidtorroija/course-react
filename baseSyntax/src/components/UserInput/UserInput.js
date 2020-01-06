import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
    const { name, changed } = props;
    return (
        <div className="UserInput">
           <input value={name} onChange={changed}/>
        </div>
    );
}

export default UserInput;