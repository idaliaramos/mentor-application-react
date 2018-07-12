import React, { Component } from "react";

import UserCard from "../Mentors/UserCard";
import MentsPageLayout from "../Mentors/MentsPageLayout";
import NavComponent from "../Navigation/NavComponent";

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
        Authorization: "Bearer "
      }
    })
      .then(response => response.json())
      .then(menteeCards => {
        console.log(menteeCards.records, "menteecards");
        let mentees = menteeCards.records.map(menteeCard => {
          return (
            <div>
              <UserCard
                name={menteeCard.fields.name}
                id={menteeCard.id}
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
