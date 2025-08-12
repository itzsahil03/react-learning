import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoStore';

function AddTodo() {
    const [input , setInput] = useState('')

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a Todo..."
            />
            <button type="submit">Add Todo</button>
        </form>
)
}

export default AddTodo;