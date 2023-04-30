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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
      error amet numquam iure provident voluptate esse quasi, veritatis
      totam voluptas nostrum quisquam eum porro a pariatur veniam.
    </p>
  </div>

  <div class="grid gap-12 text-center md:grid-cols-2">
    
    <div class="mb-6 md:mb-0">
      <div class="mb-6 flex justify-center">
        <Image
          src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
          class="w-24 rounded-full shadow-lg dark:shadow-black/30" alt='' width='96' height='96' />
      </div>
      <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
      &ldquo;Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
        elit sed ut perspiciatis unde omnis.&rdquo;
      </p>
      <p class="italic">- Anna Morian</p>
    </div>

    <div class="mb-0">
      <div class="mb-6 flex justify-center">
      <Image
          src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg"
          class="w-24 rounded-full shadow-lg dark:shadow-black/30" alt='' width='96' height='96' />
      </div>
      <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300">
      &ldquo;Neque cupiditate assumenda in maiores repudiandae mollitia
        architecto elit sed adipiscing elit.&rdquo;
      </p>
      <p class="italic">- Teresa May</p>
    </div>
  </div>
</section>

      </div>        
    </div>
  )
}

export default Testimonials