import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster, resolveValue } from 'react-hot-toast';
import { UserContextProvider } from '../context/usercontext'

axios.defaults.baseURL= 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
    <Navbar />
    {/* error bubble */}
    <Toaster postion='top-center' toastOptions={{duration: 2000}} />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* add pages to the website here */}
      </Routes>
    

      
      </UserContextProvider>
  )
}

export default App
