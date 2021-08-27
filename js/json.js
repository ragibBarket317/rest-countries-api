function loadApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(respons => respons.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const users = document.getElementById('users')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        users.appendChild(li);
    }
}