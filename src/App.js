import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super ()
 this.state = {
   avatar: "",
   login: "",
   html_url: "",
   bio: "",
   location: "",
   hireable: ""
 }
}

 componentDidMount () {
   axios.get('https://api.github.com/users/eransom').then(response => this.setState({
     avatar: response.data.avatar_url,
     login: response.data.login,
     html_url: response.data.html_url,
     bio: response.data.bio,
     location: response.data.location,
     hireable: response.data.hireable,
     search: "this user"
   }))
 }

 displayProfile () {
   let username = this.searchInput.value
   axios.get(`https://api.github.com/users/${username}`).then(response => this.setState({
     avatar: response.data.avatar_url,
     login: response.data.login,
     html_url: response.data.html_url,
     bio: response.data.bio,
     location: response.data.location,
     hireable: response.data.hireable,
     search: this.searchInput.value
   }))
 }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" className="App-logo" alt="logo" />
          <h2>GITHUB PROFILE</h2>
        </div>
        <ul >
          <li className="profileImg">
            <img src={this.state.avatar}/>
          </li>
          <li className="userName">{this.state.login}</li>
        </ul>
        <a href={this.state.html_url} className="url">{this.state.html_url}</a>
        <ul>
          <li className="bio">{this.state.bio}</li>
          <li className="location">{this.state.location}</li>
          <li className="hire">{this.state.hireable}</li>
        </ul>
        <input placeholder="Type Username Here" ref={(input) => { this.searchInput = input }}
      />
        <button onClick={this.displayProfile.bind(this)}>Click</button>
      </div>
    );
  }
}

export default App;
