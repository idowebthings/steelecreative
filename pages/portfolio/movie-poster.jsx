import React from 'react'
import MainImg from '../../public/images/projects/cmst325-p1-movie-poster-cropped.png'
import ProjectImg from '../../public/images/projects/cmst325-p1-movie-poster.jpg'
import ChallengeImg from '../../public/images/projects/cmst-325-challenge.jpg'
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
          src={MainImg}
          alt='movie poster created in Adobe Photoshop'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Movie Poster</h2>
          <h3>Adobe Photoshop</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          A school project from the Fall 2021 session of CMST 325 - Image Editing at UMGC, this proof-of-concept movie poster uses transparency and layer masks to create a compelling design. Using multiple pieces of stock art, I layered and blended them to create a design that fits the motif of the fictional movie I imagined for the project. I emulated classic Hollywood poster styles, including bold typography, and used my knowledge of design principles to lead a viewer&apos;s focus to the eye-like celestial scene rising above an earth-bound landscape.</p>
          <p>
This poster demonstrates my proficiency in advanced Adobe Photoshop techniques and was created in Adobe Photoshop using Adobe Stock images and fonts.
          </p>
          <a
            href='../../images/projects/cmst325-p1-movie-poster.jpg'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={ProjectImg} 
            alt='Movie Poster image'
          />
          </a>
          <a
            href='../../images/projects/cmst-325-challenge.jpg'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={ChallengeImg} 
            alt='mock up of movie posters on a theater wall'
          />
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sitecore
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
                <RiRadioButtonFill className='pr-1' /> HubSpot API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Azure
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