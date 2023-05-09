import React from 'react'
import ProjectImg from '../../public/images/projects/cmst308-ux-ui-prototyping.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const Ags = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={ProjectImg}
          alt='screenshot of UI/UX prototype'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>UI/UX Prototyping</h2>
          <h3>Adobe XD / User Research</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This was a school project for CMST 308 - User Experience Interface Design, taken during spring 2022. For this project I demonstrated my skill as a user experience researcher and designer. I was tasked with creating multiple user personas, test scenarios, user journeys, and experience flows. In the final iteration of the project, I developed mocks of a mobile app and created a working prototype in Adobe XD. In doing so, I was able to present my final demo in video form. This project added many skills to my toolkit, including research, user personas, and experience prototyping. Take a look at the presentation to see a full walkthrough.
          </p>
          <a
            href='../../images/projects/cmst308-ux-ui-prototyping.png'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={ProjectImg} 
            alt='prototype screenshot'
          />
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe XD
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Powerpoint
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

export default Ags