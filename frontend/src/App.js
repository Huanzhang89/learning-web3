import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'

let web3 = new Web3(Web3.givenProvider);

console.log(web3)

class App extends Component {
  render() {
    if (!web3.givenProvider) {
      return <div>Please make sure you have Metamask installed.</div>
    }
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
