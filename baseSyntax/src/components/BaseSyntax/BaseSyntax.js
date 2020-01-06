import React, { Component } from "react";
import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";
import "./BaseSyntax.css";

class BaseSyntax extends Component {
    state = {
        userName: "DavidTorroija"
    }
    changeNameHandler = (event) => {
        // console.log("was clicked", this)
        this.setState({
            userName: event.target.value
        });
    }

    render() {
        return (
            <div className="BaseSyntax">
                <UserInput 
                    name={this.state.userName}
                    changed={this.changeNameHandler}
                >
                </UserInput>
                <UserOutput
                    userName={this.state.userName}
                >
                    Proident Lorem ad deserunt id ut officia enim consequat ea proident et in do ut. Fugiat dolor cillum officia ullamco sit laboris tempor laborum eiusmod. Enim mollit in do eiusmod ex laborum commodo irure nostrud non qui aute in irure. 
                    Incididunt nostrud laboris in amet.
                </UserOutput>
                <UserOutput
                    userName={this.state.userName}
                >
                    Ut ea commodo veniam minim et sunt.
                    Commodo et ut magna et veniam veniam laboris do enim dolor reprehenderit tempor deserunt nulla.
                </UserOutput>
            </div>
        );
    }
}

export default BaseSyntax;