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

  // first get the mentees from the database to update the state
  componentDidMount() {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/mentees`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
      },
    })
      .then(response => response.json())
      // once the mentees are gotten, create a user card for each of the mentees
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
        // set the state, splice the first mentee because it was blank
        this.setState({ mentees: mentees.splice(1) });
      });
  }

  render() {
    // deconstruct the mentees
    const { mentees } = this.state;
    return (
      // import Nav and Add Mentees to the page layout
      <div className="MenteesPage">
        <NavComponent />
        <MentsPageLayout>
          {mentees}
        </MentsPageLayout>
      </div>
    );
  }
}
