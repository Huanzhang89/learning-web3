import React, { Component } from 'react';
import logo from './logo.svg';
import Web3 from 'web3'
import Loader from 'react-loader'

import BlockItem from './components/BlockItem'

let web3 = new Web3(Web3.givenProvider);

console.log(web3)

class App extends Component {
  state = {
    loaded: false,
    currentBlock: null,
  }

  async getBlockData(blockNumber) {
    return await web3.eth.getBlock(blockNumber)
  }
  componentDidMount() {
    web3.eth.getBlockNumber()
      .then(latestBlock => {
        this.getBlockData(latestBlock).then(res => {
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
          <BlockItem {...this.state.currentBlock} />
          <div>{JSON.stringify(this.state.currentBlock)}</div>
        </Loader>
        {/* {console.log(currentBlock)} */}
      </div>
    );
  }
}

export default App;
