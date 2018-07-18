import React, { Component } from "react";
import { Form, Segment, Dropdown } from "semantic-ui-react";
import createMentor from "../../ApiCalls/createMentor";
import createMentee from "../../ApiCalls/createMentee";
const options = [
  { key: "Angular", text: "Angular", value: "Angular" },
  { key: "CSS", text: "CSS", value: "CSS" },
  { key: "Graphic Design", text: "Graphic Design", value: "Graphic Design" },
  { key: "Ember", text: "Ember", value: "Ember" },
  { key: "HTML", text: "HTML", value: "HTML" },
  {
    key: "Information Architecture",
    text: "Information Architecture",
    value: "Information Architecture"
  },
  { key: "Javascript", text: "Javascript", value: "Javascript" },
  {
    key: "Mechanical Engineering",
    text: "Mechanical Engineering",
    value: "Mechanical Engineering"
  },
  { key: "Meteor", text: "Meteor", value: "Meteor" },
  { key: "NodeJS", text: "NodeJS", value: "NodeJS" },
  { key: "Python", text: "Python", value: "Python" },
  { key: "Rails", text: "Rails", value: "Rails" },
  { key: "React", text: "React", value: "React" },
  { key: "Ruby", text: "Ruby", value: "Ruby" },
  { key: "UI Design", text: "UI Design", value: "UI Design" },
  { key: "User Experience", text: "User Experience", value: "User Experience" }
];

class UserFormComponent extends Component {
  state = {
    name: "",
    lastName: "",
    value: ""
  };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };
  _handleClickOnSubmit = event => {
    event.preventDefault();
    let userInfo = {
      name: this.state.firstName,
      lastName: this.state.lastName,
      skills: this.state.skills,
      message: this.state.message,
      contact: this.state.contact,
      imgurl: this.state.imgurl
    };
    if (this.state.value === "mentor") {
      createMentor(userInfo);
    } else {
      createMentee(userInfo);
    }
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
