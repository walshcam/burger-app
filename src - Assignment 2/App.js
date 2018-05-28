import React, { Component } from 'react';
import './App.css';

import Input from "./components/input"
import Validation from "./components/ValidationComponent"

class App extends Component {

  state = {
    inputValue : "",
    inputLength: 0,
    validateLength: "This is too short"
  }

  stringChange = (event) => {
    let targetLength = event.target.value.length;

    const validateLength = this.state.inputLength < 6 ? 
    "This is too short" :
    "String Length Looks Good Bro!";
    console.log(validateLength);

    this.setState({
      inputValue: event.target.value,
      inputLength: targetLength,
      validateLength: validateLength
    })
  }

  render() {
    return (
      <div className="App">
        <Input 
          inputValue = {this.state.inputValue}
          updateInputValue = {this.stringChange}
          stringLength = {this.state.inputLength}  
        />
        <Validation 
          validate = {this.state.validateLength}
        />

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
