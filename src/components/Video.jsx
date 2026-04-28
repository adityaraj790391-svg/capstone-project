import React from 'react'
import { Link } from 'react-router-dom'

const Video = ({video}) => {
  return (
    <div className=''>
        <Link to = {`/video/${video?.id}`}>
           <div className='flex'> 
            <div className='h-60 w-100 rounded-2xl duration-300 overflow-hidden hover:rounded-none'>
                <img className='w-full h-full object-cover' src={video?.thumbnails?.[0]?.url} alt=""/>
                {video?.lengthSeconds && <Time time = {video?.lengthSeconds} />}
            </div>
           </div>
        </Link>
     
    </div>
  )
}

export default Video
