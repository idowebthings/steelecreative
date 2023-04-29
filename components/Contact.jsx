import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id='contact' className='w-full p-2'>
      <div className='max-width-[1240px] w-full h-full mx-auto flex flex-col items-start'>
        <h2>Let's Collaborate</h2>
        <p>Lorem ipsum et secular.</p>
        <div className='w-full h-full shadow-md shadow-slate-400'>
          <div className='w-full pt-2'>
            <form>
              <div className='grid md:grid-cols-2 gap-4 p-2 w-full'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm'>Full Name</label>
                  <input className='border-2 rounded-md flex p-2 border-gray-300' type='text' />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm'>Phone Number</label>
                  <input className='border-2 rounded-md flex p-2 border-gray-300' type='text' />
                </div>
              </div>
              <div className='flex flex-col p-2'>
                <label className='uppercase text-sm'>Email</label>
                <input className='border-2 rounded-md flex p-2 border-gray-300' type='email' />
              </div>
              <div className='flex flex-col p-2'>
                <label className='uppercase text-sm'>Subject</label>
                <input className='border-2 rounded-md flex p-2 border-gray-300' type='text' />
              </div>
              <div className='flex flex-col p-2'>
                <label className='uppercase text-sm'>Message</label>
                <textarea className='border-2 rounded-md p-2 border-gray-300' rows='10'></textarea>
              </div>
              <button className='mx-auto mt-4 block'>Send a Message</button>
            </form>
          </div>
          <div className='w-full p-2'>
            <div className='flex items-center justify-between my-4 mx-auto w-full sm:w-[80%]'>
              <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-sm shadow-stone-400 hover:shadow-stone-700 p-3 cursor-pointer ease-in duration-300'>
                <BsFillPersonFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact