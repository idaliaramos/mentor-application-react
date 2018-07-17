export default function(userInfo) {
  fetch(`${process.env.REACT_APP_DATABASE_URL}/mentees`, {
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
