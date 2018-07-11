import React from "react";

import MentorCard from "./MentorCard";
import MentorPageLayout from "./MentorPageLayout";
import NavComponent from "../Navigation/NavComponent";

export default function MentorsPage(props) {
  console.log(props, "props in mentor page");

  return (
    <div className="MentorsPage">
      <NavComponent />
      <MentorPageLayout {...props}>
        {props.mentors &&
          props.mentors.map(mentor => (
            <MentorCard
              name={mentor.name}
              key={mentor.id}
              message={mentor.message}
              skills={mentor.skills}
              image={mentor.image}
              contact={mentor.contact}
            >
              {" "}
            </MentorCard>
          ))}
      </MentorPageLayout>
    </div>
  );
}
