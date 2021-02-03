import React, { ChangeEvent } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

export default class App extends React.Component {
  state = {
    userName: "SuperGeorge",
  };

  userNameChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="max" />
      </div>
    );
  }
}
