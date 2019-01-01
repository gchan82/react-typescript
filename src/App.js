import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// match.params.user: unclear
const User = ({ username }) => {
  return (
    <div>
      <h1> Welcome, {username}! </h1>
    </div>
  )
}

class App extends Component {
  state = {
    loggedIn: false
  }
  handleClick = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink exact to="/" activeStyle={{ color: 'green' }}>Home</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={{ color: 'green' }}>About</NavLink></li>
            <li><NavLink exact to="/user/John" activeStyle={{ color: 'green' }}>John</NavLink></li>
            <li><NavLink exact to="/user/Joe" activeStyle={{ color: 'green' }}>Joe</NavLink></li>
          </ul>

          <Prompt
            when={!this.state.loggedIn}
            message={(location) => {
              return location.pathname.startsWith('/user') ? 'You are not logged in. Please login to access.' : true
            }}

          />

          {/* documentation:
(location) => {
  return location.pathname.startsWith('/user')
  :prompts only in /user route. Prevents 2nd prompt again when re-routing to home page.
*/}


          <input type="button" value={this.state.loggedIn ? 'log out' : 'login'} onClick={this.handleClick}></input>
          <hr></hr>
          <button onClick={this.handleClick}>{this.state.loggedIn ? 'log out' : 'login'}</button>
          <br></br>
          {this.state.loggedIn ? 'You are logged in' : 'You are logged out'}

          <Route exact path="/" render={() => {
            return (
              <div>
                <h1>Welcome Home!</h1>
              </div>
            )
          }} />
          <Route exact path="/about" render={() => { return <h1>About Page</h1> }} />
          <Route exact path="/user/:id" render={({ match }) => {
            return this.state.loggedIn ? <User username={match.params.id} /> : <Redirect to="/" />
          }}></Route>
        </div>
      </Router>
    )
  }
}
export default App;