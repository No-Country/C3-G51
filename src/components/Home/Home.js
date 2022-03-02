import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ItemDetail from '../ItemDetail/ItemDetail'
import Login from '../Login/Login'
import Registro from '../Registro/Registro'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header/>       
        <Footer/>
        <ItemDetail/>
        <Login/>
        <Registro/>
    </div>
  )
}

export default Home