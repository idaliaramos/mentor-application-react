import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MentorPage from './components/Mentors/MentorPage';
import MenteesPage from './components/Mentees/MenteesPage';
import UserFormPage from './components/UserForm/UserFormPage';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contain">
        <Router>
          <Switch>
            {/* {to be added} */}
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
