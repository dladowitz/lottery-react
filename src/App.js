import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { manager: "" };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager: manager });
  }

  render() {
    console.log("web3 version: ", web3.version);
    web3.eth.getAccounts().then(console.log);

    return (
      <div>
        <h2>This is our contract</h2>
        <div>This contract is managed by the address: {this.state.manager}</div>
      </div>
    );
  }
}

export default App;
