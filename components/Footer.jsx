import React from 'react'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Footer = () => {
  return (
    <div>
    <div className='flex justify-center p-12'>
      <Link href='' onClick={scrollToTop}>
        <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
          <HiOutlineChevronDoubleUp />
        </div>
      </Link>
    </div>
    <div id='footer' className='w-full border-t-2 py-8 text-center'>
        <p>&copy; Copyright 2023</p>
    </div>
    </div>
  )
}

export default Footer