import React from 'react';
import axios from "axios";
import Follower from "./Follower"
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user:'',
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/andrewhpark25").then(response => {
      console.log(response.data);
    axios.get("https://api.github.com/users/andrewhpark25/followers").then(res => {
      console.log(res.data);
      this.setState({
        user: response.data,
        followers: res.data,
      });
    });
  })
}

  

  render() {
    return (
      <div className="App">
        <h1>My Github Profile</h1>
          <img width="200" src={this.state.user.avatar_url}></img> 
      <h3>{this.state.user.name}</h3>
      <p>{this.state.user.login}</p>
      <p>{this.state.user.location}</p>
      <p>Profile:<a href={this.state.user.html_url}> {this.state.user.html_url} </a></p>
      <p>{this.state.user.followers}</p>
      <p>{this.state.user.following}</p>
      <p>{this.state.user.bio}</p>
      <h1>My Followers</h1>
     {this.state.followers.map(follower => {
       return <Follower 
       userImg = {follower.avatar_url} 
       userName = {follower.login}
       address = {follower.html_url}
     />
     })}
    </div>
    );
        }
}


export default App;
