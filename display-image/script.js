function showImg() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => getImg(data))
}

function getImg(comments) {
    console.log(comments)
    const getImg = document.getElementById('get-div')
    for (const comment of comments) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <h4>${comment.email}</h4>
        <h5>${comment.body}</h5>
        `
        getImg.appendChild(div)
    }
}