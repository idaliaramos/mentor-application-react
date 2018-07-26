import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import NavComponent from '../NavComponent';
import UserFormComponent from './UserFormComponent';

export default class UserFormPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  testFunc = ev => {
    console.log(this.state, 'state');
  };
  render() {
    const { onSubmitUserInfo } = this.props;
    return (
      <div className="UserPage">
        <NavComponent />
        <h1 className="center">Tell us about yourself</h1>
        <div className="form-component">
          <UserFormComponent onSubmitUserInfo={onSubmitUserInfo} testFunc={this.testFunc} />
        </div>
      </div>
    );
  }
}
// UserFormPage.propTypes = {
//   onSubmitUserInfo: PropTypes.func.isRequired,
// };
