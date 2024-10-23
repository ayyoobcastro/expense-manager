import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeForm from '../components/form/form'

const Navigation = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeForm/>}></Route>
        </Routes>
    </>
  )
}

export default Navigation