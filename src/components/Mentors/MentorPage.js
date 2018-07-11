import React from "react";

import MentorCard from "./MentorCard";
import MentorPageLayout from "./MentorPageLayout";

export default function MentorsPage(props) {
  console.log(props, "props in mentor page");

  return (
    <div className="MentorsPage">
      {/* <MentorPageLayout {...props}> */}
      {props.MentorCards &&
        props.MentorCards.map(MentorCard => (
          <MentorCard MentorCard={MentorCard} key={MentorCard.id}>
            {" "}
          </MentorCard>
        ))}
      {/* </MentorPageLayout> */}
    </div>
  );
}
