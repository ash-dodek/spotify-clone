import React from 'react'
import '../../css/SongViewers/Horizontal.css'
import likedIco from '../../img/liked.jpg'
const HorizontalViewer = (props) => {
    return (
        <div className='horizontal-song-viewer' >
            <div className="imageSec">
                <img id='likedImg' src={likedIco} alt="err" />
            </div>
            <div className="mLabel">
                Liked Songs
            </div>
            {/* <div className="menulabel">
        </div> */}
        </div>
    )
}

export default HorizontalViewer
