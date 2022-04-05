import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodo, deleteTodo } from '../services/getRequest'

function Todo() {
       const nav = useNavigate()
       const { id } = useParams()
       const [todo, setTodo] = useState({})
       useEffect(() => {
              getTodo(id)
                     .then(res => setTodo(res.data))
       }, [])

       const deleteTheTodo = () => {
              deleteTodo(id)
              nav('/')
       }

       // console.log(todo)
       return (
              <div>
                     <h1>Todo:</h1>
                     <h3>{todo.description}</h3>

                     <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
                     Completed: <input type='checkbox' checked={todo.complete} />


                     <button onClick={deleteTheTodo}>Delete</button>
              </div>
       )
}