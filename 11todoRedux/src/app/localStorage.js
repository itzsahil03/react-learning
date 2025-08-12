console.log("helper class called up");


const TODOS_KEY = 'todoApp.todos'

//load and parse the todos from local storage
export function loadTodods() {
    try{
        const oldTodos = localStorage.getItem(TODOS_KEY);
        console.log(oldTodos);
        
        return oldTodos ? JSON.parse(oldTodos) : undefined
    } catch ( error){
        console.log(error);
        return undefined
    }
}

export function saveTodos(todos){
    try {
        const serialised = JSON.stringify(todos);
        localStorage.setItem(TODOS_KEY, serialised)
    } catch (error) {
         console.log(error)
    }
}