export default function(userInfo) {
  fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer "
    },
    body: JSON.stringify({
      fields: userInfo
    })
  }).then(response => {
    return response.json();
  });
}
