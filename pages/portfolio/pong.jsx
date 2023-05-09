import React from 'react'
import ProjectImg from '../../public/images/projects/cmst-290-pong.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from "next/router"


const Pong = () => {

  const router = useRouter()

  return (
    <div className='w-full'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' fill
          objectFit='cover'
          src={ProjectImg}
          alt='screenshot of pong video game'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Pong</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is one of the first projects I completed towards my major, in CMST 290 - Intro to Interactive Design, during the Fall 2021 session at UMGC. A recreation of the granddaddy of video games, the classic Pong, I wrote this in equally classic vanilla, object-oriented JavaScript. Player and opponent paddles, the ball, scoreboard, and menu are all separate objects, and I was really happy with the resulting performance and game play.
          </p>
          <p>
            Though I was already an experienced JavaScript developer when I did this project, I learned a lot because so much of my experience is purely oriented towards websites. Planning and coding the interactions required for game play gave me a different perspective and set of problems to solve. I am planning on enhancing this with an &quot;EXTREME MODE&quot; - stay tuned!
          </p>
          <a
            href='https://github.com/idowebthings/portfolio-code-samples/blob/main/pong/classic.html'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>See the Code</button>
          </a>
          <a
            href='../../files/classic.html'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Play the Game!</button>
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

export default Pong