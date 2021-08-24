const templatee = document.querySelector('.template1').content;
const title = document.querySelector('.title');
const username = document.querySelector('.username');
const tel = document.querySelector('.tel');
const email = document.querySelector('.email');
const id = document.querySelector('.id');

const listt = document.querySelector('#listt');
const listt1 = document.querySelector('#listt1');
const listt2 = document.querySelector('#listt2');
const template = document.querySelector('#template').content;


function renderTodos(todosArr,element) {
    element.innerHTML = null;
    
    const movieFragment = document.createDocumentFragment();
    
    todosArr.forEach((elemn) =>{
        const cloneTemplate = template.cloneNode(true);
        
        
        cloneTemplate.querySelector('.widget_menu').dataset.uuid = elemn.id;
        cloneTemplate.querySelector('.title').textContent = elemn.name;
        cloneTemplate.querySelector('.email').textContent = elemn.email;
        cloneTemplate.querySelector('.tel').textContent = elemn.phone;
        cloneTemplate.querySelector('.username').textContent = elemn.username;
        cloneTemplate.querySelector('.website').textContent = elemn.website;
        // cloneTemplate.querySelector('.button').textContent = "salom";
        // cloneTemplate.querySelector('.button1').textContent = elemn.website;
        
        
        movieFragment.appendChild(cloneTemplate);
    });
    
    
    element.appendChild(movieFragment);
    
}
async function fetchUsers(){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        renderTodos(data, listt);
    }
    catch(y){
    }
}
fetchUsers()

listt.addEventListener('click' , y =>{
    listt1.innerHTML = null
    if (y.target.matches('.widget_menu')) {
        let {uuid} = y.target.dataset;
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data =>{
            data.forEach(elemn =>{
                if (elemn.userId == uuid) {
                    let newDiv = document.createElement('div');
                    let newTitle = document.createElement('h3');
                    let newP = document.createElement('p');           
                    newDiv.classList.add('list-item-two');
                    newTitle.classList.add('post-title');
                    newP.classList.add('post-text')              
                    newTitle.textContent = elemn.title;
                    newDiv.dataset.uuid = elemn.id;
                    newP.textContent = elemn.body;
                    newDiv.appendChild(newTitle);
                    newDiv.appendChild(newP);
                    listt1.appendChild(newDiv);
                }
            })
        })
        listt1.addEventListener('click' , y =>{
            listt2.innerHTML = null
            if (y.target.matches('.list-item-two')) {
                let {uuid} = y.target.dataset;
                
                fetch(`https://jsonplaceholder.typicode.com/comments`)
                .then(response => response.json())
                .then(data => {
                    data.forEach(elemn =>{
                        
                        if (elemn.postId = uuid ) {
                            let newLii = document.createElement('div');
                            let newTitlee = document.createElement('h3');
                            let newP22 = document.createElement('p');
                            let newPP1 = document.createElement('p');
                            newLii.classList.add('list-item-three');
                            newTitlee.classList.add('comment-title');
                            newP22.classList.add('comment-text');
                            newPP1.classList.add('comment-email');
                            newTitlee.textContent = elemn.name;
                            newPP1.textContent = elemn.email;
                            newP22.textContent = elemn.body;
                            newLii.appendChild(newTitlee);
                            newLii.appendChild(newPP1)
                            newLii.appendChild(newP22);
                            listt2.appendChild(newLii);
                        }
                    })
                })
            }
            
        })
    }
});










// fetch('https://jsonplaceholder.typicode.com/users/')
// .then(response => response.json())
// .then(json => {
//     renderTodos(json, elList)
// })

// async function fetchUsers(){









