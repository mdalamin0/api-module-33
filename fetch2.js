function getUserData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => userInterface(data))
}

// function userInterface(data){
//     const ul = document.getElementById('user-list');
//     for(const post of data){
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         ul.appendChild(li);

//     }
// }

function userInterface(data){
    const postContainer = document.getElementById('user-post');
    for(const post of data){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML =`
        <h3> Id: ${post.id}</h3>
        <h5> Title: ${post.title}</h5>
        <p> Description: ${post.body}</p>
        ` ;

        postContainer.appendChild(postDiv);

    }
}