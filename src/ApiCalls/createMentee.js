export default function(userInfo) {
  fetch("https://api.airtable.com/v0/app0XX03H8f3ue8mF/mentees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_KEY}`
    },
    body: JSON.stringify({
      fields: userInfo
    })
  }).then(response => {
    return response.json();
  });
}
