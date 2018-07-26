import React, { Component } from 'react';
import UserCard from '../UserCard';
import MentsPageLayout from './MentsPageLayout';
import NavComponent from '../NavComponent';

export default class MentorPage extends Component {
  constructor() {
    super();
    this.state = {
      mentors: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/mentors`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
      },
    })
      .then(response => response.json())
      .then((mentorCards) => {
        const mentors = mentorCards.records.map(mentorCard => (
          <div key={mentorCard.id}>
            <UserCard
              name={mentorCard.fields.name}
              message={mentorCard.fields.message}
              skills={mentorCard.fields.skills}
              image={mentorCard.fields.imgurl}
              contact={mentorCard.fields.contact}
            />
          </div>
        ));
        this.setState({ mentors: mentors.splice(1) });
      });
  }

  render() {
    return (
      <div className="MentorsPage">
        <NavComponent />
        <MentsPageLayout>
          {this.state.mentors}
        </MentsPageLayout>
      </div>
    );
  }
}
