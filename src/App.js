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
import env from "./env";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      showAll: true
    };
  }

  componentDidMount() {
    console.log(env.KEY);

    //make request to API to get information
    fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentees", {
      headers: {
        "Content-Type": "application/json",

        Authorization: " Bearer "
      }
    })
      .then(response => response.json())
      .then(mentorCards => {
        // if (!mentorCards) {
        //   console.log('there are no mentorCards');
        //   // throw new Error();
        // }
        console.log(mentorCards.records, "mentorcards");
        return mentorCards.records.map(mentorCard => {
          return {
            id: mentorCard.id,
            skills: mentorCard.fields.skills,
            message: mentorCard.fields.message,
            name: mentorCard.fields.name,
            contact: mentorCard.fields.contact,
            image: mentorCard.fields.imgurl
          };
        });
      })
      .then(mentors => this.setState({ mentors: mentors.splice(1) }));
  }

  render() {
    return (
      <div className="contain">
        {/* </div> */}
        <div>
          <h2 className="title" />
        </div>

        <div>
          <MentorPage mentors={this.state.mentors} />
        </div>
      </div>
    );
  }
}

export default App;
