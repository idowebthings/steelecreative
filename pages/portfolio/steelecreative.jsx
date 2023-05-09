import React from 'react'
import ProjectImg from '../../public/images/projects/scportfolio-cropped.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const Scp = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={ProjectImg}
          alt='screenshot of this website'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>This site you are on currently.</h2>
          <h3>NextJS / Tailwind CSS / React / Git</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Built as my final project in the capstone course to finish my degree, this portfolio site (that you are currently viewing) is my most recent and modern project. This is the classic definition of "killing two birds with one stone", in that it fulfils two long-standing goals - to have a versatile, online portfolio and to build a site using a modern framework. Initially I tried to do this in React, but I found the learning curve steep and became frustrated. Finding NextJS, which feels to me like React made for front-end developers, was a revelation. 
          </p>
          <p>
          Tailwind is another technology I am using here for the first time. I have not been this excited by CSS framework or tool since I learned SASS. By leveraging NextJS and Tailwind, I was able to create the core of this site in less than a day and complete the MVP version in less than a month. These are two tools I plan on using regularly.
          </p>
          <a
            href='https://github.com/idowebthings/steelecreative'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>See the Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Git
              </p>
            </div>
          </div>
        </div>
        
        <button onClick={() => router.back()} className='bg-transparent border-none shadow-none p-0 text-left text-blue-900 underline hover:underline-offset-2'>
          <p className='underline cursor-pointer'><BsArrowLeft className='pr-2 inline text-lg text-blue-900' />Back</p>
        </button>
      </div>
    </div>
  )
}

export default Scp