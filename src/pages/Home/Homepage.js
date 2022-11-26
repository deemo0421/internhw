import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import RepositoryList from './components/RepositoryList'
import { Routes, Route, useNavigate } from 'react-router-dom'

export default function Homepage() {
  const [search, setSearch] = useState('bvaughn')
  const navigate = useNavigate()

  useEffect(()=>{
    if( search !== ''){
      navigate(`/users/${search}/repos`)
    } else{
      navigate(`/users/${search}`)
    }
  },[search])

  return (
   <>
    <Navbar search={search} setSearch={setSearch}/>
    <Routes>
      <Route path='repos' element = {<RepositoryList search={search}/>}/>
    </Routes>
   </>
  )
}
