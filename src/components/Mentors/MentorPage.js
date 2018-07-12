import React, { Component } from "react";

import MentorCard from "./MentorCard";
import MentorPageLayout from "./MentorPageLayout";
import NavComponent from "../Navigation/NavComponent";
import getMentors from "../../ApiCalls/getMentors";

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
        Authorization: "Bearer "
      }
    })
      .then(response => response.json())
      .then(mentorCards => {
        console.log(mentorCards.records, "mentorcards");
        let mentors = mentorCards.records.map(mentorCard => {
          return (
            <div>
              <MentorCard
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
        <MentorPageLayout>{this.state.mentors}</MentorPageLayout>
      </div>
    );
  }
}
