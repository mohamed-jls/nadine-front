import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hair" element={<Shop />} />
        <Route path="/skin" element={<Shop />} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
