import React from 'react'
import MainImg from '../../public/images/projects/cmst320-project4-cropped.png'
import ProjectImg from '../../public/images/projects/cmst320-project4.png'
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
          alt='poster proof of concept'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Poster Proof of Concept</h2>
          <h3>Adobe Illustrator</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          A school project from the Spring 2022 session of CMST 320 - Illustration Graphics at UMGC, this proof-of-concept poster honors Patapsco State Park in Baltimore County, Maryland, and especially my local entrance, nestled under an array of overpasses. I tried to emulate classic graphic design styles seen on classic posters of the 20th century.</p>
          <p>
            I created this poster in Adobe Illustrator, using primarily pen and shape tools, adding and blending multiple colors and gradients. This poster demonstrates my ability to create custom shapes, use the pen tool to draw intricate designs, and utilize design principles. I think the design concept is strong (and I received an A!).
          </p>
          <a
            href='../../images/projects/cmst320-project4.png'
            target='_blank'
            rel='noreferrer'
          >
          <Image
            className='w-full' 
            src={ProjectImg} 
            alt='Movie Poster image'
          />
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe Illustrator
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