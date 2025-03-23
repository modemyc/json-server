const createPostForm = document.querySelector('.upload-post-form');

createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(createPostForm);
    const formDataObject = Object.fromEntries(formData);

    fetch('http://localhost:3000/posts', {
        method: 'post',
        body: JSON.stringify({
            ...formDataObject,
            views: 0,
        })
    })
    .then((response) => {
        console.log(response);

        return response.json();
    })

    .then((json) => {
        console.log('json:', json)
    })
})
