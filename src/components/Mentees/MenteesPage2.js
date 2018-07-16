import React, { Component } from "react";

import MenteeCard from "./MenteeCard";
import MenteePageLayout from "./MenteePageLayout";
import NavComponent from "../Navigation/NavComponent";
import getMentees from "../../ApiCalls/getMentees";

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
        // if (!menteeCards) {
        //   console.log('there are no menteeCards');
        //   // throw new Error();
        // }
        let mentees = menteeCards.records.map(menteeCard => {
          return {
            id: menteeCard.id,
            skills: menteeCard.fields.skills,
            message: menteeCard.fields.message,
            name: menteeCard.fields.name,
            contact: menteeCard.fields.contact,
            image: menteeCard.fields.imgurl
          };
        });
        this.setState({ mentees: mentees.splice(1) });
      });
  }
  render() {
    return (
      <div className="MenteesPage">
        <NavComponent />
        <MenteePageLayout>
          {this.state.mentees &&
            this.state.mentees.map(mentee => (
              <MenteeCard
                name={mentee.name}
                key={mentee.id}
                message={mentee.message}
                skills={mentee.skills}
                image={mentee.image}
                contact={mentee.contact}
              >
                {" "}
              </MenteeCard>
            ))}
        </MenteePageLayout>
      </div>
    );
  }
}
