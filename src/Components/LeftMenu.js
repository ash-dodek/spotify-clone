import React from 'react'
import '../css/left.css'
import mainIcon from '../img/mainicon.png'

function LeftMenu() {
  return (
    <>
    <div className="container-left">
        <div id="img">
            <img alt='err' id="mainImg" src={mainIcon}/>
        </div>
        <div className="c1">
            Home
            Search
        </div>
    </div>
    </>
  )
}

export default LeftMenu
