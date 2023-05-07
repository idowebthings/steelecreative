import React from 'react'
import AgsImg from '../public/images/projects/ags-cropped.png'
import SddImg from '../public/images/projects/spinning_donuts_splash.png'
import MraImg from '../public/images/projects/mra-email.png'
import NasaImg from '../public/images/projects/emblems-of-exploration.jpg'
import PongImg from '../public/images/projects/cmst-290-pong.png'
import PatapscoImg from '../public/images/projects/cmst320-project4-cropped.png'
import movPosterImg from '../public/images/projects/cmst325-p1-movie-poster-cropped.png'
import ScpImg from '../public/images/projects/scportfolio-cropped.png'
import SrsImg from '../public/images/projects/sunroomstudios-cropped.png'
import UiuxImg from '../public/images/projects/cmst308-ux-ui-prototyping.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id='projects' className='w-full p-2'>
            <div className='max-width-[1240px] w-full h-full mx-auto flex flex-col items-start'>
                <h2>Featured Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='This site!' description='Digital portfolio built on NextJS and TailwindCSS.' bgImg={ScpImg} projectUrl='/portfolio/steelecreative' />                    

                    <ProjectItem title='Sunroom Studios' description='Wordpress site with event scheduling, social media integration, and gallery' bgImg={SrsImg} projectUrl='/portfolio/sunroomstudios' />

                    <ProjectItem title='Allegis Global Solutions' description='Public marketing website, built in Sitecore, deployed with Azure' bgImg={AgsImg} projectUrl='/portfolio/ags' />

                    <ProjectItem title='National Aeronautics and Space Administration' description='Website development, Section 508, and e-Book production, including creation of the eBook page on NASA.gov' bgImg={NasaImg} projectUrl='/portfolio/nasa' />

                    <ProjectItem title='Spinning Donuts of Death' description='In this top-down shooter, you are out to destroy office productivity. Beware the Scrum Master!' bgImg={SddImg} projectUrl='/portfolio/spinning-donuts-of-death' />

                    <ProjectItem title='Pong' description='The classic, original video game, hand-coded in JavaScript. Stay tuned for coming enhancements!' bgImg={PongImg} projectUrl='/portfolio/pong' />

                    <ProjectItem title='Melanoma Research Allliance' description='Bulletproof HTML emails, interactive web components, and landing pages' bgImg={MraImg} projectUrl='/portfolio/mra' />

                    <ProjectItem title='UI/UX Prototypoing' description='Conducted user research, wireframing, and prototyping for mobile app.' bgImg={UiuxImg} projectUrl='/portfolio/ui-ux-prototype' />

                    <ProjectItem title='State Park Poster' description='Poster design for Patapsco State Park, created in Adobe Illustrator' bgImg={PatapscoImg} projectUrl='/portfolio/patapsco-poster' />

                    <ProjectItem title='Movie Poster' description='Poster design for a fictional sci-fi film, created in Adobe Photoshop' bgImg={movPosterImg} projectUrl='/portfolio/movie-poster' />

                </div>
            </div>
        </div>
    )
}

export default Projects