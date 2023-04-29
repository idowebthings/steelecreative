import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='mb-32'>
        <Main />
      </div>
      <div className='mb-32'>
        <About />
      </div>
      <div className='mb-32'>
        <Projects />
      </div>
      <div className='mb-32'>
        <Skills />
      </div>
      <div className='mb-32'>
        <Testimonials />
      </div>
      <div className='mb-32'>
        <Contact />
      </div>
    </div>
  )
}
