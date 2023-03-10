import React from 'react'
import '../css/right.css'
import '../css/main.css'
import HorizontalViewer from './SongViewers/HorizontalViewer'
import likedIco from '../img/liked.jpg'
import weekly from '../img/weekly.jpg'
import snoop from '../img/snoop.jpg'
import eminem from '../img/this is eminem.jpg'
import PlaylistCards from './SongViewers/PlaylistCards'

function RightHome() {
  return (<>
    <div className="container-main">
      <div id="heading">
        <h1 className="text">Good Morning</h1>
      </div>
      <div className="recent-plays">
        <HorizontalViewer leadingImage={likedIco} title='Liked Songs'/>
        <HorizontalViewer leadingImage={weekly} title='Discover Weekly'/>
        <HorizontalViewer leadingImage={snoop} title='Snoop Dog'/>
        <HorizontalViewer leadingImage={eminem} title='This is eminem'/>
      </div>
      <div className="made-for-you">
        <h1 style={{paddingLeft:"0"}} className="text">
          Made for You
        </h1>
        <PlaylistCards 
        title='Discover Weekly' 
        image={weekly}
        description='Playlist upon your week plays '
        />
        <PlaylistCards 
        title='Discover Weekly' 
        image={weekly}
        description='Playlist upon your week plays '
        />
        <PlaylistCards 
        title='Discover Weekly' 
        image={weekly}
        description='Playlist upon your week plays '
        />
        <PlaylistCards 
        title='Discover Weekly' 
        image={weekly}
        description='Playlist upon your week plays '
        />
        <PlaylistCards 
        title='Discover Weekly' 
        image={weekly}
        description='Playlist upon your week plays '
        />
      </div>
    </div>
  </>)
}

export default RightHome
