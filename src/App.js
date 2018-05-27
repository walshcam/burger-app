import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    show: true
  }

  toggleEvent = () => {
    const currentShow = this.state.show;
    this.setState({
      show: !currentShow
    }
    )
  }

  render() {

    let showDiv = this.state.show ?
      <h1>Hello World</h1> : null;

    return (
      <div className="App">
        <button onClick = {this.toggleEvent}>Show!</button>
        
        {showDiv}

      </div>
    );
  }
}

export default App;
