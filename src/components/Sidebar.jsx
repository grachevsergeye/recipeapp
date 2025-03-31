import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Heart } from 'lucide-react';

const Sidebar = () => {
  return ( 
  <>
   <DesktopSidebar />
   <MobileSidebar />
  </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block text-2xl text-center'>
      <span className='text-green-700'>GET</span> Recipes
      <div className="flex flex-col gap-10 sticky top-10 left-0 font-bold text-2xl text-center"><br />
        <div className="w-full">
          <img src="/logo.svg" alt="logo" className='hidden md:block rounded-2xl'/>
          <img src="/mobile-logo.png" alt="logo" className='block md:hidden rounded-2xl'/>
        </div>
        <ul className='flex flex-col items-center md:items-start gap-8'>
          <Link to={"/"} className='flex gap-2'>
            <Home size={34}/>
            <span className="font-bold text-2xl hidden md:block">Домой</span>
          </Link>
          <Link to={"/favorites"} className='flex gap-2'>
            <Heart size={34}/>
            <span className="font-bold text-2xl hidden md:block">Избранное</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return(
    <div className='flex justify-center gap-10 border-t fixed w-full
    bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
      <Link to={"/"}>
      <Home size={"24"} className='cursor-pointer' />
      </Link>
      <Link to={"/favorites"}>
      <Heart size={"24"} className='cursor-pointer' />
      </Link>
    </div>
  )
}