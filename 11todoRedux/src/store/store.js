import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoStore'
import { saveTodos } from '../app/localStorage';


const store = configureStore({
    reducer: {
        todo : todoReducer
    }
})

store.subscribe( () => {
    const {todos} = store.getState().todo
    saveTodos(todos)
})

export default store;