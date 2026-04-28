import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiMusicNoteBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { SiSonarqubeserver } from "react-icons/si";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { PiCoatHangerBold } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { TbFlag } from "react-icons/tb";


const Sidebar = () => {

   const sidebaritems = [{
    id:1,
    name: 'Home',
    icon: <AiFillHome />
   },
    {
    id:2,
    name: 'Shorts',
    icon: <SiYoutubeshorts />
    },
    {
    id:3,
    name: 'Subscriptions',
    icon: <MdSubscriptions />
    }
  ];

  const sidebaritems2 = [{
    id:1,
    name: 'Profile',
    icon: <CgProfile />
   },
    {
    id:2,
    name: 'History',
    icon: <LuHistory />
    },
    {
    id:3,
    name: 'Playlists',
    icon: <CgPlayListSearch />,
    },
    {
    id:4,
    name: 'Watch later',
    icon: <MdOutlineWatchLater />,
    },
    {
    id:5,
    name: 'Liked videos',
    icon: <AiOutlineLike />,
    },
    {
    id:6,
    name: 'Downloads',
    icon: <LiaDownloadSolid />,
    },
  ];

  const sidebaritems3 = [{
    id:1,
    name: 'Shopping',
    icon: <RiShoppingBag4Line />
   },
    {
    id:2,
    name: 'Music',
    icon: <PiMusicNoteBold />
    },
    {
    id:3,
    name: 'Movies',
    icon: <BiMovie />,
    },
    {
    id:4,
    name: 'Live',
    icon: <SiSonarqubeserver />,
    },
    {
    id:5,
    name: 'Gaming',
    icon: <SiYoutubegaming />,
    },
    {
    id:7,
    name: 'News',
    icon: <BiNews />,
    },
    {
    id:8,
    name: 'Sports',
    icon: <BsTrophy />,
    },
    {
    id:9,
    name: 'Courses',
    icon: <MdOutlineSchool />,
    },
    {
    id:10,
    name: 'Fashion & Beauty',
    icon: <LiaDownloadSolid />,
    },
    {
    id:11,
    name: 'Podcasts',
    icon: <PiCoatHangerBold />,
    },
    {
    id:12,
    name: 'Playables',
    icon: <TbGridDots />,
    }
  ];

  const sidebaritems4 = [{
    id:1,
    name: 'Youtube Premium',
    icon: <FaYoutube />
   },
    {
    id:2,
    name: 'Youtube Music',
    icon: <SiYoutubemusic />
    },
    {
    id:3,
    name: 'Youtube Kids',
    icon: <SiYoutubekids />,
    }
  ];

   const sidebaritems5 = [{
    id:1,
    name: 'Report History',
    icon: <TbFlag />
   }
  ];


  return (
    <div className='px-6 w-60 overflow-y-scroll overflow-x-hidden h-[calc(100vh-6rem)] mt-16'>
      <div className='items-center space-y-2 mb-2'>  

        {sidebaritems.map((item) => {
          return (
            <div className='flex items-center space-x-5 font-semibold rounded-xl hover:bg-gray-300 p-1'>
              <div className='text-xl cursor-pointer'> {item.icon} </div>
              <span className='cursor-pointer'>{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr/>

      <div className='items-center space-y-2 mt-2 mb-2'>
        <div className='flex items-center space-x-2 text-xl font-semibold cursor-pointer hover:bg-gray-300 rounded-xl p-1'>
          <h1 >You</h1>
          <IoIosArrowForward />
        </div>
        {sidebaritems2.map((item) => {
          return (
            <div className='flex items-center space-x-5 font-semibold rounded-xl hover:bg-gray-300 p-1'>
              <div className='text-xl cursor-pointer'> {item.icon} </div>
              <span className='cursor-pointer'>{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr/>

      <div className='items-center space-y-2 mb-2 mt-2'>
        <div className='items-center space-x-2 text-xl cursor-pointer hover:bg-gray-300 rounded-xl p-1'>
          <h1 className='font-medium'>Explore</h1>
        </div> 
        {sidebaritems3.map((item) => {
          return (
            <div className='flex items-center space-x-5 font-semibold rounded-xl hover:bg-gray-300 p-1'>
              <div className='text-xl cursor-pointer'> {item.icon} </div>
              <span className='cursor-pointer'>{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr/>

      <div className='items-center space-y-2 mb-2 mt-2'>
        <div className='items-center space-x-2 text-xl cursor-pointer hover:bg-gray-300 rounded-xl p-1'>
          <h1 className='font-medium'>More from YouTube</h1>
        </div> 
        {sidebaritems4.map((item) => {
          return (
            <div className='flex items-center space-x-5 font-semibold rounded-xl hover:bg-gray-300 p-1'>
              <div className='text-xl cursor-pointer text-red-600'> {item.icon} </div>
              <span className='cursor-pointer'>{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr/>

       <div className='items-center space-y-2 mb-2 mt-2'> 
        {sidebaritems5.map((item) => {
          return (
            <div className='flex items-center space-x-5 font-semibold rounded-xl hover:bg-gray-300 p-1'>
              <div className='text-xl cursor-pointer font-bold'> {item.icon} </div>
              <span className='cursor-pointer'>{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr/>
      <p className='text-xs mt-3 font-semibold text-gray-500'>About Press Copyright <br /> Contact us Creators <br /> Advertise Developers</p>
      <p className='text-xs font-semibold mt-3 text-gray-500'> Terms Privacy Policy&Safety <br /> How YouTube Works <br /> Test new features <br /> </p>
      <p className='text-xs font-semibold mt-3 text-gray-500'>© 2026 Google LLC</p>
    </div>
  )
  }


export default Sidebar
