import React from 'react'

function Footer({ pageno }) {
  return (
    <div className='absolute  bottom-5 w-[100%] '>
      <div className='flex items-center justify-between w-[100%]'>
        <p className='text-[#ee3e43]'>Ador India</p>
        <p className='text-[#2b2929]'>{ pageno+1||""}</p>
        <p className='text-[#767676] text-xs'>www.adorwelding.com</p>
      </div>
      </div>
  )
}

export default Footer



