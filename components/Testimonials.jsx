import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonials' className='w-full p-2'>
      <div className='max-width-[1240px] w-full h-full mx-auto flex flex-col items-start'>
        
      <section>
  <div className='mb-8'>
    <h2>Testimonials</h2>
    <p>
      Why take my word for it? Here are some compliments from happy clients.
    </p>
  </div>

  <div class="grid gap-12 text-center md:grid-cols-2">
    
    <div class="mb-6 md:mb-0">
      <div class="mb-6 flex justify-center">
        <Image
          src="https://photos.zillowstatic.com/h_l/ISq5l1gr4xzi540000000000.jpg"
          class="w-24 rounded-full shadow-lg dark:shadow-black/30" alt='' width='96' height='96' />
      </div>
      <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
      &ldquo;Thanks for everything you have done for our website. The move from a static site to one managed in the Miva CMS is going to greatly enhance our business.&rdquo;
      </p>
      <p class="italic">- David Temple, People Powered Machines</p>
    </div>

    <div class="mb-0">
      <div class="mb-6 flex justify-center">
      <Image
          src="https://media.licdn.com/dms/image/C4E03AQE3E1pg58vkZg/profile-displayphoto-shrink_200_200/0/1517724450199?e=1688601600&v=beta&t=DCorPUEytqxn1bGsvIo7oNhZVK90dmq_anaPwC-MB58"
          class="w-24 rounded-full shadow-lg dark:shadow-black/30" alt='' width='96' height='96' />
      </div>
      <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
      &ldquo;Epic shout-out for all the UI and styling work on the new AGS website. It looks amazing! You are truly awesome to work with.&rdquo;
      </p>
      <p class="italic">- Jaime Hood, Allegis Group</p>
    </div>
  </div>
</section>

      </div>        
    </div>
  )
}

export default Testimonials