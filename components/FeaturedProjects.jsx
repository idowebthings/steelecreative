import React from 'react'
import AgsImg from '../public/images/projects/ags-cropped.png'
import SddImg from '../public/images/projects/spinning_donuts_splash.png'
import MraImg from '../public/images/projects/mra-email.png'
import NasaImg from '../public/images/projects/emblems-of-exploration.jpg'
import ProjectItem from './ProjectItem'

const FeaturedProjects = () => {
    return (
        <div id='projects' className='w-full p-2'>
            <div className='max-width-[1240px] w-full h-full mx-auto flex flex-col items-start'>
                <h2>Featured Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='Allegis Global Solutions' description='Public marketing website, built in Sitecore, deployed with Azure' bgImg={AgsImg} projectUrl='/portfolio/ags' />

                    <ProjectItem title='Spinning Donuts of Death' description='The bane of any computer user is the spinning donut of death. In this top-down shooter, you are out to destroy office productivity. But beware the Scrum Master!' bgImg={SddImg} projectUrl='/portfolio/spinning-donuts-of-death' />

                    <ProjectItem title='National Aeronautics and Space Administration' description='Website development, HTML email, and e-Book production, including creation of the eBook page on NASA.gov' bgImg={NasaImg} projectUrl='/portfolio/nasa' />

                    <ProjectItem title='Melanoma Research Allliance' description='Created and enhanced a variety of items, including bulletproof HTML emails, interactive web components, and landing pages' bgImg={MraImg} projectUrl='/portfolio/mra' />

                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects