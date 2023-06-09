import React from 'react'
import SddImg from '../../public/images/projects/spinning_donuts_splash.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const Sdd = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={SddImg}
          alt='screenshot of Spinning Donuts of Death'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Spinning Donuts of Death (Destroy Your Productivity!)</h2>
          <h3>Unity / C# / Adobe Illustrator and Photoshop</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The bane of any computer user is the spinning donut of death. In this top-down shooter, you are out to destroy office productivity by blasting spinning blue donuts at hungry workers and innocent workstations. But beware of the Scrum Master!
          </p>
          <p>
            This is a game I made for CMST 315 - Game Design I, at University of Maryland Global Campus, during the Fall 2022 session. One of the most fun projects I have ever worked on, I leveraged the Unity development platform and upskilled my toolkit by coding in C#. The office workers are equipped with an artificial intelligence-emulating random movement function, while the game takes advantage of the physics engine baked into Unity to bounce your projectiles around the office. With future enhancements planned, this is a project to watch if you like this MVP version of the game.
          </p>
          <a
            href='https://github.com/idowebthings/spinning-donuts-of-death'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>See the Code</button>
          </a>
          <a
            href='https://play.unity.com/mg/other/spinning-donuts-of-death-destroy-your-productivity'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Play the Game!</button>
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
                <RiRadioButtonFill className='pr-1' /> Adobe Illustrator
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe Photoshop
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

export default Sdd