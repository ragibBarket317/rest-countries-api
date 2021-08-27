function loadApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => loadPost(data));
}

function loadPost(posts) {
    const postSection = document.getElementById('post-section')
    for (const post of posts) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('post')
        createDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postSection.appendChild(createDiv)
    }
}