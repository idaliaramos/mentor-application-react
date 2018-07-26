// api call to create a mentor
export default function (userInfo) {
  fetch(`${process.env.REACT_APP_DATABASE_URL}/mentors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
    },
    body: JSON.stringify({
      fields: userInfo,
    }),
  }).then(response => response.json());
}
