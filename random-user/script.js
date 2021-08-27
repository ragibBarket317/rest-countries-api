const loadUserApi = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayUser(data));
}
const displayUser = data => {
    const randomUser = document.getElementById('random-user')
    const buddies = data.results;
    console.log(buddies)
    for (const buddy of buddies) {
        const div = document.createElement('div')
        div.innerText = `Email: ${buddy.email} Name: ${buddy.name.first} ${buddy.name.last}`;
        randomUser.appendChild(div);
    }
}