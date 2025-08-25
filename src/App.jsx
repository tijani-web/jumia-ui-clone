import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpperNav from './components/UpperNav'
import LowerNav from './components/LowerNav'
import MainNav from './components/MainNav'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Home from './pages/Home'

function App() {
  return (
   <Layout>
    <Home/>
   </Layout>
  )
}

export default App
