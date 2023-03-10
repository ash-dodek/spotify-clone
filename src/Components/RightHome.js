import React from 'react'
import '../css/right.css'
import '../css/main.css'
import HorizontalViewer from './SongViewers/HorizontalViewer'
import likedIco from '../img/liked.jpg'
import weekly from '../img/weekly.jpg'
import snoop from '../img/snoop.jpg'
import eminem from '../img/this is eminem.jpg'

function RightHome() {
  return (<>
    <div className="container-main">
      <div id="heading">
        <h1 id="text">Good Morning</h1>
      </div>
      <div className="recent-plays">
        <HorizontalViewer leadingImage={likedIco} title='Liked Songs'/>
        <HorizontalViewer leadingImage={weekly} title='Discover Weekly'/>
        <HorizontalViewer leadingImage={snoop} title='Snoop Dog'/>
        <HorizontalViewer leadingImage={eminem} title='This is eminem'/>
      </div>
    </div>
  </>)
}

export default RightHome
