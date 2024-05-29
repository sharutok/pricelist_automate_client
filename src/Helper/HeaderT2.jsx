import React from 'react'
import IMAGES from '../Images/Image'

export default function HeaderT2() {
    return (
      <div className='mb-2'>
      <div className='flex justify-end'>
          <img loading='lazy' className='w-[3rem]' src={IMAGES.imagex} />
            </div>
            <p className='text-4xl text-[#ee3e43]'>Price List</p>
            <div className='flex justify-between items-center'>
                <div className='grid gap-2'>
                    <p className='text-xl text-[#767676] '>Welding Electrodes</p>
                </div>
                <div className='text-right'>
                    <p className='text-[#ee3e43] text-xs'>w.e.f. 05th May 2024</p>
                    <p className='text-[#767676] text-xs'>Ref. No.: ADOR/FY25/PL/DOM/ELE/02</p>
                </div>
            </div>
                
      </div>
  )
}
