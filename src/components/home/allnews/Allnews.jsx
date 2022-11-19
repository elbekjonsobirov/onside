import React from 'react'
import './Allnews.css'
import LeftNews from './leftnews/LeftNews'
import Rightnews from './rightnews/Rightnews'

export default function Allnews() {
  return (
    <div className='allNewsPage'>
        <LeftNews/>
        <Rightnews/>
    </div>
  )
}
