import { getTodo, editTodo } from '../services/getRequest'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edit() {
       const { id } = useParams()
       const nav = useNavigate
       const [data, setData] = useState({})

       useEffect(() => {
              getTodo(id) //get the todo that matches this id
                     .then(res => setData(res.data)) //changes state from response fromapi
       }, []) //square brackets to prevent continous loop
       const editTheTodo = event => {
              event.preventDefault()
              const updatedTodo = { description: event.target.description.value, complete: event.target.complete.checked }
              editTodo(id, updatedTodo)
              nav(`/${id}`)
       }
       return (
              <div>
                     <h1>Edit todo</h1>
                     <form onSubmit={editTheTodo}>
                            <input type="text "
                                   name=" description"
                                   defaultValue={data.description} />
                            complete:<input type="checkbox"
                                   name="complete"
                                   defaultChecked={data.complete} />
                            <input type="submit" ></input>
                     </form>
              </div>
       )


}
