import { createSlice, nanoid} from "@reduxjs/toolkit";
import { loadTodods } from "../app/localStorage";

const oldTodos = loadTodods()
console.log("inside initial method")
console.log("todo from  store: " + oldTodos);

const initialState  = { 
    
    
    todos : oldTodos ?? [{id : 1 , text : "Hello "}]
 }

const todoStore = createSlice({
    name : "todo",
    initialState,
    reducers: {
        addTodo : (state , action ) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo : (state , action ) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        }
    }
}
)

export const {addTodo, removeTodo} = todoStore.actions;
export default todoStore.reducer