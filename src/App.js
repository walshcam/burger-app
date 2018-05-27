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
    return (
      <div className="App">
        <button onClick = {this.toggleEvent}>Show!</button>
        
        {
          this.state.show ?
        
        <h1>Hello World</h1> : null

        }

      </div>
    );
  }
}

export default App;
