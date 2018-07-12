import React, { Component } from "react";
import env from "../../env";
import NavComponent from "../Navigation/NavComponent";
import UserFormComponent from "./UserFormComponent";
import UserFormPageLayout from "./UserFormPageLayout";

export default class UserFormPage extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {}
    };
  }

  render() {
    return (
      <div className="UserPage">
        <NavComponent />
        {/* <UserFormPageLayout> */}
        <h1 className="center">Tell us about yourself</h1>
        <div className="form-component">
          <UserFormComponent />
        </div>
        {/* </UserFormPageLayout> */}
      </div>
    );
  }
}
