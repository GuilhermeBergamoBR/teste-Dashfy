import React,{useState} from 'react'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile/Profile'

const Candidate = ()=>{
  let pathname = window.location.pathname.split('/')
  let id = pathname[2]
  return(
    <div>
      <Header />
      <Main>
        <Profile id={id}/>
      </Main>
    </div>
  )
}

export default Candidate