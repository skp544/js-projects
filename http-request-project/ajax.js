// Load all users

const btn = document.querySelector("#btn");
btn.addEventListener("click", getUsers);

// create function get usera
function getUsers(e) {
  e.preventDefault();

  const http = new XMLHttpRequest();

  http.open("GET", "users.json", true);

  http.onload = function () {
    // what going to happen

    if (this.status === 200) {
      //   console.log(this.responseText);
      const users = JSON.parse(this.responseText);

      let output = "";

      users.forEach(function (user) {
        output += `
        
        <hr>
        <ul>

            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Email: ${user.email}</li>

        </ul>
        
        `;
      });

      document.getElementById("users").innerHTML = output;
    }
  };

  http.send();

  //   console.log();
}
