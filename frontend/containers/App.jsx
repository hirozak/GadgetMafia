import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    )
  }
}

export default App;
