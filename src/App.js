import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Todos from './Pages/Todos'
import Todo from "./Pages/Todo";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path='/:id' element={<Todo />} />
        <Route path='/new' element={<Create />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>
      <nav><Link to='/' >Home</Link></nav>
      <br />
    </Router>
  )
}

export default App;
