import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../store/todoStore';


function Todos() {

    const todos = useSelector( state => state.todo.todos)
    const dispatch = useDispatch()
    return (  
        <div>
            {todos.map((todo) =>(
                <div key= {todo.id}>
                    <div>{todo.text}</div>
                    <div className=' w-auto bg-gray-300 '>
                    <button
                        onClick={(e) => dispatch(removeTodo(todo.id))}>
                            X
                        </button>
                        </div>
                </div>
            )
            )}
        </div>
    )
}

export default Todos;