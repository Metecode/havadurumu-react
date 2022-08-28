import React from 'react'
import yagmurlu from "../../img/rainy.jpg"
import ResimCek from './ResimCek'

function index({background}) {
  return (
    <div className='background'>
        <div className="overlay"></div>
        <ResimCek durum={background}></ResimCek>
    </div>
  )
}

export default index