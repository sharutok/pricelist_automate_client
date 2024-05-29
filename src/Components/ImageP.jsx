import React from 'react'
import IMAGES from '../Images/Image'

function ImageP() {
  return (
      <div className='w-[210mm] h-[297mm] '>
          <img loading='lazy' className='h-[100%] w-[100%]' src={IMAGES.imagep} />
      </div>
  )
}

export default ImageP