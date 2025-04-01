import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home, Heart } from 'lucide-react';
import "../lib/i18n"
import { useTranslation } from "react-i18next";

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

    const { t, i18n } = useTranslation();
    useEffect(() => {
      i18n.changeLanguage(navigator.language);
    }, []);

  return (
    <div className=' p-3 md:p-11 border-r min-h-screen w-24 md:w-64 hidden sm:block text-2xl text-center'>
      <div className='md:p-4'>
            <span className='text-green-700'>GET</span> Recipes
        </div>
      <div className="flex flex-col gap-10 sticky top-10 left-0 font-bold">
        <div className="w-full ">
          <img src="/logo.svg" alt="logo" className='hidden md:block rounded-2xl'/>
          <img src="/mobile-logo.png" alt="logo" className='block md:hidden rounded-2xl'/>
        </div>
        <ul className='flex flex-col items-center md:items-start gap-8'>
          <Link to={"/"} className='flex gap-2'>
            <Home size={34}/>
            <span className="font-bold text-2xl hidden md:block">{t('h')}</span>
          </Link>
          <Link to={"/favorites"} className='flex gap-2'>
            <Heart size={34}/>
            <span className="font-bold text-2xl hidden md:block">{t('fav')}</span>
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