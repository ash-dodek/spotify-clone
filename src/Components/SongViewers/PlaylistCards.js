import React from 'react'
import '../../css/SongViewers/Songcard.css'

const PlaylistCards = (props) => {
  return (<>
    <div className="song-card">
        <div className="imgSec">
            <img style={{
                height:"inherit",
                width:"inherit",
                borderRadius:"8px"
                }} 
                src={props.image} alt="err" />
        
        </div>
        <div className="title">
            {props.title}
        </div>
        <div className="desc">
            {props.description}
        </div>

    </div>
  </>)
}

export default PlaylistCards
