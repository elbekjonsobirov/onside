import React from 'react'
import Latesnew from './latesnew/Latesnew'
import './Rightnews.css'
import Tablecard from './tablecard/Tablecard'
import Topstatic from './topstatic/Topstatic'

export default function Rightnews() {
  return (
    <div className='rightNewsPage'>
      <Latesnew/>
      <Tablecard/>
      {/* <Topstatic/> */}
    </div>
  )
}
