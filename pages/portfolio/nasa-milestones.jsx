import React from 'react'
import MainImg from '../../public/images/projects/nasa-poster_cropped.png'
import LgImg from '../../public/images/projects/nasa-poster.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { useRouter } from "next/router"
import { BsArrowLeft } from 'react-icons/bs'


const Mra = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          src={MainImg}
          alt='Nasa Milestones Poster'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NASA Milestones Poster</h2>
          <h3>Adobe InDesign / Illustrator / Photoshop</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          One of my final projects as a Creative Technologist in the NASA Headquarters Communications Office, this poster proof-of-concept was designed and developed independently in anticipation of possible inclusion in a congressional report. One of my favorite pure design projects, this poster shows mission milestones from 2016-2021 and beyond. Created in 2017, it is fun looking back at how accurate (or not!) the plan was.
          </p>
          <p>
            I am not sure if this poster was ever presented to congress, but it was, after I left, used to develop an interactive version of the Milestones that is still online at <a href="https://www.nasa.gov/specials/milestones/" target="_blank">https://www.nasa.gov/specials/milestones/</a>. That the interactive version retains many elements of my original design is one of the greatest compliments I’ve received as a designer.
          </p>
          <a
            href='../../images/projects/nasa-milestones.png'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={LgImg} 
            alt='Nasa Milestones Poster'
          />
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SASS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Silverstripe CMS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github
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

export default Mra