import React, { Component } from "react";
import env from "../../env";
import UserCard from "../UserCard";
import MentsPageLayout from "../Mentors/MentsPageLayout";
import NavComponent from "../NavComponent";

export default class MenteePage extends Component {
  constructor() {
    super();
    this.state = {
      mentees: []
    };
  }

  componentDidMount() {
    fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentees", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer `
      }
    })
      .then(response => response.json())
      .then(menteeCards => {
        let mentees = menteeCards.records.map(menteeCard => {
          return (
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
          );
        });
        this.setState({ mentees: mentees.splice(1) });
      });
  }
  render() {
    return (
      <div className="MenteesPage">
        <NavComponent />
        <MentsPageLayout>{this.state.mentees}</MentsPageLayout>
      </div>
    );
  }
}
