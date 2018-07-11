// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
import React, { Component } from "react";
import { lodash, isBetween } from "lodash";
import "./App.css";
import MentorPage from "./components/Mentors/MentorPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      showAll: true
    };
  }
  componentDidMount() {
    let key = "";
    //make request to API to get information
    fetch("https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      }
    })
      .then(response => {
        console.log(response, "response");
        response.json();
      })
      .then(data => {
        console.log(data, "data");
        this.setState({ mentors: data });
      });
  }

  render() {
    console.log(this.state.mentors, "state");
    return (
      <div className="contain">
        {/* </div> */}
        <div>
          <h2 className="title">Mentors Page</h2>
        </div>

        <div>
          <MentorPage mentors={this.state.mentors} />
        </div>
      </div>
    );
  }
}

export default App;
