// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// function loadData(){
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// // ------------
// function loadData2(){
//     const url2 = 'https://jsonplaceholder.typicode.com/todos/1'
//     fetch(url2)
//     .then(res => res.json())
//     .then(json => console.log(json))
    
// }

// // ------------------
// function loadUser(){
//     const url3 = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url3)
//     .then(response => response.json())
//     .then(data => displayUser(data))
    
// }



// // ---------

// function userData (){
//     const userUrl = 'https://jsonplaceholder.typicode.com/todos/1'
//     fetch(userUrl)
//     .then(res => res.json())
//     .then(data => displayUser(data))
// }

// function displayUser(dataa){
//     console.log(dataa);
// }

// // --------
// function myFunction(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUser2(data))
// }

// function displayUser2(data){
//     for(const user of data){
//         console.log(user);
//     }
// }

// ----------
/*
aikhana ja sikhlam ta holo kuno akta api ba onno karo data ami load kora 
seti amr site a dekhaita pari,,, seta sei datar url diya ar nicher system a korta hoi

*/

function userInterface(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userInterface3(data))
}

function userInterface3(data4){
    const ol = document.getElementById('user-list');
    for(const user of data4){
        const li = document.createElement('li');
        li.innerText = user.email;
        ol.appendChild(li);
        const li2 = document.createElement('li');
        li2.innerText = user.name;
        ol.appendChild(li2);
        
    }

}

