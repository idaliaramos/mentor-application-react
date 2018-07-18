import React, { Component } from 'react';
import UserCard from '../UserCard';
import MentsPageLayout from '../Mentors/MentsPageLayout';
import NavComponent from '../NavComponent';

export default class MenteePage extends Component {
  constructor() {
    super();
    this.state = {
      mentees: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/mentees`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
      },
    })
      .then(response => response.json())
      .then((menteeCards) => {
        const mentees = menteeCards.records.map(menteeCard => (
          <div key={menteeCard.id}>
            <UserCard
              name={menteeCard.fields.name}
              key={menteeCard.id}
              message={menteeCard.fields.message}
              skills={menteeCard.fields.skills}
              image={menteeCard.fields.imgurl}
              contact={menteeCard.fields.contact}
            />
          </div>
        ));
        this.setState({ mentees: mentees.splice(1) });
      });
  }

  render() {
    const { mentees } = this.state;
    return (
      <div className="MenteesPage">
        <NavComponent />
        <MentsPageLayout>
          {mentees}
        </MentsPageLayout>
      </div>
    );
  }
}
