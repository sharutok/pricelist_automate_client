import React from 'react'
import IMAGES from '../Images/Image'

function HeaderT1() {
  return (
      <div className='flex justify-end'>
          <img loading='lazy' className='w-[3rem]' src={IMAGES.imagex} />
      </div>
  )
}

export default HeaderT1