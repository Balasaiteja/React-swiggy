import React from 'react'
import LandingPage from './Pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import'./App.css'
import ProductMenu from './components/ProductMenu'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<LandingPage/>}></Route>
        <Route path='/products/:firmId/:firmName' element={<ProductMenu></ProductMenu>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
