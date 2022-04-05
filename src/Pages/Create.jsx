
import { createToDo } from '../services/getRequest'
import { useNavigate } from 'react-router-dom'

function Create() {
       const nav = useNavigate()

       const createTheTodo = (event) => {
              const newtodo = { description: event.target.app.value, complete: false }
              createToDo(newtodo)
              nav('/')
       }
       return (
              <div>
                     <h1> Create new To Do </h1>
                     <form onSubmit={createTheTodo}>
                            <label htmlFor='description'>Description</label>
                            <input type="text" name='app' />
                            <input type='submit' />
                     </form>

              </div>
       )

}
export default Create