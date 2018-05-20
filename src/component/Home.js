import React, { Component } from 'react'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tname:''
    }

  }
  render() {

    

    return (
      <div>
          { this.state.tname }
      </div>
    )
  }
}
export default Home
