import {BrowserRouter as Router, Routes, Route} from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Calculadora' element={<Calculadora />}/>
          <Route/>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default App
