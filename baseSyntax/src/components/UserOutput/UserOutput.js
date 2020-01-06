import React from "react";

const UserInput = (props) => {

    const styles = {
        backgroundColor: "#fafa",
        color: "white",
        font: "inherit",
        padding: "8px",
        borderRadius: "3px",
        cursor: "pointer",
        marginTop: "5px",
    };

    const { userName, children } = props;
    return (
        <div style={styles}>
           <p>
               {userName}!
           </p>
           <p>
               {children}
           </p>
        </div>
    );
}

export default UserInput;