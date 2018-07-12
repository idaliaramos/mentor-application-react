import React, { Component } from "react";
import env from "../../env";
import UserCard from "../UserCard";
import MentsPageLayout from "./MentsPageLayout";
import NavComponent from "../Navigation/NavComponent";

export default class MentorPage extends Component {
  constructor() {
    super();
    this.state = {
      mentors: []
    };
  }

  componentDidMount() {
    fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentors", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.KEY}`
      }
    })
      .then(response => response.json())
      .then(mentorCards => {
        console.log(mentorCards.records, "mentorcards");
        let mentors = mentorCards.records.map(mentorCard => {
          return (
            <div>
              <UserCard
                name={mentorCard.fields.name}
                id={mentorCard.id}
                message={mentorCard.fields.message}
                skills={mentorCard.fields.skills}
                image={mentorCard.fields.imgurl}
                contact={mentorCard.fields.contact}
              />
            </div>
          );
        });
        this.setState({ mentors: mentors.splice(1) });
      });
  }
  render() {
    return (
      <div className="MentorsPage">
        <NavComponent />
        <MentsPageLayout>{this.state.mentors}</MentsPageLayout>
      </div>
    );
  }
}
