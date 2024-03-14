function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

/**
 * 1. get the container
 */

function displayPost(posts) {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div')
        div.innerHTML = `
        <h4>${post.id}</h4>
        <h5>user id: ${post.userId}</h5>
        <h5>Post: ${post.title}</h5>
        <p>${post.body}</p><hr>
        `
        postContainer.appendChild(div)
    }
}

