import React from 'react'
import NasaImg from '../../public/images/projects/tech-innovation.png'
import ProjectImg from '../../public/images/projects/tech-innovation.png'
import SecondImg from '../../public/images/projects/tech-innovation2.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const Nasa = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={NasaImg}
          alt='cover of NASA app'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NASA Technology Innovation App</h2>
          <h3>Adobe Experience Manager / HTML / Javascript / Section 508</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          In 2017 I worked in tandem with a digital artist to develop and launch the NASA Technology Innovation eZine. Leveraging Adobe Experience Manager and Cloud platforms, as well as Adobe Illustrator, Photoshop and After Effects, this app is available on the Apple App Store, as well as Google Play, and provides updated monthly content on the cutting edge of NASA&apos;s research.
          </p>
          <p>
            This was one of my first experiences developing for the Cloud. I attended a 2-day Adobe workshop to achieve AEM developer certification, and successfully launched the app on schedule. I was also responsible for accessibility testing and Section 508 compliance, including screen reader testing.
          </p>
          <a
            href='../../images/projects/tech-innovation.png'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={ProjectImg} 
            alt='app screenshot'
          />
          </a>
          <a
            href='../../images/projects/tech-innovation2.png'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={SecondImg} 
            alt='app screenshot'
          />
          </a>
          <a
            href='https://www.nasa.gov/directorates/spacetech/home/innovation_ezine.html'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Get the App</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe Experience Manager
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Drupal
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> XML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ePub
              </p>              
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Section 508
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

export default Nasa