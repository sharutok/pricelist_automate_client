import React from 'react'
import IMAGES from '../Images/Image'

function Intro() {
  return (
      <div className='w-[210mm] h-[297mm] '>
          <img loading='lazy' className='h-[70%] w-[100%] ' src={IMAGES.ador_star_logo} />
          <div className='mt-20 border-l-[15px] border-l-[red]  border-solid flex justify-between items-center'>
              <div className='ml-5 grid gap-2'>
          <p className='text-5xl font-semibold text-[#555259]'>PRICE LIST</p>
          <div className='bg-[#555259] p-2'>
                  <p className='text-5xl text-[white]'> WELDING ELECTRODES </p>
              </div>
              <p className='text-3xl font-semibold'>w.e.f. 05th May 2024</p>
              </div>
          <img loading='lazy' className='h-[15%] w-[15%] mr-10' src={IMAGES.stamp} />
          </div>
          <p className='mt-10 ml-10 underline decoration-[red]'>Ador India</p>
    </div>
  )
}

export default Intro