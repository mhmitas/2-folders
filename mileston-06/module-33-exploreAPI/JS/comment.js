const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('error happend', error))
}

const loadComments2 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json();
    console.log(data)
}