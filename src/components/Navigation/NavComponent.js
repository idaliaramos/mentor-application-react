import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class NavComponent extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleMentorsClick = () => {
    console.log("i clicked the mentors");
  };
  handleMenteesClick = () => {
    console.log("i clicked the mentees");
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted size="small">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mentees"
          active={activeItem === "mentees"}
          onClick={this.handleMenteesClick}
        />
        <Menu.Item
          name="mentors"
          active={activeItem === "mentors"}
          onClick={this.handleMentorsClick}
        />

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
