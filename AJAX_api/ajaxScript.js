
const btn = document.getElementById('btn');
const renderData = document.getElementById('users');

btn.addEventListener("click", getUsers);

function getUsers(event) {
  event.preventDefault();
  const http = new XMLHttpRequest();

  http.open("GET", "./users.json", true);

  http.onload = function () {
    if (http.status === 200) {
      console.log(http.responseText);
      const users = JSON.parse(http.responseText);

      let output = '';
      users.forEach(function (user) {
        output += `
        <hr/>
        <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Age: ${user.age}</li>
        </ul>
        `;
      });

      document.getElementById('users').innerHTML = output;
    }
  };

  http.send();
}
