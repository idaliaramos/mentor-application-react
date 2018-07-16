import React, { Component } from "react";
import { lodash, isBetween } from "lodash";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MentorPage from "./components/Mentors/MentorPage";
import MenteesPage from "./components/Mentees/MenteesPage";
import UserFormPage from "./components/UserForm/UserFormPage";
import env from "./env";
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mentors: [],
  //     mentees: []
  //   };
  // }

  render() {
    return (
      <div className="contain">
        <Router>
          <Switch>
            {/* <Route exact path="/login" component={LoginPageContainer} />
              <Route exact path="/" component={RegisterPageContainer} />
                <Route exact path="/home" component={HomePage} /> */}

            <Route exact path="/mentors">
              <MentorPage />
            </Route>
            <Route exact path="/mentees">
              <MenteesPage />
            </Route>
            <Route exact path="/userForm">
              <UserFormPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
