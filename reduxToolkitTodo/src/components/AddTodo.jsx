import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'


function Addtodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch() // dispatch implementation through redux toolkit 


    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input)) //add payload boiler code not needed for this practice 
        setInput('')
    }
}