import React from 'react'

const Thumb = ({link,thumbLink}) => {
  return (
    <div>
        <a href={link} target='_blank'>
            <img src={thumbLink} height='200px' width='200px'></img>
        </a>
    </div>
  )
}

export default Thumb