import React, { Component } from 'react';
import MiniDrawer from './component/Header/MiniDrawer';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
     
    }

  }
  render() {
    let { time } = this.state
    return (
      <div >
       
        <MiniDrawer />
       
      </div>
    );
  }
}

export default App;
