import React from 'react'
import NasaImg from '../../public/images/projects/emblems-of-exploration.jpg'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const ags = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={NasaImg}
          alt='cover of NASA ebook'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NASA</h2>
          <h3>HTML / CSS / Javascript / Drupal / JAWS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Website development, HTML email, and e-Book production, including creation of the eBook page on NASA.gov
          </p>
          <a
            href='https://github.com/fireclint/property-finder'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Unity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C#
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Photoshop
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

export default ags