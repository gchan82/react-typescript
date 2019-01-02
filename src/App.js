import React, { Component } from 'react';
import './App.css';

class App extends Component {

  onClick = () => {
    console.log(this.firstName.value);
    console.log(this.lastName.value);
    console.log(this.age.value);
  }
  onKeyUp = (target, e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
          break;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <span>First name:</span>
          <input ref={(input) => { this.firstName = input }} onKeyUp={this.onKeyUp.bind(this, 'firstName')} type="text" />

        </div>
        <div>
          <span>Last name:</span>
          <input type="text" ref={(input) => { this.lastName = input }} onKeyUp={this.onKeyUp.bind(this, 'lastName')} />
        </div>
        <div>
          <span>Age:</span>
          <input type="text" ref={(input) => { this.age = input }} onKeyUp={this.onKeyUp.bind(this, 'age')} />
        </div>
        <div>
          <input type="submit" value="submit" ref={(input) => { this.submit = input }} onClick={this.onClick} onKeyUp={this.onKeyUp.bind(this, 'submit')} />
        </div>
      </div>
    )
  }
}

export default App;