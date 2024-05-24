import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </Router>
  )
}

export default App
