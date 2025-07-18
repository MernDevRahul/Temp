import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import AddProductForm from './components/AddProductForm'
import Cart from './components/Cart'
import Order from './components/Order'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  const [search, setSearch] = useState("")

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={
        <>
        <Navbar search={search} setSearch={setSearch}/>
        <Main search={search} setSearch={setSearch}/>
        </>
        }/>
      <Route path='/add-product' element={
        <>
        <Navbar/>
        <AddProductForm/>
        </>
        }/>
      <Route path='/cart' element={
        <>
        <Navbar/>
        <Cart/>
        </>
        }/>
      <Route path='/order' element={
        <>
        <Navbar/>
        <Order/>
        </>
        }/>
    </Routes>
  )
}

export default App
