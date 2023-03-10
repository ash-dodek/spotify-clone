import React from 'react'
import '../../css/SongViewers/Horizontal.css'
const HorizontalViewer = (props) => {
    return (
        <div className='horizontal-song-viewer' >
            <div className="imageSec">
                <img id='likedImg' src={props.leadingImage} alt="err" />
            </div>
            <div className="mLabel">
                {props.title}
            </div>
        </div>
    )
}

export default HorizontalViewer
