fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentors", {
  headers: {
    "Content-Type": "application/json",

    Authorization: " Bearer "
  }
})
  .then(response => response.json())
  .then(mentorCards => {
    // if (!mentorCards) {
    //   console.log('there are no mentorCards');
    //   // throw new Error();
    // }
    console.log(mentorCards.records, "mentorcards");
    return mentorCards.records.map(mentorCard => {
      return {
        id: mentorCard.id,
        skills: mentorCard.fields.skills,
        message: mentorCard.fields.message,
        name: mentorCard.fields.name,
        contact: mentorCard.fields.contact,
        image: mentorCard.fields.imgurl
      };
    });
  });
