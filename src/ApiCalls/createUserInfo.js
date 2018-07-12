export default function(userInfo) {
  fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer "
    },
    body: JSON.stringify({
      fields: {
        name: "test2",
        skills: ["ux design", "software engineering"],
        message: "exhanging ux skills for software engineering skills\n",
        contact: "https://www.linkedin.com/in/idaliaramos/",
        imgurl:
          "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11817079_10206099618342917_2121770796319891339_n.jpg?_nc_cat=0&oh=31c0dd79a2aac561690beadd6868dd68&oe=5B..."
      }
    })
  }).then(response => {
    return response.json();
  });
}
