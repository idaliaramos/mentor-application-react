import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class NavComponent extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    if (localStorage.token) {
      return this._renderLoggedIn();
    }
    return this._renderLoggedOut();
  }
  _renderLoggedIn() {
    const { activeItem } = this.state;

    return (
      <Menu inverted size="small">
        <Menu.Item
          name="Loggedin"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item active={activeItem === "Mentees"}>
          <Link to="/mentors">Mentors</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/mentees">Mentees</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Log Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

  _renderLoggedOut() {
    const { activeItem } = this.state;

    return (
      <Menu inverted size="small">
        <Menu.Item
          name="homeLoggedout"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item active={activeItem === "Mentees"}>
          <Link to="/mentors">Mentors</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/mentees">Mentees</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Login</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
