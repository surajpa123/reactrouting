import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {HomePage} from "./Components/HomePage"
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./Components/Navbar"
import {ProductsPage} from "./Components/ProductsPage"
import {ProductsDetailsPage} from "./Components/ProductsDetailsPage"
import { NotFoundPage } from './Components/NotFoundPage'
import { User } from './Components/User'
function App() {
  return (
  <>
<Navbar/>
<Routes>
<Route path = {"/"} element={<HomePage/>}></Route>
<Route path= {"/homepage"} element ={<HomePage/>}></Route>
<Route path={"/product"} element = {<ProductsPage/>}></Route>
<Route path= {"/products/:name"} element = {<ProductsDetailsPage/>}></Route>
{/* <Route path= {"/user/:name"} element = {<User/>}></Route> */}
<Route component = {NotFoundPage}/>
</Routes>
  </>
  )
  
}

export default App
