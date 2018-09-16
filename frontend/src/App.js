import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'
import Loader from 'react-loader'

let web3 = new Web3(Web3.givenProvider);

console.log(web3)

class App extends Component {
  state = {
    loaded: false,
    currentBlock: null,
  }
  componentDidMount() {
    web3.eth.getBlockNumber()
      .then(latestBlock => {
        web3.eth.getBlock(latestBlock).then(res => {
          this.setState({
            currentBlockNumber: latestBlock,
            currentBlock: res,
            loaded: true,
          })
        })
      })
  }
  render() {
    if (!web3.givenProvider) {
      return <div>Please make sure you have Metamask installed.</div>
    }
    if (this.state.loading) {

    }
    let blockNumber

    // console.log(blockNumber)
    // const currentBlock = web3.eth.getBlock(web3.eth.blockNumber)
    return (
      <div className="App">
        <Loader loaded={this.state.loaded} >
          <div>{JSON.stringify(this.state.currentBlock)}</div>
        </Loader>
        {/* {console.log(currentBlock)} */}
      </div>
    );
  }
}

export default App;
