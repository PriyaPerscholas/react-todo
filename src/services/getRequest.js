import axios from "axios"
import '../App.css'


export function getToDos() {
       const DO_URL = `http://localhost:3001/todos`
       const response = axios.get(DO_URL)
       console.log(response)
       return response
}
export function getTodo(id) {
       const DO_URL = `http://localhost:3001/todos/${id}`
       const response = axios.get(DO_URL)
       console.log(response)
       return response
}
export function deleteTodo(id) {
       const DO_URL = `http://localhost:3001/todos/${id}`
       const response = axios.delete(DO_URL)
       console.log(response)
       return response
}

export function createToDo(add) {
       const DO_URL = `http://localhost:3001/todos/`
       const response = axios.post(DO_URL, add)
       console.log(response)
       return response
}
export function editTodo(id, updatedTodo) {
       const DO_URL = `http://localhost:3001/todos/${id}`
       const response = axios.put(DO_URL, updatedTodo)
       console.log(response)
       return response
}


