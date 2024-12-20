import React, { useState } from 'react'
import youtube from '../assets/youtube.png'
import { FaBars, FaHome, FaMicrophone, FaRegBell, FaRegUserCircle, FaUser, FaYoutube } from 'react-icons/fa'
import { BsNewspaper, BsPlusLg } from 'react-icons/bs';
import { SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from 'react-icons/si';
import { MdHistory, MdOutlinedFlag, MdOutlineFeedback, MdOutlineSubscriptions } from 'react-icons/md';
import { PiUserCircleLight } from 'react-icons/pi';
import { ImFire } from 'react-icons/im';
import { IoMusicalNotesOutline, IoSettingsOutline, IoTrophyOutline } from 'react-icons/io5';
import { IoIosHelpCircleOutline } from 'react-icons/io';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false)

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  const handleChange = () => {
    setMenu(!menu);
  };

  
  return (
    <>
    <div className='w-full fixed'>
    <div className='text-white flex w-full items-center justify-between m-4'>
     <div className="logo-section flex items-center ">
      <div>
      {menu ? (
          <FaBars size={25} onClick={handleChange} />
      ) : (
        <FaBars size={25} onClick={handleChange} />
      ) }
      </div>
      <div className='flex items-center'>
        <img src={youtube} alt="" className='h-12' />
        <h3 className='text-2xl font-semibold'>YouTube <sup className='font-light'>NG</sup></h3>
      </div>
     </div>
     <div className='hidden md:flex md:items-center md:gap-4 '>
     <div className="hidden relative md:flex items-center bg-[#292929] border-x-2 border-gray-300 pr-4 rounded-full shadow-md md:w-full max-w-md">
      {/* Left Search Icon */}
      <span
        className={`absolute left-3 text-white text-xl transition-opacity duration-200 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
          />
        </svg>
      </span>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className={` bg-transparent outline-none text-white text-lg w-96 px-10 py-2 rounded-l-full ${
          isActive ? "border-2 border-blue-500 px-10 py-1" : ""
        }`}
      />

      {/* Right Search Button */}
      <button
        onClick={handleSearch}
        className="text-white text-xl ml-2 hover:text-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
          />
        </svg>
      </button>
    </div>
    <div>
      <button className='bg-[#292929] hover:bg-[#444444] p-4 rounded-full '>
      <FaMicrophone size={15} />
      </button>
    </div>
     </div>
     <div className='flex items-center md:mr-10 mr-8 gap-5 md:gap-10'>
        <div className='flex items-center gap-3'>
          <button className='hidden md:flex items-center font-semibold px-5 py-2 rounded-full bg-[#292929] hover:bg-[#444444] gap-2'>
          <BsPlusLg size={25} />
            Create
          </button>
          <FaRegBell size={25} />
        </div>
        <button className='bg-[#292929] hover:bg-[#444444] p-4 rounded-full '>
        <FaUser />
      </button>
     </div>
     </div>
     {/* Menu */}
     <div className={`${ menu ? "translate-x-0" : "-translate-x-full"} h-[87vh] hover:overflow-y-scroll bg-black text-white p-4 scrollbar scrollbar-thumb-red-500 scrollbar-track-black flex flex-col absolute left-0 top-16 w-[52%] md:w-[22%] transition-all duration-500 ease-out`}>
        <div className='flex flex-col '>
        <button className="hover:bg-[#444444] bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8">
        <FaHome size={20} />
        <p className="font-sm">Home</p>
        </button>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <SiYoutubeshorts size={20} />
          <p className='font-sm'>Shorts</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <MdOutlineSubscriptions size={20} />
          <p className='font-sm'>Subscriptions</p>
        </div>
        <div className='line border-b border-gray-500 mt-2 mb-2'></div>
        </div>
        
        <div className='flex flex-col  '>
        <button className="hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8">
        <FaRegUserCircle size={20} />
        <p className="font-sm">You</p>
        </button>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <MdHistory size={20} />
          <p className='font-sm'>History</p>
        </div>
        <div className='line border-b border-gray-500 mt-2 mb-2'></div>
        </div>
        
        <div className='  '>
        <div className="px-4 py-3 rounded-lg flex items-center gap-8">
        <p className="text-left text-sm">Sign in to like videos, comment, and subscribe.</p>
        </div>
        <button className='px-4 py-2 ml-4 flex text-sm text-blue-400 items-center gap-2 border border-blue-400 rounded-full'>
        <PiUserCircleLight size={20} />
        Sign in
        </button>
        <div className='line border-b border-gray-500 mt-2 mb-2'></div>
        </div>

        <div className='  '>
        <div className="hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8">
        <p className="text-left font-semibold">Explore</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <ImFire size={20} className='rotate-45'  />
          <p className='font-sm'>Trending</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <IoMusicalNotesOutline size={20} />
          <p className='font-sm'>Music</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <SiYoutubegaming size={20}  />
          <p className='font-sm'>Gaming</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <BsNewspaper size={20} />
          <p className='font-sm'>News</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <IoTrophyOutline size={20} />
          <p className='font-sm'>Sports</p>
        </div>
        <div className='line border-b border-gray-500 mt-2 mb-2'></div>
        </div>
        <div className='  '>
        <div className="hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8">
        <p className="text-left font-semibold">More from YouTube</p>
        </div>
        <button className="hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8">
        <FaYoutube size={20} className='text-red-600' />
        <p className="text-sm">YouTube Premium</p>
        </button>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <SiYoutubemusic size={20} className='text-red-600' />
          <p className='text-sm'>YouTube Music</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <SiYoutubekids size={20}  className='text-red-600' />
          <p className='text-sm'>YouTube Kids</p>
        </div>
        <div className='line border-b border-gray-500 mt-2 mb-2'></div>
        </div>
          
        <div className='flex flex-col '>
        <button className="hover:bg-[#444444] bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8">
        <IoSettingsOutline size={20} />
        <p className="font-sm">Settings</p>
        </button>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <MdOutlinedFlag size={20} />
          <p className='font-sm'>Report history</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <IoIosHelpCircleOutline size={20} />
          <p className='font-sm'>Help</p>
        </div>
        <div className='hover:bg-[#444444] px-4 py-3 rounded-lg flex items-center gap-8'>
        <MdOutlineFeedback size={20} />
          <p className='font-sm'>Send feedback</p>
        </div>
        <div className='line border-b border-gray-500 mt-2 mb-2'></div>
        </div>
        <div className=' flex flex-wrap gap-1 px-4 py-3 text-sm '>
          <a href="/">About </a>
          <a href="/">Press</a>
          <a href="/">Copyright</a>
          <a href="/">Contact us</a>
          <a href="/">Creators</a>
          <a href="/">Advertise</a>
          <a href="/">Developers</a>
        </div>
        <div className=' flex flex-wrap gap-1 px-4 py-3 text-sm '>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
          <a href="/">Policy & Safety</a>
          <a href="/">Contact us</a>
          <a href="/"> How YouTube works</a>
          <a href="/">Test new features</a>
        </div>
        <div className=' px-4 py-3 text-sm font-thin '>
       <p>© 2024 Google LLC</p>
        </div>
     </div>
    </div>
    </>
  )
}

export default Navbar
