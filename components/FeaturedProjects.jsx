import React from 'react'
import ScpImg from '../public/images/projects/scportfolio-cropped.png'
import SddImg from '../public/images/projects/spinning_donuts_splash.png'
import MilestonesImg from '../public/images/projects/nasa-poster_cropped.png'
import UiuxImg from '../public/images/projects/cmst308-ux-ui-prototyping.png'
import ProjectItem from './ProjectItem'

const FeaturedProjects = () => {
    return (
        <div id='projects' className='w-full p-2'>
            <div className='max-width-[1240px] w-full h-full mx-auto flex flex-col items-start'>
                <h2>Featured Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='This site!' description='Digital portfolio built on NextJS and TailwindCSS.' bgImg={ScpImg} projectUrl='/portfolio/steelecreative' />

                    <ProjectItem title='Spinning Donuts of Death' description='The bane of any computer user is the spinning donut of death. In this top-down shooter, you are out to destroy office productivity. But beware the Scrum Master!' bgImg={SddImg} projectUrl='/portfolio/spinning-donuts-of-death' />

                    <ProjectItem title='NASA Milestones Poster' description='Poster design showing NASA missions from 2016-2021, and beyond.' bgImg={MilestonesImg} projectUrl='/portfolio/nasa-milestones' />

                    <ProjectItem title='UI/UX Prototypoing' description='Conducted user research, wireframing, and prototyping for mobile app.' bgImg={UiuxImg} projectUrl='/portfolio/ui-ux-prototype' />

                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects