import {BrowserRouter as Router, Routes, Route} from 'react-router'
import './App.css'
import Calculadora from "./pages/Calculadora"
import Todo from "./pages/Todo"
import Registro from "./pages/Registro"
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Router>
      |    <Nav />
        <Routes>
          <Route path='/Calculadora' element={<Calculadora />}/>
          <Route path='/Todo' element={<Todo />}/>
          <Route path='/Registro' element={<Registro />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
