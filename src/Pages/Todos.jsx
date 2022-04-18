import { getToDos } from '../services/getRequest'
import { useState, useEffect } from 'react'
import '../App.css';
import Create from './Create'

export default function Todos() {
       const [doList, setDoList] = useState([])

       useEffect(() => {
              getToDos()
                     .then(res => setDoList(res.data))
       }, [])
       console.log(doList)

       return (
              <div>
                     <h1>To Do List</h1>
                     <ul className="todo">
                            {doList.map((todo, i) => {
                                   return (
                                          todo.complete ?
                                                 <li key={i}>
                                                        <strike><h2><a href={`/${todo._id}`}>{todo.description}</a></h2></strike>
                                                 </li>
                                                 : <li key={i}>
                                                        <h2><a style={{ backgroundColor: 'aquamarine' }} href={`/${todo._id}`}>{todo.description}</a></h2>
                                                 </li>
                                   )
                            })}
                     </ul>
                     <Create />
              </div>
       )
}






