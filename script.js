const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach(todo => todosFunc(todo))
}
form.addEventListener("submit", (e)=>{
  e.preventDefault();

  todosFunc();
})

function todosFunc(todo){
    let storeTodod = input.value;
    if(todo){
        storeTodod = todo.text; 
    }
    if(storeTodod){
        const list = document.createElement('li');
        if(todo && todo.completed){
            list.classList.add('completed');
            updateLS();
        }
        
      list.innerText = storeTodod
      todosUl.appendChild(list);
      list.addEventListener('click', ()=> list.classList.toggle('completed'))
      
      list.addEventListener("contextmenu", (e)=> {
          e.preventDefault();
          list.remove();
          updateLS();
        })

      input.value = ''
      console.log(storeTodod);
       updateLS();
    }
    
    
    
    // 
}
function updateLS(){
    todosEl = document.querySelectorAll('li');

    const todos = []
    todosEl.forEach(todoEl =>{
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('complete')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}
// window.addEventListener("click", todosFunc)