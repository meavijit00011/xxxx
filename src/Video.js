import React from 'react'

const Video = ({ link, vidLink }) => {
    return (
        <div>
            <a href={link}>
                <video height='200' width='200' src={vidLink} muted autoPlay={true} loop='loop'></video>
            </a>
        </div>
    )
}

export default Video