import { getToDos } from '../services/getRequest'
import { useState, useEffect } from 'react'
import '../App.css';

export default function Todos() {
       const [doList, setDoList] = useState([])
       useEffect(() => {
              getToDos()
                     .then(res => setDoList(res.data))
       }, [])
       console.log(doList)
       return (
              <div>
                     <h3>ToDo List</h3>
                     {doList.map((lis) => {
                            return (
                                   <h5><a href={`/${lis._id}`}>{lis.description}</a></h5>
                            )

                     })}
              </div>

       )

}





