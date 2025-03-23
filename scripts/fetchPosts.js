const loadForm = document.querySelector('.load-post-form');
const postIdElement = document.querySelector('#post-id');
const resultField = document.querySelector('.result');

// старт json server npx json-server db.json5

loadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch (`http://localhost:3000/posts/${postIdElement.value}`)

        .then((response) => {
            console.log(`response`, response)

            if (!response.ok){
                const errorMessage = response.status === 404
                    ? 'Пост по указанному идентификатору не найден'
                    : 'Что-то пошло не так :('

                throw new Error(errorMessage);
            }

            return response.json()
        }) 

        .then((json) => {
            console.log(json);

            const { title, views } = json;

            resultField.innerHTML = `
                <p>${title}, просмотров: ${views} </p>
            `
        })

        .catch((error) => {
            resultField.innerHTML = error.message;
        })
})

