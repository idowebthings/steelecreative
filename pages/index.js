import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='mb-24'>
        <Main />
      </div>
      <div className='mb-24'>
        <About />
      </div>
      <div className='mb-24'>
        <FeaturedProjects />
      </div>
      <div className='mb-24'>
        <Skills />
      </div>
      <div className='mb-24'>
        <Testimonials />
      </div>
      <div className='mb-24'>
        <Contact />
      </div>
    </div>
  )
}
