import React, { Component } from 'react';
import { Form, Segment, Dropdown } from 'semantic-ui-react';
import createMentor from '../../ApiCalls/createMentor';
import createMentee from '../../ApiCalls/createMentee';

//There are the options for the dropdown users can select from
const options = [
  { key: 'Angular', text: 'Angular', value: 'Angular' },
  { key: 'CSS', text: 'CSS', value: 'CSS' },
  { key: 'Graphic Design', text: 'Graphic Design', value: 'Graphic Design' },
  { key: 'Ember', text: 'Ember', value: 'Ember' },
  { key: 'HTML', text: 'HTML', value: 'HTML' },
  {
    key: 'Information Architecture',
    text: 'Information Architecture',
    value: 'Information Architecture',
  },
  { key: 'Javascript', text: 'Javascript', value: 'Javascript' },
  {
    key: 'Mechanical Engineering',
    text: 'Mechanical Engineering',
    value: 'Mechanical Engineering',
  },
  { key: 'Meteor', text: 'Meteor', value: 'Meteor' },
  { key: 'NodeJS', text: 'NodeJS', value: 'NodeJS' },
  { key: 'Python', text: 'Python', value: 'Python' },
  { key: 'Rails', text: 'Rails', value: 'Rails' },
  { key: 'React', text: 'React', value: 'React' },
  { key: 'Ruby', text: 'Ruby', value: 'Ruby' },
  { key: 'UI Design', text: 'UI Design', value: 'UI Design' },
  { key: 'User Experience', text: 'User Experience', value: 'User Experience' },
];
//User form to create a mentor/mentee card for logged in user
class UserFormComponent extends Component {
  state = {
    name: '',
    lastName: '',
    value: '',
  };
  //call back for radio button select mentor or mentee preference
  handleRoleSelect = (e, { value }) => {
    //set the value to the state
    this.setState({ value });
  };

  //on submit we want to send the information to the backend
  _handleClickOnSubmit = event => {
    event.preventDefault();
    let userInfo = {
      name: this.state.firstName,
      lastName: this.state.lastName,
      skills: this.state.skills,
      message: this.state.message,
      contact: this.state.contact,
      imgurl: this.state.imgurl,
    };
    //depending on their selection, it will add them to the db in the mentor
    if (this.state.value === 'mentor') {
      createMentor(userInfo);
    } else {
      createMentee(userInfo);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Segment inverted color="blue" size={'big'} key={'big'}>
        <Form inverted size={'big'} key={'big'} onSubmit={this._handleClickOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              // name={this.state.name}
              onChange={(event, newValue) => this.setState({ firstName: newValue.value })}
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={(event, newValue) => this.setState({ lastName: newValue.value })}
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
              onChange={(event, newValue) => this.setState({ skills: newValue.value })}
            />
          </Form.Group>

          <Form.Group inline>
            <label>What are you interested in?</label>
            <Form.Radio
              label="To be a mentor"
              value="mentor"
              checked={value === 'mentor'}
              onChange={this.handleRoleSelect}
            />
            <Form.Input
              fluid
              label="url"
              placeholder="url"
              onChange={(event, newValue) => this.setState({ url: newValue.value })}
            />
          </Form.Group>
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
            onChange={(event, newValue) => this.setState({ message: newValue.value })}
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default UserFormComponent;
