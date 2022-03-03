import React from 'react'
import Destacados from '../Destacados/Destacados'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header/>       
        <Destacados/>
        <Footer/>        
    </div>
  )
}

export default Home