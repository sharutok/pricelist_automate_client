import React from 'react'
import IMAGES from '../Images/Image'

function ImageTemplate() {
  return (
    <div className='w-[210mm] min-h-[297mm] w3-animate-zoom'>
          <img loading='lazy' className='h-[100%] w-[100%]' src={IMAGES.imagep} />
      </div>
  )
}

export default ImageTemplate