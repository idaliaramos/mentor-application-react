import React, { Component } from "react";
import { Form, Segment, Dropdown } from "semantic-ui-react";
import createUserInfo from "../../ApiCalls/createUserInfo";

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" }
];

class UserFormComponent extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleChange = (e, { value }) => {
    console.log(this.state, "state");
    this.setState({ value });
  };
  _handleClickOnSubmit = event => {
    event.preventDefault();
    let userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      skills: this.state.skills,
      message: this.state.message,
      contact: this.state.contact,
      imgurl: this.state.imgurl
    };
    createUserInfo(userInfo);
  };

  render() {
    const { value } = this.state;
    return (
      <Segment inverted color="blue" size={"big"} key={"big"}>
        <Form
          inverted
          size={"big"}
          key={"big"}
          onSubmit={this._handleClickOnSubmit}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              // name={this.state.name}
              onChange={(event, newValue) =>
                this.setState({ firstName: newValue.value })
              }
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={(event, newValue) =>
                this.setState({ lastName: newValue.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <label>What are your skills?</label>
            <Dropdown
              placeholder="Skills"
              fluid
              multiple
              selection
              options={options}
              onChange={(event, newValue) =>
                this.setState({ skills: newValue.value })
              }
            />
          </Form.Group>

          <Form.Group inline>
            <label>What are you interested in?</label>
            <Form.Radio
              label="To be a mentor"
              value="mentor"
              checked={value === "mentor"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="To find a mentor"
              value="mentee"
              checked={value === "mentee"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
            onChange={(event, newValue) =>
              this.setState({ message: newValue.value })
            }
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default UserFormComponent;
