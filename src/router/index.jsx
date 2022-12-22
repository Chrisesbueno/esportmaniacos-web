import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header, Hero } from '../components'
import { Awards, Home, Votes } from '../pages'

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/premios' element={<Awards />} />
            <Route path='/votos' element={<Votes />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Router