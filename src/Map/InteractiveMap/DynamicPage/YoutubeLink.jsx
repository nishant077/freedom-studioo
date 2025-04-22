import React from 'react'
import ReactPlayer from 'react-player';

const YouTubeLink = ({location}) => {
  return (
    <>
    <div className='video flex items-center justify-center m-4 '>
      <ReactPlayer controls url={location.url} />
      </div>
    </>
  )
}

export default YouTubeLink