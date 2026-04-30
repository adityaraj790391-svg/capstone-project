import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { SiTicktick } from "react-icons/si";
import { abbreviateNumber } from 'js-abbreviation-number';

const Video = ({video}) => {
  return (
    <div className=''>
        <Link to = {`/video/${video?.videoId}`}>
           <div className=''> 
            <div className='h-60 relative rounded-xl duration-300 overflow-hidden hover:rounded-none'>
                <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} alt=""/>
                {video?.lengthSeconds && <Time time = {video?.lengthSeconds} />}
            </div>
            <div className='flex space-x-3 mt-2'>
                <div className='flex items-start'>
                    <div className='h-9 w-9 border rounded-full overflow-hidden'>
                        <img className='h-full w-full rounded-full' src={video?.author?.avatar?.[0]?.url} alt=''></img>
                    </div>
                </div>
                <div>
                    <span className='text-[16px] font-semibold line-clamp-2'> {video?.title} </span>
                    <span className='flex gap-1 items-center text-sm font-semibold text-gray-600'>
                        {video?.author?.title}
                        {video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && <SiTicktick className='text-sm bg-gray-200 rounded-full'/>}
                    </span>
                    <div className='flex space-x-2'>
                        <p>{`${abbreviateNumber(video?.stats?.views,2)} views`}</p>
                        <p className='text-3xl -mt-3.5'>.</p>
                        <p>{video?.publishedTimeText}</p>
                    </div>
                </div>
            </div>
           </div>
        </Link>
     
    </div>
  )
}

export default Video
