import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

export default function Layout() {
  return (
    <>
    <div className='h-12 bg-[#ede8de]'>
    <NavBar />

    </div>

    <Outlet/>
    </>

  )
}
