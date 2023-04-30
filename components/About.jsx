import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import AboutImg from '../public/images/dsteele-headshot.jpg'

const About = () => {
  return (
    <div id='about' className='w-full flex items-start p-2'>
      <div className='max-width-[1240px] w-full h-full mx-auto md:grid grid-cols-3 gap-8 content-start'>
        <div className='w-auto h-auto mx-auto flex items-center justify-center mb-8 md:mb-0'>
          <Image className='rounded-md border-[16px] border-white shadow-md shadow-slate-400' src={AboutImg} alt='Dylan Steele, smiling at the camera' width={384} height={384} />
        </div>
        <div className='col-span-2'>
          <h2>Hi, my name is Dylan!</h2>
          <p>My name is Dylan Steele and I create. My entire life has been driven by the need to create. In pursuit of that passion, my creativity has pushed me into any number of art forms, from illustration to writing to music. But for the last 15 years, my focus has been on website development and digital design.</p>
          <p>Creativity inspires everything I do, not just visually, but how I approach every aspect of every project. Creativity is thinking outside the box to fulfill a client&apos;s needs, whether it is finding a new way to reach a customer, finding a better way to code a solution, or finding inspiration in the unlikeliest of places.</p>
          <p>Put my creativity to work for you. <Link href='/contact'>Contact me today</Link> and let&apos;s get started.</p>          
        </div>
        
      </div>
    </div>
  )
}

export default About