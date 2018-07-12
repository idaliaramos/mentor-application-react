import React, { Component } from "react";
import { Form, Segment, Dropdown } from "semantic-ui-react";

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
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Segment inverted color="blue" size={"big"} key={"big"}>
        <Form inverted size={"big"} key={"big"}>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group>
            <label>What are your skills?</label>
            <Dropdown
              placeholder="Skills"
              fluid
              multiple
              selection
              options={options}
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
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default UserFormComponent;
