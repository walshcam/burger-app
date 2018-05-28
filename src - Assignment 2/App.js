import React, { Component } from 'react';
import './App.css';

import Input from "./components/input";
import Validation from "./components/ValidationComponent";
import Char from "./components/CharComponent";

class App extends Component {

  state = {
    inputValue : "",
    inputLength: 0,
    inputArray: [],
    validateLength: "This is too short"
  }

  //Responds to when letters are input into field
  stringChange = (event) => {
    //Manipulates the length
    const targetLength = event.target.value.length;

    //Adds letter the array for cards
    const targetArray = event.target.value.split("");

    //Changes the validation based on the string length
    const validateLength = this.state.inputLength < 6 ? 
    "This is too short" :
    "String Length Looks Good Bro!";
    console.log(validateLength);

    this.setState({
      inputValue: event.target.value,
      inputLength: targetLength,
      inputArray: targetArray,
      validateLength: validateLength
    })
  }

  //Deletes the letter when the letter is pushed
  deleteLetter = (index) => {
    //Removes the letter from the array - spread operator is used to return a copy of the array
    const targetArray = [...this.state.inputArray]
    targetArray.splice(index, 1);

    //Creates a new string for the input
    const targetValue = targetArray.join('')

    this.setState({
      inputValue: targetValue,
      inputLength: this.state.inputLength - 1,
      inputArray: targetArray
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
        {/* This .map() should include a key, but there is no database so the key was excluded. */}
        {this.state.inputArray.map((letter, index) => (
          <Char 
            letters = {letter}
            click = {this.deleteLetter.bind(this, index)}
          />
        ))}

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
