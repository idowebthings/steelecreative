import React from 'react'
import ProjectImg from '../../public/images/projects/sunroomstudios-cropped.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const SRStudios = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={ProjectImg}
          alt='screenshot of the Sunroomstudios website'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Sunroom Studios</h2>
          <h3>WordPress / CSS / JavaScript / APIs</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This is the website for a mother-daughter team of jewelry makers, wire wrappers and glass bead artists. Since they are non-technical and needed the ability to manage their site content, classes, and events, we elected to use WordPress due to their familiarity with the content authoring interface. The site includes a gallery of their work, calendar of events, and social media integrations with their Facebook and Instagram accounts. 
          </p>
          <p>
            Though I generally focus on development, I was able to work on the design for this site as well. The background includes graphics created from hand-drawn doodles from the artists at Sunroom Studios, allowing their unique style and personality to shine. This site also includes testimonials, feature publications, and forms for contact and to join their mailing list.
          </p>
          <a
            href='https://www.sunroomstudios.com'
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
                <RiRadioButtonFill className='pr-1' /> WordPress
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> APIs
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

export default SRStudios