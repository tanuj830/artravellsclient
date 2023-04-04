import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className='relative'>
            <div className='absolute hover:shadow-2xl shadow-lg bg-gradient-to-tr from-violet-500 to-purple-500 text-white right-3 top-3 p-4 rounded-2xl'>
                    <h2 className='text-xl'>Corporate Office</h2>
                    <h3 className='text-sm text-justify'>Graphic Era (Deemed to be University), Clement Town, Dehradun, Uttrakhand – 248001</h3>
            </div>
        </div>
        <iframe className='w-full h-80'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.761594969285!2d77.99881481509468!3d30.2723732817999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bca3fc0ccf3%3A0xd19900de8c24dbee!2sGraphic%20Era%20Hill%20University!5e0!3m2!1sen!2sin!4v1674049856652!5m2!1sen!2sin" sizes="(max-width: 1200px) 100vw,
              (max-width: 1200px) 500vw,
              500vw" ></iframe>
    </div>
  )
}

export default Hero