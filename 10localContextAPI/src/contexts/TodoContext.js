import {useContext , createContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo : "Creating a Todo",
            completed: false
        }
    ],
    addTodo: (toto) => {},
    deleteTodo: (id) => {},
    updateTodo: (id , todo) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider