import React from 'react'
import '../css/right.css'
import '../css/main.css'
import HorizontalViewer from './SongViewers/HorizontalViewer'

function RightHome() {
  return (<>
    <div className="container-main">
      <div id="heading">
        <h1 id="text">Good Morning</h1>
      </div>
      <div className="recent-plays">
        <HorizontalViewer/> 
        <HorizontalViewer/> 
        <HorizontalViewer/> 
        <HorizontalViewer/> 
      </div>
    </div>
  </>)
}

export default RightHome
