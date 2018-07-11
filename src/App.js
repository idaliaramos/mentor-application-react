import React, { Component } from "react";
import { lodash, isBetween } from "lodash";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

    //  make request to API to get information
    fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentors", {
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
        <Router>
          <Switch>
            {/* <Route exact path="/login" component={LoginPageContainer} />
              <Route exact path="/" component={RegisterPageContainer} />
                <Route exact path="/home" component={HomePage} /> */}
            <Route exact path="/mentors" component={MentorPage} />
            {/* <Route
                exact
                path="/destinations/:destinationId"
                component={AdventurePageContainer}
              /> */}
          </Switch>
          {/* <div>
          <MentorPage mentors={this.state.mentors} />
        </div> */}
        </Router>
      </div>
    );
  }
}

export default App;
