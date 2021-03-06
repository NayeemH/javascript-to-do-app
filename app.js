/// selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')


//// event listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click', fiterTodo)

///functions

function addTodo(event){
// prevent from submmiting
    event.preventDefault()

///TODO div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    /// create li
    const newTodo = document.createElement('li')
    // newTodo.innerText = 'HI'
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //check mark buttton
    const completedButton = document.createElement('button')
    completedButton.innerHTML ='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)


    ///delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML ='<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    ///append to list
    todoList.appendChild(todoDiv)


    //clear input
    todoInput.value ='';

}

function deleteCheck(event){
    const item= event.target
    //item.remove()

    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        // fall animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
        
    }

    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}


function fiterTodo(event){
    const todos = todoList.childNodes
    //console.log(todos);

    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display='flex'
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex'
                }else{
                    todo.style.display='none'
                }
                break;
            case "uncomplete":
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex'
                }else{
                    todo.style.display='none'
                }
        }
    })
}