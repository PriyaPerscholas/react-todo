import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodo, deleteTodo } from '../services/getRequest'

export default function Todo() {
       const nav = useNavigate()
       const { id } = useParams()
       const [todo, setTodo] = useState({})
       useEffect(() => {
              getTodo(id)
                     .then(res => setTodo(res.data))
       }, [])
       console.log(todo)
       const deleteTheTodo = () => {
              deleteTodo(id)
              nav('/')
       }

       return (
              <div>
                     <h1>Todo:</h1>
                     <h3>{todo.description}</h3>
                     {/* Completed: <input type='checkbox' checked={todo.complete} />
                     <br /> */}
                     <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button><br /><br />
                     <button onClick={deleteTheTodo}>Delete</button>
              </div>
       )
}