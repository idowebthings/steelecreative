import React from 'react'
import ProjectImg from '../../public/images/projects/ags-cropped.png'
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
          alt='screenshot of the Allegis Global Solutions website'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Allegis Global Solutions</h2>
          <h3>Sitecore / CSS / JavaScript / HubSpot API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          In the fall of 2022, Allegis Global Solutions, received a full site refresh of their existing marketing site. This job was assigned to my team at Allegis Group. Acting as the lead UI developer for this project, I refactored and wrote new SASS/CSS to style various components, including syndicated listings of white papers, external articles, news and events, and press releases. Integrated Sitecore with HubSpot using APIs to create contact forms and manage white paper and case study downloads, as well as styling the external HubSpot blog to match the new site design.
          </p>
          <p>
            Though officially a refresh, this was closer to a full site redesign, as the content and page structure was updated, as well. I advised on best practices to make all content accessible and provided user experience recommendations. To complete the content updates before launch, I led a team of content editors in assembling pages from Sitecore components and templates, as well as coordinating with enterprise architects to manage releases to development and production environments.
          </p>
          <a
            href='https://github.com/idowebthings/portfolio-code-samples/tree/main/ags/js'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>See Code Samples</button>
          </a>
          <a
            href='https://www.allegisglobalsolutions.com'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Visit the Site</button>
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