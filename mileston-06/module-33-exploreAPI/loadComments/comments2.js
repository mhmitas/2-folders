function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(data) {
    console.log(data)
    for (const comment of data) {
        console.log(comment)
        const container = document.querySelector('.container')
        const div = document.createElement('div')
        div.innerHTML = `
            <p>Id: ${comment.id}<br>Post Id: ${comment.postId}</p>
            <h3>Name: ${comment.name}</h3>
            <p>Email: ${comment.email}</p>
            <p>Comment: ${comment.body}</p>
        `
        container.appendChild(div)
    }
}

document.getElementById('load-comments').addEventListener('click', loadComments)