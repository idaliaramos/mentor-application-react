fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentees", {
  headers: {
    "Content-Type": "application/json",

    Authorization: " Bearer "
  }
})
  .then(response => response.json())
  .then(mentees => {
    // if (!menteess) {
    //   console.log('there are no menteess');
    //   // throw new Error();
    // }
    // console.log(mentees.records, "mentesrcards");
    return mentees.records.map(mentee => {
      return {
        id: mentee.id,
        skills: mentee.fields.skills,
        message: mentee.fields.message,
        name: mentee.fields.name,
        contact: mentee.fields.contact,
        image: mentee.fields.imgurl
      };
    });
  });
